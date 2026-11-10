import { ContactDetails } from '@/components/contact/ContactDetails'
import { ContactForm } from '@/components/contact/ContactForm'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { OTHER_SERVICE } from '@/lib/contact/schema'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { services } from '@/lib/services'
import { site } from '@/lib/site'

export const serviceOptions = [
  ...services.map((service) => ({ value: service.slug, label: service.title })),
  { value: OTHER_SERVICE, label: 'Other / not sure' },
]

const nextSteps = [
  'We review your request and any photos you sent.',
  'We get back to you to talk through the problem.',
  'We agree on the next step before any work begins.',
]

/** Request-service block (form + NAP) placed at the end of most pages. Anchor: #request-service */
export function ContactSection({
  title = 'Tell Us About Your Piping Problem',
  lead = 'Send a service request and we’ll get back to you as soon as possible. Photos help us understand the problem.',
  defaultService,
}: {
  title?: string
  lead?: string
  defaultService?: string
}) {
  return (
    <Section tone="mist" id={REQUEST_ANCHOR} labelledBy="request-service-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16">
        <div className="lg:col-span-5 lg:row-start-1">
          <SectionHeading eyebrow="Request service" title={title} lead={lead} id="request-service-title" />
        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-8 lg:p-10">
            <ContactForm serviceOptions={serviceOptions} defaultService={defaultService} contactEmail={site.email} />
          </div>
        </div>

        <div className="lg:col-span-5 lg:row-start-2">
          <div className="hidden lg:block">
            <ContactDetails />
          </div>
          <div className="lg:mt-10 lg:border-t lg:border-line lg:pt-8">
            <h3 className="text-eyebrow text-[0.75rem] text-subtle">What happens next</h3>
            <ol className="mt-5 grid gap-4">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink-900 font-display text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  )
}
