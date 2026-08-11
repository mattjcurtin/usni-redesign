import { useSearchParams } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EssayContestsSubNav from '@/sections/EssayContestsSubNav'
import EssaySubmitForm from '@/sections/EssaySubmitForm'
import {
  essayContests,
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
    <section className="bg-[#ebf4ff] py-8 lg:py-10">
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
                Word limit
              </dt>
              <dd className="font-headline text-xl text-navy-bolder">{contest.wordLimit}</dd>
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

/** Shown when no contest slug is supplied, so the page is never a dead end. */
function ContestPicker() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-site">
        <div className="max-w-[760px] mx-auto flex flex-col gap-6">
          <div className="border-t-2 border-navy-bold pt-8">
            <h1 className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1] mb-3">
              Submit your Essay
            </h1>
            <p className="font-body text-base lg:text-lg text-neutral-subtle leading-relaxed">
              Choose the contest you're entering. Each has its own deadline, word limit, and
              eligibility rules.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
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
                      {contest.wordLimit}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default function EssaySubmit() {
  const [params] = useSearchParams()
  const slug = params.get('contest')
  const contest = essayContests.find((c) => c.slug === slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <EssayContestsSubNav />
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
