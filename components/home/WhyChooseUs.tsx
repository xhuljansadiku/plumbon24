import { ButtonLink } from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { ctaLabels } from '@/lib/site'
import { indexLabel } from '@/lib/utils'

const reasons = [
  {
    title: '15+ Years of Experience',
    text: 'More than 15 years of practical plumbing experience helps us approach every problem with knowledge and professionalism.',
  },
  {
    title: 'Professional Service',
    text: 'Clear communication and a professional approach from the initial request through completion.',
  },
  {
    title: 'Residential & Commercial',
    text: 'Plumbing solutions for homes, apartments, businesses and commercial properties.',
  },
  {
    title: 'Practical Solutions',
    text: 'We focus on identifying the actual problem and providing the right solution for it.',
  },
  {
    title: 'Local NYC Service',
    text: 'A local plumbing company based in Sunset Park, serving customers across all five boroughs.',
  },
  {
    title: 'Easy to Contact',
    text: 'Requesting plumbing service is simple: tell us what’s happening and send photos if you can.',
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
              lead="Experience, clear communication and careful work — the things that matter when someone is working on your plumbing."
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
