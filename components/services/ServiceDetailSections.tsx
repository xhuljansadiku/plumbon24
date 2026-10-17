import Image from 'next/image'
import { ServiceCard } from '@/components/services/ServiceCard'
import { ExperienceFigure } from '@/components/sections/ExperienceSection'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { ButtonLink } from '@/components/ui/Button'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Container, Section } from '@/components/ui/Layout'
import { Eyebrow, SectionHeading } from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { getRelatedServices, type Service } from '@/lib/services'
import { ctaLabels, site } from '@/lib/site'
import { indexLabel } from '@/lib/utils'

/** 2. Service introduction + NYC-specific note */
export function ServiceIntro({ service }: { service: Service }) {
  return (
    <Section tone="white" labelledBy="intro-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>Service overview</Eyebrow>
          <h2 id="intro-title" className="text-h2 mt-4 text-ink">
            Our Approach to {service.title}
          </h2>
          <div className="mt-7 grid gap-5 text-lg leading-relaxed text-muted">
            {service.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-line bg-mist p-7 sm:p-8">
            <p className="flex items-center gap-3 text-eyebrow text-[0.75rem] text-brand-700">
              <Icon name="map-pin" className="size-4" />
              Plumbing in New York City
            </p>
            <h3 className="text-h4 mt-4 text-ink">{service.local.heading}</h3>
            <p className="mt-3 leading-relaxed text-muted">{service.local.text}</p>
          </div>
        </aside>
      </Container>
    </Section>
  )
}

/** 3. Common problems */
export function ServiceProblems({ service }: { service: Service }) {
  return (
    <Section tone="mist" labelledBy="problems-title">
      <Container>
        <SectionHeading
          eyebrow="Common problems"
          title={service.problemsHeading ?? 'Common Problems We Solve'}
          id="problems-title"
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.problems.map((problem, index) => (
            <li key={problem.title} className="reveal rounded-2xl border border-line bg-white p-6 sm:p-7">
              <span className="font-display text-sm font-extrabold tabular-nums tracking-[0.14em] text-brand-600">{indexLabel(index)}</span>
              <h3 className="text-h4 mt-3 text-ink">{problem.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted">{problem.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

/** 4. Signs you may need the service */
export function ServiceSigns({ service }: { service: Service }) {
  const photo = images[service.image]
  return (
    <Section tone="white" labelledBy="signs-title">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Warning signs" title={service.signsHeading ?? 'Signs You May Need This Service'} id="signs-title" />
          <ul className="mt-10 grid gap-3.5 sm:grid-cols-2">
            {service.signs.map((sign) => (
              <li key={sign} className="flex items-start gap-3.5 rounded-xl border border-line px-5 py-4">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                  <Icon name="check" className="size-4" strokeWidth={2.5} />
                </span>
                <span className="font-medium leading-snug text-ink">{sign}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">
            Noticing one of these?{' '}
            <a href={`#${REQUEST_ANCHOR}`} className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800">
              Tell us what’s happening
            </a>{' '}
            and we’ll help you work out the next step.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[4/5]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="reveal-image object-cover"
              style={photo.position ? { objectPosition: photo.position } : undefined}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

/** 5. How the service works */
export function ServiceProcess({ service }: { service: Service }) {
  return (
    <Section tone="mist" labelledBy="process-title">
      <Container>
        <SectionHeading align="center" eyebrow="Our process" title="How the Service Works" id="process-title" />
        <div className="mx-auto mt-16 max-w-6xl lg:mt-20">
          <ProcessTimeline steps={service.process} tone="mist" />
        </div>
      </Container>
    </Section>
  )
}

const benefitIcons: IconName[] = ['shield-check', 'target', 'droplet', 'badge']

/** 6. Benefits */
export function ServiceBenefits({ service }: { service: Service }) {
  return (
    <Section tone="white" labelledBy="benefits-title">
      <Container>
        <SectionHeading eyebrow="Benefits" title="What You Gain" id="benefits-title" />
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((benefit, index) => (
            <li key={benefit.title} className="reveal">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon name={benefitIcons[index % benefitIcons.length]} className="size-6" />
              </span>
              <h3 className="text-h4 mt-5 text-ink">{benefit.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted">{benefit.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

/** Experience and service area are already in the hero facts and the figure beside this list. */
const reasons = [
  { icon: 'message', title: 'Clear communication', text: 'You’ll understand the problem and your options before work begins.' },
  { icon: 'shield-check', title: 'Quality workmanship', text: 'Careful work, suitable materials and proper testing.' },
  site.features.freeEstimates
    ? { icon: 'clipboard-check', title: 'Free estimates', text: 'You get the price before any work starts, so there are no surprises.' }
    : { icon: 'clipboard-check', title: 'Price before work', text: 'We agree on the scope and cost before any work starts.' },
  { icon: 'camera', title: 'Send photos first', text: 'Attach photos to your request so we arrive with the right parts.' },
] satisfies { icon: IconName; title: string; text: string }[]

/** 7. Why choose PLUMBON24 */
export function ServiceWhyUs({ service }: { service: Service }) {
  return (
    <Section tone="navy" labelledBy="why-title" className="overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint-dark fade-edges" />
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <ExperienceFigure tone="dark" />
        </div>
        <div className="lg:col-span-7">
          <SectionHeading tone="dark" eyebrow="Why PLUMBON24" title="Why Choose PLUMBON24?" lead={service.whyUs} id="why-title" />
          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white/8 text-brand-300 ring-1 ring-white/10">
                  <Icon name={reason.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-white">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

/** 9. Related services */
export function RelatedServices({ service }: { service: Service }) {
  const related = getRelatedServices(service)
  if (!related.length) return null

  return (
    <Section tone="mist" labelledBy="related-title">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Related services" title="You May Also Need" id="related-title" />
          <ButtonLink href="/services" variant="outline" icon="arrow-right" className="self-start sm:self-auto">
            All Services
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {related.map((item) => (
            <li key={item.slug} className="reveal">
              <ServiceCard service={item} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export function ServiceHeroFacts() {
  const facts: { icon: IconName; label: string }[] = [
    { icon: 'badge', label: '15+ years of experience' },
    { icon: 'building', label: 'Residential & commercial' },
    { icon: 'map-pin', label: 'All 5 NYC boroughs' },
  ]
  return (
    <ul className="flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-sm font-medium text-white/80">
      {facts.map((fact) => (
        <li key={fact.label} className="flex items-center gap-2.5">
          <Icon name={fact.icon} className="size-5 text-brand-300" />
          {fact.label}
        </li>
      ))}
    </ul>
  )
}

export function ServiceHeroActions({ service }: { service: Service }) {
  const emergency = service.slug === 'emergency-plumbing'
  return (
    <>
      <ButtonLink href={`#${REQUEST_ANCHOR}`} size="lg" icon="arrow-right">
        {emergency ? ctaLabels.emergency : ctaLabels.primary}
      </ButtonLink>
      {site.phone ? (
        <ButtonLink href={`tel:${site.phone.e164}`} size="lg" variant="light" icon="phone" iconPosition="start">
          {ctaLabels.call}
        </ButtonLink>
      ) : (
        <ButtonLink href="/services" size="lg" variant="outline-light">
          View All Services
        </ButtonLink>
      )}
    </>
  )
}
