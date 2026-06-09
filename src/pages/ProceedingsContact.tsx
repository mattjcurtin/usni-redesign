import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProceedingsSubNav from '@/sections/ProceedingsSubNav'
import ProceedingsContactHero from '@/sections/ProceedingsContactHero'
import ProceedingsContactContent from '@/sections/ProceedingsContactContent'

export default function ProceedingsContact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProceedingsSubNav />
        <ProceedingsContactHero />
        <ProceedingsContactContent />
      </main>
      <Footer />
    </div>
  )
}
