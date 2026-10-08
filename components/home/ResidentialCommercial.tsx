import Image from 'next/image'
import { ArrowLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Eyebrow } from '@/components/ui/SectionHeading'
import { images, type SiteImage } from '@/lib/images'
import { getService, serviceHref } from '@/lib/services'
import { cn } from '@/lib/utils'

type Panel = {
  slug: string
  eyebrow: string
  title: string
  text: string
  items: string[]
  image: SiteImage
  tone: 'light' | 'dark'
}

const panels: Panel[] = [
  {
    slug: 'residential-plumbing',
    eyebrow: 'For homeowners & residents',
    title: 'Residential Plumbing',
    text: 'Repairs, installations and upgrades for Brooklyn homes — handled with care for your space.',
    items: ['Houses', 'Apartments', 'Condos', 'Kitchens', 'Bathrooms', 'Water heaters', 'Drains', 'Leaks', 'Fixtures', 'Pipes'],
    image: images.brooklynBrownstones,
    tone: 'light',
  },
  {
    slug: 'commercial-plumbing',
    eyebrow: 'For businesses & buildings',
    title: 'Commercial Plumbing',
    text: 'Professional plumbing for businesses and building owners, with clear communication and respect for your operations.',
    items: [
      'Offices',
      'Restaurants',
      'Retail',
      'Property managers',
      'Commercial buildings',
      'Businesses',
      'Plumbing maintenance',
      'Plumbing installations',
    ],
    image: images.commercialKitchenSink,
    tone: 'dark',
  },
]

/** Full-bleed split: residential on a light half, commercial on a dark half. */
export function ResidentialCommercial() {
  return (
    <div className="grid lg:grid-cols-2">
      {panels.map((panel, index) => {
        const service = getService(panel.slug)
        const dark = panel.tone === 'dark'
        const id = `${panel.slug}-title`
        return (
          <section
            key={panel.slug}
            aria-labelledby={id}
            className={cn('relative isolate px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28 xl:px-16', dark ? 'bg-navy-950 text-white' : 'bg-mist')}
          >
            {dark ? <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint-dark" /> : null}
            <div className={cn('max-w-xl', index === 0 ? 'lg:ml-auto' : 'lg:mr-auto')}>
              <Eyebrow tone={dark ? 'dark' : 'light'}>{panel.eyebrow}</Eyebrow>
              <h2 id={id} className={cn('text-h2 mt-4', dark ? 'text-white' : 'text-ink')}>
                {panel.title}
              </h2>
              <p className={cn('text-lead mt-5', dark ? 'text-white/75' : 'text-muted')}>{panel.text}</p>

              <div className="relative mt-9 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={panel.image.src}
                  alt={panel.image.alt}
                  fill
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="reveal-image object-cover"
                  style={panel.image.position ? { objectPosition: panel.image.position } : undefined}
                />
              </div>

              <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3.5">
                {panel.items.map((item) => (
                  <li key={item} className={cn('flex items-center gap-3 font-medium', dark ? 'text-white/90' : 'text-ink')}>
                    <Icon name="check" className={cn('size-5', dark ? 'text-brand-300' : 'text-brand-600')} strokeWidth={2.25} />
                    {item}
                  </li>
                ))}
              </ul>

              {service ? (
                <ArrowLink href={serviceHref(service.slug)} tone={dark ? 'dark' : 'light'} className="mt-10 text-lg">
                  {panel.title}
                </ArrowLink>
              ) : null}
            </div>
          </section>
        )
      })}
    </div>
  )
}
