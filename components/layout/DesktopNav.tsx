'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState, type MouseEvent, type PointerEvent, type ReactNode } from 'react'
import type { NavItem } from '@/lib/navigation'
import { cn } from '@/lib/utils'

export function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

const linkClasses = (active: boolean) =>
  cn(
    'relative inline-flex h-10 items-center rounded-md px-3 text-[0.9375rem] font-semibold transition-colors',
    'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:origin-left after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300',
    active ? 'text-ink after:scale-x-100' : 'text-ink/75 after:scale-x-0 hover:text-ink hover:after:scale-x-100',
  )

/**
 * Desktop navigation with a "Services" mega menu.
 * The panel is rendered on the server (passed in as `servicesMenu`) and added to the page the first time it opens.
 */
export function DesktopNav({ items, servicesMenu }: { items: NavItem[]; servicesMenu: ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const panelId = useId()
  const itemRef = useRef<HTMLLIElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
  }

  const openPanel = () => {
    setMounted(true)
    setOpen(true)
  }

  const togglePanel = () => {
    setMounted(true)
    setOpen((value) => !value)
  }

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: globalThis.PointerEvent) => {
      if (!itemRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => cancelClose, [])

  const onPointerEnter = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return
    cancelClose()
    openPanel()
  }

  const onPointerLeave = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(false), 180)
  }

  // Close after choosing a link inside the panel.
  const onPanelClick = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest('a')) setOpen(false)
  }

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const active = isActivePath(pathname, item.href)

          if (item.href !== '/services') {
            return (
              <li key={item.href}>
                <Link href={item.href} className={linkClasses(active)} aria-current={active ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            )
          }

          return (
            <li
              key={item.href}
              ref={itemRef}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
              }}
            >
              <div className="flex items-center">
                <Link href={item.href} className={linkClasses(active)} aria-current={active ? 'page' : undefined}>
                  {item.label}
                </Link>
                <button
                  ref={toggleRef}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={togglePanel}
                  className="-ml-2 grid size-8 place-items-center rounded-md text-ink/60 transition-colors hover:text-ink"
                >
                  <span className="sr-only">{open ? 'Hide' : 'Show'} the services menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={cn('size-4 transition-transform duration-200', open && 'rotate-180')}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              <div id={panelId} hidden={!open} onClick={onPanelClick} className="mega-panel absolute inset-x-0 top-full">
                {mounted ? servicesMenu : null}
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
