import { useCallback, useEffect, useRef, useState } from 'react'

export interface JumpLink {
  label: string
  /** In-page anchor, e.g. '#executive-staff'. */
  href: string
}

interface JumpLinkNavProps {
  links: JumpLink[]
  /**
   * Label on the mobile toggle bar. Defaults to "On this page" — a page name
   * here reads like the section nav directly above it and implies the links
   * lead to other pages, which they never do.
   */
  mobileLabel?: string
}

/**
 * Sticky in-page navigation for long, section-stacked pages.
 *
 * Sits below the sticky site header and tracks which section is in view, so the
 * reader always knows where they are in a page that merges several former
 * standalone pages. Sections opt in by carrying the matching `id`.
 *
 * Clicks are handled in JS rather than left to the browser's fragment
 * navigation, for two reasons. The scroll is requested explicitly as `smooth`,
 * so it does not depend on `html { scroll-behavior }` surviving whatever else
 * is on the page. And the landing position is computed from the live height of
 * the sticky chrome above, so a target does not have to remember a matching
 * `scroll-mt-*` utility to avoid ending up underneath the header — the Giving
 * sections never carried one.
 */
export default function JumpLinkNav({ links, mobileLabel = 'On this page' }: JumpLinkNavProps) {
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(links[0]?.href ?? '')
  const navRef = useRef<HTMLElement>(null)

  const jumpTo = useCallback((event: React.MouseEvent, href: string) => {
    const target = document.getElementById(href.slice(1))
    // No such section: leave it to the browser rather than swallowing the click.
    if (!target) return
    event.preventDefault()
    setOpen(false)

    const nav = navRef.current
    /*
     * The nav's own sticky offset, read from computed style so it can never
     * drift from the `top-[…]` class, plus its rendered height — together that
     * is everything covering the top of the viewport once the nav is stuck.
     */
    const stickyTop = nav ? parseFloat(getComputedStyle(nav).top) || 0 : 0
    const chrome = stickyTop + (nav?.offsetHeight ?? 0)
    const top = target.getBoundingClientRect().top + window.scrollY - chrome

    window.scrollTo({
      top: Math.max(top, 0),
      // Honour an explicit request for less motion rather than overriding it.
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })

    // Keep the URL shareable, without the second jump a hash change would cause.
    window.history.replaceState(null, '', href)
  }, [])

  useEffect(() => {
    function onScroll() {
      // The section whose top has most recently passed under the sticky chrome
      // is the one being read; fall back to the first before any has.
      const offset = 200
      let current = links[0]?.href ?? ''
      for (const link of links) {
        const el = document.getElementById(link.href.slice(1))
        if (el && el.getBoundingClientRect().top <= offset) current = link.href
      }
      setActiveHref(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  return (
    <nav ref={navRef} className="bg-white border-b border-border-light sticky top-[86px] z-30" aria-label="Page sections">

      {/* Mobile: toggle bar */}
      <div className="lg:hidden">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center justify-center gap-3 w-full h-[53px] px-4"
          aria-expanded={open}
          aria-label="Toggle page section links"
        >
          {open ? (
            <svg className="w-5 h-5 flex-shrink-0 text-navy-bolder" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg className="w-5 h-5 flex-shrink-0 text-navy-bolder" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 5h16M2 10h16M2 15h16" />
            </svg>
          )}
          <span className="font-body font-semibold text-sm uppercase tracking-[0.08em] text-navy-bolder">
            {mobileLabel}
          </span>
        </button>

        {open && (
          <div className="border-t border-border-light">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => jumpTo(e, link.href)}
                aria-current={link.href === activeHref ? 'true' : undefined}
                className={`block px-6 py-3.5 font-body font-semibold text-sm border-b border-border-light last:border-0 transition-colors
                  ${link.href === activeHref
                    ? 'text-navy-boldest bg-surface-subtle'
                    : 'text-navy-bolder hover:text-[#0466c8]'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop: horizontal nav */}
      <div className="hidden lg:block container-site">
        <ul className="flex justify-center items-stretch gap-0">
          {links.map((link) => (
            <li key={link.href} className="flex-shrink-0">
              <a
                href={link.href}
                onClick={(e) => jumpTo(e, link.href)}
                aria-current={link.href === activeHref ? 'true' : undefined}
                className={`link-underline-hover relative flex items-center font-body font-bold text-[17px] text-navy-bolder px-8 py-5 whitespace-nowrap
                           hover:text-[#0466c8] transition-colors
                           ${link.href === activeHref ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gold' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
