import { ContactDetails } from '@/components/contact/ContactDetails'
import { MapEmbed } from '@/components/contact/MapEmbed'
import { ContactSection } from '@/components/sections/ContactSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { PageHero } from '@/components/sections/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Container, Section } from '@/components/ui/Layout'
import { Eyebrow, SectionHeading } from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { createMetadata } from '@/lib/seo'
import { serviceAreaGroups } from '@/lib/service-areas'
import { addressLine, ctaLabels, mapsLinks, site } from '@/lib/site'

export const metadata = createMetadata({
  title: 'NYC Plumbing Service Areas in All 5 Boroughs | PLUMBON24',
  description:
    'Based in Sunset Park, PLUMBON24 MECHANICAL INC provides plumbing services across all five NYC boroughs: Manhattan, Brooklyn, Queens, the Bronx and Staten Island.',
  path: '/service-areas',
})

const buildingTypes: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'home',
    title: 'Brownstones & row houses',
    text: 'Many date to the late 1800s and early 1900s. Original cast iron drains, galvanized supply lines, basement water heaters and decades of renovations layered on top are all common.',
  },
  {
    icon: 'building',
    title: 'Pre-war apartment buildings',
    text: 'Shared risers and stacks mean a problem in one apartment can affect others. Access, building rules and coordination with management all matter.',
  },
  {
    icon: 'water-heater',
    title: 'One- and two-family homes',
    text: 'Common across Brooklyn, Queens and Staten Island. Typical needs include water heater replacement, drain problems, fixture upgrades and basement plumbing.',
  },
  {
    icon: 'kitchen',
    title: 'Mixed-use & commercial buildings',
    text: 'Storefronts, restaurants and offices below apartments need plumbing that works for businesses and residents alike, including backflow protection where required.',
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Serving All 5 NYC Boroughs"
        intro={
          <p>
            {site.name} is based in Brooklyn and provides professional plumbing services across Manhattan, Brooklyn, Queens, the
            Bronx and Staten Island, with 24/7 emergency service.
          </p>
        }
        crumbs={[{ name: 'Service Areas', path: '/service-areas' }]}
        image={images.brooklynBrownstones}
        actions={
          <>
            <ButtonLink href={`#${REQUEST_ANCHOR}`} size="lg" icon="arrow-right">
              {ctaLabels.primary}
            </ButtonLink>
            <ButtonLink href="/services" size="lg" variant="outline-light">
              View Our Services
            </ButtonLink>
          </>
        }
      />

      <Section tone="white" labelledBy="base-title">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our home base"
              title={`Based in ${site.neighborhood}`}
              lead={`Our base at ${addressLine} puts us in South Brooklyn, with quick access to every borough of New York City.`}
              id="base-title"
            />
            <ContactDetails className="mt-10" />
          </div>
          <div className="lg:col-span-7">
            <MapEmbed query={addressLine} label={addressLine} directionsUrl={mapsLinks.directions} />
          </div>
        </Container>
      </Section>

      <Section tone="mist" labelledBy="neighborhoods-title">
        <Container>
          <SectionHeading
            eyebrow="Neighborhoods"
            title="Boroughs & Neighborhoods We Serve"
            lead="We work with homeowners, residents, businesses and property managers across all five boroughs. The neighborhoods below are examples. If yours isn’t listed, just ask."
            id="neighborhoods-title"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {serviceAreaGroups.map((group) => (
              <li key={group.id} className="reveal flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-8">
                <h3 className="text-h4 text-ink">{group.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{group.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2.5" aria-label={`Neighborhoods in ${group.title}`}>
                  {group.neighborhoods.map((neighborhood) => (
                    <li
                      key={neighborhood.name}
                      className="inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-sm font-medium text-ink ring-1 ring-line"
                    >
                      <Icon name="map-pin" className="size-3.5 text-brand-600" />
                      {neighborhood.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="white" labelledBy="buildings-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Local knowledge</Eyebrow>
              <h2 id="buildings-title" className="text-h2 mt-4 text-ink">
                Plumbing for Every Kind of NYC Building
              </h2>
              <p className="text-lead mt-5 text-muted">
                New York City’s housing stock spans more than a century. Each type of building comes with its own plumbing considerations.
              </p>
            </div>
            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
              {buildingTypes.map((type) => (
                <li key={type.title} className="reveal border-t-2 border-ink pt-6">
                  <Icon name={type.icon} className="size-7 text-brand-600" />
                  <h3 className="text-h4 mt-4 text-ink">{type.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{type.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Not Sure If We Serve Your Area?"
        text="Send us your address and a short description of the problem, and we’ll let you know."
        primaryHref={`#${REQUEST_ANCHOR}`}
        secondary={null}
        id="areas-cta-title"
      />
      <ContactSection />
    </>
  )
}
