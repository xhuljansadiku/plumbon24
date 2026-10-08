import { LegalPage } from '@/components/sections/LegalPage'
import { createMetadata } from '@/lib/seo'
import { addressLine, site } from '@/lib/site'

export const metadata = createMetadata({
  title: 'Privacy Policy | PLUMBON24 MECHANICAL INC',
  description: 'How PLUMBON24 MECHANICAL INC collects, uses and protects the information you share through this website.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`How ${site.name} handles the information you share through this website.`}
      path="/privacy"
    >
      <p>
        This Privacy Policy explains how {site.name} (“we”, “us”) handles personal information collected through this website. It
        applies to this website only.
      </p>

      <h2>Information we collect</h2>
      <h3>Information you provide</h3>
      <p>
        When you submit a service request, we receive the details you enter: your name, phone number, email address, the service you
        need, your property type, your message, any photos you attach and the page you sent the request from.
      </p>
      <h3>Technical information</h3>
      <p>
        Like most websites, our hosting provider processes technical information such as your IP address, browser type and the pages
        you request, so the website can be delivered and kept secure. We use IP addresses to limit spam and abuse of our request form.
      </p>
      <p>This website does not currently use analytics or advertising cookies.</p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your service request and communicate with you about it.</li>
        <li>To provide plumbing services you request from us.</li>
        <li>To keep records of our communications with customers.</li>
        <li>To protect this website against spam, fraud and abuse.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>How information is shared</h2>
      <p>
        We do not sell the personal information you submit through this website. We share it only with service providers that help us
        operate the website and deliver your request to us — such as our website hosting and email delivery providers — and where we
        are required to by law.
      </p>

      <h2>Google Maps</h2>
      <p>
        Some pages offer an interactive map provided by Google Maps. The map only loads if you choose to show it. When it loads, Google
        may collect information in line with its own privacy policy.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep service request information for as long as we need it to respond to you, provide services and maintain our business
        records, unless a longer period is required by law.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable measures to protect the information you share with us. However, no website, internet transmission or email is
        completely secure.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to access, correct or delete the personal information you submitted through this website by emailing{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Children’s privacy</h2>
      <p>This website is not directed to children under 13, and we do not knowingly collect their personal information.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The date at the top of this page shows when it was last updated.</p>

      <h2>Contact us</h2>
      <p>
        {site.name}
        <br />
        {addressLine}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  )
}
