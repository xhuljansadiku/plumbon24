import Image from 'next/image'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Container, Section } from '@/components/ui/Layout'
import { Eyebrow } from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import { REQUEST_ANCHOR } from '@/lib/navigation'
import { getService } from '@/lib/services'
import { ctaLabels, site } from '@/lib/site'

const urgentProblems = ['Burst pipes', 'Major leaks', 'Sewer backups', 'Overflowing toilets', 'Leaking water heaters', 'Severe clogs']

const whileYouWait = [
  'Close the main water shut-off valve, usually near the meter.',
  'Keep clear of water near outlets, panels and appliances.',
  'Move valuables away and take photos of the damage.',
]

/** Dark emergency band. Never claims 24/7 availability. Hidden when emergency service is switched off. */
export function EmergencySection() {
  const emergency = getService('emergency-plumbing')
  if (!site.features.emergencyService || !emergency) return null

  const photo = images.faucetDark

  return (
    <Section tone="navy" labelledBy="emergency-title" className="overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint-dark" />
      <div aria-hidden="true" className="absolute -left-56 top-1/2 -z-10 size-[40rem] -translate-y-1/2 rounded-full bg-brand-600/20 blur-3xl" />
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow tone="dark">Urgent plumbing problems</Eyebrow>
          <h2 id="emergency-title" className="text-h2 mt-4 text-white">
            Plumbing Problems Can’t Always Wait
          </h2>
          <p className="text-lead mt-6 max-w-2xl text-white/75">
            A burst pipe, major leak or serious drainage problem can quickly become a bigger issue. Contact {site.name} to
            discuss your plumbing problem and determine the right next step.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Common urgent problems">
            {urgentProblems.map((problem) => (
              <li key={problem} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85">
                {problem}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={`/services/${emergency.slug}#${REQUEST_ANCHOR}`} size="lg" icon="arrow-right">
              {ctaLabels.emergency}
            </ButtonLink>
            {site.phone ? (
              <ButtonLink href={`tel:${site.phone.e164}`} size="lg" variant="light" icon="phone" iconPosition="start">
                {ctaLabels.call}
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/5]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="reveal-image object-cover"
                style={{ objectPosition: photo.position }}
              />
            </div>
            <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white p-5 text-ink shadow-lift sm:inset-x-4 sm:bottom-4">
              <p className="flex items-center gap-2.5 font-display text-lg font-bold">
                <Icon name="alert" className="size-5 text-brand-600" />
                While you wait
              </p>
              <ol className="mt-3 grid list-decimal gap-1.5 pl-5 text-sm text-muted marker:font-semibold marker:text-ink">
                {whileYouWait.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
