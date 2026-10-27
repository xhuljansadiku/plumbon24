'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const EMAIL = 'info@plumbon24.com'

export default function ErrorPage({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="relative isolate overflow-hidden bg-mist py-24 sm:py-32" aria-labelledby="error-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blueprint fade-edges" />
      <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-ink-900 text-white">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.3 4.2 2.6 17.6a2 2 0 0 0 1.7 2.9h15.4a2 2 0 0 0 1.7-2.9L13.7 4.2a2 2 0 0 0-3.4 0Z" />
            <path d="M12 9.5V14M12 17.2h.01" />
          </svg>
        </span>
        <h1 id="error-title" className="text-h2 mt-8 text-ink">
          Something went wrong.
        </h1>
        <p className="text-lead mx-auto mt-4 max-w-md text-muted">
          Please try again or contact us directly at{' '}
          <a href={`mailto:${EMAIL}`} className="font-semibold text-brand-700 underline underline-offset-4">
            {EMAIL}
          </a>
          .
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex min-h-14 items-center justify-center rounded-[10px] bg-brand-600 px-7 font-semibold text-white shadow-cta transition hover:bg-brand-700"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-14 items-center justify-center rounded-[10px] border border-ink/20 bg-white px-7 font-semibold text-ink transition hover:border-ink"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  )
}
