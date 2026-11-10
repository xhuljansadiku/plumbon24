import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContactSection } from '@/components/sections/ContactSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { PageHero } from '@/components/sections/PageHero'
import {
  RelatedServices,
  ServiceBenefits,
  ServiceHeroActions,
  ServiceHeroFacts,
  ServiceIntro,
  ServiceProblems,
  ServiceProcess,
  ServiceSigns,
  ServiceWhyUs,
} from '@/components/services/ServiceDetailSections'
import { JsonLd } from '@/components/ui/JsonLd'
import { images } from '@/lib/images'
import { createMetadata, serviceSchema } from '@/lib/seo'
import { getService, serviceCategories, serviceHref, services } from '@/lib/services'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps<'/services/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return createMetadata({ title: service.seo.title, description: service.seo.description, path: serviceHref(service.slug) })
}

export default async function ServicePage({ params }: PageProps<'/services/[slug]'>) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const category = serviceCategories.find((item) => item.id === service.category)

  return (
    <>
      <PageHero
        eyebrow={category?.title ?? 'Piping services'}
        title={service.hero.heading}
        intro={<p>{service.hero.intro}</p>}
        crumbs={[
          { name: 'Services', path: '/services' },
          { name: service.title, path: serviceHref(service.slug) },
        ]}
        image={images[service.image]}
        actions={<ServiceHeroActions service={service} />}
        footer={<ServiceHeroFacts />}
      />
      <ServiceIntro service={service} />
      <ServiceProblems service={service} />
      <ServiceSigns service={service} />
      <ServiceProcess service={service} />
      <ServiceBenefits service={service} />
      <ServiceWhyUs service={service} />
      <FaqSection
        faqs={service.faqs}
        title="Common Questions"
        lead={`Answers to common questions about ${service.title.toLowerCase()} in New York City.`}
      />
      <RelatedServices service={service} />
      <ContactSection
        title={`Request ${service.title}`}
        lead="Tell us what’s happening, where you’re located and what type of property it is. Photos help us understand the problem."
        defaultService={service.slug}
      />
      <JsonLd data={serviceSchema(service)} />
    </>
  )
}
