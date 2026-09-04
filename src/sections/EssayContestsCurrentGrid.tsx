import { contestEntryStat, essayContests, type EssayContest } from '@/data/essayContests'

/**
 * Current contests, as cards.
 *
 * The live landing page says only "There are no active essay contests at this
 * time" while five 2026 contests are in fact open on their own pages, so the
 * job here is to make the open contests findable and comparable — deadline,
 * word limit, and top prize on the face of every card.
 */

// Light grounds with dark type, so the badge reads as a quiet label on the
// photo rather than competing with the gold CTAs elsewhere on the page.
const statusBadge: Record<EssayContest['status'], { label: string; className: string }> = {
  open: { label: 'Open', className: 'bg-[#d9f2e3] text-[#0a5c2e]' },
  'closing-soon': { label: 'Closing soon', className: 'bg-[#fbe7c2] text-[#6b4400]' },
  closed: { label: 'Closed', className: 'bg-neutral-subtlest text-neutral-bold' },
}

function ContestCard({ contest }: { contest: EssayContest }) {
  const badge = statusBadge[contest.status]
  const entryStat = contestEntryStat(contest)

  return (
    <a
      href={contest.href}
      className="group flex flex-col bg-white border border-navy-subtle hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-subtlest">
        <img
          src={contest.image}
          alt={contest.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-3 left-3 font-body font-bold text-xs uppercase tracking-[0.05em] px-2.5 py-1 ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex flex-col gap-1">
          <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-navy-subtle">
            {contest.year}
          </p>
          <h3 className="font-headline text-xl lg:text-[22px] text-navy-bolder leading-[1.2]">
            <span className="article-link article-link--card">{contest.title}</span>
          </h3>
          {contest.division && (
            <p className="font-body font-semibold text-sm text-navy-subtle">{contest.division}</p>
          )}
        </div>

        <p className="font-body text-sm text-neutral-subtle leading-relaxed flex-1">
          {contest.summary}
        </p>

        {/* Comparable facts, in the same slot on every card */}
        <dl className="grid grid-cols-3 gap-3 border-t border-border-light pt-3.5 mt-1">
          <div className="flex flex-col gap-0.5">
            <dt className="font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-subtle">
              Due
            </dt>
            <dd className="font-body font-bold text-sm text-navy-bolder">
              <time dateTime={contest.deadlineISO}>{contest.deadline.replace(/ 20\d\d$/, '')}</time>
            </dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-subtle">
              {entryStat.shortLabel}
            </dt>
            <dd className="font-body font-bold text-sm text-navy-bolder">
              {entryStat.value.replace(' words', 'w')}
            </dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-subtle">
              Top prize
            </dt>
            <dd className="font-body font-bold text-sm text-navy-bolder">
              {contest.prizes[0].amount}
            </dd>
          </div>
        </dl>
      </div>
    </a>
  )
}

export default function EssayContestsCurrentGrid() {
  return (
    <section className="bg-white py-14 lg:py-20" id="current-contests">
      <div className="container-site">
        <div className="border-t-2 border-navy-bold pt-8 mb-8">
          <h2 className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1]">
            Current Essay Contests
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {essayContests.map((contest) => (
            <ContestCard key={contest.slug} contest={contest} />
          ))}
        </div>
      </div>
    </section>
  )
}
