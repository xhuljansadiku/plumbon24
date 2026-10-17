import 'server-only'
import type { ContactInput } from '@/lib/contact/schema'

/**
 * Delivers service requests. Configure ONE provider with environment variables (see .env.example):
 *
 *   RESEND_API_KEY        → email via Resend (https://resend.com)
 *   SENDGRID_API_KEY      → email via SendGrid
 *   CONTACT_WEBHOOK_URL   → JSON POST to Formspree, Zapier/Make, a CRM or your own API
 *
 * Credentials are read on the server only and never reach the browser.
 * To use SMTP instead, add an adapter here (for example with nodemailer).
 */

export type Attachment = {
  filename: string
  contentType: string
  content: Buffer
}

export type Submission = {
  data: ContactInput
  serviceLabel: string
  photos: Attachment[]
  page?: string
  submittedAt: string
}

export type DeliveryResult = { delivered: true; provider: string } | { delivered: false; provider: 'none' }

const DEFAULT_TO = 'plumbon24@gmail.com'

function recipient() {
  return process.env.CONTACT_TO_EMAIL || DEFAULT_TO
}

function sender() {
  return process.env.CONTACT_FROM_EMAIL || 'PLUMBON24 Website <onboarding@resend.dev>'
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Strips characters that could break an email header line. */
function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').slice(0, 150)
}

function rows(submission: Submission): Array<[string, string]> {
  const { data } = submission
  return [
    ['Name', data.name],
    ['Phone', data.phone],
    ['Email', data.email],
    ['Service needed', submission.serviceLabel],
    ['Property type', data.propertyType || 'Not specified'],
    ['Photos', submission.photos.length ? `${submission.photos.length} attached` : 'None'],
    ['Submitted from', submission.page || 'Website'],
    ['Submitted at', submission.submittedAt],
  ]
}

function subject(submission: Submission) {
  return headerSafe(`New service request: ${submission.serviceLabel} from ${submission.data.name}`)
}

function textBody(submission: Submission) {
  const lines = rows(submission).map(([label, value]) => `${label}: ${value}`)
  return `New service request from the PLUMBON24 website\n\n${lines.join('\n')}\n\nMessage:\n${submission.data.message}\n`
}

function htmlBody(submission: Submission) {
  const tableRows = rows(submission)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#4b5563;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 0;color:#111827;font-weight:600">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  return `<!doctype html><html><body style="margin:0;background:#f7f9fc;font-family:Arial,Helvetica,sans-serif">
<div style="max-width:640px;margin:0 auto;padding:32px 24px">
<div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
<div style="background:#071923;color:#ffffff;padding:20px 24px;font-size:18px;font-weight:700">New service request</div>
<div style="padding:24px">
<table style="border-collapse:collapse;font-size:15px">${tableRows}</table>
<p style="margin:24px 0 8px;color:#4b5563;font-size:13px;text-transform:uppercase;letter-spacing:.08em">Message</p>
<p style="margin:0;color:#111827;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(submission.data.message)}</p>
</div></div>
<p style="color:#6b7280;font-size:12px;margin-top:16px">Reply to this email to respond directly to ${escapeHtml(submission.data.name)}.</p>
</div></body></html>`
}

function parseAddress(value: string): { email: string; name?: string } {
  const match = value.match(/^\s*(.*?)\s*<([^>]+)>\s*$/)
  return match ? { name: match[1] || undefined, email: match[2] } : { email: value.trim() }
}

async function sendWithResend(submission: Submission, apiKey: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: sender(),
      to: [recipient()],
      reply_to: submission.data.email,
      subject: subject(submission),
      text: textBody(submission),
      html: htmlBody(submission),
      attachments: submission.photos.map((photo) => ({
        filename: photo.filename,
        content: photo.content.toString('base64'),
      })),
    }),
  })
  if (!response.ok) throw new Error(`Resend responded with ${response.status}: ${await response.text()}`)
}

async function sendWithSendGrid(submission: Submission, apiKey: string) {
  const from = parseAddress(sender())
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: recipient() }] }],
      from,
      reply_to: { email: submission.data.email, name: submission.data.name },
      subject: subject(submission),
      content: [
        { type: 'text/plain', value: textBody(submission) },
        { type: 'text/html', value: htmlBody(submission) },
      ],
      ...(submission.photos.length
        ? {
            attachments: submission.photos.map((photo) => ({
              content: photo.content.toString('base64'),
              filename: photo.filename,
              type: photo.contentType,
              disposition: 'attachment',
            })),
          }
        : {}),
    }),
  })
  if (!response.ok) throw new Error(`SendGrid responded with ${response.status}: ${await response.text()}`)
}

async function postToWebhook(submission: Submission, url: string) {
  const secret = process.env.CONTACT_WEBHOOK_SECRET
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(secret ? { Authorization: `Bearer ${secret}` } : {}),
    },
    body: JSON.stringify({
      type: 'service_request',
      submittedAt: submission.submittedAt,
      page: submission.page,
      service: submission.data.service,
      serviceLabel: submission.serviceLabel,
      name: submission.data.name,
      phone: submission.data.phone,
      email: submission.data.email,
      propertyType: submission.data.propertyType,
      message: submission.data.message,
      // Photos are attached to emails; webhooks receive file details only.
      photos: submission.photos.map((photo) => ({ filename: photo.filename, contentType: photo.contentType, size: photo.content.length })),
    }),
  })
  if (!response.ok) throw new Error(`Webhook responded with ${response.status}`)
}

export async function deliverSubmission(submission: Submission): Promise<DeliveryResult> {
  const resendKey = process.env.RESEND_API_KEY
  const sendgridKey = process.env.SENDGRID_API_KEY
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL

  if (resendKey) {
    await sendWithResend(submission, resendKey)
    return { delivered: true, provider: 'resend' }
  }
  if (sendgridKey) {
    await sendWithSendGrid(submission, sendgridKey)
    return { delivered: true, provider: 'sendgrid' }
  }
  if (webhookUrl) {
    await postToWebhook(submission, webhookUrl)
    return { delivered: true, provider: 'webhook' }
  }
  return { delivered: false, provider: 'none' }
}
