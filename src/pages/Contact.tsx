import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/sections/PageHero'
import JumpLinkNav from '@/components/ui/JumpLinkNav'
import {
  ContactArchives,
  ContactFoundation,
  ContactGeneral,
  ContactMembership,
  ContactPress,
  ContactVisiting,
} from '@/sections/ContactSections'

/**
 * Contact USNI.
 *
 * Consolidates five standalone contact pages — About, Membership, Donate,
 * Press, and Archives — into one, with a sticky jump-link nav standing in for
 * what used to be five separate destinations. The About and Membership pages
 * carried identical visiting-directions blocks, so that content appears once
 * here.
 */
const jumpLinks = [
  { label: 'General inquiries', href: '#general' },
  { label: 'Member services', href: '#membership' },
  { label: 'Foundation', href: '#foundation' },
  { label: 'Naval Institute Press', href: '#press' },
  { label: 'Archives & research', href: '#archives' },
  { label: 'Visiting us', href: '#visiting' },
]

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Contact USNI"
          description="Reach the right department directly — member services, the Naval Institute Foundation, the Press, or the editorial offices in Annapolis."
        />
        <JumpLinkNav links={jumpLinks} mobileLabel="Contact USNI" />

        <ContactGeneral />
        <ContactMembership />
        <ContactFoundation />
        <ContactPress />
        <ContactArchives />
        <ContactVisiting />
      </main>
      <Footer />
    </div>
  )
}
