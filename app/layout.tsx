import type { Metadata, Viewport } from 'next'
import { Anton, Inter, Instrument_Serif, Manrope } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import { PhoneClickTracker } from '@/components/analytics/PhoneClickTracker'
import { BackToTop } from '@/components/layout/BackToTop'
import { MobileActionBar } from '@/components/layout/MobileActionBar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { JsonLd } from '@/components/ui/JsonLd'
import { GTM_ID } from '@/lib/analytics'
import { businessSchema, websiteSchema } from '@/lib/seo'
import { allowIndexing, getSiteUrl, site } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
/** Used only by the Illyrian Pixel credit in the footer. */
const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton', display: 'swap' })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--font-instrument-serif', display: 'swap' })

/** Every page is a fully static marketing page; the build fails if one accidentally becomes dynamic. */
export const ensureStatic = 'navigation'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'NYC Piping & Heating for All 5 Boroughs | PLUMBON24',
    template: '%s | PLUMBON24 MECHANICAL INC',
  },
  description:
    'Professional piping services for homes and businesses in Manhattan, Brooklyn, Queens, the Bronx and Staten Island. 24/7 emergency service and free estimates from PLUMBON24 MECHANICAL INC.',
  applicationName: site.name,
  category: 'Piping',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: site.name,
    title: 'PLUMBON24 MECHANICAL INC | Professional Piping Services in New York City',
    description:
      'Professional piping services for homes and businesses across all five NYC boroughs. 24/7 emergency service and free estimates. Call (917) 702-0072.',
  },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false, address: false, email: false },
  ...(allowIndexing ? {} : { robots: { index: false, follow: false } }),
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-US" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable} ${anton.variable} ${instrumentSerif.variable}`}>
      <GoogleTagManager gtmId={GTM_ID} />
      <body className="min-h-dvh pb-[calc(4.75rem+env(safe-area-inset-bottom))] lg:pb-0">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar phone={site.phone} email={site.email} />
        <BackToTop />
        <PhoneClickTracker />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </body>
    </html>
  )
}
