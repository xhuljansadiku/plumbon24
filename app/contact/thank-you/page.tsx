import { ButtonLink } from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/Layout'
import { createMetadata } from '@/lib/seo'

/** Shown after a form submission without JavaScript. Also a clean URL for conversion tracking. */
export const metadata = createMetadata({
  title: 'Request Received | PLUMBON24 MECHANICAL INC',
  description: 'Thank you. Your service request has been received.',
  path: '/contact/thank-you',
  noIndex: true,
})

export default function ThankYouPage() {
  return (
    <Section tone="mist" className="py-24 sm:py-32" labelledBy="thank-you-title">
      <Container className="max-w-2xl text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-600 text-white shadow-cta">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h1 id="thank-you-title" className="text-h2 mt-8 text-ink">
          Request Received
        </h1>
        <p className="text-lead mx-auto mt-5 max-w-xl text-muted">
          Thank you. Your service request has been received. We’ll get back to you as soon as possible.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back Home
          </ButtonLink>
          <ButtonLink href="/services" size="lg" variant="outline">
            View Services
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
