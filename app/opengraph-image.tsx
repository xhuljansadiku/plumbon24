import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { OG_IMAGE_ALT } from '@/lib/seo'
import { addressLine, site } from '@/lib/site'

export const alt = OG_IMAGE_ALT
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Read at module load (build time) so the image is prerendered as a static file.
const root = process.cwd()
const [logo, manropeExtraBold, interRegular, interMedium] = await Promise.all([
  readFile(join(root, 'public/brand/plumbon24-logo.png'), 'base64'),
  readFile(join(root, 'assets/fonts/manrope-800.woff')),
  readFile(join(root, 'assets/fonts/inter-400.woff')),
  readFile(join(root, 'assets/fonts/inter-500.woff')),
])

/** Social sharing image (Open Graph / X), generated at build time from the official logo. */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px 56px',
          backgroundColor: '#071923',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          color: '#ffffff',
          fontFamily: 'Inter',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', backgroundColor: '#ffffff', borderRadius: 18, padding: '18px 28px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- rendered by Satori, not the browser */}
            <img src={`data:image/png;base64,${logo}`} width={290} height={114} alt="" />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'Manrope',
              fontWeight: 800,
              fontSize: 70,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              maxWidth: 940,
            }}
          >
            Professional Plumbing Services in Brooklyn, NY
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 30 }}>
            <div
              style={{
                display: 'flex',
                backgroundColor: '#027ec6',
                borderRadius: 999,
                padding: '12px 26px',
                fontSize: 28,
                fontWeight: 500,
              }}
            >
              15+ Years of Plumbing Experience
            </div>
            <div style={{ display: 'flex', marginLeft: 22, fontSize: 27, color: 'rgba(255,255,255,0.75)' }}>
              Residential &amp; Commercial
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.14)',
            paddingTop: 24,
            fontSize: 24,
            color: 'rgba(255,255,255,0.72)',
          }}
        >
          <span>{site.name}</span>
          <span>{addressLine}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Manrope', data: manropeExtraBold, style: 'normal', weight: 800 },
        { name: 'Inter', data: interRegular, style: 'normal', weight: 400 },
        { name: 'Inter', data: interMedium, style: 'normal', weight: 500 },
      ],
    },
  )
}
