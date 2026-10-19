import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Container({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: ElementType
  className?: string
  children: ReactNode
}) {
  return <Tag className={cn('mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8', className)}>{children}</Tag>
}

export type SectionTone = 'white' | 'mist' | 'navy' | 'black'

const tones: Record<SectionTone, string> = {
  white: 'bg-white text-ink',
  mist: 'bg-mist text-ink',
  navy: 'bg-navy-950 text-white',
  black: 'bg-ink-900 text-white',
}

export function Section({
  tone = 'white',
  id,
  labelledBy,
  className,
  children,
}: {
  tone?: SectionTone
  id?: string
  labelledBy?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('relative isolate py-16 sm:py-24 lg:py-28', tones[tone], className)}>
      {children}
    </section>
  )
}

export function isDarkTone(tone: SectionTone) {
  return tone === 'navy' || tone === 'black'
}
