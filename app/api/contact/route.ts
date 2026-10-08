import { NextResponse } from 'next/server'
import { deliverSubmission, type Attachment } from '@/lib/contact/delivery'
import { clientKey, isRateLimited } from '@/lib/contact/rate-limit'
import { contactLimits, OTHER_SERVICE, readContactInput, validateContact } from '@/lib/contact/schema'
import { getService, services } from '@/lib/services'
import { site } from '@/lib/site'

/** Hard ceiling for the whole request body (photos are resized in the browser first). */
const MAX_BODY_BYTES = 5 * 1024 * 1024

const allowedServices = [...services.map((service) => service.slug), OTHER_SERVICE]

function failure(request: Request, status: number, message: string, extra?: Record<string, unknown>) {
  if (wantsJson(request)) return NextResponse.json({ ok: false, message, ...extra }, { status })

  // Fallback for browsers without JavaScript: a minimal, readable error page.
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Something went wrong | ${site.shortName}</title></head><body style="font-family:Arial,sans-serif;max-width:560px;margin:64px auto;padding:0 20px;color:#111827"><h1>Something went wrong.</h1><p>${message}</p><p>Please go back and try again, or email us at <a href="mailto:${site.email}">${site.email}</a>.</p><p><a href="/contact">Back to the contact page</a></p></body></html>`
  return new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}

function wantsJson(request: Request) {
  return request.headers.get('accept')?.includes('application/json') ?? false
}

function success(request: Request) {
  if (wantsJson(request)) return NextResponse.json({ ok: true })
  return NextResponse.redirect(new URL('/contact/thank-you', request.url), 303)
}

function sameOrigin(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return true // Some privacy tools strip Origin; other checks still apply.
  try {
    const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host')
    return new URL(origin).host === host
  } catch {
    return false
  }
}

/** Checks the file signature, not just the declared type. */
function detectImageType(bytes: Uint8Array): string | null {
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'image/jpeg'
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return 'image/png'
  const ascii = (start: number, end: number) => String.fromCharCode(...bytes.slice(start, end))
  if (ascii(0, 4) === 'RIFF' && ascii(8, 12) === 'WEBP') return 'image/webp'
  if (ascii(4, 8) === 'ftyp' && /^(heic|heix|hevc|heim|heis|mif1|msf1)$/.test(ascii(8, 12))) return 'image/heic'
  return null
}

function safeFilename(name: string, index: number, type: string) {
  const extension = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/heic': 'heic' }[type] ?? 'img'
  const base = name
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-zA-Z0-9-_]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)
  return `${base || `photo-${index + 1}`}.${extension}`
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return failure(request, 403, 'This request could not be accepted.')

  const length = Number(request.headers.get('content-length') ?? 0)
  if (length > MAX_BODY_BYTES) {
    return failure(request, 413, 'Your request is too large. Please attach fewer or smaller photos.', {
      errors: { photos: 'Your photos are too large. Please attach fewer or smaller photos.' },
    })
  }

  if (isRateLimited(clientKey(request.headers))) {
    return failure(request, 429, 'Too many requests were sent from this connection. Please wait a few minutes and try again.')
  }

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return failure(request, 400, 'We couldn’t read your request. Please try again.')
  }

  // Honeypot: real visitors never see this field. Pretend success so bots learn nothing.
  if (typeof form.get('company') === 'string' && (form.get('company') as string).trim()) return success(request)

  const result = validateContact(readContactInput(form), allowedServices)
  if (!result.ok) {
    return failure(request, 400, 'Please check the highlighted fields and try again.', { errors: result.errors })
  }

  const files = form.getAll('photos').filter((entry): entry is File => entry instanceof File && entry.size > 0)
  if (files.length > contactLimits.maxPhotos) {
    return failure(request, 400, `Please attach no more than ${contactLimits.maxPhotos} photos.`, {
      errors: { photos: `Please attach no more than ${contactLimits.maxPhotos} photos.` },
    })
  }

  const photos: Attachment[] = []
  let totalBytes = 0
  for (const [index, file] of files.entries()) {
    totalBytes += file.size
    if (totalBytes > contactLimits.maxUploadBytes) {
      return failure(request, 400, 'Your photos are too large.', {
        errors: { photos: 'Your photos are too large. Please attach fewer or smaller photos.' },
      })
    }
    const content = Buffer.from(await file.arrayBuffer())
    const type = detectImageType(content)
    if (!type) {
      return failure(request, 400, 'Only photos can be attached.', {
        errors: { photos: 'Please attach photos only (JPG, PNG, WEBP or HEIC).' },
      })
    }
    photos.push({ filename: safeFilename(file.name, index, type), contentType: type, content })
  }

  const page = typeof form.get('page') === 'string' ? (form.get('page') as string).slice(0, 200) : undefined
  const serviceLabel =
    result.data.service === OTHER_SERVICE ? 'Other / not sure' : (getService(result.data.service)?.title ?? result.data.service)

  try {
    const delivery = await deliverSubmission({
      data: result.data,
      serviceLabel,
      photos,
      page: page?.startsWith('/') ? page : undefined,
      submittedAt: new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' }),
    })

    if (!delivery.delivered) {
      if (process.env.NODE_ENV !== 'production') {
        console.info('[contact] No delivery provider configured. Development submission:', {
          ...result.data,
          serviceLabel,
          photos: photos.map((photo) => `${photo.filename} (${photo.content.length} bytes)`),
        })
        return success(request)
      }
      console.error('[contact] No delivery provider configured — set RESEND_API_KEY, SENDGRID_API_KEY or CONTACT_WEBHOOK_URL.')
      return failure(request, 503, 'Our online form is temporarily unavailable. Please contact us directly.')
    }

    return success(request)
  } catch (error) {
    console.error('[contact] Delivery failed:', error)
    return failure(request, 502, 'We couldn’t send your request right now. Please try again or contact us directly.')
  }
}
