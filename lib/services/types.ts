import type { IconName } from '@/components/ui/Icon'
import type { ImageKey } from '@/lib/images'

export type Faq = {
  question: string
  answer: string
}

export type ServiceCategoryId = 'repairs' | 'lines' | 'equipment' | 'projects' | 'property'

export type TitledText = {
  title: string
  text: string
}

/**
 * A service page. Content is written per service — keep every page unique.
 * Shaped like a CMS document so it can later be loaded from a headless CMS.
 */
export type Service = {
  slug: string
  /** Set to false to hide the service everywhere (pages, menus, sitemap, contact form) without deleting it. */
  published: boolean
  category: ServiceCategoryId
  title: string
  /** Shorter label for compact lists such as the footer. Defaults to `title`. */
  shortTitle?: string
  icon: IconName
  image: ImageKey
  /** One or two sentences used on service cards. */
  summary: string
  seo: {
    title: string
    description: string
  }
  hero: {
    heading: string
    intro: string
  }
  overview: string[]
  /** Brooklyn-specific context for this service. */
  local: {
    heading: string
    text: string
  }
  problemsHeading?: string
  problems: TitledText[]
  signsHeading?: string
  signs: string[]
  process: TitledText[]
  benefits: TitledText[]
  /** Service-specific introduction for the "Why choose PLUMBON24" block. */
  whyUs: string
  faqs: Faq[]
  /** Slugs of related services (unpublished ones are skipped automatically). */
  related: string[]
}
