import type { ReactNode } from 'react'
import { Icon, type IconName } from '@/components/ui/Icon'
import { addressLine, mapsLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

type Tone = 'light' | 'dark'

/** The business phone number, or the clearly marked placeholder until a real number is configured. */
export function PhoneDisplay({ tone = 'light', className }: { tone?: Tone; className?: string }) {
  if (site.phone) {
    return (
      <a href={`tel:${site.phone.e164}`} className={cn('font-semibold underline-offset-4 hover:underline', className)}>
        {site.phone.display}
      </a>
    )
  }

  if (!site.showPhonePlaceholder) return null

  return (
    <span className={cn('font-semibold tracking-wide', tone === 'dark' ? 'text-white/60' : 'text-subtle', className)}>
      [PHONE NUMBER]
    </span>
  )
}

function DetailRow({ icon, label, tone, children }: { icon: IconName; label: string; tone: Tone; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span
        className={cn(
          'grid size-11 shrink-0 place-items-center rounded-lg',
          tone === 'dark' ? 'bg-white/8 text-brand-300 ring-1 ring-white/10' : 'bg-brand-50 text-brand-600',
        )}
      >
        <Icon name={icon} className="size-5" />
      </span>
      <div className="min-w-0">
        <p className={cn('text-xs font-semibold uppercase tracking-[0.12em]', tone === 'dark' ? 'text-white/55' : 'text-subtle')}>{label}</p>
        <div className={cn('mt-1 break-words', tone === 'dark' ? 'text-white' : 'text-ink')}>{children}</div>
      </div>
    </li>
  )
}

/** Name, address, phone, email and hours — the NAP block, identical everywhere it appears. */
export function ContactDetails({ tone = 'light', showName = true, className }: { tone?: Tone; showName?: boolean; className?: string }) {
  const showPhone = Boolean(site.phone) || site.showPhonePlaceholder

  return (
    <div className={className}>
      {showName ? (
        <p className={cn('font-display text-lg font-extrabold tracking-tight', tone === 'dark' ? 'text-white' : 'text-ink')}>{site.name}</p>
      ) : null}
      <ul className={cn('grid gap-5', showName && 'mt-6')}>
        <DetailRow icon="map-pin" label="Address" tone={tone}>
          <address className="not-italic">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.postalCode}
            <br />
            {site.address.country}
          </address>
          <a
            href={mapsLinks.directions}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'mt-2 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline',
              tone === 'dark' ? 'text-brand-300' : 'text-brand-700',
            )}
          >
            Get directions
            <Icon name="arrow-up-right" className="size-3.5" strokeWidth={2} />
            <span className="sr-only">to {addressLine} (opens Google Maps in a new tab)</span>
          </a>
        </DetailRow>
        {showPhone ? (
          <DetailRow icon="phone" label="Phone" tone={tone}>
            <PhoneDisplay tone={tone} />
          </DetailRow>
        ) : null}
        <DetailRow icon="mail" label="Email" tone={tone}>
          <a href={`mailto:${site.email}`} className="font-semibold underline-offset-4 hover:underline">
            {site.email}
          </a>
        </DetailRow>
        <DetailRow icon="clock" label="Hours" tone={tone}>
          <p>{site.hours.office}</p>
          {site.hours.emergency ? (
            <p className={cn('mt-0.5 font-semibold', tone === 'dark' ? 'text-brand-300' : 'text-brand-700')}>{site.hours.emergency}</p>
          ) : null}
        </DetailRow>
      </ul>
    </div>
  )
}
