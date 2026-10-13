import Image from 'next/image'
import { ArrowLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import { addressLine, site } from '@/lib/site'

export function ServiceAreasSection() {
  const photo = images.brooklynStreet

  return (
    <Section tone="mist" labelledBy="areas-title">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="reveal-image object-cover"
              style={{ objectPosition: photo.position }}
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Service areas"
            title="Serving All 5 NYC Boroughs"
            lead={`${site.name} is based in Brooklyn and provides professional plumbing services across Manhattan, Brooklyn, Queens, the Bronx and Staten Island.`}
            id="areas-title"
          />
          <div className="mt-8 flex items-start gap-4 rounded-xl border border-line bg-white p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-600 text-white">
              <Icon name="map-pin" className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-ink">Based in {site.neighborhood}, Brooklyn</p>
              <p className="mt-0.5 text-muted">{addressLine}</p>
            </div>
          </div>
          <h3 className="text-eyebrow mt-10 text-[0.75rem] text-subtle">Boroughs we serve</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {site.boroughs.map((name) => (
              <li key={name} className="flex items-center gap-2.5 text-ink">
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-brand-500" />
                {name}
              </li>
            ))}
          </ul>
          <ArrowLink href="/service-areas" className="mt-10">
            View Service Areas
          </ArrowLink>
        </div>
      </Container>
    </Section>
  )
}
