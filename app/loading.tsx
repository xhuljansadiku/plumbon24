import { Container } from '@/components/ui/Layout'

/** Skeleton shown during client-side navigation while the next page's content arrives. */
export default function Loading() {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">Loading page…</span>
      <div className="bg-navy-950">
        <Container className="pb-20 pt-10">
          <div className="h-4 w-48 animate-pulse rounded-full bg-white/10" />
          <div className="mt-14 h-4 w-40 animate-pulse rounded-full bg-brand-500/40" />
          <div className="mt-6 h-12 w-full max-w-2xl animate-pulse rounded-xl bg-white/10" />
          <div className="mt-4 h-12 w-3/4 max-w-xl animate-pulse rounded-xl bg-white/10" />
          <div className="mt-8 h-5 w-full max-w-xl animate-pulse rounded-full bg-white/[0.07]" />
          <div className="mt-3 h-5 w-2/3 max-w-lg animate-pulse rounded-full bg-white/[0.07]" />
          <div className="mt-10 flex gap-3">
            <div className="h-14 w-48 animate-pulse rounded-[10px] bg-brand-600/60" />
            <div className="h-14 w-44 animate-pulse rounded-[10px] bg-white/10" />
          </div>
        </Container>
      </div>
      <Container className="grid gap-5 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="rounded-2xl border border-line p-7">
            <div className="size-14 animate-pulse rounded-xl bg-mist-200" />
            <div className="mt-7 h-6 w-2/3 animate-pulse rounded-lg bg-mist-200" />
            <div className="mt-4 h-4 w-full animate-pulse rounded-full bg-mist" />
            <div className="mt-2.5 h-4 w-4/5 animate-pulse rounded-full bg-mist" />
          </div>
        ))}
      </Container>
    </div>
  )
}
