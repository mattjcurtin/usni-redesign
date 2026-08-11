import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutSubNav from '@/sections/AboutSubNav'
import AboutHero from '@/sections/AboutHero'
import AboutMissionVision from '@/sections/AboutMissionVision'
import AboutPillars from '@/sections/AboutPillars'
import AboutQuickLinks from '@/sections/AboutQuickLinks'
import AboutGetInvolved from '@/sections/AboutGetInvolved'
import AdUnit from '@/components/ui/AdUnit'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutSubNav />
        <AboutHero />
        {/* The retired Mission & Vision page's content now lives here */}
        <AboutMissionVision />
        <AboutPillars />
        <AboutQuickLinks />
        <AdUnit />
        <AboutGetInvolved />
      </main>
      <Footer />
    </div>
  )
}
