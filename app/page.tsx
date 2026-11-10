import { EmergencySection } from '@/components/home/EmergencySection'
import { HomeHero } from '@/components/home/HomeHero'
import { ResidentialCommercial } from '@/components/home/ResidentialCommercial'
import { ServiceAreasSection } from '@/components/home/ServiceAreasSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { WorkGallery } from '@/components/home/WorkGallery'
import { ContactSection } from '@/components/sections/ContactSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import type { Metadata } from 'next'
import { generalFaqs } from '@/lib/faqs'
import { createMetadata, shareImage } from '@/lib/seo'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'NYC Piping & Heating for All 5 Boroughs | PLUMBON24',
    description:
      'Piping and heating services in all five NYC boroughs: 15+ years of experience, 24/7 emergency service and free estimates. Call (917) 702-0072.',
    path: '/',
  }),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'PLUMBON24 MECHANICAL INC',
    url: '/',
    title: 'PLUMBON24 MECHANICAL INC | Professional Piping Services in New York City',
    description:
      'Professional piping services for homes and businesses across all five NYC boroughs. 24/7 emergency service and free estimates. Call (917) 702-0072.',
    images: [shareImage],
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <WorkGallery />
      <EmergencySection />
      <WhyChooseUs />
      <ResidentialCommercial />
      <ServiceAreasSection />
      <ReviewsSection />
      <FaqSection faqs={generalFaqs} />
      <ContactSection />
    </>
  )
}
