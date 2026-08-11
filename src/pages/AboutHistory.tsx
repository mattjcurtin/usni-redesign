import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutSubNav from '@/sections/AboutSubNav'
import AboutPageHero from '@/sections/AboutPageHero'
import AboutHistoryIntro from '@/sections/AboutHistoryIntro'
import AboutHistoryActivities from '@/sections/AboutHistoryActivities'
import AboutGetInvolved from '@/sections/AboutGetInvolved'

export default function AboutHistory() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutSubNav />
        <AboutPageHero
          eyebrow="Since 1873"
          title="Our History"
          deck="Fifteen naval officers, a post–Civil War Navy, and the forum they founded on the grounds of the U.S. Naval Academy."
          breadcrumbLabel="History"
        />
        <AboutHistoryIntro />
        <AboutHistoryActivities />
        <AboutGetInvolved />
      </main>
      <Footer />
    </div>
  )
}
