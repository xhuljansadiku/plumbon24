import { LegalPage } from '@/components/sections/LegalPage'
import { createMetadata } from '@/lib/seo'
import { addressLine, site } from '@/lib/site'

export const metadata = createMetadata({
  title: 'Terms of Service | PLUMBON24 MECHANICAL INC',
  description: 'The terms that apply to using the PLUMBON24 MECHANICAL INC website and submitting service requests online.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" intro="The terms that apply when you use this website." path="/terms">
      <p>
        These terms apply to your use of the {site.name} website. By using this website, you agree to them. If you do not agree,
        please do not use the website.
      </p>

      <h2>About this website</h2>
      <p>
        This website provides information about the plumbing services offered by {site.name} and lets you send us a service request.
      </p>

      <h2>Information on this website</h2>
      <p>
        The content on this website is general information about plumbing and our services. It is not a substitute for an assessment
        of your specific situation. We work to keep the information accurate and up to date, but it may change without notice.
      </p>

      <h2>Service requests</h2>
      <p>
        Submitting a request through this website does not by itself create an agreement for services. Scheduling, the scope of work
        and pricing are discussed and agreed with you directly before any work begins.
      </p>

      <h2>Emergencies and safety</h2>
      <p>
        Do not rely on this website in a situation that puts people or property in immediate danger. If you smell gas, leave the
        building and call 911 or your gas utility from outside. For any life-threatening emergency, call 911.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to misuse this website, including by:</p>
      <ul>
        <li>submitting false, misleading or unlawful information;</li>
        <li>sending spam or automated requests through our forms;</li>
        <li>attempting to interfere with the website’s security or operation.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The {site.name} name, logo and the content of this website belong to {site.name} or are used with permission, including
        licensed photography. Please do not copy or reuse them without our permission.
      </p>

      <h2>Third-party links and services</h2>
      <p>
        This website links to, and can display, third-party services such as Google Maps. Those services are governed by their own
        terms and policies, and we are not responsible for their content.
      </p>

      <h2>Changes to these terms</h2>
      <p>We may update these terms from time to time. The date at the top of this page shows when they were last updated.</p>

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
