import { DesktopNav } from '@/components/layout/DesktopNav'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { MobileMenuContent } from '@/components/layout/MobileMenuContent'
import { ServicesMegaMenu } from '@/components/layout/ServicesMegaMenu'
import { ButtonLink } from '@/components/ui/Button'
import { BrandDrop, Icon } from '@/components/ui/Icon'
import { Container } from '@/components/ui/Layout'
import { Logo } from '@/components/ui/Logo'
import { mainNav } from '@/lib/navigation'
import { addressLine, ctaLabels, mapsLinks, site } from '@/lib/site'

/** Thin information bar above the header (desktop only): reinforces name, address and experience. */
function TopBar() {
  return (
    <div className="hidden bg-ink-900 text-[0.8125rem] text-white/75 lg:block">
      <Container className="flex h-10 items-center justify-between gap-6">
        <p className="flex items-center gap-2.5">
          <BrandDrop className="h-3.5 text-brand-400" />
          <span className="font-semibold text-white">{site.experienceYears} Years of Plumbing Experience</span>
          <span aria-hidden="true" className="text-white/30">
            /
          </span>
          <span>Residential &amp; Commercial Plumbing in Brooklyn, NY</span>
        </p>
        <div className="flex items-center gap-6">
          <a href={mapsLinks.place} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
            <Icon name="map-pin" className="size-4 text-brand-400" />
            {addressLine}
            <span className="sr-only">(opens Google Maps in a new tab)</span>
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
            <Icon name="mail" className="size-4 text-brand-400" />
            {site.email}
          </a>
          {site.phone ? (
            <a href={`tel:${site.phone.e164}`} className="flex items-center gap-2 font-semibold text-white">
              <Icon name="phone" className="size-4 text-brand-400" />
              {site.phone.display}
            </a>
          ) : null}
        </div>
      </Container>
    </div>
  )
}

export function SiteHeader() {
  return (
    <>
      <TopBar />
      <header className="site-header sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur-md">
        <Container className="flex h-[4.25rem] items-center justify-between gap-4 lg:h-20">
          <Logo eager />
          <DesktopNav items={mainNav} servicesMenu={<ServicesMegaMenu />} />
          <div className="flex items-center gap-2.5">
            {site.phone ? (
              <span className="hidden xl:block">
                <ButtonLink href={`tel:${site.phone.e164}`} variant="outline" icon="phone" iconPosition="start">
                  Call {site.phone.display}
                </ButtonLink>
              </span>
            ) : null}
            <span className="hidden sm:block">
              <ButtonLink href="/contact" icon="arrow-right">
                {ctaLabels.primary}
              </ButtonLink>
            </span>
            <MobileMenu logo={<Logo />}>
              <MobileMenuContent />
            </MobileMenu>
          </div>
        </Container>
      </header>
    </>
  )
}
