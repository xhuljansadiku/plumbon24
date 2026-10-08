import type { ReactNode } from 'react'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Layout'
import { site } from '@/lib/site'

const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' })

/** Shared layout for the Privacy Policy, Terms of Service and Accessibility Statement. */
export function LegalPage({ title, intro, path, children }: { title: string; intro: string; path: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={<p>{intro}</p>} crumbs={[{ name: title, path }]} />
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm text-subtle">Last updated: {formatter.format(new Date(`${site.lastUpdated}T00:00:00Z`))}</p>
          <div className="prose-legal mt-6">{children}</div>
        </Container>
      </section>
    </>
  )
}
