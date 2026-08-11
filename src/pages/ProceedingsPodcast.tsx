import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProceedingsSubNav from '@/sections/ProceedingsSubNav'
import ProceedingsPodcastHero from '@/sections/ProceedingsPodcastHero'
import ProceedingsPodcastEpisodes from '@/sections/ProceedingsPodcastEpisodes'

export default function ProceedingsPodcast() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProceedingsSubNav />
        <ProceedingsPodcastHero />
        <ProceedingsPodcastEpisodes />
      </main>
      <Footer />
    </div>
  )
}
