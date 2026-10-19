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
        // Phones: compact row (icon beside the text). From sm: the full vertical card.
        'group relative grid h-full grid-cols-[auto_1fr] gap-x-4 rounded-2xl border border-line bg-white p-5 transition duration-300 ease-out-soft motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 hover:border-brand-500/40 hover:shadow-lift focus-within:border-brand-500/40 focus-within:shadow-lift sm:flex sm:flex-col sm:p-7',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-[3px] origin-left scale-x-0 rounded-b-full bg-brand-500 transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
      />
      <div className="row-span-2 flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600 motion-safe:group-hover:scale-105 sm:size-14">
          <Icon name={service.icon} className="size-6 sm:size-7" />
        </span>
        {index !== undefined ? (
          <span className="hidden font-display text-sm font-bold tabular-nums tracking-[0.12em] text-subtle transition-colors duration-300 group-hover:text-brand-600 sm:inline">{indexLabel(index)}</span>
        ) : null}
      </div>
      <Heading className="col-start-2 self-center font-display sm:self-auto text-[1.125rem] font-bold leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-brand-700 sm:mt-7 sm:text-[1.3125rem]">
        <Link
          href={serviceHref(service.slug)}
          className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:outline-3 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand-500"
        >
          {service.title}
        </Link>
      </Heading>
      <p className="col-start-2 mt-1 text-[0.9375rem] leading-relaxed text-muted sm:mt-3 sm:text-[0.96875rem]">{service.summary}</p>
      <span aria-hidden="true" className="mt-auto hidden items-center gap-2 pt-7 text-sm font-semibold text-brand-700 sm:flex">
        Learn More
        <Icon name="arrow-right" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
      </span>
    </article>
  )
}
