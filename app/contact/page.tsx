import { ContactDetails } from '@/components/contact/ContactDetails'
import { ContactForm } from '@/components/contact/ContactForm'
import { MapEmbed } from '@/components/contact/MapEmbed'
import { serviceOptions } from '@/components/sections/ContactSection'
import { FaqList } from '@/components/sections/FaqSection'
import { PageHero } from '@/components/sections/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Container, Section } from '@/components/ui/Layout'
import { Logo } from '@/components/ui/Logo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { contactFaqs } from '@/lib/faqs'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { createMetadata, faqSchema } from '@/lib/seo'
import { addressLine, mapsLinks, site } from '@/lib/site'

export const metadata = createMetadata({
  title: 'Contact a NYC Piping & Heating Contractor | PLUMBON24',
  description:
    'Request piping or heating service anywhere in NYC. Call (917) 702-0072 for 24/7 emergency service and free estimates, or send photos with your request.',
  path: '/contact',
})

const nextSteps = [
  { title: 'We review your request', text: 'Including any photos you attach.' },
  { title: 'We get back to you', text: 'To talk through the problem and the next step.' },
  { title: 'We agree on the plan', text: 'You’ll know what’s involved before any work begins.' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact a NYC Piping & Heating Contractor"
        intro={
          <p>
            Tell us about your piping problem and we’ll get back to you as soon as possible. Photos and a short description help us
            understand what’s going on.
          </p>
        }
        crumbs={[{ name: 'Contact', path: '/contact' }]}
        actions={
          site.phone ? (
            <ButtonLink href={`tel:${site.phone.e164}`} size="lg" variant="light" icon="phone" iconPosition="start">
              Call {site.phone.display}
            </ButtonLink>
          ) : undefined
        }
      />

      <Section tone="mist" id={REQUEST_ANCHOR} labelledBy="contact-form-title" className="pt-14 sm:pt-16 lg:pt-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-8 lg:p-10">
              <h2 id="contact-form-title" className="text-h3 text-ink">
                Request Service
              </h2>
              <p className="mt-2 text-muted">
                Fields marked <span className="font-semibold text-brand-700">*</span> are required.
              </p>
              <div className="mt-8">
                <ContactForm serviceOptions={serviceOptions} contactEmail={site.email} />
              </div>
            </div>
          </div>

          <aside className="grid content-start gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-line bg-white p-7 sm:p-8">
              <Logo linked={false} imageClassName="h-14 w-auto" sizes="150px" />
              <ContactDetails className="mt-8" />
            </div>

            <div className="rounded-2xl bg-ink-900 p-7 text-white sm:p-8">
              <h2 className="text-eyebrow text-[0.75rem] text-brand-300">What happens next</h2>
              <ol className="mt-6 grid gap-5">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-600 font-display text-sm font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="mt-0.5 text-sm text-white/70">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {site.features.emergencyService ? (
              <div className="flex gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
                <Icon name="alert" className="size-6 text-amber-700" />
                <div className="text-[0.9375rem]">
                  <p className="font-semibold text-ink">Dealing with an active leak?</p>
                  <p className="mt-1 text-muted">
                    Close your main water shut-off valve, then choose “Emergency Piping” in the form. If you smell gas, leave the
                    building and call 911 or your gas utility from outside.
                  </p>
                </div>
              </div>
            ) : null}
          </aside>
        </Container>
      </Section>

      <Section tone="white" labelledBy="map-title">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Location"
              title={`Find Us in ${site.neighborhood}`}
              lead={`${site.name} is located at ${addressLine}.`}
              id="map-title"
            />
            <a
              href={mapsLinks.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Get directions on Google Maps
              <Icon name="arrow-up-right" className="size-4" strokeWidth={2} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <div className="lg:col-span-8">
            <MapEmbed query={addressLine} label={addressLine} directionsUrl={mapsLinks.directions} />
          </div>
        </Container>
      </Section>

      <Section tone="mist" labelledBy="contact-faq-title">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Before You Reach Out" id="contact-faq-title" />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={contactFaqs} />
          </div>
        </Container>
        <JsonLd data={faqSchema(contactFaqs)} />
      </Section>
    </>
  )
}
