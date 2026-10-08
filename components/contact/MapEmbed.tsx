'use client'

import { useState } from 'react'

/**
 * Click-to-load Google Map. Nothing from Google loads until the visitor asks for it,
 * which keeps pages fast and avoids third-party cookies by default.
 * Optional: set NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY (Maps Embed API, restricted by HTTP referrer).
 */
export function MapEmbed({ query, label, directionsUrl }: { query: string; label: string; directionsUrl: string }) {
  const [active, setActive] = useState(false)
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY
  const src = key
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${encodeURIComponent(query)}`
    : `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-mist sm:aspect-[16/10]">
      {active ? (
        <iframe
          src={src}
          title={`Map showing ${label}`}
          className="absolute inset-0 size-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <>
          <MapArtwork />
          <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 p-4 shadow-card backdrop-blur sm:inset-x-auto sm:left-4 sm:bottom-4 sm:max-w-sm sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">Our location</p>
            <p className="mt-1 font-semibold text-ink">{label}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setActive(true)}
                className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-ink-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-ink"
              >
                Show interactive map
              </button>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-line-strong px-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                Get directions
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">The interactive map is provided by Google Maps.</p>
          </div>
        </>
      )}
    </div>
  )
}

/** Decorative, abstract street grid with a location pin — not a real map. */
function MapArtwork() {
  return (
    <svg aria-hidden="true" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      <rect width="800" height="500" fill="#eef2f7" />
      <path d="M0 0h230L110 500H0Z" fill="#d8edfa" />
      <g stroke="#ffffff" strokeWidth="14" strokeLinecap="round" opacity=".95">
        {Array.from({ length: 9 }, (_, i) => (
          <path key={`a${i}`} d={`M${150 + i * 85} -40 L${40 + i * 85} 540`} />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <path key={`b${i}`} d={`M60 ${30 + i * 75} L860 ${-60 + i * 75}`} />
        ))}
      </g>
      <g stroke="#d3d8df" strokeWidth="2" opacity=".7">
        {Array.from({ length: 9 }, (_, i) => (
          <path key={`c${i}`} d={`M${192 + i * 85} -40 L${82 + i * 85} 540`} />
        ))}
      </g>
      <path d="M150 -40 L40 540" stroke="#ffffff" strokeWidth="26" />
      <g transform="translate(470 205)">
        <circle r="46" fill="#027ec6" opacity=".14" />
        <circle r="24" fill="#027ec6" opacity=".22" />
        <path d="M0 22s-26-22-26-43a26 26 0 1 1 52 0c0 21-26 43-26 43Z" fill="#0274b8" transform="translate(0 -26)" />
        <circle cy="-47" r="9" fill="#ffffff" />
      </g>
    </svg>
  )
}
