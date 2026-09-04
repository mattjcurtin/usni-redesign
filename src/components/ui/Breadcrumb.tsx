export interface Crumb {
  label: string
  href: string
}

/**
 * Breadcrumb trail, in the two forms the site needs.
 *
 * Below `sm` it collapses to a single back-link: a left chevron and the
 * immediate parent's name. A full trail does not survive a phone — the last
 * crumb is a page title, and "Home / Books & Press / Studies in Marine Corps
 * History and Amphibious Warfare" wraps to three lines above the headline it
 * is meant to be subordinate to. The parent is also the only crumb anyone taps.
 *
 * From `sm` up there is room, so the whole trail renders as before.
 *
 * Both forms live in the DOM and are switched with `hidden`, which takes them
 * out of the accessibility tree as well — so a screen reader is offered one
 * breadcrumb, not two.
 *
 * Replaces fourteen hand-rolled copies that had drifted apart on colour, gap,
 * and whether Home carried a house icon.
 */
export default function Breadcrumb({
  trail,
  current,
  tone = 'light',
  homeIcon = false,
  className = '',
}: {
  /** Ancestors, outermost first — e.g. Home, then the section. */
  trail: Crumb[]
  /** The page being viewed. Rendered as text, never a link. */
  current: string
  /** `dark` for a breadcrumb sitting on a navy panel or photo. */
  tone?: 'light' | 'dark'
  /** Show a house glyph beside the first crumb. */
  homeIcon?: boolean
  /** Layout for the wrapper — the dividing rule and its padding live here. */
  className?: string
}) {
  const dark = tone === 'dark'
  const link = dark
    ? 'font-body font-bold text-light-blue hover:text-white transition-colors'
    : 'font-body font-bold text-navy-subtle hover:text-navy-bolder transition-colors'
  const sep = dark ? 'text-white/40' : 'text-neutral-subtle'
  const currentClasses = dark
    ? 'font-body italic text-[#f4f4f6]'
    : 'font-body italic text-neutral-subtle'

  const parent = trail[trail.length - 1]

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      {/* Mobile: the parent only */}
      {parent && (
        <a href={parent.href} className={`sm:hidden inline-flex items-center gap-1.5 ${link}`}>
          <i className="fa-solid fa-chevron-left text-[10px]" aria-hidden="true" />
          {parent.label}
        </a>
      )}

      {/* sm and up: the full trail */}
      <span className="hidden sm:flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((crumb, i) => (
          <span key={crumb.href + i} className="inline-flex items-center gap-x-2">
            <a href={crumb.href} className={`${link} inline-flex items-center gap-1.5`}>
              {homeIcon && i === 0 && (
                <i className="fa-solid fa-house text-[10px]" aria-hidden="true" />
              )}
              {crumb.label}
            </a>
            <span className={sep}>/</span>
          </span>
        ))}
        <span className={currentClasses}>{current}</span>
      </span>
    </nav>
  )
}
