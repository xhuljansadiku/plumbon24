'use client'

import { usePathname } from 'next/navigation'
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
} from 'react'
import {
  contactLimits,
  fieldOrder,
  PROPERTY_TYPES,
  readContactInput,
  validateContact,
  type ContactErrors,
  type ContactField,
} from '@/lib/contact/schema'
import { trackLeadSubmitted } from '@/lib/analytics'
import { formatBytes, isLikelyImage, preparePhoto } from '@/lib/contact/photos'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type Option = { value: string; label: string }
type SelectedPhoto = { id: string; file: File; url: string }

const SUCCESS_MESSAGE = 'Thank you. Your service request has been received. We’ll get back to you as soon as possible.'

function withoutKey(errors: ContactErrors, key: keyof ContactErrors): ContactErrors {
  const next = { ...errors }
  delete next[key]
  return next
}

export function ContactForm({
  serviceOptions,
  defaultService = '',
  contactEmail,
  submitLabel = 'Request Service',
}: {
  serviceOptions: Option[]
  defaultService?: string
  contactEmail: string
  submitLabel?: string
}) {
  const pathname = usePathname()
  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const photosRef = useRef<SelectedPhoto[]>([])
  const resetAfterSuccess = useRef(false)

  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<ContactErrors>({})
  const [photos, setPhotos] = useState<SelectedPhoto[]>([])
  const [failureDetail, setFailureDetail] = useState<string | null>(null)

  const allowedServices = serviceOptions.map((option) => option.value)

  useEffect(() => {
    photosRef.current = photos
  }, [photos])

  // Release preview URLs when the form unmounts.
  useEffect(() => () => photosRef.current.forEach((photo) => URL.revokeObjectURL(photo.url)), [])

  // When the visitor navigates away after a successful request, start fresh next time.
  useLayoutEffect(() => {
    return () => {
      if (resetAfterSuccess.current) {
        resetAfterSuccess.current = false
        setStatus('idle')
      }
    }
  }, [])

  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const clearError = (field: ContactField | 'photos') => {
    if (errors[field]) setErrors((current) => withoutKey(current, field))
  }

  const focusFirstError = (found: ContactErrors) => {
    const first = fieldOrder.find((field) => found[field])
    if (!first) return
    const target = formRef.current?.querySelector<HTMLElement>(first === 'photos' ? '#photos' : `[name="${first}"]`)
    target?.focus()
  }

  const onPhotosSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const chosen = Array.from(event.target.files ?? [])
    event.target.value = ''
    if (!chosen.length) return

    const room = contactLimits.maxPhotos - photos.length
    const usable = chosen.filter((file) => isLikelyImage(file) && file.size <= contactLimits.maxOriginalPhotoBytes)
    const added = usable.slice(0, Math.max(0, room)).map((file) => ({
      id: `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
      file,
      url: URL.createObjectURL(file),
    }))

    let message: string | undefined
    if (usable.length < chosen.length) message = 'Some files were skipped. Please choose image files under 25 MB.'
    else if (usable.length > room) message = `You can attach up to ${contactLimits.maxPhotos} photos.`

    setPhotos((current) => [...current, ...added])
    setErrors((current) => {
      const rest = withoutKey(current, 'photos')
      return message ? { ...rest, photos: message } : rest
    })
  }

  const removePhoto = (id: string) => {
    setPhotos((current) => {
      const photo = current.find((item) => item.id === id)
      if (photo) URL.revokeObjectURL(photo.url)
      return current.filter((item) => item.id !== id)
    })
    clearError('photos')
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    const form = event.currentTarget
    const data = new FormData(form)
    const result = validateContact(readContactInput(data), allowedServices)

    if (!result.ok) {
      setErrors(result.errors)
      focusFirstError(result.errors)
      return
    }

    setErrors({})
    setFailureDetail(null)
    setStatus('submitting')

    data.delete('photos')
    const prepared = await Promise.all(photos.map((photo) => preparePhoto(photo.file)))
    const totalBytes = prepared.reduce((sum, file) => sum + file.size, 0)
    if (totalBytes > contactLimits.maxUploadBytes) {
      const tooLarge = {
        photos: `Your photos add up to ${formatBytes(totalBytes)}. Please remove one or attach smaller photos (${formatBytes(contactLimits.maxUploadBytes)} total).`,
      }
      setErrors(tooLarge)
      setStatus('idle')
      focusFirstError(tooLarge)
      return
    }
    prepared.forEach((file) => data.append('photos', file, file.name))

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const body: { message?: string; errors?: ContactErrors } | null = await response.json().catch(() => null)

      if (response.ok) {
        // The server also answers ok when the honeypot is filled, so bots are not counted as leads.
        const isBot = String(data.get('company') ?? '').trim() !== ''
        if (!isBot) trackLeadSubmitted({ formLocation: pathname, serviceType: String(data.get('service') ?? '') })
        photos.forEach((photo) => URL.revokeObjectURL(photo.url))
        setPhotos([])
        form.reset()
        resetAfterSuccess.current = true
        setStatus('success')
        return
      }

      if (response.status === 400 && body?.errors) {
        setErrors(body.errors)
        setStatus('idle')
        focusFirstError(body.errors)
        return
      }

      setFailureDetail(body?.message ?? null)
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-xl bg-brand-50 p-7 text-center outline-none ring-1 ring-brand-100 sm:p-10">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-600 text-white shadow-cta">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-ink">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-lg text-muted">{SUCCESS_MESSAGE}</p>
        <button
          type="button"
          onClick={() => {
            resetAfterSuccess.current = false
            setStatus('idle')
          }}
          className="mt-8 font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
        >
          Send another request
        </button>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      action="/api/contact"
      method="post"
      encType="multipart/form-data"
      noValidate
      aria-busy={submitting}
      className="grid gap-6"
    >
      {defaultService === 'emergency-piping' ? (
        <div className="flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-[0.9375rem] text-ink">
          <WarningGlyph />
          <p>
            <strong className="font-semibold">If water is actively leaking,</strong> close your main water shut-off valve now. If you smell gas, leave the
            building and call 911 or your gas utility from outside.
          </p>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="name" error={errors.name} required>
          <TextInput name="name" autoComplete="name" maxLength={contactLimits.name} invalid={Boolean(errors.name)} onInput={() => clearError('name')} />
        </Field>
        <Field label="Phone Number" name="phone" error={errors.phone} required>
          <TextInput
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={contactLimits.phone}
            invalid={Boolean(errors.phone)}
            onInput={() => clearError('phone')}
          />
        </Field>
      </div>

      <Field label="Email" name="email" error={errors.email} required>
        <TextInput
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={contactLimits.email}
          invalid={Boolean(errors.email)}
          onInput={() => clearError('email')}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Service Needed" name="service" error={errors.service} required>
          <SelectInput name="service" defaultValue={defaultService} invalid={Boolean(errors.service)} onChange={() => clearError('service')}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Property Type" name="propertyType" error={errors.propertyType} optional>
          <SelectInput name="propertyType" defaultValue="" invalid={Boolean(errors.propertyType)} onChange={() => clearError('propertyType')}>
            <option value="">Select a property type</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </SelectInput>
        </Field>
      </div>

      <Field label="Message" name="message" error={errors.message} required hint="What’s happening, where it is, and anything you’ve noticed.">
        <textarea
          id="field-message"
          name="message"
          rows={5}
          required
          maxLength={contactLimits.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy('message', Boolean(errors.message), true)}
          onInput={() => clearError('message')}
          className={cn(controlClasses(Boolean(errors.message)), 'min-h-36 resize-y py-3.5')}
        />
      </Field>

      <fieldset>
        <legend className="text-[0.9375rem] font-semibold text-ink">
          Photos <span className="font-normal text-subtle">(optional, up to {contactLimits.maxPhotos})</span>
        </legend>
        <p id="photos-hint" className="mt-1.5 text-sm text-muted">
          Photos of leaks, pipes, water heaters, drains or fixtures help us understand the problem.
        </p>
        <label
          htmlFor="photos"
          className={cn(
            'mt-3 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed bg-mist px-6 py-6 text-center transition-colors focus-within:border-brand-600 focus-within:ring-4 focus-within:ring-brand-500/20 hover:border-brand-500',
            errors.photos ? 'border-red-600' : 'border-line-strong',
            photos.length >= contactLimits.maxPhotos && 'pointer-events-none opacity-60',
          )}
        >
          <CameraGlyph />
          <span className="font-semibold text-ink">{photos.length ? 'Add another photo' : 'Add photos'}</span>
          <span className="text-sm text-muted">JPG, PNG, WEBP or HEIC</span>
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/*,.heic,.heif"
            multiple
            disabled={photos.length >= contactLimits.maxPhotos}
            onChange={onPhotosSelected}
            aria-describedby={errors.photos ? 'photos-hint photos-error' : 'photos-hint'}
            className="sr-only"
          />
        </label>
        {photos.length ? (
          <ul className="mt-4 grid grid-cols-3 gap-3" aria-label="Selected photos">
            {photos.map((photo, index) => (
              <li key={photo.id} className="relative aspect-square overflow-hidden rounded-lg border border-line bg-mist">
                {/* eslint-disable-next-line @next/next/no-img-element -- local preview of a file the visitor selected */}
                <img src={photo.url} alt={`Selected photo ${index + 1}: ${photo.file.name}`} className="size-full object-cover" />
                <button
                  type="button"
                  onClick={() => removePhoto(photo.id)}
                  className="absolute right-1.5 top-1.5 grid size-9 place-items-center rounded-full bg-ink/85 text-white transition-colors hover:bg-ink"
                >
                  <span className="sr-only">Remove {photo.file.name}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        <FieldError id="photos-error" message={errors.photos} />
      </fieldset>

      {/* Honeypot: hidden from people, often filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="field-company">Company website</label>
        <input id="field-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="page" value={pathname} />

      {status === 'error' ? (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="font-display text-lg font-bold text-ink">Something went wrong.</p>
          <p className="mt-1 text-muted">
            {failureDetail ?? 'Please try again or contact us directly.'}{' '}
            <a href={`mailto:${contactEmail}`} className="font-semibold text-brand-700 underline underline-offset-4">
              {contactEmail}
            </a>
          </p>
          <button
            type="button"
            onClick={() => formRef.current?.requestSubmit()}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-ink-900 px-5 font-semibold text-white hover:bg-ink"
          >
            Try Again
          </button>
        </div>
      ) : null}

      <div className="grid gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="button-sheen inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-[10px] bg-brand-600 px-7 text-base font-semibold text-white shadow-cta transition duration-200 motion-safe:hover:-translate-y-px hover:bg-brand-700 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.985] disabled:translate-y-0 disabled:cursor-progress disabled:opacity-80"
        >
          <span className="relative z-10 inline-flex items-center gap-2.5">
            {submitting ? (
              <>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 animate-spin" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M12 3a9 9 0 1 0 9 9" />
                </svg>
                Sending your request…
              </>
            ) : (
              submitLabel
            )}
          </span>
        </button>
        <p className="text-center text-sm text-muted">
          We’ll only use your details to respond to this request. See our{' '}
          <a href="/privacy" className="font-semibold text-ink underline underline-offset-4">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <p aria-live="polite" className="sr-only">
        {submitting ? 'Sending your request.' : ''}
      </p>
    </form>
  )
}

/* ─── Field primitives ─────────────────────────────────────────── */

function describedBy(name: string, hasError: boolean, hasHint = false) {
  const ids = [hasHint ? `${name}-hint` : null, hasError ? `${name}-error` : null].filter(Boolean)
  return ids.length ? ids.join(' ') : undefined
}

function controlClasses(invalid: boolean) {
  return cn(
    'block w-full rounded-[10px] border bg-white px-4 text-base text-ink shadow-[inset_0_1px_2px_rgb(17_24_39/0.05)] transition duration-150 placeholder:text-subtle focus:outline-none focus:ring-4',
    invalid ? 'border-red-600 focus:border-red-600 focus:ring-red-500/20' : 'border-line-strong hover:border-ink/40 focus:border-brand-600 focus:ring-brand-500/20',
  )
}

function Field({
  label,
  name,
  error,
  hint,
  required,
  optional,
  children,
}: {
  label: string
  name: string
  error?: string
  hint?: string
  required?: boolean
  optional?: boolean
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={`field-${name}`} className="block text-[0.9375rem] font-semibold text-ink">
        {label}
        {required ? (
          <span className="text-brand-700">
            {' '}
            <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </span>
        ) : null}
        {optional ? <span className="font-normal text-subtle"> (optional)</span> : null}
      </label>
      {hint ? (
        <p id={`${name}-hint`} className="mt-1 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      <FieldError id={`${name}-error`} message={error} />
    </div>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-red-700">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-px size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.5v5.5M12 16.5h.01" />
      </svg>
      {message}
    </p>
  )
}

function TextInput({ name, invalid, ...props }: InputHTMLAttributes<HTMLInputElement> & { name: string; invalid: boolean }) {
  return (
    <input
      id={`field-${name}`}
      name={name}
      type="text"
      required
      aria-invalid={invalid || undefined}
      aria-describedby={describedBy(name, invalid)}
      className={cn(controlClasses(invalid), 'h-[3.25rem]')}
      {...props}
    />
  )
}

function SelectInput({
  name,
  invalid,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { name: string; invalid: boolean; children: ReactNode }) {
  return (
    <div className="relative">
      <select
        id={`field-${name}`}
        name={name}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy(name, invalid)}
        className={cn(controlClasses(invalid), 'h-[3.25rem] appearance-none pr-11')}
        {...props}
      >
        {children}
      </select>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-subtle"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  )
}

function CameraGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 text-brand-600" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 8H7l1.8-2.6c.2-.3.5-.4.8-.4h4.8c.3 0 .6.1.8.4L17 8h2.5A1.5 1.5 0 0 1 21 9.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-9A1.5 1.5 0 0 1 4.5 8Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  )
}

function WarningGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-700" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.3 4.2 2.6 17.6a2 2 0 0 0 1.7 2.9h15.4a2 2 0 0 0 1.7-2.9L13.7 4.2a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9.5V14M12 17.2h.01" />
    </svg>
  )
}
