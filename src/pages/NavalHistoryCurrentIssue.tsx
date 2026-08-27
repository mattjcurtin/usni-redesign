import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NavalHistorySubNav from '@/sections/NavalHistorySubNav'
import NavalHistoryIssueHero from '@/sections/NavalHistoryIssueHero'
import NavalHistoryIssueArticles from '@/sections/NavalHistoryIssueArticles'
import NavalHistoryMembershipCTA from '@/sections/NavalHistoryMembershipCTA'
import AdUnit from '@/components/ui/AdUnit'

export default function NavalHistoryCurrentIssue() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <NavalHistorySubNav />
        <NavalHistoryIssueHero />
        <AdUnit />
        <NavalHistoryIssueArticles />
        <NavalHistoryMembershipCTA />
      </main>
      <Footer />
    </div>
  )
}
