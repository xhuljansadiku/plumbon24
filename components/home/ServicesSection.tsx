import { ServiceCard } from '@/components/services/ServiceCard'
import { ButtonLink } from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { featuredServices } from '@/lib/services'

export function ServicesSection() {
  return (
    <Section tone="white" labelledBy="services-title">
      <Container>
        <SectionHeading
          eyebrow="Our services"
          title="Complete Piping Services"
          lead="Professional piping solutions for repairs, installations, maintenance and more."
          id="services-title"
        />
        <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {featuredServices.map((service, index) => (
            <li key={service.slug} className="reveal">
              <ServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <ButtonLink href="/services" variant="outline" size="lg" icon="arrow-right">
            View All Services
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
