import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutSubNav from '@/sections/AboutSubNav'
import AboutPageHero from '@/sections/AboutPageHero'
import AboutStrategicPlanForeword from '@/sections/AboutStrategicPlanForeword'
import AboutStrategicPlanDocument from '@/sections/AboutStrategicPlanDocument'
import AboutGetInvolved from '@/sections/AboutGetInvolved'

export default function AboutStrategicPlan() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutSubNav />
        <AboutPageHero
          title="Strategic Plan 2030"
          subtitle="U.S. Naval Institute’s Strategic Plan"
          deck="We are extending the Institute’s reach and broadening its community, seeking a greater diversity of informed perspective from all professionals—young and old, enlisted and officers, civilians, and international professionals—to maintain the best, most effective forum possible."
          breadcrumbLabel="Strategic Plan"
        />
        <AboutStrategicPlanForeword />
        <AboutStrategicPlanDocument />
        <AboutGetInvolved />
      </main>
      <Footer />
    </div>
  )
}
