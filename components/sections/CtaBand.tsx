import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Layout'
import { ctaLabels, site } from '@/lib/site'

/** Closing call to action — black, brand blue and white. */
export function CtaBand({
  title = 'Need Plumbing Service? Let’s Get It Fixed.',
  text = 'Tell us what you’re dealing with and we’ll help you determine the next step.',
  primaryHref = '/contact',
  secondary = { label: 'Contact Us', href: '/contact' },
  id = 'cta-title',
}: {
  title?: string
  text?: string
  primaryHref?: string
  secondary?: { label: string; href: string } | null
  id?: string
}) {
  return (
    <section aria-labelledby={id} className="relative isolate overflow-hidden bg-ink-900 py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint-dark" />
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-brand-600 px-6 py-12 sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-16">
          <PipeDecoration />
          <div className="max-w-2xl">
            <h2 id={id} className="text-h2 text-white">
              {title}
            </h2>
            <p className="text-lead mt-5 text-white">{text}</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <ButtonLink href={primaryHref} variant="light" size="lg" icon="arrow-right">
              {ctaLabels.primary}
            </ButtonLink>
            {site.phone ? (
              <ButtonLink href={`tel:${site.phone.e164}`} variant="dark" size="lg" icon="phone" iconPosition="start">
                {ctaLabels.call}
              </ButtonLink>
            ) : null}
            {secondary ? (
              <ButtonLink href={secondary.href} variant="outline-light" size="lg">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}

/** Subtle pipe run with couplings and a drop, drawn in the band's background. */
function PipeDecoration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 320"
      preserveAspectRatio="xMaxYMin meet"
      className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-full w-[62%] text-white/10 lg:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 34h556a42 42 0 0 1 42 42v150" />
      <path d="M180 20v28M420 20v28M584 150h28" strokeWidth="8" />
      <path d="M598 252c8 10 12 17 12 22a12 12 0 0 1-24 0c0-5 4-12 12-22Z" fill="currentColor" stroke="none" />
    </svg>
  )
}
