/**
 * Contact form validation, shared by the browser (instant feedback) and the API route (the real check).
 * No dependencies, so it stays tiny in the client bundle.
 */

export const contactLimits = {
  name: 100,
  phone: 30,
  email: 254,
  message: 3000,
  minMessage: 10,
  maxPhotos: 3,
  /** Total upload size accepted by the API route (fits common serverless request limits). */
  maxUploadBytes: 4 * 1024 * 1024,
  /** Largest single photo accepted in the browser before it is resized. */
  maxOriginalPhotoBytes: 25 * 1024 * 1024,
} as const

export const PROPERTY_TYPES = [
  'House (single-family)',
  'Multi-family house',
  'Apartment, condo or co-op',
  'Commercial building',
  'Restaurant or food service',
  'Office or retail space',
  'Other',
] as const

export const OTHER_SERVICE = 'other'

export const ACCEPTED_PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'] as const

export type ContactInput = {
  name: string
  phone: string
  email: string
  service: string
  propertyType: string
  message: string
}

export type ContactField = keyof ContactInput
export type ContactErrors = Partial<Record<ContactField | 'photos', string>>

export const fieldOrder: Array<ContactField | 'photos'> = ['name', 'phone', 'email', 'service', 'propertyType', 'message', 'photos']

/** Trims, removes control characters and (for single-line fields) collapses whitespace. */
export function cleanText(value: unknown, { multiline = false } = {}): string {
  if (typeof value !== 'string') return ''
  const withoutControls = value.replace(multiline ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, ' ')
  const normalized = multiline
    ? withoutControls.replace(/\r\n?/g, '\n').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n')
    : withoutControls.replace(/\s+/g, ' ')
  return normalized.trim()
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  if (/[^\d\s()+.\-]/.test(value)) return false
  if (digits.length === 10) return true
  if (digits.length === 11 && digits.startsWith('1')) return true
  // International numbers written with a leading "+".
  return value.trim().startsWith('+') && digits.length >= 8 && digits.length <= 15
}

export function isValidEmail(value: string): boolean {
  return value.length <= contactLimits.email && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

export function readContactInput(source: { get(name: string): unknown }): ContactInput {
  return {
    name: cleanText(source.get('name')),
    phone: cleanText(source.get('phone')),
    email: cleanText(source.get('email')).toLowerCase(),
    service: cleanText(source.get('service')),
    propertyType: cleanText(source.get('propertyType')),
    message: cleanText(source.get('message'), { multiline: true }),
  }
}

export function validateContact(
  input: ContactInput,
  allowedServices: readonly string[],
): { ok: true; data: ContactInput } | { ok: false; errors: ContactErrors } {
  const errors: ContactErrors = {}

  if (input.name.length < 2) errors.name = 'Please enter your full name.'
  else if (input.name.length > contactLimits.name) errors.name = `Please keep your name under ${contactLimits.name} characters.`

  if (!input.phone) errors.phone = 'Please enter your phone number.'
  else if (input.phone.length > contactLimits.phone || !isValidPhone(input.phone))
    errors.phone = 'Please enter a valid phone number, including the area code.'

  if (!input.email) errors.email = 'Please enter your email address.'
  else if (!isValidEmail(input.email)) errors.email = 'Please enter a valid email address, like name@example.com.'

  if (!input.service) errors.service = 'Please choose the service you need.'
  else if (!allowedServices.includes(input.service)) errors.service = 'Please choose a service from the list.'

  if (input.propertyType && !(PROPERTY_TYPES as readonly string[]).includes(input.propertyType))
    errors.propertyType = 'Please choose a property type from the list.'

  if (input.message.length < contactLimits.minMessage)
    errors.message = `Please describe the problem in a few words (at least ${contactLimits.minMessage} characters).`
  else if (input.message.length > contactLimits.message)
    errors.message = `Please keep your message under ${contactLimits.message} characters.`

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data: input }
}
