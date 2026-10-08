import 'server-only'

/**
 * Simple sliding-window rate limiter kept in memory.
 * Good enough for a single server. On serverless platforms each instance has its own memory,
 * so for stronger protection swap this for a shared store (e.g. Upstash Redis / Vercel KV).
 */
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const hits = new Map<string, number[]>()

export function isRateLimited(key: string | null, now = Date.now()): boolean {
  // Without a client IP (no proxy in front of the app) every visitor would share one bucket,
  // so rely on the honeypot and validation instead of blocking everyone.
  if (!key) return false

  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS)

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent)
    return true
  }

  recent.push(now)
  hits.set(key, recent)

  // Keep memory bounded.
  if (hits.size > 5000) {
    for (const [entryKey, times] of hits) {
      if (!times.some((time) => now - time < WINDOW_MS)) hits.delete(entryKey)
    }
  }

  return false
}

/** Client IP as reported by the hosting platform or reverse proxy, if any. */
export function clientKey(headers: Headers): string | null {
  const forwarded = headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return forwarded || headers.get('x-real-ip') || null
}
