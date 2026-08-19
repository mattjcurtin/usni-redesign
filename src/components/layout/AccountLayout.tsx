import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { member, membership } from '@/data/account'

/**
 * Shell for every /account page.
 *
 * The live Drupal account uses a banner plus a persistent left sidebar holding an
 * avatar and a flat nav list (see project-references/account-section-audit.md).
 * That shape is kept because members know it; what changes is the grouping — the
 * live list mixes a member's own records, marketing content, and developer keys
 * into one undifferentiated column.
 */

interface NavItem {
  label: string
  href: string
}

interface NavGroup {
  title: string
  items: NavItem[]
}

export const ACCOUNT_NAV: NavGroup[] = [
  {
    title: 'My account',
    items: [
      { label: 'Dashboard', href: '/account' },
      { label: 'Profile', href: '/account/profile' },
      { label: 'Addresses', href: '/account/addresses' },
      { label: 'Payment methods', href: '/account/payment' },
    ],
  },
  {
    title: 'My content',
    items: [
      { label: 'Orders & receipts', href: '/account/orders' },
      { label: 'Subscriptions', href: '/account/subscriptions' },
      { label: 'Giving history', href: '/account/giving' },
      { label: 'Saved articles', href: '/account/saved' },
    ],
  },
  {
    title: 'Member benefits',
    items: [
      { label: 'Partner discounts', href: '/account/benefits' },
      { label: 'Email & mail preferences', href: '/account/preferences' },
      { label: 'API keys', href: '/account/api-keys' },
    ],
  },
]

function Avatar() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-28 h-28 rounded-full bg-white border border-[#c4c9d4] flex items-center justify-center overflow-hidden">
        <i className="fa-solid fa-user text-[46px] text-[#c4c9d4]" aria-hidden="true" />
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 font-body text-[13px] text-[#023e7d] hover:underline"
      >
        <i className="fa-solid fa-camera" aria-hidden="true" />
        Edit photo
      </button>
      <p className="font-headline text-[22px] text-navy-bolder leading-tight text-center">
        {member.salutation} {member.lastName}
      </p>
      <p className="font-body text-[13px] text-neutral-subtle text-center">
        Member #{membership.memberNumber}
        <br />
        Since {member.memberSince}
      </p>
    </div>
  )
}

function SidebarNav() {
  const { pathname } = useLocation()
  return (
    <nav aria-label="Account" className="flex flex-col gap-6">
      {ACCOUNT_NAV.map(group => (
        <div key={group.title} className="flex flex-col">
          <p className="font-body font-bold text-[11px] uppercase tracking-[0.1em] text-neutral-subtle mb-2">
            {group.title}
          </p>
          <ul className="flex flex-col">
            {group.items.map(item => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center justify-between gap-3 px-3 py-2.5 font-body text-[15px] border-l-2 transition-colors ${
                      active
                        ? 'border-[#023e7d] bg-white font-bold text-navy-bolder'
                        : 'border-transparent text-neutral-subtle hover:bg-white hover:text-navy-bolder'
                    }`}
                  >
                    {item.label}
                    <i
                      className={`fa-solid fa-arrow-right text-[11px] ${active ? 'text-[#023e7d]' : 'text-[#c4c9d4]'}`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
      <div className="border-t border-[#c4c9d4] pt-4">
        <Link
          to="/login"
          className="flex items-center gap-2 px-3 font-body font-semibold text-[15px] text-[#023e7d] hover:underline"
        >
          <i className="fa-solid fa-arrow-right-from-bracket text-[12px]" aria-hidden="true" />
          Log out
        </Link>
      </div>
    </nav>
  )
}

export default function AccountLayout({
  title,
  lede,
  actions,
  children,
}: {
  title: string
  lede?: ReactNode
  /** Page-level controls, rendered to the right of the heading. */
  actions?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Banner — the live site's photographic header, flattened to the
            redesign's pale-blue band so the member's own data leads instead. */}
        <div className="bg-[#ebf4ff]">
          <div className="container-site py-10 lg:py-14">
            <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-[#023e7d] mb-2">
              My Account
            </p>
            <h1 className="font-headline text-[36px] lg:text-[48px] text-navy-bolder leading-[1.1]">
              Welcome back, {member.firstName}
            </h1>
          </div>
        </div>

        <div className="bg-white py-10 lg:py-14">
          <div className="container-site">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-start">

              {/* Sidebar */}
              <aside className="w-full lg:w-[280px] lg:flex-shrink-0 bg-[#f4f6fb] border border-[#e2e8f0] p-6 flex flex-col gap-7 lg:sticky lg:top-8">
                <Avatar />
                <div className="h-px bg-[#c4c9d4]" />
                <SidebarNav />
              </aside>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col gap-8">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#e2e8f0] pb-5">
                  <div className="min-w-0">
                    <h2 className="font-headline text-[30px] lg:text-[34px] text-navy-bolder leading-[1.15]">
                      {title}
                    </h2>
                    {lede && (
                      <p className="font-body text-[15px] text-neutral-subtle leading-relaxed mt-1.5 max-w-[620px]">
                        {lede}
                      </p>
                    )}
                  </div>
                  {actions}
                </div>

                {children}
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
