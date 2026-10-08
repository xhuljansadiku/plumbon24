'use client'

import { useEffect, useId, useLayoutEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'

/**
 * Full-screen mobile menu built on the native <dialog> element:
 * focus is trapped, Escape closes it and the rest of the page is inert while it's open.
 * Content is rendered on the server and passed in as children.
 */
export function MobileMenu({ logo, children }: { logo: ReactNode; children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  // Menu links are only added to the page the first time the menu opens (keeps the DOM small).
  const [mounted, setMounted] = useState(false)
  const dialogId = useId()

  const openMenu = () => {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return
    dialog.showModal()
    document.documentElement.dataset.menuOpen = 'true'
    closeRef.current?.focus()
    setMounted(true)
    setIsOpen(true)
  }

  const closeMenu = () => dialogRef.current?.close()

  const onClose = () => {
    delete document.documentElement.dataset.menuOpen
    setIsOpen(false)
  }

  // Close after a link is chosen (the header persists across client-side navigations).
  const onDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if ((event.target as HTMLElement).closest('a')) closeMenu()
  }

  // Close automatically if the viewport grows to the desktop layout.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) dialogRef.current?.close()
    }
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  // Never leave the page scroll-locked if this component unmounts while open.
  useLayoutEffect(() => {
    return () => {
      delete document.documentElement.dataset.menuOpen
    }
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        className="grid size-11 place-items-center rounded-[10px] border border-line-strong text-ink transition-colors hover:border-ink lg:hidden"
      >
        <span className="sr-only">Open menu</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <path d="M4 6.5h16M4 12h16M4 17.5h16" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-label="Menu"
        onClose={onClose}
        onClick={onDialogClick}
        className="mobile-menu fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-white p-0 text-ink lg:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[4.25rem] shrink-0 items-center justify-between border-b border-line px-4 sm:px-6">
            {logo}
            <button
              ref={closeRef}
              type="button"
              onClick={closeMenu}
              className="grid size-11 place-items-center rounded-[10px] border border-line-strong text-ink transition-colors hover:border-ink"
            >
              <span className="sr-only">Close menu</span>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-10 pt-4 sm:px-6">{mounted ? children : null}</div>
        </div>
      </dialog>
    </>
  )
}
