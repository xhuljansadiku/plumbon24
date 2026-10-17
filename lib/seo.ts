import type { Metadata } from 'next'
import { services, serviceHref, type Faq, type Service } from '@/lib/services'
import { absoluteUrl, getSiteUrl, site } from '@/lib/site'

export type Crumb = { name: string; path: string }

export const OG_IMAGE_ALT = 'PLUMBON24 MECHANICAL INC: Professional Plumbing Services in New York City'

/**
 * The generated share image (app/opengraph-image.tsx). Page-level `openGraph` objects replace the
 * inherited one entirely, so every page references the image explicitly.
 */
export const shareImage = { url: '/opengraph-image', width: 1200, height: 630, alt: OG_IMAGE_ALT }

/** Page-level metadata with a canonical URL, Open Graph and Twitter card. Titles are used as written. */
export function createMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  noIndex?: boolean
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: site.name,
      title,
      description,
      url: path,
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [shareImage],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  }
}

const businessId = () => `${getSiteUrl()}/#business`

/** LocalBusiness (Plumber) structured data. Unverified details (hours, geo, phone, ratings) are omitted until set. */
export function businessSchema(): Record<string, unknown> {
  const url = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': businessId(),
    name: site.name,
    url,
    email: site.email,
    description: site.description,
    logo: absoluteUrl('/brand/plumbon24-logo.png'),
    image: absoluteUrl('/brand/plumbon24-logo.png'),
    slogan: '15+ Years of Plumbing Experience',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    areaServed: [
      { '@type': 'City', name: 'New York', containedInPlace: { '@type': 'State', name: 'New York' } },
      ...site.boroughs.map((borough) => ({ '@type': 'AdministrativeArea', name: `${borough}, NY` })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title, url: absoluteUrl(serviceHref(service.slug)) },
      })),
    },
    ...(site.phone ? { telephone: site.phone.e164 } : {}),
    ...(site.geo ? { geo: { '@type': 'GeoCoordinates', ...site.geo } } : {}),
    ...(site.openingHours.length ? { openingHours: site.openingHours } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  }
}

/** Verified profiles of the business on other sites. */
const sameAs = Object.values(site.profiles).filter((url): url is string => Boolean(url))

export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${getSiteUrl()}/#website`,
    name: site.name,
    url: getSiteUrl(),
    publisher: { '@id': businessId() },
    inLanguage: 'en-US',
  }
}

export function serviceSchema(service: Service): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(serviceHref(service.slug))}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.seo.description,
    url: absoluteUrl(serviceHref(service.slug)),
    provider: { '@id': businessId() },
    areaServed: { '@type': 'City', name: 'New York', containedInPlace: { '@type': 'State', name: 'New York' } },
  }
}

export function faqSchema(faqs: Faq[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function breadcrumbSchema(trail: Crumb[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}
