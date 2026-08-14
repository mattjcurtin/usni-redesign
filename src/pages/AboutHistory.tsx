import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutSubNav from '@/sections/AboutSubNav'
import AboutHistoryHero from '@/sections/AboutHistoryHero'
import AboutHistoryIntro from '@/sections/AboutHistoryIntro'
import AboutHistoryActivities from '@/sections/AboutHistoryActivities'
import AboutHistoryMoreInfo from '@/sections/AboutHistoryMoreInfo'

export default function AboutHistory() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutSubNav />
        <AboutHistoryHero />
        <AboutHistoryIntro />
        <AboutHistoryActivities />
        <AboutHistoryMoreInfo />
      </main>
      <Footer />
    </div>
  )
}
