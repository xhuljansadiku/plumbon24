import { AboutPreview } from '@/components/home/AboutPreview'
import { EmergencySection } from '@/components/home/EmergencySection'
import { HomeHero } from '@/components/home/HomeHero'
import { ProcessSection } from '@/components/home/ProcessSection'
import { ResidentialCommercial } from '@/components/home/ResidentialCommercial'
import { ServiceAreasSection } from '@/components/home/ServiceAreasSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { TrustBar } from '@/components/home/TrustBar'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
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
    title: 'Plumber in Brooklyn, NY | PLUMBON24 MECHANICAL INC',
    description:
      'Reliable plumbing services in Brooklyn, NY from PLUMBON24 MECHANICAL INC — 15+ years of experience with residential and commercial plumbing. Request service today.',
    path: '/',
  }),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'PLUMBON24 MECHANICAL INC',
    url: '/',
    title: 'PLUMBON24 MECHANICAL INC | Professional Plumbing Services in Brooklyn',
    description:
      'Professional plumbing services for homes and businesses in Brooklyn, NY. Contact PLUMBON24 MECHANICAL INC for professional plumbing solutions.',
    images: [shareImage],
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <ServicesSection />
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
