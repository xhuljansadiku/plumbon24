import Image from 'next/image'
import { ArrowLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import { site } from '@/lib/site'

const values = [
  'Clear communication from the first request to the finished job',
  'Careful, quality workmanship',
  'Practical solutions for homes and businesses',
]

export function AboutPreview() {
  const photo = images.copperPipeVise

  return (
    <Section tone="navy" labelledBy="about-title" className="overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint-dark fade-edges" />
      <Container className="grid items-center gap-16 lg:grid-cols-12">
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:aspect-[16/11] lg:aspect-[5/6]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="reveal-image object-cover"
              style={{ objectPosition: photo.position }}
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-xl bg-brand-600 px-6 py-5 text-white shadow-lift sm:right-6 lg:-right-6">
            <p className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em]">15+</p>
            <p className="mt-2 text-sm font-semibold">Years of plumbing experience</p>
          </div>
        </div>
        <div className="lg:col-span-6">
          <SectionHeading
            tone="dark"
            eyebrow="About PLUMBON24"
            title="Built on Experience. Focused on Quality."
            lead={`With 15+ years of plumbing experience, ${site.name} brings practical knowledge and professional service to residential and commercial plumbing projects in Brooklyn.`}
            id="about-title"
          />
          <ul className="mt-9 grid gap-4">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3.5 text-white/90">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-600">
                  <Icon name="check" className="size-4 text-white" strokeWidth={2.5} />
                </span>
                {value}
              </li>
            ))}
          </ul>
          <ArrowLink href="/about" tone="dark" className="mt-10 text-lg">
            Learn More About Us
          </ArrowLink>
        </div>
      </Container>
    </Section>
  )
}
