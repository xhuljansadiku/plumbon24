import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { MobileActionBar } from '@/components/layout/MobileActionBar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { JsonLd } from '@/components/ui/JsonLd'
import { businessSchema, websiteSchema } from '@/lib/seo'
import { getSiteUrl, site } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

/** Every page is a fully static marketing page; the build fails if one accidentally becomes dynamic. */
export const ensureStatic = 'navigation'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'NYC Plumber for All 5 Boroughs | PLUMBON24 MECHANICAL INC',
    template: '%s | PLUMBON24 MECHANICAL INC',
  },
  description:
    'Professional plumbing services for homes and businesses in Manhattan, Brooklyn, Queens, the Bronx and Staten Island. 24/7 emergency service and free estimates from PLUMBON24 MECHANICAL INC.',
  applicationName: site.name,
  category: 'Plumbing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: site.name,
    title: 'PLUMBON24 MECHANICAL INC | Professional Plumbing Services in New York City',
    description:
      'Professional plumbing services for homes and businesses across all five NYC boroughs. 24/7 emergency service and free estimates. Call (917) 702-0072.',
  },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false, address: false, email: false },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-US" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable}`}>
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
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </body>
    </html>
  )
}
