import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { breadcrumbSchema, type Crumb } from '@/lib/seo'
import { cn } from '@/lib/utils'

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. "Home" is added automatically. */
export function Breadcrumbs({ items, tone = 'light' }: { items: Crumb[]; tone?: 'light' | 'dark' }) {
  const trail: Crumb[] = [{ name: 'Home', path: '/' }, ...items]

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className={cn('flex flex-wrap items-center gap-x-2 gap-y-1 text-sm', tone === 'dark' ? 'text-white/65' : 'text-muted')}>
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {index > 0 ? <Icon name="chevron-right" className="size-3.5 opacity-60" strokeWidth={2} /> : null}
                {isLast ? (
                  <span aria-current="page" className={cn('font-medium', tone === 'dark' ? 'text-white' : 'text-ink')}>
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className={cn('underline-offset-4 hover:underline', tone === 'dark' ? 'hover:text-white' : 'hover:text-ink')}>
                    {crumb.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  )
}
