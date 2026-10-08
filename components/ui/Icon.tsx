import type { SVGProps } from 'react'
import { ICON_SPRITE_URL, type IconName } from '@/lib/icons'
import { cn } from '@/lib/utils'

export type { IconName } from '@/lib/icons'

type IconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & {
  name: IconName
  /** Accessible name. Omit for decorative icons (the default). */
  title?: string
}

/** Renders an icon from the shared sprite (see lib/icons.ts). */
export function Icon({ name, title, className, strokeWidth = 1.75, fill = 'none', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-6 shrink-0', className)}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <use href={`${ICON_SPRITE_URL}#${name}`} />
    </svg>
  )
}

/** The brand water drop, filled — used as a small accent, echoing the logo. */
export function BrandDrop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 22" aria-hidden="true" focusable="false" className={cn('shrink-0', className)}>
      <path d="M8 0c4.2 5.3 8 9.6 8 13.7A8 8 0 0 1 0 13.7C0 9.6 3.8 5.3 8 0Z" fill="currentColor" />
      <path d="M4.6 14.2a3.5 3.5 0 0 0 2.6 3.6" fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}
