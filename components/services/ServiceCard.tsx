import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { serviceHref, type Service } from '@/lib/services'
import { cn, indexLabel } from '@/lib/utils'

/**
 * Service card. The whole card is clickable through a stretched link on the title,
 * so screen readers hear one meaningful link instead of repeated "Learn more" links.
 */
export function ServiceCard({
  service,
  index,
  headingLevel: Heading = 'h3',
  className,
}: {
  service: Service
  index?: number
  headingLevel?: 'h2' | 'h3'
  className?: string
}) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 ease-out-soft motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 hover:border-brand-500/40 hover:shadow-lift focus-within:border-brand-500/40 focus-within:shadow-lift sm:p-7',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-[3px] origin-left scale-x-0 rounded-b-full bg-brand-500 transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
      />
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-14 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600 motion-safe:group-hover:scale-105">
          <Icon name={service.icon} className="size-7" />
        </span>
        {index !== undefined ? (
          <span className="font-display text-sm font-bold tabular-nums tracking-[0.12em] text-subtle transition-colors duration-300 group-hover:text-brand-600">{indexLabel(index)}</span>
        ) : null}
      </div>
      <Heading className="mt-7 font-display text-[1.3125rem] font-bold leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-brand-700">
        <Link
          href={serviceHref(service.slug)}
          className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:outline-3 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand-500"
        >
          {service.title}
        </Link>
      </Heading>
      <p className="mt-3 text-[0.96875rem] leading-relaxed text-muted">{service.summary}</p>
      <span aria-hidden="true" className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-brand-700">
        Learn More
        <Icon name="arrow-right" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
      </span>
    </article>
  )
}
