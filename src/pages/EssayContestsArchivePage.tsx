import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EssayContestsSubNav from '@/sections/EssayContestsSubNav'
import EssayContestsHero from '@/sections/EssayContestsHero'
import EssayContestsArchive from '@/sections/EssayContestsArchive'

export default function EssayContestsArchivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <EssayContestsSubNav />
        <EssayContestsHero
          title="Essay Contest Archive"
          // No count in the copy — the results header reports it from the data,
          // so the description never goes stale as contests are added.
          description="Every essay contest and writing award the Naval Institute has run. Each links to that contest's yearly editions and winners."
          breadcrumbLabel="Essay Contest Archive"
        />
        <EssayContestsArchive />
      </main>
      <Footer />
    </div>
  )
}
