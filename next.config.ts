import type { NextConfig } from 'next'

/**
 * Conservative security headers that work with fully static pages.
 * (A nonce-based Content-Security-Policy would force every page to render per request.)
 */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Content-Security-Policy', value: "base-uri 'self'; form-action 'self'; frame-ancestors 'self'; object-src 'none'" },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
]

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  /** Service URLs renamed from "-plumbing" to "-piping" (2026-11-10); old links keep working. */
  async redirects() {
    return [
      ['emergency-plumbing', 'emergency-piping'],
      ['bathroom-plumbing', 'bathroom-piping'],
      ['kitchen-plumbing', 'kitchen-piping'],
      ['residential-plumbing', 'residential-piping'],
      ['commercial-plumbing', 'commercial-piping'],
      ['plumbing-installation', 'piping-installation'],
      ['plumbing-maintenance', 'piping-maintenance'],
    ].map(([from, to]) => ({ source: `/services/${from}`, destination: `/services/${to}`, permanent: true }))
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
}

export default nextConfig
