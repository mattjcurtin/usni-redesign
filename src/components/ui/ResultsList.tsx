import type { ReactNode } from 'react'

/**
 * Standard results listing primitives, shared by archive listings and (later)
 * site search results.
 *
 * A result is deliberately plain: a kind label, a title link, an optional
 * one-line summary, and a row of short metadata. Keeping it text-first means the
 * same component works for contests, articles, books, and issues without each
 * needing its own card design.
 */

export interface ResultMeta {
  label: string
  value: string
}

export interface ResultItem {
  id: string
  /** Short type label, e.g. "Essay Contest", "Article". */
  kind: string
  title: string
  href: string
  summary?: string
  meta?: ResultMeta[]
}

export function ResultRow({ item }: { item: ResultItem }) {
  return (
    <article className="flex flex-col gap-2 py-6">
      <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-[#0466c8]">
        {item.kind}
      </p>

      <h3 className="font-headline text-xl lg:text-[24px] text-navy-bolder leading-[1.25]">
        <a href={item.href} className="hover:text-[#0466c8] transition-colors">
          {item.title}
        </a>
      </h3>

      {item.summary && (
        <p className="font-body text-base text-neutral-subtle leading-[1.6]">{item.summary}</p>
      )}

      {item.meta && item.meta.length > 0 && (
        <dl className="flex flex-wrap gap-x-6 gap-y-1 mt-0.5">
          {item.meta.map((m) => (
            <div key={m.label} className="flex gap-1.5">
              <dt className="font-body text-sm text-neutral-subtle">{m.label}:</dt>
              <dd className="font-body font-semibold text-sm text-navy-bolder">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  )
}

interface ResultsListProps {
  items: ResultItem[]
  /** Rendered when `items` is empty. */
  emptyMessage?: ReactNode
}

export default function ResultsList({ items, emptyMessage }: ResultsListProps) {
  if (items.length === 0) {
    return (
      <p className="font-body text-base text-neutral-subtle py-8 border-t border-border-light">
        {emptyMessage ?? 'No results found.'}
      </p>
    )
  }

  return (
    <div className="flex flex-col divide-y divide-border-light border-t border-border-light">
      {items.map((item) => (
        <ResultRow key={item.id} item={item} />
      ))}
    </div>
  )
}

/** Standard "Showing X–Y of N results" line for listing pages. */
export function ResultsCount({
  page,
  perPage,
  total,
  noun = 'results',
}: {
  page: number
  perPage: number
  total: number
  noun?: string
}) {
  if (total === 0) return null
  const first = (page - 1) * perPage + 1
  const last = Math.min(page * perPage, total)
  return (
    <p className="font-body text-sm text-neutral-subtle">
      Showing <span className="font-semibold text-navy-bolder">{first}–{last}</span> of{' '}
      <span className="font-semibold text-navy-bolder">{total.toLocaleString()}</span> {noun}
    </p>
  )
}
