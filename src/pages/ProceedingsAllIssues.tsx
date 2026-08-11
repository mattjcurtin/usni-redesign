import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProceedingsSubNav from '@/sections/ProceedingsSubNav'
import ProceedingsAllIssuesHero from '@/sections/ProceedingsAllIssuesHero'
import ProceedingsAllIssuesGrid from '@/sections/ProceedingsAllIssuesGrid'

export default function ProceedingsAllIssues() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProceedingsSubNav />
        <ProceedingsAllIssuesHero />
        <ProceedingsAllIssuesGrid />
      </main>
      <Footer />
    </div>
  )
}
