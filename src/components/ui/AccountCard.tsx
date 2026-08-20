import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** Bordered panel used across the account pages. */
export function AccountCard({
  title,
  action,
  children,
  className = '',
}: {
  title?: string
  action?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`border border-[#c4c9d4] ${className}`}>
      {title && (
        <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 px-6 py-4 border-b border-[#e2e8f0] bg-[#f8fafd]">
          <h3 className="font-headline text-[22px] text-navy-bolder leading-tight">{title}</h3>
          {action}
        </header>
      )}
      <div className="p-6">{children}</div>
    </section>
  )
}

/** Label/value pair, stacked on narrow screens. */
export function DataRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-1 py-3 border-b border-[#e8eaed] last:border-b-0">
      <dt className="font-body font-bold text-[14px] text-navy-bolder">{label}</dt>
      <dd className="font-body text-[15px] text-neutral-subtle text-right">{value}</dd>
    </div>
  )
}

export function SectionLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 font-body font-semibold text-[14px] text-link"
    >
      {children}
      <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
    </Link>
  )
}

const TONES = {
  active: 'bg-[#e6f7ed] text-[#0a5c2e] border-[#b5e3c8]',
  muted: 'bg-[#f4f4f6] text-[#4e576a] border-[#d8dbe2]',
  warn: 'bg-[#fff8d6] text-[#7a5c00] border-[#f0d98a]',
  info: 'bg-[#ebf4ff] text-[#023e7d] border-[#bcd8f7]',
} as const

export function Badge({
  children,
  tone = 'info',
}: {
  children: ReactNode
  tone?: keyof typeof TONES
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-body font-bold text-[12px] uppercase tracking-[0.04em] ${TONES[tone]}`}
    >
      {children}
    </span>
  )
}

/** Scroll-safe table wrapper — account tables get wide on small screens. */
export function DataTable({
  columns,
  children,
  caption,
}: {
  columns: string[]
  children: ReactNode
  caption?: string
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-[#c4c9d4]">
            {columns.map(c => (
              <th
                key={c}
                scope="col"
                className="text-left font-body font-bold text-[12px] uppercase tracking-[0.06em] text-neutral-subtle pb-3 pr-4 last:pr-0"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export function Td({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <td className={`align-top py-4 pr-4 last:pr-0 font-body text-[15px] text-neutral-subtle ${className}`}>
      {children}
    </td>
  )
}

export function EmptyState({
  icon,
  title,
  children,
  action,
}: {
  icon: string
  title: string
  children?: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3 py-10 px-6">
      <span className="w-12 h-12 bg-[#ebf4ff] flex items-center justify-center" aria-hidden="true">
        <i className={`fa-solid ${icon} text-[20px] text-[#023e7d]`} />
      </span>
      <p className="font-headline text-[20px] text-navy-bolder">{title}</p>
      {children && (
        <p className="font-body text-[15px] text-neutral-subtle leading-relaxed max-w-[420px]">{children}</p>
      )}
      {action}
    </div>
  )
}

/** Read-only representation of an on/off setting the prototype can't persist. */
export function Toggle({
  on,
  label,
  onChange,
}: {
  on: boolean
  label: string
  onChange: () => void
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onChange}
      className="flex-shrink-0 w-11 h-6"
    >
      {/* The knob is placed with an explicit `left` rather than a transform. With
          `absolute` and no offset it fell back to its static position — which,
          following a block-level sibling, put it outside the track and over the
          adjacent label. */}
      <span className="relative block w-11 h-6">
        <span className={`absolute inset-0 rounded-full transition-colors ${on ? 'bg-[#023e7d]' : 'bg-[#c4c9d4]'}`} />
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${on ? 'left-6' : 'left-1'}`}
        />
      </span>
    </button>
  )
}
