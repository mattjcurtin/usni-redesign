import { useState } from 'react'
import Pagination from '@/components/ui/Pagination'

import aug26Cover from '@/assets/images/proceedings-magazine-aug26-cover.png'
import jul26Cover from '@/assets/images/proceedings-magazine-jul26-cover.png'
import jun26Cover from '@/assets/images/proceedings-magazine-jun26-cover.png'
import may26Cover from '@/assets/images/proceedings-magazine-may26-cover.png'
import apr26Cover from '@/assets/images/proceedings-magazine-april-cover.png'
import mar26Cover from '@/assets/images/proceedings-magazine-march-cover.png'
import feb26Cover from '@/assets/images/proceedings-magazine-feb-cover.png'
import jan26Cover from '@/assets/images/proceedings-magazine-jan26-cover.png'
import dec25Cover from '@/assets/images/proceedings-magazine-dec25-cover.png'
import nov25Cover from '@/assets/images/proceedings-magazine-nov25-cover.png'
import oct25Cover from '@/assets/images/proceedings-magazine-oct25-cover.png'
import sep25Cover from '@/assets/images/proceedings-magazine-sept25-cover.png'
import aug25Cover from '@/assets/images/proceedings-magazine-aug25-cover.png'
import jul25Cover from '@/assets/images/proceedings-magazine-jul25-cover.png'
import jun25Cover from '@/assets/images/proceedings-magazine-jun25-cover.png'
import may25Cover from '@/assets/images/proceedings-magazine-may25-cover.png'

interface Issue {
  month: string
  year: number
  vol: string
  cover: string
  href: string
}

const issues: Issue[] = [
  { month: 'August', year: 2026, vol: 'Vol. 152/8/1,482', cover: aug26Cover, href: '#' },
  { month: 'July', year: 2026, vol: 'Vol. 152/7/1,481', cover: jul26Cover, href: '#' },
  { month: 'June', year: 2026, vol: 'Vol. 152/6/1,480', cover: jun26Cover, href: '#' },
  { month: 'May', year: 2026, vol: 'Vol. 152/5/1,479', cover: may26Cover, href: '#' },
  { month: 'April', year: 2026, vol: 'Vol. 152/4/1,478', cover: apr26Cover, href: '/proceedings/apr-2026' },
  { month: 'March', year: 2026, vol: 'Vol. 152/3/1,477', cover: mar26Cover, href: '#' },
  { month: 'February', year: 2026, vol: 'Vol. 152/2/1,476', cover: feb26Cover, href: '#' },
  { month: 'January', year: 2026, vol: 'Vol. 152/1/1,475', cover: jan26Cover, href: '#' },
  { month: 'December', year: 2025, vol: 'Vol. 151/12/1,474', cover: dec25Cover, href: '#' },
  { month: 'November', year: 2025, vol: 'Vol. 151/11/1,473', cover: nov25Cover, href: '#' },
  { month: 'October', year: 2025, vol: 'Vol. 151/10/1,472', cover: oct25Cover, href: '#' },
  { month: 'September', year: 2025, vol: 'Vol. 151/9/1,471', cover: sep25Cover, href: '#' },
  { month: 'August', year: 2025, vol: 'Vol. 151/8/1,470', cover: aug25Cover, href: '#' },
  { month: 'July', year: 2025, vol: 'Vol. 151/7/1,469', cover: jul25Cover, href: '#' },
  { month: 'June', year: 2025, vol: 'Vol. 151/6/1,468', cover: jun25Cover, href: '#' },
  { month: 'May', year: 2025, vol: 'Vol. 151/5/1,467', cover: may25Cover, href: '#' },
]

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const selectClasses =
  'font-body text-sm text-navy-bolder border border-[#94A3B8] px-3 py-2.5 pr-8 outline-none ' +
  'focus:border-navy-bright focus:shadow-[0_0_0_3px_rgba(4,102,200,0.15)] bg-white transition'

function IssueCard({ issue }: { issue: Issue }) {
  return (
    <a href={issue.href} className="group flex flex-col">
      <div className="aspect-[534/728] overflow-hidden bg-neutral-subtlest">
        <img
          src={issue.cover}
          alt={`Proceedings ${issue.month} ${issue.year} cover`}
          className="w-full h-full object-cover shadow-md group-hover:opacity-90 transition-opacity"
        />
      </div>
      <p className="font-body font-bold text-[17px] lg:text-[18px] text-navy-bolder leading-snug mt-4 group-hover:text-navy-subtle transition-colors">
        Proceedings &ndash; {issue.month} {issue.year}
        <span className="block">{issue.vol}</span>
      </p>
    </a>
  )
}

export default function ProceedingsAllIssuesGrid() {
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

        {/* ── Donor credit ── */}
        <div className="flex items-center justify-center gap-3 bg-[#EBF4FF] border border-[#C2DDFF] px-6 py-4 mt-12">
          <i className="fa-solid fa-circle-info text-navy-bolder text-[18px] flex-shrink-0" aria-hidden="true" />
          <p className="font-body font-bold text-base text-navy-bolder">
            Digital <em>Proceedings</em> content made possible by a gift from CAPT Roger Ekman, USN (Ret.)
          </p>
        </div>

      </div>
    </section>
  )
}
