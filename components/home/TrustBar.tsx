import { Icon, type IconName } from '@/components/ui/Icon'
import { Container } from '@/components/ui/Layout'
import { cn } from '@/lib/utils'

const items: { icon: IconName; label: string }[] = [
  { icon: 'badge', label: '15+ Years Experience' },
  { icon: 'building', label: 'Residential & Commercial' },
  { icon: 'clock', label: '24/7 Emergency Service' },
  { icon: 'map-pin', label: 'All 5 NYC Boroughs' },
  { icon: 'shield-check', label: 'Quality Workmanship' },
]

export function TrustBar() {
  return (
    <section aria-label="At a glance" className="relative bg-ink-900 text-white">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 py-3 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/10 lg:py-0">
          {items.map((item, index) => (
            <li
              key={item.label}
              className={cn(
                'flex items-center gap-3 py-4 text-[0.9375rem] font-semibold leading-snug lg:justify-center lg:px-4 lg:py-7',
                index === items.length - 1 && 'col-span-2 sm:col-span-1',
              )}
            >
              <Icon name={item.icon} className="size-6 text-brand-400" />
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
