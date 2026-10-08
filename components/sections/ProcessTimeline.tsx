import type { TitledText } from '@/lib/services/types'
import { cn, indexLabel } from '@/lib/utils'

/**
 * Step-by-step process drawn as a pipe run with couplings, echoing the pipework in the logo.
 * Horizontal on desktop, vertical on mobile. The final joint is filled blue — water flowing again.
 */
export function ProcessTimeline({ steps, tone = 'light' }: { steps: TitledText[]; tone?: 'light' | 'mist' }) {
  const columns = steps.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
  const inset = steps.length === 3 ? 'lg:left-[calc(16.667%-11px)] lg:right-[calc(16.667%-11px)]' : 'lg:left-[calc(12.5%-12px)] lg:right-[calc(12.5%-12px)]'

  return (
    <ol className={cn('relative grid gap-12 lg:gap-8', columns)}>
      {/* The pipe */}
      <span
        aria-hidden="true"
        className={cn('absolute bottom-10 left-[25px] top-10 w-2 rounded-full bg-ink lg:bottom-auto lg:top-[25px] lg:h-2 lg:w-auto', inset)}
      />
      {steps.map((step, index) => {
        const last = index === steps.length - 1
        return (
          <li key={step.title} className="reveal relative flex gap-6 lg:flex-col lg:items-center lg:gap-7 lg:text-center">
            <span aria-hidden="true" className="relative grid size-[58px] shrink-0 place-items-center">
              {/* Couplings on either side of the joint */}
              <span className="absolute left-1/2 top-0 h-1.5 w-5 -translate-x-1/2 -translate-y-1 rounded-[2px] bg-ink lg:left-0 lg:top-1/2 lg:h-5 lg:w-1.5 lg:-translate-x-1 lg:-translate-y-1/2" />
              <span className="absolute bottom-0 left-1/2 h-1.5 w-5 -translate-x-1/2 translate-y-1 rounded-[2px] bg-ink lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:h-5 lg:w-1.5 lg:-translate-y-1/2 lg:translate-x-1" />
              <span
                className={cn(
                  'relative grid size-[58px] place-items-center rounded-full border-[5px] font-display text-lg font-extrabold tabular-nums',
                  last
                    ? 'border-brand-600 bg-brand-600 text-white shadow-cta'
                    : cn('border-ink text-brand-600', tone === 'mist' ? 'bg-mist' : 'bg-white'),
                )}
              >
                {indexLabel(index)}
              </span>
            </span>
            <div className="pt-1 lg:pt-0">
              <p className="sr-only">Step {index + 1}:</p>
              <h3 className="text-h4 text-ink">{step.title}</h3>
              <p className="mt-2.5 text-muted lg:mx-auto lg:max-w-[17rem]">{step.text}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
