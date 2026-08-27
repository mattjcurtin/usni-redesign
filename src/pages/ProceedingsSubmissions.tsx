import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProceedingsSubNav from '@/sections/ProceedingsSubNav'
import PageHero from '@/sections/PageHero'
import ProceedingsSubmissionsContent from '@/sections/ProceedingsSubmissionsContent'

/**
 * Proceedings submission guidelines.
 *
 * The Proceedings sub-nav and the Contact page have both linked here all along
 * (ProceedingsSubNav, ProceedingsContactContent's closing banner) with nothing
 * at the other end. Structure and copy follow the live page at
 * /periodicals/proceedings-magazine/submission-guidelines section for
 * section; only the styling is the redesign's.
 */
export default function ProceedingsSubmissions() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProceedingsSubNav />

        {/* No eyebrow or lede: the live page's header is the title alone, and
            the breadcrumb already names Proceedings a line above. */}
        <PageHero
          title="Proceedings Submission Guidelines"
          breadcrumb={
            <nav
              aria-label="Breadcrumb"
              className="border-b border-[#C2DDFF] pb-4 flex items-center gap-2 text-sm"
            >
              <a href="/" className="font-body font-bold text-navy-subtle hover:text-navy-bolder transition-colors">
                Home
              </a>
              <span className="text-neutral-subtle">/</span>
              <a href="/proceedings" className="font-body font-bold text-navy-subtle hover:text-navy-bolder transition-colors">
                Proceedings
              </a>
              <span className="text-neutral-subtle">/</span>
              <span className="font-body italic text-neutral-subtle">Submission Guidelines</span>
            </nav>
          }
        />

        <ProceedingsSubmissionsContent />
      </main>
      <Footer />
    </div>
  )
}
