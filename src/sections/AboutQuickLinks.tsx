/**
 * Wayfinding into the rest of the About section — same card pattern as
 * GivingQuickLinks, on white rather than navy so it doesn't collide with the
 * navy pillars block above it.
 */
const links = [
  {
    eyebrow: 'Since 1873',
    headline: 'Our History',
    body: 'Fifteen naval officers, a post–Civil War Navy, and the forum they founded on the grounds of the Naval Academy.',
    cta: 'Read our history',
    href: '/about/history',
    icon: 'fa-solid fa-landmark',
  },
  {
    eyebrow: 'Looking Ahead',
    headline: 'Strategic Plan 2030',
    body: 'How the Institute intends to grow its reach and influence through the next decade of maritime competition.',
    cta: 'View the strategic plan',
    href: '/about/strategic-plan',
    icon: 'fa-solid fa-compass',
  },
  {
    eyebrow: 'Governance',
    headline: 'Leadership',
    body: 'The Board of Trustees, Board of Directors, and staff who steward the Institute and its mission.',
    cta: 'Meet our leadership',
    href: '/about/leadership',
    icon: 'fa-solid fa-people-group',
  },
  {
    eyebrow: 'Annapolis',
    headline: 'Jack C. Taylor Conference Center',
    body: 'The Institute’s conference and event venue on the grounds of the U.S. Naval Academy.',
    cta: 'Visit the center',
    href: '/about/taylor-conference-center',
    icon: 'fa-solid fa-building-columns',
  },
]

export default function AboutQuickLinks() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item) => (
            <a
              key={item.headline}
              href={item.href}
              className="group bg-white border border-navy-subtle p-8 flex flex-col gap-5 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#EBF4FF] flex items-center justify-center text-[#0466c8] flex-shrink-0">
                <i className={item.icon} style={{ fontSize: '1.25rem' }} aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-body font-medium text-xs uppercase tracking-[0.08em] text-[#0466c8]">
                  {item.eyebrow}
                </p>
                <h3 className="font-headline text-xl text-navy-bolder leading-[1.2]">
                  {item.headline}
                </h3>
                <p className="font-body text-sm text-neutral-subtle leading-relaxed">{item.body}</p>
              </div>
              <div className="mt-auto flex items-center gap-2 font-body font-semibold text-sm text-[#0466c8] group-hover:gap-3 transition-all">
                <span className="relative">
                  {item.cta}
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0466c8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </span>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }} aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
