'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type MouseEvent } from 'react'
import type { PhoneNumber } from '@/lib/site'
import { cn } from '@/lib/utils'

const FORM_ID = 'request-service'

/**
 * Sticky bottom bar on phones and tablets: "Request Service" plus "Call Now" once a phone number exists
 * (otherwise an email shortcut). Scrolls to the request form when the current page has one.
 *
 * While the page's own hero buttons (`[data-hero-cta]`) are on screen the bar slides away, so the same
 * two actions are never shown twice at once.
 */
export function MobileActionBar({ phone, email }: { phone: PhoneNumber | null; email: string }) {
  const pathname = usePathname()
  // Start hidden: most pages open with their hero buttons in view, so this avoids a flash of the bar.
  const [heroCtaInView, setHeroCtaInView] = useState(true)

  useEffect(() => {
    // Hidden (preserved) routes stay in the DOM, so only watch the hero of the visible page.
    const target = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-cta]')).find(
      (element) => element.checkVisibility?.() !== false && element.offsetParent !== null,
    )
    if (!target) {
      // No hero buttons on this page: show the bar right after the first paint.
      const frame = requestAnimationFrame(() => setHeroCtaInView(false))
      return () => cancelAnimationFrame(frame)
    }
    const observer = new IntersectionObserver(([entry]) => setHeroCtaInView(entry.isIntersecting))
    observer.observe(target)
    return () => observer.disconnect()
  }, [pathname])

  if (pathname === '/contact') return null

  const goToForm = (event: MouseEvent<HTMLAnchorElement>) => {
    const form = document.getElementById(FORM_ID)
    // Hidden (preserved) routes stay in the DOM, so only use a form that is actually visible.
    if (form && form.checkVisibility?.() !== false && form.offsetParent !== null) {
      event.preventDefault()
      form.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
      form.querySelector<HTMLElement>('input, select, textarea')?.focus({ preventScroll: true })
    }
  }

  return (
    <div
      inert={heroCtaInView}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_32px_-20px_rgb(17_24_39/0.35)] backdrop-blur-md transition-transform duration-300 ease-out-soft lg:hidden',
        heroCtaInView && 'translate-y-full',
      )}
    >
      <div className="mx-auto flex max-w-xl gap-3">
        <Link
          href={`/contact#${FORM_ID}`}
          onClick={goToForm}
          className="button-sheen inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-[10px] bg-brand-600 px-5 font-semibold text-white shadow-cta transition duration-200 motion-safe:hover:-translate-y-px hover:bg-brand-700 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.985]"
        >
          <span className="relative z-10">Request Service</span>
        </Link>
        {phone ? (
          <a
            href={`tel:${phone.e164}`}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-[10px] bg-ink-900 px-5 font-semibold text-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6.6 3.5h2.2c.5 0 .9.3 1 .8l.8 3.4c.1.4-.1.9-.4 1.1L8.4 10a12.5 12.5 0 0 0 5.6 5.6l1.2-1.8c.2-.4.7-.5 1.1-.4l3.4.8c.5.1.8.5.8 1v2.2a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.6 5.6a2 2 0 0 1 2-2.1Z" />
            </svg>
            Call Now
          </a>
        ) : (
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] border border-line-strong px-4 font-semibold text-ink"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="m3.5 7 8.5 6 8.5-6" />
            </svg>
            Email
          </a>
        )}
      </div>
    </div>
  )
}
