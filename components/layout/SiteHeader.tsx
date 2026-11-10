import Link from 'next/link'
import { DesktopNav } from '@/components/layout/DesktopNav'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { MobileMenuContent } from '@/components/layout/MobileMenuContent'
import { ServicesMegaMenu } from '@/components/layout/ServicesMegaMenu'
import { ButtonLink } from '@/components/ui/Button'
import { BrandDrop, Icon } from '@/components/ui/Icon'
import { Container } from '@/components/ui/Layout'
import { Logo } from '@/components/ui/Logo'
import { mainNav } from '@/lib/navigation'
import { ctaLabels, site } from '@/lib/site'

function TopBarDivider() {
  return <span aria-hidden="true" className="h-3.5 w-px bg-white/15" />
}

/**
 * Slim single-line bar above the header (desktop only). Kept to a few short facts so it never
 * wraps; the full address and email live in the footer and on the contact page.
 */
function TopBar() {
  return (
    <div className="relative hidden overflow-hidden whitespace-nowrap bg-ink-900 text-[0.8125rem] text-white/70 lg:block">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[38rem] bg-[radial-gradient(60%_160%_at_0%_50%,rgb(2_126_198/0.28),transparent)]"
      />
      <Container className="relative flex h-10 items-center justify-between gap-6">
        {site.features.emergency24h ? (
          <p className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-semibold text-white">24/7 Emergency Service</span>
            <span className="hidden text-white/55 xl:inline">· We answer day and night</span>
          </p>
        ) : (
          <p className="flex items-center gap-2.5">
            <BrandDrop className="h-3.5 text-brand-400" />
            <span className="font-semibold text-white">{site.experienceYears} Years of Piping Experience</span>
          </p>
        )}

        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-2 xl:flex">
            <Icon name="clock" className="size-3.5 text-brand-400" />
            Office {site.hours.office}
          </span>
          <span className="hidden xl:contents">
            <TopBarDivider />
          </span>
          <Link href="/service-areas" className="flex items-center gap-2 transition-colors hover:text-white">
            <Icon name="map-pin" className="size-3.5 text-brand-400" />
            Serving All 5 NYC Boroughs
          </Link>
          {site.phone ? (
            <span className="contents xl:hidden">
              <TopBarDivider />
              <a href={`tel:${site.phone.e164}`} className="flex items-center gap-2 font-semibold text-white">
                <Icon name="phone" className="size-3.5 text-brand-400" />
                {site.phone.display}
              </a>
            </span>
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
