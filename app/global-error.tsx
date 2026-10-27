'use client'

import './globals.css'

/** Last-resort error screen when the root layout itself fails. It renders its own document. */
export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en-US">
      <body className="grid min-h-dvh place-items-center bg-mist px-4 font-sans text-ink">
        <title>Something went wrong | PLUMBON24 MECHANICAL INC</title>
        <main className="max-w-lg text-center">
          <p className="text-eyebrow text-brand-700">PLUMBON24 MECHANICAL INC</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight">Something went wrong.</h1>
          <p className="mt-4 text-lg text-muted">
            Please try again or contact us directly at{' '}
            <a href="mailto:info@plumbon24.com" className="font-semibold text-brand-700 underline">
              info@plumbon24.com
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => retry()}
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-[10px] bg-brand-600 px-7 font-semibold text-white"
          >
            Try Again
          </button>
        </main>
      </body>
    </html>
  )
}
