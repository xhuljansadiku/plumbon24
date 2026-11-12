import Link from 'next/link'
import { ContactSection } from '@/components/sections/ContactSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { FaqSection } from '@/components/sections/FaqSection'
import { PageHero } from '@/components/sections/PageHero'
import { PropertyTypeCards } from '@/components/services/PropertyTypeCards'
import { ServiceCard } from '@/components/services/ServiceCard'
import { ButtonLink } from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { generalFaqs } from '@/lib/faqs'
import { images } from '@/lib/images'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { createMetadata } from '@/lib/seo'
import { categoryHref, getCategory, getServicesByCategory, visibleCategories } from '@/lib/services'
import { ctaLabels, site } from '@/lib/site'

export const metadata = createMetadata({
  title: 'Piping Services in New York City | PLUMBON24',
  description:
    'Boilers and steam heat, emergency repairs, drain cleaning, water heaters, leak repair and repiping for homes and businesses in all five NYC boroughs.',
  path: '/services',
})

export default function ServicesPage() {
  const gridCategories = visibleCategories
    .filter((category) => category.id !== 'property')
    .map((category) => ({ ...category, items: getServicesByCategory(category.id) }))
  const startIndexes = gridCategories.map((_, index) =>
    gridCategories.slice(0, index).reduce((total, category) => total + category.items.length, 0),
  )
  const propertyCategory = getCategory('property')

  return (
    <>
      <PageHero
        eyebrow="Piping services"
        title="Piping Services in New York City"
        intro={
          <p>
            Urgent repairs, installations and planned maintenance for homes and businesses
            across all five NYC boroughs, backed by 15+ years of piping experience.
          </p>
        }
        crumbs={[{ name: 'Services', path: '/services' }]}
        image={images.mechanicalRoom}
        actions={
          <>
            <ButtonLink href={`#${REQUEST_ANCHOR}`} size="lg" icon="arrow-right">
              {ctaLabels.primary}
            </ButtonLink>
            {site.phone ? (
              <ButtonLink href={`tel:${site.phone.e164}`} size="lg" variant="light" icon="phone" iconPosition="start">
                {ctaLabels.call}
              </ButtonLink>
            ) : null}
          </>
        }
        footer={
          <nav aria-label="Service categories">
            <ul className="flex flex-wrap gap-2.5">
              {visibleCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={categoryHref(category)}
                    className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        }
      />

      {gridCategories.map((category, index) => (
        <Section key={category.id} tone={index % 2 === 0 ? 'white' : 'mist'} labelledBy={`${category.id}-title`}>
          <Container>
            <SectionHeading
              eyebrow={`${category.items.length} services`}
              title={<Link href={categoryHref(category)} className="hover:text-brand-700">{category.title}</Link>}
              lead={category.description}
              id={`${category.id}-title`}
            />
            <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {category.items.map((service, position) => (
                <li key={service.slug} className="reveal">
                  <ServiceCard service={service} index={startIndexes[index] + position} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ))}

      {propertyCategory ? (
        <Section tone={gridCategories.length % 2 === 0 ? 'white' : 'mist'} labelledBy="property-title">
          <Container>
            <SectionHeading
              eyebrow="By property type"
              title={<Link href={categoryHref(propertyCategory)} className="hover:text-brand-700">Residential & Commercial Piping</Link>}
              lead="Whether it’s your home or your business, the services above are available for the property you own, manage or run."
              id="property-title"
            />
            <div className="mt-12">
              <PropertyTypeCards />
            </div>
          </Container>
        </Section>
      ) : null}

      <FaqSection faqs={generalFaqs} tone={gridCategories.length % 2 === 0 ? 'mist' : 'white'} />
      <CtaBand primaryHref={`#${REQUEST_ANCHOR}`} />
      <ContactSection lead="Not sure which service you need? Choose “Other / not sure” and describe the problem. We’ll help you work it out." />
    </>
  )
}
