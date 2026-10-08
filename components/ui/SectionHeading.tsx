import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'light' | 'dark'

/** Small uppercase label with a pipe-and-coupling mark, echoing the logo's pipework. */
export function Eyebrow({ children, tone = 'light', className }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <p className={cn('text-eyebrow inline-flex items-center gap-3', tone === 'dark' ? 'text-brand-300' : 'text-brand-700', className)}>
      <span aria-hidden="true" className="relative inline-block h-[2px] w-7 rounded-full bg-current">
        <span className="absolute -right-px top-1/2 h-2.5 w-[3px] -translate-y-1/2 rounded-[1px] bg-current" />
      </span>
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = 'left',
  tone = 'light',
  as: Heading = 'h2',
  className,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  id?: string
  align?: 'left' | 'center'
  tone?: Tone
  as?: 'h1' | 'h2'
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <Eyebrow tone={tone} className={cn('mb-4', align === 'center' && 'justify-center')}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Heading id={id} className={cn(Heading === 'h1' ? 'text-h1' : 'text-h2', tone === 'dark' ? 'text-white' : 'text-ink')}>
        {title}
      </Heading>
      {lead ? <p className={cn('text-lead mt-5', tone === 'dark' ? 'text-white/75' : 'text-muted')}>{lead}</p> : null}
    </div>
  )
}
