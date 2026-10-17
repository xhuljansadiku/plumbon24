import { ButtonLink } from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { ctaLabels } from '@/lib/site'
import { indexLabel } from '@/lib/utils'

/** Each reason says something no other homepage section says (24/7 and service areas have their own sections). */
const reasons = [
  {
    title: 'Free Estimates, Price Up Front',
    text: 'We look at the job and tell you what it will cost before any work begins.',
  },
  {
    title: 'From Small Repairs to Full Build-Outs',
    text: 'The same crew that fixes a leaking faucet also roughs in bathrooms, kitchens, water heaters and commercial spaces.',
  },
  {
    title: 'We Know NYC Buildings',
    text: 'Brownstones, pre-war walk-ups, co-ops and storefronts: 15+ years of working with old cast iron, galvanized pipe and building rules.',
  },
  {
    title: 'Send Photos, Get Answers Faster',
    text: 'Attach photos to your request so we understand the problem before we arrive and come prepared.',
  },
]

export function WhyChooseUs() {
  return (
    <Section tone="white" labelledBy="why-title">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why PLUMBON24"
              title="Why Choose PLUMBON24?"
              lead="What you get when you call PLUMBON24: straight answers, fair prices and careful work."
              id="why-title"
            />
            <ButtonLink href={`#${REQUEST_ANCHOR}`} icon="arrow-right" className="mt-9">
              {ctaLabels.primary}
            </ButtonLink>
          </div>
        </div>
        <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="reveal border-t-2 border-ink pt-6">
              <span className="font-display text-sm font-extrabold tabular-nums tracking-[0.14em] text-brand-600">
                {indexLabel(index)}
              </span>
              <h3 className="text-h4 mt-3 text-ink">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{reason.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
