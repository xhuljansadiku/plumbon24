import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/brand/plumbon24-logo.png'
import { cn } from '@/lib/utils'

/**
 * The official PLUMBON24 logo, unaltered (white background removed so it sits on any light surface).
 * Never stretch it: set a height and let the width follow.
 */
export function Logo({
  className,
  imageClassName = 'h-11 w-auto lg:h-[3.4rem]',
  sizes = '(min-width: 1024px) 140px, 112px',
  linked = true,
  eager = false,
}: {
  className?: string
  imageClassName?: string
  sizes?: string
  linked?: boolean
  eager?: boolean
}) {
  const image = (
    <Image
      src={logo}
      alt={linked ? 'PLUMBON24 Mechanical Inc – home' : 'PLUMBON24 Mechanical Inc'}
      sizes={sizes}
      quality={90}
      loading={eager ? 'eager' : undefined}
      className={imageClassName}
    />
  )

  if (!linked) return <span className={cn('inline-flex shrink-0', className)}>{image}</span>

  return (
    <Link href="/" className={cn('inline-flex shrink-0 rounded-md', className)}>
      {image}
    </Link>
  )
}

/** Logo on a white plate, for dark backgrounds (the logo itself is never recolored). */
export function LogoPlate({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex rounded-xl bg-white px-4 py-3 shadow-[0_8px_24px_-12px_rgb(0_0_0/0.5)]', className)}>
      <Logo linked={false} imageClassName="h-12 w-auto" sizes="128px" />
    </span>
  )
}
