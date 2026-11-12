'use client'

import { useEffect } from 'react'
import { trackPhoneClick } from '@/lib/analytics'

/**
 * Sends `phone_click` for every tel: link on the site. One delegated listener on the document,
 * mounted in the root layout, so it covers links on every page and survives client-side navigation.
 */
export function PhoneClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return
      const link = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]')
      if (!link) return
      const number = decodeURIComponent(link.getAttribute('href')!.slice(4)).trim()
      trackPhoneClick(number)
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
