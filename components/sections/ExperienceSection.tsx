import { Icon } from '@/components/ui/Icon'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/lib/site'

const points = ['Professional service', 'Residential & commercial solutions', 'Quality workmanship', 'Local Brooklyn focus']

/** The "15+" number drawn like an engineering drawing, with a dimension line underneath. */
export function ExperienceFigure({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <div aria-hidden="true" className="inline-flex flex-col">
      <p
        className={`font-display text-[clamp(8.5rem,24vw,15.5rem)] font-extrabold leading-[0.78] tracking-[-0.065em] ${dark ? 'text-white' : 'text-ink'}`}
      >
        15<span className="text-brand-500">+</span>
      </p>
      <div className={`mt-7 flex items-center ${dark ? 'text-brand-300' : 'text-brand-600'}`}>
        <span className="h-5 w-0.5 bg-current" />
        <svg viewBox="0 0 10 10" className="size-2.5" fill="currentColor">
          <path d="M0 5 10 0v10Z" />
        </svg>
        <span className="h-0.5 min-w-4 flex-1 bg-current" />
        <span className={`text-eyebrow px-3 text-[0.6875rem] ${dark ? 'text-white/80' : 'text-brand-700'}`}>Years of experience</span>
        <span className="h-0.5 min-w-4 flex-1 bg-current" />
        <svg viewBox="0 0 10 10" className="size-2.5" fill="currentColor">
          <path d="M10 5 0 0v10Z" />
        </svg>
        <span className="h-5 w-0.5 bg-current" />
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <Section tone="mist" labelledBy="experience-title" className="overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint fade-edges" />
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="reveal lg:col-span-5">
          <ExperienceFigure />
        </div>
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Experience you can rely on"
            title="15+ Years of Plumbing Experience"
            lead={`For more than 15 years, ${site.name} has built its approach around professional plumbing service, practical solutions and quality workmanship.`}
            id="experience-title"
          />
          <ul className="mt-10 grid gap-3.5 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="reveal flex items-center gap-4 rounded-xl border border-line bg-white px-5 py-4 shadow-[0_1px_2px_rgb(17_24_39/0.04)]">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-600 text-white">
                  <Icon name="check" className="size-5" strokeWidth={2.25} />
                </span>
                <span className="font-semibold text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
