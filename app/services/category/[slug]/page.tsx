import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ContactSection } from '@/components/sections/ContactSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { PageHero } from '@/components/sections/PageHero'
import { PropertyTypeCards } from '@/components/services/PropertyTypeCards'
import { ServiceCard } from '@/components/services/ServiceCard'
import { ServiceHeroFacts } from '@/components/services/ServiceDetailSections'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { createMetadata } from '@/lib/seo'
import { categoryHref, getCategoryBySlug, getServicesByCategory, visibleCategories } from '@/lib/services'
import { ctaLabels, site } from '@/lib/site'

export function generateStaticParams() {
  return visibleCategories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: PageProps<'/services/category/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}
  return createMetadata({ title: category.seo.title, description: category.seo.description, path: categoryHref(category) })
}

export default async function ServiceCategoryPage({ params }: PageProps<'/services/category/[slug]'>) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const items = getServicesByCategory(category.id)
  const otherCategories = visibleCategories.filter((other) => other.id !== category.id)

  return (
    <>
      <PageHero
        eyebrow="Piping services"
        title={category.title}
        intro={<p>{category.intro}</p>}
        crumbs={[
          { name: 'Services', path: '/services' },
          { name: category.title, path: categoryHref(category) },
        ]}
        image={images[category.image]}
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
        footer={<ServiceHeroFacts />}
      />

      <Section tone="white" labelledBy="category-services-title">
        <Container>
          <SectionHeading
            eyebrow={`${items.length} services`}
            title="What We Handle"
            lead={category.description}
            id="category-services-title"
          />
          {category.id === 'property' ? (
            <div className="mt-10 sm:mt-12">
              <PropertyTypeCards />
            </div>
          ) : (
            <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {items.map((service, index) => (
                <li key={service.slug} className="reveal">
                  <ServiceCard service={service} index={index} />
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>

      {otherCategories.length ? (
        <Section tone="mist" labelledBy="other-categories-title">
          <Container>
            <SectionHeading eyebrow="More services" title="Other Service Categories" id="other-categories-title" />
            <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {otherCategories.map((other) => (
                <li key={other.id} className="reveal">
                  <Link
                    href={categoryHref(other)}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 hover:border-brand-500/40 hover:shadow-lift focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-500 motion-safe:hover:-translate-y-1"
                  >
                    <span className="font-display text-lg font-bold leading-snug text-ink group-hover:text-brand-700">{other.title}</span>
                    <span className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{other.description}</span>
                    <span aria-hidden="true" className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-brand-700">
                      View services
                      <Icon name="arrow-right" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CtaBand primaryHref={`#${REQUEST_ANCHOR}`} />
      <ContactSection lead="Tell us what’s happening, where you’re located and what type of property it is. Photos help us understand the problem." />
    </>
  )
}
