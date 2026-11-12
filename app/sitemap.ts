import type { MetadataRoute } from 'next'
import { categoryHref, serviceHref, services, visibleCategories } from '@/lib/services'
import { absoluteUrl, site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${site.lastUpdated}T00:00:00Z`)

  const pages: Array<{ path: string; priority: number }> = [
    { path: '/', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/contact', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/service-areas', priority: 0.7 },
    { path: '/privacy', priority: 0.2 },
    { path: '/terms', priority: 0.2 },
    { path: '/accessibility', priority: 0.2 },
  ]

  return [
    ...pages.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...visibleCategories.map((category) => ({
      url: absoluteUrl(categoryHref(category)),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(serviceHref(service.slug)),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
