import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Container, Section, type SectionTone } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faqSchema } from '@/lib/seo'
import type { Faq } from '@/lib/services'

/** Accessible accordion built on <details>/<summary> — works without JavaScript. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="faq-item group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left">
            <span className="font-display text-[1.0625rem] font-bold leading-snug tracking-tight text-ink sm:text-lg">{faq.question}</span>
            <span
              aria-hidden="true"
              className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition duration-300 group-open:rotate-45 group-open:border-brand-600 group-open:bg-brand-600 group-open:text-white"
            >
              <Icon name="plus" className="size-4" strokeWidth={2} />
            </span>
          </summary>
          <p className="pb-6 pr-10 leading-relaxed text-muted sm:pr-14">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function FaqSection({
  faqs,
  title = 'Frequently Asked Questions',
  lead = 'Straight answers to common questions about our plumbing services.',
  tone = 'white',
  id = 'faq-title',
}: {
  faqs: Faq[]
  title?: string
  lead?: string
  tone?: SectionTone
  id?: string
}) {
  if (!faqs.length) return null

  return (
    <Section tone={tone} labelledBy={id}>
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="FAQ" title={title} lead={lead} id={id} />
            <p className="mt-8 text-muted">
              Have a different question?{' '}
              <Link href="/contact" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={faqs} />
        </div>
      </Container>
      <JsonLd data={faqSchema(faqs)} />
    </Section>
  )
}
