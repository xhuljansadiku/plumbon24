import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  { title: 'Contact Us', text: 'Tell us what plumbing issue you are experiencing.' },
  { title: 'Understand the Problem', text: 'We assess the situation and determine the appropriate next step.' },
  { title: 'Professional Service', text: 'We carry out the required plumbing work with care.' },
  { title: 'Get Your Plumbing Back on Track', text: 'The goal is a professional solution that addresses the problem properly.' },
]

export function ProcessSection() {
  return (
    <Section tone="white" labelledBy="process-title">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our process"
          title="How It Works"
          lead="A straightforward process from your first message to a finished job."
          id="process-title"
        />
        <div className="mx-auto mt-16 max-w-6xl lg:mt-20">
          <ProcessTimeline steps={steps} />
        </div>
      </Container>
    </Section>
  )
}
