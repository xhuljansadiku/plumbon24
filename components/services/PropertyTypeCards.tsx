import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { images } from '@/lib/images'
import { getServicesByCategory, serviceHref } from '@/lib/services'
import { cn } from '@/lib/utils'

/** Horizontal banner cards for Residential and Commercial plumbing; the photo alternates sides. */
export function PropertyTypeCards() {
  const propertyServices = getServicesByCategory('property')
  if (!propertyServices.length) return null

  return (
    <ul className="grid gap-6">
      {propertyServices.map((service, index) => {
        const photo = images[service.image]
        return (
          <li key={service.slug} className="reveal">
            <article className="group relative grid overflow-hidden rounded-2xl border border-line bg-white transition duration-300 hover:shadow-lift md:grid-cols-2">
              <div className={cn('relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-80', index % 2 === 1 && 'md:order-2')}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out-soft group-hover:scale-[1.03]"
                  style={photo.position ? { objectPosition: photo.position } : undefined}
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <span className="grid size-14 place-items-center rounded-xl bg-brand-600 text-white">
                  <Icon name={service.icon} className="size-7" />
                </span>
                <h3 className="text-h3 mt-6 text-ink">
                  <Link
                    href={serviceHref(service.slug)}
                    className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:outline-3 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand-500"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{service.summary}</p>
                <span aria-hidden="true" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700">
                  Learn More
                  <Icon name="arrow-right" className="size-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                </span>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
