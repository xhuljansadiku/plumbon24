import { AboutPreview } from '@/components/home/AboutPreview'
import { EmergencySection } from '@/components/home/EmergencySection'
import { HomeHero } from '@/components/home/HomeHero'
import { ProcessSection } from '@/components/home/ProcessSection'
import { ResidentialCommercial } from '@/components/home/ResidentialCommercial'
import { ServiceAreasSection } from '@/components/home/ServiceAreasSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { TrustBar } from '@/components/home/TrustBar'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { WorkGallery } from '@/components/home/WorkGallery'
import { ContactSection } from '@/components/sections/ContactSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import type { Metadata } from 'next'
import { generalFaqs } from '@/lib/faqs'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { createMetadata, shareImage } from '@/lib/seo'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'NYC Plumber — All 5 Boroughs | PLUMBON24 MECHANICAL INC',
    description:
      'Reliable plumbing services in all five NYC boroughs from PLUMBON24 MECHANICAL INC — 15+ years of experience, 24/7 emergency service and free estimates. Call (917) 702-0072.',
    path: '/',
  }),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'PLUMBON24 MECHANICAL INC',
    url: '/',
    title: 'PLUMBON24 MECHANICAL INC | Professional Plumbing Services in New York City',
    description:
      'Professional plumbing services for homes and businesses across all five NYC boroughs. 24/7 emergency service and free estimates. Call (917) 702-0072.',
    images: [shareImage],
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <ServicesSection />
      <WorkGallery />
      <ExperienceSection />
      <EmergencySection />
      <WhyChooseUs />
      <ResidentialCommercial />
      <ProcessSection />
      <ServiceAreasSection />
      <AboutPreview />
      <ReviewsSection />
      <FaqSection faqs={generalFaqs} />
      <CtaBand primaryHref={`#${REQUEST_ANCHOR}`} />
      <ContactSection />
    </>
  )
}
