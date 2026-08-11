interface AboutPageHeroProps {
  eyebrow?: string
  title: string
  deck?: string
  /** Trailing breadcrumb label. Omit on the About landing page itself. */
  breadcrumbLabel: string
}

/**
 * Compact dark hero for About sub-pages (History, Strategic Plan).
 *
 * The landing page gets the full split photo hero; interior pages use this
 * lighter-weight header so the section reads with a clear hierarchy, matching
 * how Essay Contests handles its own interior pages.
 */
export default function AboutPageHero({
  eyebrow,
  title,
  deck,
  breadcrumbLabel,
}: AboutPageHeroProps) {
  return (
    <section
      className="flex flex-col items-center justify-center py-12 lg:py-20 px-6"
      style={{ background: 'linear-gradient(to bottom, #1d2535, #0e121a)' }}
    >
      <div className="w-full max-w-[820px] flex flex-col items-center text-center gap-4">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-body font-bold text-sm text-white"
          aria-label="Breadcrumb"
        >
          <a href="/" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <i className="fa-solid fa-house text-[10px]" aria-hidden="true" /> Home
          </a>
          <span className="text-white/40">/</span>
          <a href="/about" className="hover:text-white/80 transition-colors">About</a>
          <span className="text-white/40">/</span>
          <span className="font-normal italic text-[#f4f4f6]">{breadcrumbLabel}</span>
        </nav>

        {eyebrow && (
          <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-light-blue">
            {eyebrow}
          </p>
        )}

        <h1 className="font-headline text-[32px] lg:text-5xl xl:text-[56px] text-white leading-[1.1]">
          {title}
        </h1>

        {deck && (
          <p className="font-body text-white/80 text-base lg:text-lg leading-[1.5]">{deck}</p>
        )}
      </div>
    </section>
  )
}
