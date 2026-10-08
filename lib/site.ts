/**
 * Company details (NAP), contact options and feature flags.
 *
 * Every page, the header, the footer and the structured data read from this file,
 * so a change here updates the whole website.
 *
 * Only verified information belongs here. Leave unknown values as `null` (or empty)
 * instead of guessing — the site hides anything that is not set.
 */

export type PhoneNumber = {
  /** How the number is shown on the site, e.g. "(718) 555-0123". */
  display: string
  /** E.164 format used for tel: links and structured data, e.g. "+17185550123". */
  e164: string
}

type SiteConfig = {
  name: string
  shortName: string
  description: string
  experienceYears: string
  email: string
  phone: PhoneNumber | null
  showPhonePlaceholder: boolean
  address: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
    countryCode: string
  }
  neighborhood: string
  geo: { latitude: number; longitude: number } | null
  openingHours: string[]
  features: {
    emergencyService: boolean
    freeEstimates: boolean
  }
  profiles: {
    googleBusinessProfile: string | null
  }
  copyrightYear: number
  lastUpdated: string
}

export const site: SiteConfig = {
  name: 'PLUMBON24 MECHANICAL INC',
  shortName: 'PLUMBON24',
  description:
    'Professional plumbing services for homes and businesses in Brooklyn, NY, backed by 15+ years of plumbing experience.',
  experienceYears: '15+',
  email: 'plumbon24@gmail.com',

  /**
   * Add the business phone number once it is confirmed, for example:
   *   phone: { display: '(718) 555-0123', e164: '+17185550123' },
   * "Call Now" buttons, the mobile call button and the schema `telephone` appear automatically.
   */
  phone: null,
  /** While `phone` is null, contact blocks show a clearly marked "[PHONE NUMBER]" placeholder. */
  showPhonePlaceholder: true,

  address: {
    street: '235 43rd St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11232',
    country: 'United States',
    countryCode: 'US',
  },
  neighborhood: 'Sunset Park',

  /** Verified latitude/longitude for structured data. Leave null until confirmed. */
  geo: null,
  /** Business hours in schema.org format, e.g. ['Mo-Fr 08:00-18:00']. Leave empty until confirmed. */
  openingHours: [],

  features: {
    /** Shows emergency plumbing messaging. The site never claims 24/7 availability. */
    emergencyService: true,
    /** Set to true only if the company confirms free estimates; CTA copy switches automatically. */
    freeEstimates: false,
  },

  profiles: {
    /** Google Business Profile URL, once the listing is verified. */
    googleBusinessProfile: null,
  },

  copyrightYear: 2026,
  /** Date the content was last reviewed (YYYY-MM-DD). Used in the sitemap. */
  lastUpdated: '2026-10-07',
}

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`

export const ctaLabels = {
  primary: 'Request Service',
  quote: site.features.freeEstimates ? 'Get a Free Estimate' : 'Request a Quote',
  emergency: 'Request Emergency Service',
  call: 'Call Now',
} as const

/** Official Google Maps URLs (no API key required). */
export const mapsLinks = {
  place: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`,
}

/** Canonical origin of the site, without a trailing slash. */
export function getSiteUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)

  return (configured ?? 'http://localhost:3000').replace(/\/+$/, '')
}

export function absoluteUrl(path = '/'): string {
  return `${getSiteUrl()}${path === '/' ? '' : path}`
}
