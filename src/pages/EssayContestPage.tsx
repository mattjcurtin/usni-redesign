import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EssayContestsSubNav from '@/sections/EssayContestsSubNav'
import EssayContestsHero from '@/sections/EssayContestsHero'
import EssayContestBody from '@/sections/EssayContestBody'
import EssayContestPreviousWinners from '@/sections/EssayContestPreviousWinners'
import { ButtonLink } from '@/components/ui/Button'
import { getContest, contestFullTitle, essaySubmitPath } from '@/data/essayContests'

/**
 * Shared template for every contest detail page — the routes in App.tsx pass the
 * slug, so all five contests stay one layout instead of five near-identical files.
 */
export default function EssayContestPage({ slug }: { slug: string }) {
  const contest = getContest(slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <EssayContestsSubNav />
        {/* Contests with banner art get the large split photo hero; the rest
            fall back to the light-blue interior header. */}
        <EssayContestsHero
          title={`${contest.year} ${contest.title}`}
          deck={contest.division}
          description={contest.summary}
          breadcrumbLabel={contestFullTitle(contest)}
          image={contest.heroImage}
          panelSide={contest.heroPanelSide}
          actions={
            contest.heroImage ? (
              <ButtonLink href={essaySubmitPath(contest)} variant="primary" size="md">
                {contest.submitLabel ?? 'Submit Your Essay'}
              </ButtonLink>
            ) : undefined
          }
        />
        <EssayContestBody contest={contest} />
        <EssayContestPreviousWinners contest={contest} />
      </main>
      <Footer />
    </div>
  )
}
