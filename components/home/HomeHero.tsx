import Image from 'next/image'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Container } from '@/components/ui/Layout'
import { Eyebrow } from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { addressLine, ctaLabels, site } from '@/lib/site'

export function HomeHero() {
  const photo = images.boilerRoomInstall

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint fade-edges" />
      <div
        aria-hidden="true"
        className="ambient-float pointer-events-none absolute -right-44 -top-40 -z-10 size-[34rem] rounded-full bg-brand-300/20 blur-[96px]"
      />
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 hidden w-[26%] bg-mist lg:block" />

      <Container className="grid items-center gap-x-12 gap-y-14 pb-20 pt-10 sm:pt-14 lg:grid-cols-12 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-7">
          <Eyebrow>{site.name}</Eyebrow>
          <h1 id="hero-title" className="text-h1 mt-5 text-ink">
            Reliable Plumbing Services in <span className="text-brand-600">New York City</span>
          </h1>
          <p className="text-lead mt-6 max-w-xl text-muted">
            Repairs, installations and emergency service for homes and businesses in all five boroughs, from a leaking
            faucet to a full bathroom rough-in.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={`#${REQUEST_ANCHOR}`} size="lg" icon="arrow-right">
              {ctaLabels.primary}
            </ButtonLink>
            {site.phone ? (
              <ButtonLink href={`tel:${site.phone.e164}`} size="lg" variant="dark" icon="phone" iconPosition="start">
                {ctaLabels.call}
              </ButtonLink>
            ) : null}
            <ButtonLink href="/services" size="lg" variant="outline">
              Explore Our Services
            </ButtonLink>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-6 border-t border-line pt-8">
            <p className="flex items-center gap-4">
              <span className="font-display text-[3.25rem] font-extrabold leading-none tracking-[-0.04em] text-ink">
                15<span className="text-brand-500">+</span>
              </span>
              <span className="text-sm font-semibold leading-snug text-ink">
                Years of Plumbing
                <br />
                Experience
              </span>
            </p>
            <div aria-hidden="true" className="hidden h-12 w-px bg-line sm:block" />
            <p className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="map-pin" className="size-6" />
              </span>
              <span className="text-sm leading-snug">
                <span className="block font-semibold text-ink">Based in {site.neighborhood}, Brooklyn</span>
                <span className="mt-0.5 block text-muted">{addressLine}</span>
              </span>
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <span aria-hidden="true" className="pointer-events-none absolute -inset-3 hidden lg:block">
            <span className="absolute left-0 top-0 size-7 border-l-2 border-t-2 border-brand-500" />
            <span className="absolute right-0 top-0 size-7 border-r-2 border-t-2 border-brand-500" />
            <span className="absolute bottom-0 left-0 size-7 border-b-2 border-l-2 border-brand-500" />
            <span className="absolute bottom-0 right-0 size-7 border-b-2 border-r-2 border-brand-500" />
          </span>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-900 shadow-lift sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              loading="eager"
              fetchPriority="high"
              placeholder="blur"
              sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw"
              className="object-cover [animation:hero-zoom_1.8s_var(--ease-out-soft)_both] transition-transform duration-700 ease-out-soft motion-safe:group-hover:scale-[1.035]"
              style={{ objectPosition: photo.position }}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy-950/50 via-transparent to-transparent" />
          </div>

          <div className="relative -mt-10 mx-4 rounded-xl bg-white p-5 shadow-lift ring-1 ring-line sm:mx-6 sm:max-w-sm lg:absolute lg:-bottom-8 lg:-left-8 lg:mx-0 lg:mt-0">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-600 text-white">
                <Icon name="camera" className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">From our own job site</p>
                <p className="mt-1 font-semibold text-ink">Boiler room with a radiant heating manifold</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
