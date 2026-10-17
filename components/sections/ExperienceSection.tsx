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
