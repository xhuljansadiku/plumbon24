'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

/** Scroll distance (px) after which the button appears: roughly below the hero. */
const SHOW_AFTER = 800

/**
 * Floating "Back to top" button. Hidden (and out of the tab order) near the top of the page.
 * On phones it sits above the sticky action bar, which every page except /contact shows.
 */
export function BackToTop() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const aboveActionBar = pathname !== '/contact'

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setVisible(window.scrollY > SHOW_AFTER)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    // Keyboard and screen reader users continue from the top of the content, not from the button.
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      inert={!visible}
      className={cn(
        'fixed right-4 z-40 grid size-12 place-items-center rounded-full bg-ink-900 text-white shadow-lift ring-1 ring-white/15 transition duration-300 ease-out-soft hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300 sm:right-6 lg:bottom-6',
        aboveActionBar ? 'bottom-[calc(5.75rem+env(safe-area-inset-bottom))]' : 'bottom-[max(1.5rem,env(safe-area-inset-bottom))]',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <Icon name="arrow-up" className="size-5" strokeWidth={2} />
    </button>
  )
}
