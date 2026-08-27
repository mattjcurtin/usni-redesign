import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NavalHistorySubNav from '@/sections/NavalHistorySubNav'
import NavalHistoryAllIssuesHero from '@/sections/NavalHistoryAllIssuesHero'
import NavalHistoryAllIssuesGrid from '@/sections/NavalHistoryAllIssuesGrid'

export default function NavalHistoryAllIssues() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <NavalHistorySubNav />
        <NavalHistoryAllIssuesHero />
        <NavalHistoryAllIssuesGrid />
      </main>
      <Footer />
    </div>
  )
}
