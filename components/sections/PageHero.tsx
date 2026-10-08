import Image from 'next/image'
import type { ReactNode } from 'react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Container } from '@/components/ui/Layout'
import { Eyebrow } from '@/components/ui/SectionHeading'
import type { SiteImage } from '@/lib/images'
import type { Crumb } from '@/lib/seo'

/** Dark hero used by inner pages: breadcrumbs, H1, intro, actions and an optional framed photo. */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  image,
  actions,
  footer,
}: {
  eyebrow: ReactNode
  title: ReactNode
  intro: ReactNode
  crumbs: Crumb[]
  image?: SiteImage
  actions?: ReactNode
  footer?: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint-dark fade-edges" />
      <div aria-hidden="true" className="absolute -left-48 -top-48 -z-10 size-[34rem] rounded-full bg-brand-600/15 blur-3xl" />
      <Container className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
        <Breadcrumbs tone="dark" items={crumbs} />
        <div className={image ? 'mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-12' : 'mt-10 lg:mt-14'}>
          <div className={image ? 'lg:col-span-7' : 'max-w-4xl'}>
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            <h1 className="text-h1 mt-5 text-white">{title}</h1>
            <div className="text-lead mt-6 max-w-2xl text-white/75">{intro}</div>
            {actions ? <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
            {footer ? <div className="mt-10">{footer}</div> : null}
          </div>
          {image ? (
            <div className="lg:col-span-5">
              <div className="relative">
                <span aria-hidden="true" className="pointer-events-none absolute -inset-3 hidden lg:block">
                  <span className="absolute left-0 top-0 size-6 border-l-2 border-t-2 border-brand-400" />
                  <span className="absolute right-0 top-0 size-6 border-r-2 border-t-2 border-brand-400" />
                  <span className="absolute bottom-0 left-0 size-6 border-b-2 border-l-2 border-brand-400" />
                  <span className="absolute bottom-0 right-0 size-6 border-b-2 border-r-2 border-brand-400" />
                </span>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-white/10 lg:aspect-[5/6]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="eager"
                    fetchPriority="high"
                    sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    style={image.position ? { objectPosition: image.position } : undefined}
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
