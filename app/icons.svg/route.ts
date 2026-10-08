import { buildIconSprite } from '@/lib/icons'

/** The icon sprite, prerendered at build time. URLs are versioned, so it can be cached for a year. */
export async function GET() {
  return new Response(buildIconSprite(), {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
