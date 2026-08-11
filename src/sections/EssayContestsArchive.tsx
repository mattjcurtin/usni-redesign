import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ResultsList, { ResultsCount, type ResultItem } from '@/components/ui/ResultsList'
import Pagination from '@/components/ui/Pagination'
import { essayContestSeries } from '@/data/essayContests'

/**
 * Contest archive as a standard paged results listing.
 *
 * Built on the shared ResultsList / Pagination primitives so the forthcoming
 * site-search results page can use the same layout rather than inventing a
 * second one.
 *
 * Accepts `?q=` to arrive pre-filtered — contest pages link here that way to
 * show just their own series.
 */

const PER_PAGE = 10

type SortKey = 'name' | 'editions' | 'recent'

const sorts: { key: SortKey; label: string }[] = [
  { key: 'name', label: 'Name (A–Z)' },
  { key: 'recent', label: 'Most recent' },
  { key: 'editions', label: 'Most editions' },
]

/** Trailing year of a series' span, for sorting by recency. */
function latestYear(years: string): number {
  const found = years.match(/\d{4}/g)
  return found ? Number(found[found.length - 1]) : 0
}

export default function EssayContestsArchive() {
  const [params] = useSearchParams()
  // Seeded from the URL once; the field is user-owned from then on
  const [query, setQuery] = useState(params.get('q') ?? '')
  const [sort, setSort] = useState<SortKey>('name')
  const [page, setPage] = useState(1)

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const filtered = needle
      ? essayContestSeries.filter((s) => s.name.toLowerCase().includes(needle))
      : [...essayContestSeries]

    switch (sort) {
      case 'recent':
        return filtered.sort(
          (a, b) => latestYear(b.years) - latestYear(a.years) || a.name.localeCompare(b.name),
        )
      case 'editions':
        return filtered.sort((a, b) => b.editions - a.editions || a.name.localeCompare(b.name))
      default:
        return filtered.sort((a, b) => a.name.localeCompare(b.name))
    }
  }, [query, sort])

  const totalPages = Math.max(1, Math.ceil(results.length / PER_PAGE))
  // Guard against a stale page number after filtering shrinks the result set
  const current = Math.min(page, totalPages)
  const pageItems = results.slice((current - 1) * PER_PAGE, current * PER_PAGE)

  const items: ResultItem[] = pageItems.map((s) => ({
    id: s.slug,
    kind: 'Essay Contest',
    title: s.name,
    href: `/essay-contests/archive/${s.slug}`,
    meta: [
      ...(s.editions > 0
        ? [{ label: 'Editions', value: String(s.editions) }]
        : []),
      ...(s.years ? [{ label: 'Years', value: s.years }] : []),
    ],
  }))

  const reset = () => setPage(1)

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-site">

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-6">
          <div className="flex flex-col gap-1.5 flex-1">
            <label
              htmlFor="archive-search"
              className="font-body font-semibold text-sm text-navy-bolder"
            >
              Search the archive
            </label>
            <div className="relative">
              <i
                className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-neutral-subtle"
                aria-hidden="true"
              />
              <input
                id="archive-search"
                type="search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); reset() }}
                placeholder="Contest name…"
                className="w-full bg-white border border-[#94A3B8] pl-10 pr-3 py-2.5 font-body text-base
                  text-navy-bolder placeholder:text-neutral-subtle outline-none
                  focus:border-navy-bright focus:shadow-[0_0_0_3px_rgba(4,102,200,0.15)] transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="archive-sort" className="font-body font-semibold text-sm text-navy-bolder">
              Sort by
            </label>
            <select
              id="archive-sort"
              value={sort}
              onChange={(e) => { setSort(e.target.value as SortKey); reset() }}
              className="select-field font-body text-base text-navy-bolder border border-[#94A3B8] pl-3.5 py-2.5
                bg-white cursor-pointer outline-none focus:border-navy-bright
                focus:shadow-[0_0_0_3px_rgba(4,102,200,0.15)] transition sm:min-w-[190px]"
            >
              {sorts.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="pb-4">
          <ResultsCount page={current} perPage={PER_PAGE} total={results.length} noun="contests" />
        </div>

        <ResultsList
          items={items}
          emptyMessage={<>No contests match “{query}”.</>}
        />

        {totalPages > 1 && (
          <div className="pt-10">
            <Pagination
              label="Contest archive pagination"
              totalPages={totalPages}
              page={current}
              onChange={setPage}
            />
          </div>
        )}
      </div>
    </section>
  )
}
