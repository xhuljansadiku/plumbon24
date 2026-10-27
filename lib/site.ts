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
  hours: {
    office: string
    emergency: string | null
  }
  boroughs: string[]
  features: {
    emergencyService: boolean
    emergency24h: boolean
    freeEstimates: boolean
  }
  credentials: {
    licensed: boolean
    insured: boolean
    /** License number as issued (e.g. NYC DOB LMP #), shown next to the "Licensed" badge. */
    licenseNumber: string | null
  }
  profiles: {
    googleBusinessProfile: string | null
    instagram: string | null
  }
  copyrightYear: number
  lastUpdated: string
}

export const site: SiteConfig = {
  name: 'PLUMBON24 MECHANICAL INC',
  shortName: 'PLUMBON24',
  description:
    'Professional plumbing services for homes and businesses across all five boroughs of New York City, backed by 15+ years of plumbing experience.',
  experienceYears: '15+',
  email: 'info@plumbon24.com',

  phone: { display: '(917) 702-0072', e164: '+19177020072' },
  /** While `phone` is null, contact blocks show a clearly marked "[PHONE NUMBER]" placeholder. */
  showPhonePlaceholder: false,

  address: {
    street: '235 43rd St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11232',
    country: 'United States',
    countryCode: 'US',
  },
  neighborhood: 'Sunset Park',

  /**
   * Latitude/longitude for structured data: the building at 235 43rd St in OpenStreetMap,
   * cross-checked with the US Census geocoder (2026-10-19, within ~20 m).
   */
  geo: { latitude: 40.65257, longitude: -74.0118 },
  /** Business hours in schema.org format, e.g. ['Mo-Fr 08:00-18:00']. Leave empty until confirmed. */
  openingHours: ['Mo-Fr 09:00-17:00'],
  /** Human-readable hours shown on the site. */
  hours: {
    office: 'Mon–Fri, 9 AM – 5 PM',
    emergency: '24/7 emergency service',
  },

  /** New York City boroughs the company serves. */
  boroughs: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'],

  features: {
    /** Shows emergency plumbing messaging. */
    emergencyService: true,
    /** Confirmed by the company: emergency calls are answered 24 hours a day, 7 days a week. */
    emergency24h: true,
    /** Set to true only if the company confirms free estimates; CTA copy switches automatically. */
    freeEstimates: true,
  },

  credentials: {
    /** Confirmed by the company 2026-10-18. */
    licensed: true,
    /** Set to true only once insurance is confirmed; the badge then reads "Licensed & Insured". */
    insured: false,
    licenseNumber: null,
  },

  profiles: {
    /** Google Business Profile URL, once the listing is verified. */
    googleBusinessProfile: null,
    instagram: 'https://www.instagram.com/plumbon24/',
  },

  copyrightYear: 2026,
  /** Date the content was last reviewed (YYYY-MM-DD). Used in the sitemap. */
  lastUpdated: '2026-10-13',
}

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`

export const ctaLabels = {
  primary: site.features.freeEstimates ? 'Get a Free Estimate' : 'Request Service',
  quote: site.features.freeEstimates ? 'Get a Free Estimate' : 'Request a Quote',
  emergency: 'Request Emergency Service',
  call: 'Call Now',
} as const

/** "Licensed & Insured", "Licensed" or null: only what the company has confirmed. */
export const credentialLabel = site.credentials.licensed
  ? site.credentials.insured
    ? 'Licensed & Insured'
    : 'Licensed'
  : null

/** Official Google Maps URLs (no API key required). */
export const mapsLinks = {
  place: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`,
}

/**
 * Search engines may index the site only once the real domain is configured. A demo deployment
 * (e.g. *.vercel.app without NEXT_PUBLIC_SITE_URL) stays out of Google, so it never competes with the real site.
 */
export const allowIndexing = Boolean(process.env.NEXT_PUBLIC_SITE_URL)

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
