import { useState } from 'react'
import { useLocation } from 'react-router-dom'

interface NavItem {
  label: string
  href: string
  /** Keep the tab active across sibling pages sharing this prefix. */
  matchPrefix?: string
}

const navItems: NavItem[] = [
  { label: 'Essay Contests', href: '/essay-contests' },
  {
    label: 'CNO Naval History',
    href: '/essay-contests/cno-naval-history-midshipmen-cadets',
    // One tab stands for all three divisions of the CNO contest.
    matchPrefix: '/essay-contests/cno-naval-history',
  },
  { label: 'Coast Guard', href: '/essay-contests/coast-guard' },
  { label: 'Enlisted Prize', href: '/essay-contests/enlisted-prize' },
  { label: 'Archive', href: '/essay-contests/archive' },
]

function isNavItemActive(pathname: string, item: NavItem) {
  // The landing page's own href ('/essay-contests') is a path prefix of every
  // contest page, so it needs an exact match instead of the startsWith check
  // the other tabs use — otherwise it would stay "active" on every sub-page too.
  if (item.href === '/essay-contests') return pathname === item.href
  if (item.matchPrefix) return pathname.startsWith(item.matchPrefix)
  return pathname === item.href || pathname.startsWith(item.href + '/')
}

export default function EssayContestsSubNav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#B8B49A]" style={{ backgroundColor: '#E0E0CC' }}>

      {/* Mobile: toggle bar */}
      <div className="lg:hidden">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center justify-center gap-3 w-full h-[53px] px-4"
          aria-expanded={open}
          aria-label="Toggle Essay Contests section menu"
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
            Essay Contests
          </span>
        </button>

        {open && (
          <nav className="border-t border-[#B8B49A]" aria-label="Essay Contests section navigation">
            {navItems.map((item) => {
              const isActive = isNavItemActive(pathname, item)
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3.5 font-body font-semibold text-sm border-b border-[#C8C4A8] last:border-0 transition-colors
                    ${isActive
                      ? 'text-navy-boldest bg-[#D4D0BA]'
                      : 'text-navy-bolder hover:text-navy-subtle hover:bg-[#D4D0BA]'
                    }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        )}
      </div>

      {/* Desktop: horizontal nav */}
      <nav
        className="hidden lg:flex items-center justify-center gap-8 py-4 flex-wrap px-6"
        aria-label="Essay Contests section navigation"
      >
        {navItems.map((item) => {
          const isActive = isNavItemActive(pathname, item)
          return (
            <a
              key={item.label}
              href={item.href}
              className={`font-body font-semibold text-sm whitespace-nowrap transition-colors
                ${isActive
                  ? 'text-navy-boldest link-underline-always'
                  : 'text-navy-bolder hover:text-navy-subtle link-underline-hover'
                }`}
            >
              {item.label}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
