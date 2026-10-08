import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { mainNav } from '@/lib/navigation'
import { serviceHref, services } from '@/lib/services'
import { addressLine, ctaLabels, site } from '@/lib/site'

const rowClasses =
  'flex w-full items-center justify-between py-4 font-display text-[1.375rem] font-bold tracking-tight text-ink'

/** Contents of the mobile menu dialog (server-rendered). */
export function MobileMenuContent() {
  return (
    <>
      <nav aria-label="Mobile">
        <ul className="divide-y divide-line border-b border-line">
          {mainNav.map((item) =>
            item.href === '/services' ? (
              <li key={item.href}>
                <details className="group">
                  <summary className={`${rowClasses} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                    {item.label}
                    <Icon name="chevron-down" className="size-5 text-subtle transition-transform group-open:rotate-180" strokeWidth={2} />
                  </summary>
                  <ul className="grid gap-0.5 pb-4">
                    <li>
                      <Link href="/services" className="flex items-center gap-2 rounded-lg px-1 py-2.5 font-semibold text-brand-700">
                        View all services
                        <Icon name="arrow-right" className="size-4" strokeWidth={2} />
                      </Link>
                    </li>
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link href={serviceHref(service.slug)} className="flex items-center gap-3 rounded-lg px-1 py-2.5 text-[1rem] text-ink">
                          <Icon name={service.icon} className="size-5 text-brand-600" />
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href} className={rowClasses}>
                  {item.label}
                  <Icon name="arrow-right" className="size-5 text-subtle" strokeWidth={2} />
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>

      <div className="mt-8 grid gap-3">
        <ButtonLink href="/contact" size="lg" icon="arrow-right">
          {ctaLabels.primary}
        </ButtonLink>
        {site.phone ? (
          <ButtonLink href={`tel:${site.phone.e164}`} size="lg" variant="dark" icon="phone" iconPosition="start">
            {ctaLabels.call}
          </ButtonLink>
        ) : null}
      </div>

      <div className="mt-8 rounded-xl bg-mist p-5 text-[0.9375rem]">
        <p className="font-display font-extrabold text-ink">{site.name}</p>
        <p className="mt-1 text-muted">{site.experienceYears} Years of Plumbing Experience</p>
        <p className="mt-4 flex items-start gap-2.5 text-ink">
          <Icon name="map-pin" className="mt-0.5 size-5 text-brand-600" />
          {addressLine}
        </p>
        <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-2.5 font-semibold text-ink">
          <Icon name="mail" className="size-5 text-brand-600" />
          {site.email}
        </a>
      </div>
    </>
  )
}
