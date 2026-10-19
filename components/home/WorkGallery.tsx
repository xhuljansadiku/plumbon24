import Image from 'next/image'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { images, workGallery } from '@/lib/images'
import { cn } from '@/lib/utils'

/** Real project photos: finished spaces and the plumbing behind the walls. */
export function WorkGallery() {
  return (
    <Section tone="white" labelledBy="work-title">
      <Container>
        <SectionHeading
          eyebrow="Our work"
          title="Real Projects Across New York City"
          lead="Photos from our own jobs, from rough-in and mechanical rooms to finished kitchens and bathrooms."
          id="work-title"
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {workGallery.map((key, index) => {
            const photo = images[key]
            const featured = index === 0
            return (
              <li
                key={key}
                className={cn(
                  'group relative overflow-hidden rounded-xl bg-mist',
                  featured ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square',
                  index >= 7 && 'hidden lg:block',
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
                  className="reveal-image object-cover transition-transform duration-700 ease-out-soft motion-safe:group-hover:scale-[1.04]"
                  style={{ objectPosition: photo.position }}
                />
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
