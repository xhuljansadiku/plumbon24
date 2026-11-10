import Link from 'next/link'
import { StudioCredit } from '@/components/layout/StudioCredit'
import { ContactDetails } from '@/components/contact/ContactDetails'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Container } from '@/components/ui/Layout'
import { LogoPlate } from '@/components/ui/Logo'
import { legalNav, mainNav } from '@/lib/navigation'
import { footerServices, serviceHref, serviceLabel } from '@/lib/services'
import { ctaLabels, site } from '@/lib/site'

const headingClasses = 'text-eyebrow text-[0.75rem] text-brand-300'
const linkClasses = 'text-white/75 transition-colors hover:text-white hover:underline underline-offset-4'
// On mobile the columns stack, so each one gets a divider to read as its own block.
const sectionClasses = 'border-t border-white/10 pt-10 text-center lg:border-0 lg:pt-0 lg:text-left'

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint-dark fade-bottom" />
      <div aria-hidden="true" className="h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />

      <Container className="py-16 lg:py-20">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-10">
          <div className="order-1 flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
            <LogoPlate />
            <p className="mt-7 font-display text-lg font-extrabold tracking-tight">{site.name}</p>
            <p className="mt-1.5 font-semibold text-brand-300">{site.experienceYears} years of piping experience.</p>
            <p className="mt-4 max-w-sm text-white/70">
              Professional residential and commercial piping services across all five boroughs of New York City: repairs, installations and
              maintenance.
            </p>
            <ButtonLink href="/contact" icon="arrow-right" className="mt-7">
              {ctaLabels.primary}
            </ButtonLink>
            {site.profiles.instagram ? (
              <a
                href={site.profiles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2.5 text-white/75 transition-colors hover:text-white"
              >
                <span className="grid size-9 place-items-center rounded-full ring-1 ring-white/20">
                  <Icon name="instagram" className="size-[1.125rem]" />
                </span>
                @plumbon24 on Instagram
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : null}
          </div>

          <nav aria-labelledby="footer-navigation" className={`order-4 lg:order-2 lg:col-span-2 ${sectionClasses}`}>
            <h2 id="footer-navigation" className={headingClasses}>
              Navigation
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClasses}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services" className={`order-3 lg:col-span-3 ${sectionClasses}`}>
            <h2 id="footer-services" className={headingClasses}>
              Services
            </h2>
            <ul className="mt-5 grid gap-3">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link href={serviceHref(service.slug)} className={linkClasses}>
                    {serviceLabel(service)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-semibold text-brand-300 underline-offset-4 hover:text-white hover:underline">
                  All services →
                </Link>
              </li>
            </ul>
          </nav>

          <div className={`order-2 lg:order-4 lg:col-span-3 ${sectionClasses}`}>
            <h2 className={headingClasses}>Contact</h2>
            <ContactDetails tone="dark" showName={false} centered className="mt-5" />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-center text-sm text-white/60 md:flex-row md:text-left md:items-center md:justify-between">
          <p>
            © {site.copyrightYear} {site.name}.<br className="md:hidden" /> All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white hover:underline underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
        <Container>
          <StudioCredit />
        </Container>
      </div>
    </footer>
  )
}
