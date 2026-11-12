import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Container } from '@/components/ui/Layout'
import { categoryHref, getServicesByCategory, serviceHref, visibleCategories } from '@/lib/services'
import { ctaLabels } from '@/lib/site'

/** Desktop "Services" dropdown panel (server-rendered). */
export function ServicesMegaMenu() {
  const columns = visibleCategories
    .filter((category) => category.id !== 'property')
    .map((category) => ({ ...category, items: getServicesByCategory(category.id) }))
  const propertyTypes = getServicesByCategory('property')

  return (
    <div className="border-y border-line bg-white shadow-lift">
      <Container className="py-8">
        <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
          {columns.map(({ items, ...category }) => {
            return (
              <div key={category.id}>
                <Link href={categoryHref(category)} className="text-eyebrow text-[0.6875rem] text-subtle transition-colors hover:text-brand-700">
                  {category.title}
                </Link>
                <ul className="mt-4 grid gap-0.5">
                  {items.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={serviceHref(service.slug)}
                        className="group -mx-2.5 flex items-center gap-3 rounded-lg px-2.5 py-2 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-mist"
                      >
                        <Icon name={service.icon} className="size-5 text-brand-600" />
                        <span className="group-hover:text-brand-700">{service.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="mt-8 flex items-center justify-between gap-6 rounded-xl bg-mist px-6 py-4">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {propertyTypes.map((service) => (
              <li key={service.slug}>
                <Link href={serviceHref(service.slug)} className="inline-flex items-center gap-2.5 font-semibold text-ink hover:text-brand-700">
                  <Icon name={service.icon} className="size-5 text-brand-600" />
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
                View all services
                <Icon name="arrow-right" className="size-4" strokeWidth={2} />
              </Link>
            </li>
          </ul>
          <ButtonLink href="/contact" icon="arrow-right">
            {ctaLabels.primary}
          </ButtonLink>
        </div>
      </Container>
    </div>
  )
}
