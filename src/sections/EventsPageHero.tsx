interface EventsPageHeroProps {
  title: string
  description?: string
  /** Trailing breadcrumb label. */
  breadcrumbLabel: string
}

/**
 * Light blue interior header for pages under /events — the same treatment the
 * essay contest archive and the About sub-pages use.
 */
export default function EventsPageHero({
  title,
  description,
  breadcrumbLabel,
}: EventsPageHeroProps) {
  return (
    <section className="bg-[#ebf4ff] pt-10 lg:pt-12 pb-12 lg:pb-16">
      <div className="container-site flex flex-col gap-4">
        <nav
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm pb-4 border-b border-[#C2DDFF]"
          aria-label="Breadcrumb"
        >
          <a href="/" className="font-body font-bold text-navy-subtle hover:text-navy-bolder transition-colors">
            Home
          </a>
          <span className="text-neutral-subtle">/</span>
          <a href="/events" className="font-body font-bold text-navy-subtle hover:text-navy-bolder transition-colors">
            Events
          </a>
          <span className="text-neutral-subtle">/</span>
          <span className="font-body italic text-neutral-subtle">{breadcrumbLabel}</span>
        </nav>

        <h1 className="font-headline text-[32px] lg:text-[64px] text-navy-bolder leading-[1.1]">
          {title}
        </h1>

        {description && (
          <p className="font-body text-base lg:text-lg text-neutral-subtle leading-[1.6] max-w-[760px]">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
