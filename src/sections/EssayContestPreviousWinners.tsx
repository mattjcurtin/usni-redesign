import {
  contestArchivePath,
  seriesForContest,
  type EssayContest,
} from '@/data/essayContests'

function ArrowIcon() {
  return (
    <svg
      className="w-3 h-3 flex-shrink-0"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6h8M6 2l4 4-4 4" />
    </svg>
  )
}

/**
 * Past winners callout.
 *
 * Replaces the full year-by-year winners list that used to sit here — that
 * belongs in the archive, not stacked at the foot of every contest page. Uses
 * the same contained navy billboard treatment as the landing page's archive
 * block, and links through to the archive pre-filtered to this contest.
 */
export default function EssayContestPreviousWinners({ contest }: { contest: EssayContest }) {
  const series = seriesForContest(contest)

  // Prefer the series' own figures; fall back to the transcribed winner years
  const editions = series?.editions ?? contest.previousWinners?.length ?? 0
  const years = series?.years

  const detail =
    editions > 0 && years
      ? `This contest has run ${editions} ${editions === 1 ? 'edition' : 'editions'} across ${years}. Browse the winning essays and past calls for entries.`
      : 'Browse the winning essays and past calls for entries in the contest archive.'

  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="container-site">
        <div className="bg-navy-bolder w-full flex items-center p-6 lg:p-12">
          <div className="border border-navy-bold w-full flex flex-col items-center text-center gap-4 px-6 py-10 lg:px-12 lg:py-16">
            <h2 className="font-headline text-[32px] lg:text-[48px] text-white leading-[1.1]">
              Looking for past winners?
            </h2>
            <p className="font-body text-lg lg:text-xl text-white/90 leading-[1.4] max-w-[640px]">
              {detail}
            </p>
            <div className="pt-3">
              <a
                href={contestArchivePath(contest)}
                className="inline-flex items-center gap-2 bg-gold text-navy-boldest font-body font-bold text-base tracking-[-0.5px] px-6 py-4 hover:bg-gold-dark transition-colors"
              >
                View Past Winners
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
