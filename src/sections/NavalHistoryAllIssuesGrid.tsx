import { useState } from 'react'
import Pagination from '@/components/ui/Pagination'

import aug26Cover from '@/assets/images/naval-history-magazine-aug26-cover.jpg'
import jun26Cover from '@/assets/images/naval-history-magazine-jun26-cover.jpg'
import apr26Cover from '@/assets/images/naval-history-magazine-apr26-cover.jpg'
import feb26Cover from '@/assets/images/naval-history-magazine-feb26-cover.jpg'
import dec25Cover from '@/assets/images/naval-history-magazine-dec25-cover.jpg'
import oct25Cover from '@/assets/images/naval-history-magazine-oct25-cover.jpg'
import aug25Cover from '@/assets/images/naval-history-magazine-aug25-cover.jpg'
import jun25Cover from '@/assets/images/naval-history-magazine-jun25-cover.jpg'
import apr25Cover from '@/assets/images/naval-history-magazine-apr25-cover.jpg'
import feb25Cover from '@/assets/images/naval-history-magazine-feb25-cover.jpg'
import dec24Cover from '@/assets/images/naval-history-magazine-dec24-cover.jpg'
import oct24Cover from '@/assets/images/naval-history-magazine-oct24-cover.jpg'
import aug24Cover from '@/assets/images/naval-history-magazine-aug24-cover.jpg'
import jun24Cover from '@/assets/images/naval-history-magazine-jun24-cover.jpg'
import apr24Cover from '@/assets/images/naval-history-magazine-apr24-cover.jpg'
import feb24Cover from '@/assets/images/naval-history-magazine-feb24-cover.jpg'

interface Issue {
  month: string
  year: number
  vol: string
  cover: string
  href: string
}

const issues: Issue[] = [
  { month: 'August', year: 2026, vol: 'Volume 40, Number 4', cover: aug26Cover, href: '/naval-history/aug-2026' },
  { month: 'June', year: 2026, vol: 'Volume 40, Number 3', cover: jun26Cover, href: '#' },
  { month: 'April', year: 2026, vol: 'Volume 40, Number 2', cover: apr26Cover, href: '#' },
  { month: 'February', year: 2026, vol: 'Volume 40, Number 1', cover: feb26Cover, href: '#' },
  { month: 'December', year: 2025, vol: 'Volume 39, Number 6', cover: dec25Cover, href: '#' },
  { month: 'October', year: 2025, vol: 'Volume 39, Number 5', cover: oct25Cover, href: '#' },
  { month: 'August', year: 2025, vol: 'Volume 39, Number 4', cover: aug25Cover, href: '#' },
  { month: 'June', year: 2025, vol: 'Volume 39, Number 3', cover: jun25Cover, href: '#' },
  { month: 'April', year: 2025, vol: 'Volume 39, Number 2', cover: apr25Cover, href: '#' },
  { month: 'February', year: 2025, vol: 'Volume 39, Number 1', cover: feb25Cover, href: '#' },
  { month: 'December', year: 2024, vol: 'Volume 38, Number 6', cover: dec24Cover, href: '#' },
  { month: 'October', year: 2024, vol: 'Volume 38, Number 5', cover: oct24Cover, href: '#' },
  { month: 'August', year: 2024, vol: 'Volume 38, Number 4', cover: aug24Cover, href: '#' },
  { month: 'June', year: 2024, vol: 'Volume 38, Number 3', cover: jun24Cover, href: '#' },
  { month: 'April', year: 2024, vol: 'Volume 38, Number 2', cover: apr24Cover, href: '#' },
  { month: 'February', year: 2024, vol: 'Volume 38, Number 1', cover: feb24Cover, href: '#' },
]

// Naval History publishes six times a year, so the month filter offers only the
// months an issue can fall in — unlike the live site's shared 12-month list,
// where half the options can never return a result.
const months = ['February', 'April', 'June', 'August', 'October', 'December']

const selectClasses =
  'font-body text-sm text-navy-bolder border border-[#94A3B8] px-3 py-2.5 pr-8 outline-none ' +
  'focus:border-navy-bright focus:shadow-[0_0_0_3px_rgba(4,102,200,0.15)] bg-white transition'

function IssueCard({ issue }: { issue: Issue }) {
  return (
    <a href={issue.href} className="group flex flex-col">
      {/* No overflow-hidden on the aspect box: the cover lifts out of it on
          hover and the deepened shadow falls outside it — the same move the
          book cards use. Clipping would eat both. */}
      <div className="aspect-[2400/3175] bg-neutral-subtlest">
        <img
          src={issue.cover}
          alt={`Naval History ${issue.month} ${issue.year} cover`}
          loading="lazy"
          /* Hand-rolled shadows rather than shadow-md/shadow-xl: those carry a
             negative spread and a big downward offset, so on a tall cover the
             blur pools under the bottom edge and pinches out at the corners,
             reading as a shadow cut off at the sides. Zero horizontal offset
             and no spread reduction wraps all four edges evenly. */
          className="w-full h-full object-cover transition-[transform,box-shadow] duration-300
            shadow-[0_2px_8px_rgba(0,18,51,0.14)]
            group-hover:-translate-y-2 group-hover:shadow-[0_10px_26px_rgba(0,18,51,0.24)]"
        />
      </div>
      <p className="font-body font-bold text-[17px] lg:text-[18px] text-navy-bolder leading-snug mt-4 group-hover:text-navy-subtle transition-colors">
        {/* article-link--card sweeps the blue underline from a hover anywhere
            on the card. Both lines carry it, as one span each rather than a
            block wrapper: the class clones its gradient per rendered line, so a
            long issue name that wraps still underlines every line of itself. */}
        <span className="article-link article-link--card">
          Naval History &ndash; {issue.month} {issue.year}
        </span>
        <br />
        <span className="article-link article-link--card">{issue.vol}</span>
      </p>
    </a>
  )
}

export default function NavalHistoryAllIssuesGrid() {
  const [year, setYear] = useState('all')
  const [month, setMonth] = useState('all')

  const filtered = issues.filter(
    (issue) =>
      (year === 'all' || issue.year === Number(year)) &&
      (month === 'all' || issue.month === month)
  )

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-site">

        {/* ── Filters ── */}
        <div className="flex flex-wrap items-end gap-4 lg:gap-6">
          <label className="flex flex-col gap-1.5">
            <span className="font-body font-semibold text-sm uppercase tracking-[0.08em] text-navy-bolder">
              Year
            </span>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={`select-field ${selectClasses}`}
              aria-label="Filter issues by year"
            >
              <option value="all">All Years</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="font-body font-semibold text-sm uppercase tracking-[0.08em] text-navy-bolder">
              Month
            </span>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={`select-field ${selectClasses}`}
              aria-label="Filter issues by month"
            >
              <option value="all">All Months</option>
              {months.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>
        </div>

        {/* ── Light accent separator between filters and the issue grid ── */}
        <div className="bg-[#C2DDFF] h-px w-full mt-8 mb-10" />

        {/* ── Issue grid: 4-up on desktop ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-10 lg:gap-y-12">
            {filtered.map((issue) => (
              <IssueCard key={`${issue.month}-${issue.year}`} issue={issue} />
            ))}
          </div>
        ) : (
          <p className="font-body text-lg text-neutral-subtle py-12 text-center">
            No issues match the selected filters.
          </p>
        )}

        {/* ── Pagination (demo) ── */}
        <div className="mt-14">
          <Pagination label="Archive pagination" />
        </div>

      </div>
    </section>
  )
}
