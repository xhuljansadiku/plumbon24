# PLUMBON24 MECHANICAL INC — Website

Marketing website for **PLUMBON24 MECHANICAL INC**, a plumbing company at 235 43rd St, Brooklyn, NY 11232
with 15+ years of plumbing experience.

- **Stack:** Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS 4
- **Pages:** Home, Services, 20 service pages, About, Service Areas, Contact, Privacy, Terms, Accessibility, 404
- **Rendering:** every page is prerendered as static HTML (`ensureStatic = 'navigation'` in `app/layout.tsx`
  makes the build fail if a page accidentally becomes dynamic). Only `/api/contact` runs on the server.
- **Dependencies:** only Next.js, React and Tailwind. Icons are a custom SVG set; no UI or form libraries.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build (type-checks and prerenders every page)
npm run start        # serve the production build
npm run lint         # ESLint
npm run typecheck    # TypeScript
```

Copy `.env.example` to `.env.local` and fill in what you need. In development, form submissions are logged to the
terminal when no delivery provider is configured.

## Editing content

Everything is data-driven. You rarely need to touch components.

| What | Where |
| --- | --- |
| Company name, address, email, **phone**, feature flags | `lib/site.ts` |
| Services (one file per service) | `lib/services/catalog/*.ts` |
| Service order, categories, homepage and footer selection | `lib/services/index.ts` |
| Service areas / neighborhoods | `lib/service-areas.ts` |
| General and contact FAQs | `lib/faqs.ts` |
| Customer reviews and Google rating | `lib/reviews.ts` |
| Photos and alt text | `lib/images.ts` + `public/images/` (credits in `docs/IMAGE-CREDITS.md`) |
| Navigation | `lib/navigation.ts` |
| Logo, favicon, app icons | `assets/brand/` → `npm run brand:assets` |

### Common changes

- **Add the phone number:** set `phone` in `lib/site.ts`, e.g. `{ display: '(718) 555-0123', e164: '+17185550123' }`.
  "Call Now" buttons, the mobile call button, the header call button and the schema `telephone` appear automatically,
  and the `[PHONE NUMBER]` placeholder disappears.
- **Hide a service:** set `published: false` in its catalog file. It disappears from pages, menus, the sitemap, the
  structured data and the contact form.
- **Add a service:** copy a catalog file, write unique content, and add it to the `catalog` array in
  `lib/services/index.ts`.
- **Free estimates confirmed?** Set `features.freeEstimates: true` — CTA copy switches from "Request a Quote" to
  "Get a Free Estimate".
- **No emergency service?** Set `features.emergencyService: false` — the emergency page and homepage section are
  removed. The site never claims 24/7 availability.
- **Reviews:** add genuine reviews to `lib/reviews.ts`; the reviews section appears automatically. Never write or edit reviews.
- **Business hours / map coordinates / Google Business Profile:** set `openingHours`, `geo` and
  `profiles.googleBusinessProfile` in `lib/site.ts` once verified — they are added to the structured data.

## Contact form

`components/contact/ContactForm.tsx` (browser) → `app/api/contact/route.ts` (server) → `lib/contact/delivery.ts`.

- Validation is shared between browser and server (`lib/contact/schema.ts`); the server is the source of truth.
- Up to 3 photos; large phone photos are resized in the browser before upload. The server checks file signatures.
- Spam protection: honeypot field, same-origin check and a per-IP rate limit (in memory — use a shared store such as
  Upstash Redis for multi-instance deployments).
- Works without JavaScript (falls back to a normal form post and `/contact/thank-you`).
- Delivery: set **one** of `RESEND_API_KEY`, `SENDGRID_API_KEY` or `CONTACT_WEBHOOK_URL`. Requests go to
  `CONTACT_TO_EMAIL` (default `plumbon24@gmail.com`) with the customer as reply-to.
- In production, if no provider is configured, the form shows an error with the email address instead of silently
  dropping the request.

## Deployment (Vercel or any Node host)

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain (canonical URLs, sitemap and Open Graph depend on it).
2. Configure one contact delivery provider and verify the sender domain/email with it.
3. `npm run build && npm run start`, or import the project on Vercel.
4. Submit `https://your-domain/sitemap.xml` in Google Search Console.

## Before launch — confirm with the company

- [ ] Phone number (`lib/site.ts`)
- [ ] Which of the 20 services are actually offered. Gas piping, backflow devices and street-side water/sewer work are
      regulated in NYC — only publish what the company is licensed and equipped to do.
- [ ] Neighborhoods actually served (`lib/service-areas.ts`)
- [ ] Emergency service availability wording, and whether estimates are free
- [ ] Privacy Policy, Terms of Service and Accessibility Statement reviewed (they describe what this website does,
      but are not legal advice)
- [ ] If analytics or ad tracking is added, update the Privacy Policy accordingly
- [ ] Real photos of the company's work to replace stock photography
- [ ] Google Business Profile with exactly the same name, address and phone (NAP) as the website

## Project structure

```text
app/                    Routes, metadata files (sitemap, robots, manifest, OG image, icons), API route
components/
  layout/               Header, mega menu, mobile menu, footer, mobile action bar
  home/                 Homepage-only sections
  sections/             Reusable sections (page hero, FAQ, CTA band, contact section, process timeline…)
  services/             Service cards and service-page sections
  contact/              Form, contact details (NAP), map
  ui/                   Buttons, layout primitives, headings, icons, logo, JSON-LD, breadcrumbs
lib/
  site.ts               Company details and feature flags
  services/             Service types, catalog and helpers
  contact/              Validation, delivery adapters, rate limiting, photo resizing
  seo.ts                Metadata helper and schema.org builders
assets/                 Source logo and fonts for the generated share image
scripts/                Brand asset generator
docs/                   Image credits
```
