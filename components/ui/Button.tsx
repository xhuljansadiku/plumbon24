import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { Icon, type IconName } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'dark' | 'outline' | 'outline-light' | 'light'
type Size = 'md' | 'lg'

const base =
  'inline-flex select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-[10px] font-semibold tracking-[-0.005em] transition duration-200 ease-out-soft disabled:pointer-events-none disabled:opacity-60'

const sizes: Record<Size, string> = {
  md: 'min-h-12 px-5 text-[0.9375rem]',
  lg: 'min-h-14 px-7 text-base',
}

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white shadow-cta hover:-translate-y-px hover:bg-brand-700 active:translate-y-0',
  dark: 'bg-ink-900 text-white hover:-translate-y-px hover:bg-ink hover:shadow-lift active:translate-y-0',
  outline: 'border border-ink/20 bg-white/70 text-ink hover:border-ink hover:bg-ink hover:text-white',
  'outline-light': 'border border-white/35 text-white hover:border-white hover:bg-white hover:text-ink',
  light: 'bg-white text-ink hover:-translate-y-px hover:bg-mist-200 active:translate-y-0',
}

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, sizes[size], variants[variant], className)
}

type ButtonContentProps = {
  children: ReactNode
  icon?: IconName
  iconPosition?: 'start' | 'end'
}

function ButtonContent({ children, icon, iconPosition = 'end' }: ButtonContentProps) {
  const glyph = icon ? (
    <Icon
      name={icon}
      className={cn('size-[1.15em]', icon === 'arrow-right' && 'transition-transform duration-200 group-hover:translate-x-0.5')}
      strokeWidth={2}
    />
  ) : null

  return (
    <>
      {iconPosition === 'start' && glyph}
      <span>{children}</span>
      {iconPosition === 'end' && glyph}
    </>
  )
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'children'> &
  ButtonContentProps & {
    href: string
    variant?: Variant
    size?: Size
  }

/** A link styled as a button. Uses next/link for internal routes and <a> for tel:, mailto: and external URLs. */
export function ButtonLink({ href, variant, size, icon, iconPosition, className, children, ...props }: ButtonLinkProps) {
  const classes = cn('group', buttonClasses({ variant, size, className }))
  const content = (
    <ButtonContent icon={icon} iconPosition={iconPosition}>
      {children}
    </ButtonContent>
  )

  if (/^(tel:|mailto:|https?:)/.test(href)) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(props as ComponentProps<'a'>)}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  )
}

type ButtonProps = ComponentProps<'button'> &
  ButtonContentProps & {
    variant?: Variant
    size?: Size
  }

export function Button({ variant, size, icon, iconPosition, className, children, type = 'button', ...props }: ButtonProps) {
  return (
    <button type={type} className={cn('group', buttonClasses({ variant, size, className }))} {...props}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  )
}

/** Inline "Learn more →" style link. */
export function ArrowLink({
  href,
  children,
  tone = 'light',
  className,
}: {
  href: string
  children: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline',
        tone === 'dark' ? 'text-brand-300 hover:text-white' : 'text-brand-700 hover:text-brand-800',
        className,
      )}
    >
      {children}
      <Icon name="arrow-right" className="size-[1.1em] transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
    </Link>
  )
}
