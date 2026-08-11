import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EssayContestsSubNav from '@/sections/EssayContestsSubNav'
import EssayContestsHero from '@/sections/EssayContestsHero'
import EssayContestsCurrentGrid from '@/sections/EssayContestsCurrentGrid'
import EssayContestsAbout from '@/sections/EssayContestsAbout'
import EssayContestsArchiveTeaser from '@/sections/EssayContestsArchiveTeaser'
import { ButtonLink } from '@/components/ui/Button'
import { essayContestsIntro } from '@/data/essayContests'
import heroImage from '@/assets/images/essay-contests-hero-main.jpg'

export default function EssayContests() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <EssayContestsSubNav />
        {/* Eyebrow carries the section name and the headline carries the pitch,
            matching how the Giving landing hero is composed */}
        <EssayContestsHero
          eyebrow="Essay Contests"
          title="Dare to Read, Think, Speak, and Write"
          description={`${essayContestsIntro.origin} ${essayContestsIntro.count}`}
          image={heroImage}
          actions={
            <>
              <ButtonLink href="#current-contests" variant="primary" size="md">
                See Open Contests
              </ButtonLink>
              <ButtonLink href="/essay-contests/submit" variant="outline" size="md">
                Submit an Essay
              </ButtonLink>
            </>
          }
        />
        {/* Absorbed from the retired /essay-contests/about page; collapsed to
            one paragraph so it doesn't push the open contests down the page */}
        <EssayContestsAbout />
        <EssayContestsCurrentGrid />
        {/* The full archive is its own paged listing page */}
        <EssayContestsArchiveTeaser />
      </main>
      <Footer />
    </div>
  )
}
