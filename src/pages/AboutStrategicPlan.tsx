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
          eyebrow="Looking Ahead"
          title="Strategic Plan 2030"
          deck="How the Naval Institute intends to grow its reach and influence through the next decade of maritime competition."
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
