import { useSearchParams } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EssayContestsSubNav from '@/sections/EssayContestsSubNav'
import EssayContestsHero from '@/sections/EssayContestsHero'
import EssaySubmitForm from '@/sections/EssaySubmitForm'
import {
  essayContests,
  contestEntryStat,
  contestFullTitle,
  essaySubmitPath,
  type EssayContest,
} from '@/data/essayContests'

/**
 * One submission page for every contest.
 *
 * The contest comes from a `?contest=<slug>` query param rather than its own
 * route, so adding a contest to the data adds a working submission page with no
 * routing change. With no slug (or an unknown one) the page asks which contest
 * you're entering instead of erroring.
 */

function ContestBar({ contest }: { contest: EssayContest }) {
  return (
    // White ground: the hero above already supplies the light-blue band, and two
    // stacked blue sections read as one oversized header.
    <section className="bg-white pt-10 lg:pt-12">
      <div className="container-site">
        <div className="max-w-[760px] mx-auto bg-white border border-navy-subtle">
          <div className="px-5 py-4 lg:px-6 border-b border-border-light">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-neutral-subtle mb-1">
              You are entering
            </p>
            <h2 className="font-headline text-2xl lg:text-[28px] text-navy-bolder leading-tight">
              <a href={contest.href} className="hover:text-[#0466c8] transition-colors">
                {contest.year} {contestFullTitle(contest)}
              </a>
            </h2>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-light">
            <div className="flex flex-col gap-0.5 px-5 py-4 lg:px-6">
              <dt className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-neutral-subtle">
                Deadline
              </dt>
              <dd className="font-headline text-xl text-navy-bolder">
                <time dateTime={contest.deadlineISO}>{contest.deadline}</time>
              </dd>
            </div>
            <div className="flex flex-col gap-0.5 px-5 py-4 lg:px-6">
              <dt className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-neutral-subtle">
                {contestEntryStat(contest).label}
              </dt>
              <dd className="font-headline text-xl text-navy-bolder">
                {contestEntryStat(contest).value}
              </dd>
            </div>
            <div className="flex flex-col gap-0.5 px-5 py-4 lg:px-6">
              <dt className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-neutral-subtle">
                Top prize
              </dt>
              <dd className="font-headline text-xl text-navy-bolder">
                {contest.prizes[0].amount}
              </dd>
            </div>
          </dl>

          <p className="px-5 py-3.5 lg:px-6 border-t border-border-light font-body text-sm text-neutral-subtle">
            Entering a different contest?{' '}
            <a href="/essay-contests" className="text-[#023E7D] underline hover:no-underline">
              See all open contests
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

/**
 * Shown when no contest slug is supplied, so the page is never a dead end.
 * Every open contest takes entries through this form, photo contest included.
 */
function ContestPicker() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-site">
        <ul className="max-w-[760px] mx-auto flex flex-col gap-3">
          {essayContests.map((contest) => (
            <li key={contest.slug}>
              <a
                href={essaySubmitPath(contest)}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border border-border-light hover:border-navy-subtle bg-white px-5 py-4 transition-colors"
              >
                <span className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="font-headline text-lg text-navy-bolder leading-snug group-hover:text-[#0466c8] transition-colors">
                    {contest.year} {contest.title}
                  </span>
                  {contest.division && (
                    <span className="font-body font-semibold text-sm text-navy-subtle">
                      {contest.division}
                    </span>
                  )}
                </span>
                <span className="flex flex-wrap gap-x-5 gap-y-1 flex-shrink-0">
                  <span className="font-body text-sm text-neutral-subtle">
                    Due <span className="font-bold text-navy-bolder">{contest.deadline}</span>
                  </span>
                  <span className="font-body text-sm text-neutral-subtle">
                    {contestEntryStat(contest).value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function EssaySubmit() {
  const [params] = useSearchParams()
  const slug = params.get('contest')
  // An unknown slug falls through to the picker rather than erroring
  const contest = essayContests.find((c) => c.slug === slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <EssayContestsSubNav />
        <EssayContestsHero
          title="Submit Your Entry"
          // With a contest chosen the guidance lives in the form's Instructions
          // section, so the hero carries no description
          description={
            contest
              ? undefined
              : "Choose the contest you're entering. Each has its own deadline, entry limit, and eligibility rules."
          }
          breadcrumbLabel="Submit"
        />
        {contest ? (
          <>
            <ContestBar contest={contest} />
            <EssaySubmitForm contest={contest} />
          </>
        ) : (
          <ContestPicker />
        )}
      </main>
      <Footer />
    </div>
  )
}
