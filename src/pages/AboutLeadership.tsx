import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutSubNav from '@/sections/AboutSubNav'
import AboutPageHero from '@/sections/AboutPageHero'
import JumpLinkNav from '@/components/ui/JumpLinkNav'
import LeadershipRoster from '@/sections/LeadershipRoster'
import AboutGetInvolved from '@/sections/AboutGetInvolved'
import {
  executiveStaff,
  boardOfDirectors,
  boardLiaisons,
  foundationTrustees,
  editorialBoard,
} from '@/data/leadership'

/**
 * Leadership & Staff.
 *
 * Merges four standalone pages on the current site — Executive Staff, Board of
 * Directors, Naval Institute Foundation Board of Trustees, and Editorial Board
 * — into one page, with a sticky jump-link nav standing in for what used to be
 * four separate sub-nav destinations.
 */
const jumpLinks = [
  { label: 'Executive Staff', href: '#executive-staff' },
  { label: 'Board of Directors', href: '#board-of-directors' },
  { label: 'Foundation Trustees', href: '#foundation-trustees' },
  { label: 'Editorial Board', href: '#editorial-board' },
]

const liaisonNote =
  'The U.S. Naval Institute is honored that the above have been appointed as Service Liaisons to the Institute’s Board of Directors. However, Liaisons are not officers or board members of the U.S. Naval Institute and their service as Liaisons does not imply Navy, Marine Corps, Coast Guard or Department of Defense endorsement of the Institute.'

export default function AboutLeadership() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutSubNav />
        <AboutPageHero
          title="Leadership & Staff"
          deck="The executives, directors, trustees, and editors who steward the Naval Institute and its mission as The Independent Forum of the Sea Services."
          breadcrumbLabel="Leadership & Staff"
        />
        <JumpLinkNav links={jumpLinks} />

        <LeadershipRoster
          id="executive-staff"
          title="Executive Staff"
          people={executiveStaff}
        />

        <LeadershipRoster
          id="board-of-directors"
          title="Board of Directors"
          people={boardOfDirectors}
          subgroup={{
            title: 'Board of Directors Liaisons',
            people: boardLiaisons,
            note: liaisonNote,
          }}
          background="light-blue"
        />

        <LeadershipRoster
          id="foundation-trustees"
          title="Naval Institute Foundation Board of Trustees"
          people={foundationTrustees}
        />

        <LeadershipRoster
          id="editorial-board"
          title="Editorial Board"
          people={editorialBoard}
          background="light-blue"
        />

        <AboutGetInvolved />
      </main>
      <Footer />
    </div>
  )
}
