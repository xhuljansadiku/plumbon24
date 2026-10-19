import Image from 'next/image'
import { ContactDetails } from '@/components/contact/ContactDetails'
import { MapEmbed } from '@/components/contact/MapEmbed'
import { CtaBand } from '@/components/sections/CtaBand'
import { ExperienceFigure } from '@/components/sections/ExperienceSection'
import { PageHero } from '@/components/sections/PageHero'
import { PropertyTypeCards } from '@/components/services/PropertyTypeCards'
import { ButtonLink } from '@/components/ui/Button'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Container, Section } from '@/components/ui/Layout'
import { Eyebrow, SectionHeading } from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import { createMetadata } from '@/lib/seo'
import { addressLine, ctaLabels, mapsLinks, site } from '@/lib/site'

export const metadata = createMetadata({
  title: 'About PLUMBON24 MECHANICAL INC | NYC Plumbing Company',
  description:
    'PLUMBON24 MECHANICAL INC is a New York City plumbing company based in Sunset Park, Brooklyn, bringing 15+ years of plumbing experience to homes and businesses.',
  path: '/about',
})

const values: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'clipboard-check',
    title: 'Professional approach',
    text: 'We treat every job and every property professionally, from the first request to the finished work.',
  },
  {
    icon: 'badge',
    title: 'Quality workmanship',
    text: 'Suitable materials, proper connections and careful testing. Good plumbing is the part you never have to think about again.',
  },
  {
    icon: 'message',
    title: 'Customer-focused communication',
    text: 'Plain-language explanations of the problem, the options and what the work involves, before it begins.',
  },
  {
    icon: 'target',
    title: 'Practical plumbing solutions',
    text: 'We focus on the solution that actually fits the problem, the property and your priorities.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Your Local Plumbing Partner"
        intro={
          <p>
            {site.name} is a New York City plumbing company with 15+ years of plumbing experience, serving homes and businesses from our
            base in {site.neighborhood}.
          </p>
        }
        crumbs={[{ name: 'About', path: '/about' }]}
        image={images.bathroomRoughIn}
        actions={
          <>
            <ButtonLink href="/contact" size="lg" icon="arrow-right">
              {ctaLabels.primary}
            </ButtonLink>
            <ButtonLink href="/services" size="lg" variant="outline-light">
              View Our Services
            </ButtonLink>
          </>
        }
      />

      <Section tone="white" labelledBy="story-title">
        <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Eyebrow>Who we are</Eyebrow>
            <h2 id="story-title" className="text-h2 mt-4 text-ink">
              Plumbing Done Properly, Explained Clearly
            </h2>
            <div className="mt-7 grid gap-5 text-lg leading-relaxed text-muted">
              <p>
                We work on the plumbing that homes and businesses depend on every day: water lines, drains, water heaters,
                fixtures, heating, sprinklers and the systems that tie them together.
              </p>
              <p>
                Our approach is straightforward: listen to the problem, find the actual cause, explain the options clearly and do the
                work properly. We believe you should understand what’s wrong with your plumbing, and why a repair is recommended,
                before any work begins.
              </p>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-5 gap-4">
              <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={images.copperRisers.src}
                  alt={images.copperRisers.alt}
                  fill
                  sizes="(min-width: 1024px) 28vw, 60vw"
                  className="reveal-image object-cover"
                  style={{ objectPosition: images.copperRisers.position }}
                />
              </div>
              <div className="col-span-2 flex flex-col gap-4 pt-16">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={images.basementCastIron.src}
                    alt={images.basementCastIron.alt}
                    fill
                    sizes="(min-width: 1024px) 18vw, 40vw"
                    className="reveal-image object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mist" labelledBy="values-title">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="What You Can Expect From Us"
            lead="The standards we bring to every residential and commercial job."
            id="values-title"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li key={value.title} className="reveal rounded-2xl border border-line bg-white p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Icon name={value.icon} className="size-6" />
                </span>
                <h3 className="text-h4 mt-6 text-ink">{value.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted">{value.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="navy" labelledBy="experience-about-title" className="overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint-dark fade-edges" />
        <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ExperienceFigure tone="dark" />
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              tone="dark"
              eyebrow="Experience"
              title="Experience That Shows in the Details"
              lead="Fifteen-plus years of plumbing teaches you where problems start, how older buildings behave and why careful work matters. That experience is what we bring to every job, big or small."
              id="experience-about-title"
            />
          </div>
        </Container>
      </Section>

      <Section tone="white" labelledBy="properties-title">
        <Container>
          <SectionHeading
            eyebrow="Who we serve"
            title="Residential & Commercial Plumbing"
            lead="Plumbing services for homes, apartments, businesses and commercial properties across New York City."
            id="properties-title"
          />
          <div className="mt-12">
            <PropertyTypeCards />
          </div>
        </Container>
      </Section>

      <Section tone="mist" labelledBy="location-title">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our location"
              title={`Based in ${site.neighborhood}, Brooklyn`}
              lead="From South Brooklyn, we reach jobs in every borough of New York City."
              id="location-title"
            />
            <ContactDetails className="mt-10" />
          </div>
          <div className="lg:col-span-7">
            <MapEmbed query={addressLine} label={addressLine} directionsUrl={mapsLinks.directions} />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
