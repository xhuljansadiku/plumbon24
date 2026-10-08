import type { Metadata } from 'next'
import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Container } from '@/components/ui/Layout'
import { featuredServices, serviceHref } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-mist py-20 sm:py-28" aria-labelledby="not-found-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint fade-edges" />
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-eyebrow text-brand-700">Error 404</p>
          <h1 id="not-found-title" className="text-h1 mt-5 text-ink">
            Looks Like This Pipe Went Somewhere Else.
          </h1>
          <p className="text-lead mt-6 max-w-lg text-muted">The page you’re looking for isn’t available.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" size="lg" icon="arrow-right">
              Back Home
            </ButtonLink>
            <ButtonLink href="/services" size="lg" variant="outline">
              View Services
            </ButtonLink>
          </div>
          <nav aria-labelledby="popular-services" className="mt-12 border-t border-line pt-8">
            <h2 id="popular-services" className="text-eyebrow text-[0.75rem] text-subtle">
              Popular services
            </h2>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link href={serviceHref(service.slug)} className="group inline-flex items-center gap-2.5 font-medium text-ink hover:text-brand-700">
                    <Icon name={service.icon} className="size-5 text-brand-600" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="lg:col-span-6">
          <DisconnectedPipe />
        </div>
      </Container>
    </section>
  )
}

/** Two pipe runs that don't line up, with a drop escaping — drawn in the logo's pipe style. */
function DisconnectedPipe() {
  return (
    <svg aria-hidden="true" viewBox="0 0 560 420" className="mx-auto w-full max-w-lg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke="#111827" strokeWidth="18">
        <path d="M20 330h150a40 40 0 0 0 40-40V160a40 40 0 0 1 40-40h80" />
        <path d="M410 182h130" />
      </g>
      <g stroke="#111827" strokeWidth="10">
        <path d="M80 312v36M192 222h36M300 102v36M434 164v36M520 164v36" />
      </g>
      <path d="M330 104v32" stroke="#111827" strokeWidth="12" />
      <path d="M352 196c11 13 17 23 17 30a17 17 0 0 1-34 0c0-7 6-17 17-30Z" fill="#027ec6" />
      <path d="M368 262c8 10 12 17 12 22a12 12 0 0 1-24 0c0-5 4-12 12-22Z" fill="#027ec6" opacity=".55" />
      <g stroke="#027ec6" strokeWidth="3" opacity=".6">
        <path d="M360 84v-16M394 102l12-12M378 92l7-14" />
      </g>
      <text x="476" y="276" textAnchor="middle" fontFamily="var(--font-manrope), sans-serif" fontWeight="800" fontSize="64" fill="#027ec6">
        ?
      </text>
    </svg>
  )
}
