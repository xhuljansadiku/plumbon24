import { LegalPage } from '@/components/sections/LegalPage'
import { createMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata = createMetadata({
  title: 'Accessibility Statement | PLUMBON24 MECHANICAL INC',
  description: 'Our commitment to making the PLUMBON24 MECHANICAL INC website accessible to everyone, and how to tell us about a problem.',
  path: '/accessibility',
})

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      intro="We want everyone to be able to use this website, including people with disabilities."
      path="/accessibility"
    >
      <h2>Our goal</h2>
      <p>
        {site.name} aims for this website to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. Accessibility is
        an ongoing effort, and we review the website as it changes.
      </p>

      <h2>What we have done</h2>
      <ul>
        <li>Semantic page structure with a logical heading order and landmarks.</li>
        <li>Full keyboard access, a visible focus indicator and a “Skip to main content” link.</li>
        <li>Text alternatives for meaningful images.</li>
        <li>Color combinations chosen for sufficient contrast.</li>
        <li>Form fields with visible labels and clear, specific error messages.</li>
        <li>Animations that respect your device’s reduced-motion setting.</li>
        <li>Layouts that adapt to screen size and text zoom.</li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        Some content comes from third parties, such as the interactive Google Map, and may not fully meet these standards. Our address
        and a link to directions are always available as text alternatives.
      </p>

      <h2>Feedback and help</h2>
      <p>
        If you have difficulty using any part of this website, please let us know. Email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>
        {site.phone ? (
          <>
            {' '}
            or call <a href={`tel:${site.phone.e164}`}>{site.phone.display}</a>
          </>
        ) : null}{' '}
        and tell us which page and what problem you ran into. We’ll work to provide the information you need in another way.
      </p>
    </LegalPage>
  )
}
