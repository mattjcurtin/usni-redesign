import type { Article } from '@/types'

import imgEditorsPage from '@/assets/images/proceedings-article-images/The Expeditionary Edge- Reorienting for Major Combat Ops.jpg'
import imgCeoNotes from '@/assets/images/proceedings-article-images/CEO Notes.jpg'
import imgCommentDiscussion from '@/assets/images/proceedings-article-images/Comment & Discussion.jpg'
import imgNeedToKnow from '@/assets/images/proceedings-article-images/Unmanned Systems On, Above, and Below.jpg'
import imgCommentaryHeavyweight from '@/assets/images/proceedings-article-images/Train for a Heavyweight Bout.jpg'
import imgNowHearThis from '@/assets/images/proceedings-article-images/Torpedoes and Torpedoman’s Mates for ASW.jpg'
import imgNobodyAskedCutters from '@/assets/images/proceedings-article-images/Layered Air Defense for National Security Cutters.jpg'
import imgFromTheDeckplates from '@/assets/images/proceedings-article-images/The Next Evolution in Manned-Unmanned Teaming.jpg'
import img20YearsExpeditionary from '@/assets/images/proceedings-article-images/20 Years of Navy Expeditionary Forces—and the Road Ahead.jpg'
import imgShatteringLodgment from '@/assets/images/proceedings-article-images/Shattering the Lodgment- Standoff Area-Effect Fires for Taiwan’s Defense.jpg'
import imgNeptunesTrident from '@/assets/images/proceedings-article-images/Sharpening Neptune’s Trident- How the Navy Can Navigate the Fourth Industrial Revolution.jpg'
import imgPrepareMarineCorps from '@/assets/images/proceedings-article-images/Prepare the Marine Corps for a Protracted War.jpg'
import imgThreeMefs from '@/assets/images/proceedings-article-images/Three MEFs Won’t Be Enough.jpg'
import imgYijiangshan from '@/assets/images/proceedings-article-images/Understanding China’s Amphibious Warfare- The Yijiangshan Case Study.jpg'
import imgMilitaryMedicine from '@/assets/images/proceedings-article-images/Military Medicine Must Adapt.jpg'
import imgData2030 from '@/assets/images/proceedings-article-images/Data 2030- From Disjointed to Joint.jpg'
import imgNavalIntelligenceAutonomy from '@/assets/images/proceedings-article-images/Naval Intelligence in the Age of Autonomy, AI, and Attritable Mass.jpg'
import imgFortifyingDigitalWatch from '@/assets/images/proceedings-article-images/Fortifying the Digital Watch.jpg'
import imgFromOurWebsite from '@/assets/images/proceedings-article-images/From Our Website- USNI.ORG.jpg'
import imgLeadershipForum from '@/assets/images/proceedings-article-images/Get Beyond the Checklist Mentality.jpg'
import imgProfNotesUgv from '@/assets/images/proceedings-article-images/The Marine Corps Needs to Make Up Ground With UGVs.jpg'
import imgProfNotesCgMda from '@/assets/images/proceedings-article-images/Unmanned Systems for Coast Guard Maritime Domain Awareness.jpg'
import imgBookReviews from '@/assets/images/proceedings-article-images/Book Reviews.jpg'
import imgWhereWeWere from '@/assets/images/proceedings-article-images/Where We Were.jpg'
import imgFromOurArchive from '@/assets/images/proceedings-article-images/From Our Archive.jpg'
import imgInnovationCell from '@/assets/images/proceedings-article-images/One Last Mission for the Legacy Hornets.jpg'
import imgCombatFleets from '@/assets/images/proceedings-article-images/Russian Spy Ship Yantar- Queen of the Gray Zone .jpg'
import imgLestWeForget from '@/assets/images/proceedings-article-images/‘Stepchildren of the Navy’.jpg'
import imgSponsoredMoc from '@/assets/images/proceedings-article-images/Extending the MOC’s Reach- How Marines Can Keep the Fleet Connected—From Land to Sea.png'
import imgUkMaritimeOutload from '@/assets/images/proceedings-article-images/UK Maritime Sector Support to a Strategic Base Outload- From Capacity to Competitive Advantage .jpg'
import imgNobodyAskedNafac from "@/assets/images/proceedings-article-images/NAFAC's Proven Prescience.jpg"
import imgCommentaryHormuz from '@/assets/images/proceedings-article-images/The Perilous Options in the Strait of Hormuz.jpg'
import imgOldBooks from '@/assets/images/proceedings-article-images/Old Books Bring Forth New Ideas.jpg'
import imgCommentaryIranianIslands from '@/assets/images/proceedings-article-images/Seizing Iranian Offshore Islands- High Risk, Low Payoff .jpg'

/**
 * The complete April 2026 table of contents — all 34 items, in the order the
 * issue page lists them. Transcribed from
 * /magazines/proceedings/2026/april on usni.org.
 *
 * `category` carries each item's department (Editor's Page, Combat Fleets, Now
 * Hear This, and so on). Every entry has its own artwork in
 * assets/images/proceedings-article-images, named after the article title.
 */
export const aprilIssueArticles: Article[] = [
  {
    id: 'apr-editors-page',
    category: "Editor's Page",
    headline: 'The Expeditionary Edge: Reorienting for Major Combat Ops',
    excerpt:
      'Each April, we focus on expeditionary warfare—a broad topic encompassing everything from amphibious warfare to the various communities of the Navy Expeditionary Combat Command.',
    date: 'April 2026',
    image: imgEditorsPage,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-ceo-notes',
    category: 'CEO Notes',
    headline: 'CEO Notes',
    excerpt: 'Notes on upcoming events, new book releases from the Naval Institute Press, and more!',
    date: 'April 2026',
    image: imgCeoNotes,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-comment-discussion',
    category: 'Comment & Discussion',
    headline: 'Comment & Discussion',
    excerpt: 'Readers respond to articles on surface warfare, shipboard virtual reality, and more.',
    date: 'April 2026',
    image: imgCommentDiscussion,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-need-to-know',
    category: 'Need to Know',
    headline: 'Unmanned Systems On, Above, and Below',
    author: "By Brian O'Rourke",
    excerpt:
      'The Navy has committed considerable time and resources to developing UxSs—unmanned aerial (UAS), surface (USV), and undersea (UUV) systems and vehicles.',
    date: 'April 2026',
    image: imgNeedToKnow,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-commentary-heavyweight',
    category: 'Commentary',
    headline: 'Train for a Heavyweight Bout',
    author: 'By Major Michael Hanson, U.S. Marine Corps',
    excerpt:
      'All Marines—leaders and subordinates—need to be training against the pacing threat in every tactical event they conduct.',
    date: 'April 2026',
    image: imgCommentaryHeavyweight,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-now-hear-this',
    category: 'Now Hear This',
    headline: "Torpedoes and Torpedoman's Mates for ASW",
    author: 'By Lieutenant Sean E. Jernigan, U.S. Navy',
    excerpt:
      'The Navy cannot ignore the warfare area that took so many lives and ships during World War II.',
    date: 'April 2026',
    image: imgNowHearThis,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-nobody-asked-cutters',
    category: 'Nobody Asked Me, But . . .',
    headline: 'Layered Air Defense for National Security Cutters',
    author: 'By Lieutenant Commander Keith Blevins, U.S. Coast Guard',
    excerpt:
      'To be a contributing member of the joint force, not a liability requiring escort, the NSC requires a layered air defense system.',
    date: 'April 2026',
    image: imgNobodyAskedCutters,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-from-the-deckplates',
    category: 'From the Deckplates',
    headline: 'The Next Evolution in Manned-Unmanned Teaming',
    author: 'By Petty Officer First Class David Koczan, U.S. Navy',
    excerpt:
      'Global threats evolve more rapidly today, which means even greater adaptability and rapid integration of new technologies are necessary to maintain this edge.',
    date: 'April 2026',
    image: imgFromTheDeckplates,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-20-years-expeditionary',
    category: 'Featured Article',
    headline: '20 Years of Navy Expeditionary Forces—and the Road Ahead',
    author: 'By Rear Admiral Brad J. Andros, U.S. Navy',
    excerpt: 'Navy expeditionary forces are shifting from counterinsurgency to great power competition.',
    date: 'April 2026',
    image: img20YearsExpeditionary,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-shattering-lodgment',
    category: 'Featured Article',
    headline: "Shattering the Lodgment: Standoff Area-Effect Fires for Taiwan's Defense",
    author: 'By Captain Zane Tremmel, U.S. Marine Corps',
    excerpt: "The United States must invest in weapons to break enemy cohesion on Taiwan's beaches.",
    date: 'April 2026',
    image: imgShatteringLodgment,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-neptunes-trident',
    category: 'Featured Article',
    headline: "Sharpening Neptune's Trident: How the Navy Can Navigate the Fourth Industrial Revolution",
    author:
      'By Colonel Pat Garrett, U.S. Marine Corps (Retired), and Lieutenant Colonel Frank Hoffman, U.S. Marine Corps Reserve (Retired)',
    excerpt:
      'Digital, physical, and biological technologies are reshaping militaries; the Navy must take charge.',
    date: 'April 2026',
    image: imgNeptunesTrident,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-prepare-marine-corps',
    category: 'Featured Article',
    headline: 'Prepare the Marine Corps for a Protracted War',
    author: 'By Lieutenant Colonel Brian Kerg, U.S. Marine Corps',
    excerpt:
      'The next war is unlikely to be short and sharp, and the Marine Corps must be ready to reconstitute and expand its force.',
    date: 'April 2026',
    image: imgPrepareMarineCorps,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-three-mefs',
    category: 'Featured Article',
    headline: "Three MEFs Won't Be Enough",
    author: 'By Corporal Richard Sweeney III, U.S. Marine Corps Reserve',
    excerpt: 'The Marine Corps needs a plan to keep fighting once the casualties mount.',
    date: 'April 2026',
    image: imgThreeMefs,
    href: '/proceedings/three-mefs',
  },
  {
    id: 'apr-yijiangshan',
    category: 'Special',
    headline: "Understanding China's Amphibious Warfare: The Yijiangshan Case Study",
    author: 'By Lyle Goldstein',
    excerpt: 'Chinese strategists continue to study the amphibious battle for Yijiangshan.',
    date: 'April 2026',
    image: imgYijiangshan,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-military-medicine',
    category: 'Featured Article',
    headline: 'Military Medicine Must Adapt',
    author: 'By Captains Jack Brandau and Matthew Tadlock, U.S. Navy',
    excerpt: 'New technologies have changed the calculus for combat casualty care.',
    date: 'April 2026',
    image: imgMilitaryMedicine,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-data-2030',
    category: 'Featured Article',
    headline: 'Data 2030: From Disjointed to Joint',
    author: 'By Captain Scot Seitz, U.S. Marine Corps',
    excerpt: 'The Marine Corps should set the standard for an armed forces–wide digital kill chain.',
    date: 'April 2026',
    image: imgData2030,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-naval-intelligence-autonomy',
    category: 'Featured Article',
    headline: 'Naval Intelligence in the Age of Autonomy, AI, and Attritable Mass',
    author: 'By Shawn Rostker',
    excerpt:
      'Without a shift in how intelligence is collected, analyzed, and disseminated, the unmanned fleet risks becoming a ghost armada.',
    date: 'April 2026',
    image: imgNavalIntelligenceAutonomy,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-fortifying-digital-watch',
    category: 'Featured Article',
    headline: 'Fortifying the Digital Watch',
    author: 'By Lieutenant Commanders Keith Nelson, Andrew Forester, and Yojana Garcia, U.S. Navy',
    excerpt: 'The Navy needs new institutional wiring to attract and retain cyber warriors.',
    date: 'April 2026',
    image: imgFortifyingDigitalWatch,
    href: '/proceedings/fortifying-digital-watch',
  },
  {
    id: 'apr-from-our-website',
    category: 'Article',
    headline: 'From Our Website: USNI.ORG',
    excerpt:
      'Proceedings is more than just a print magazine. Here are excerpts from some of the online-only content you may have missed.',
    date: 'April 2026',
    image: imgFromOurWebsite,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-leadership-forum',
    category: 'Leadership Forum',
    headline: 'Get Beyond the Checklist Mentality',
    author: 'By Lieutenant Commander Randy L. Johnston, U.S. Coast Guard',
    excerpt:
      'Operations and personnel matters are not always as clear-cut as templates, checklists, and manuals; therefore, Coast Guard officers need to know how to lead in the gray.',
    date: 'April 2026',
    image: imgLeadershipForum,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-prof-notes-ugv',
    category: 'Professional Notes',
    headline: 'The Marine Corps Needs to Make Up Ground With UGVs',
    author: 'By Captain Karl Flynn, U.S. Marine Corps',
    excerpt:
      'Unmanned ground vehicles offer a wide variety of tactical applications and significantly reduce the risk to infantry personnel.',
    date: 'April 2026',
    image: imgProfNotesUgv,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-prof-notes-cg-mda',
    category: 'Professional Notes',
    headline: 'Unmanned Systems for Coast Guard Maritime Domain Awareness',
    author: 'By Lieutenant Marshall Grant, U.S. Coast Guard',
    excerpt:
      'Emerging technology and unmanned systems offer the Coast Guard a vital opportunity to build and sustain a COP tailored to its operational requirements.',
    date: 'April 2026',
    image: imgProfNotesCgMda,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-book-reviews',
    category: 'Book Reviews',
    headline: 'Book Reviews',
    excerpt: 'Experts review The Price of Victory, and other new and noteworthy books.',
    date: 'April 2026',
    image: imgBookReviews,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-where-we-were',
    category: 'Where We Were',
    headline: 'Where We Were',
    excerpt: 'A look back at issues of Proceedings from 1926, 1951, and 1976.',
    date: 'April 2026',
    image: imgWhereWeWere,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-from-our-archive',
    category: 'From Our Archive',
    headline: 'From Our Archive',
    excerpt:
      'A 90-mm gun M48 comes ashore during an amphibious assault landing exercise at Camp Pendleton, a state military reservation in Virginia.',
    date: 'April 2026',
    image: imgFromOurArchive,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-innovation-cell',
    category: 'The Innovation Cell',
    headline: 'One Last Mission for the Legacy Hornets',
    author: 'By Captain Karl Flynn, U.S. Marine Corps',
    excerpt:
      'Converting legacy Hornets into CASMs would certainly be challenging, but multiple precedents should make it worth considering.',
    date: 'April 2026',
    image: imgInnovationCell,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-combat-fleets',
    category: 'Combat Fleets',
    headline: 'Russian Spy Ship Yantar: Queen of the Gray Zone',
    author: 'By Eric Wertheim',
    excerpt:
      'Operated by the Russian Directorate of Deep Sea Research (GUGI), she is officially classed as an oceanographic research vessel.',
    date: 'April 2026',
    image: imgCombatFleets,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-lest-we-forget',
    category: 'Lest We Forget',
    headline: '‘Stepchildren of the Navy’',
    author: 'By Lieutenant Commander Thomas J. Cutler, U.S. Navy (Retired)',
    excerpt:
      'Remembered by one participant as the “Navy’s stepchildren,” more than 112,000 men embarked in more than 6,000 merchant ships as the Navy’s Armed Guard.',
    date: 'April 2026',
    image: imgLestWeForget,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-sponsored-moc',
    category: 'Sponsored Article',
    headline: "Extending the MOC's Reach: How Marines Can Keep the Fleet Connected—From Land to Sea",
    excerpt:
      'Advanced edge networks—supported by AI agents—are 21st-century characteristics of how the Navy and Marines can campaign more closely together to close kill chains and enable seamless operations.',
    // Carries a March date in the source listing — it is a sponsored placement,
    // not part of the April editorial line-up.
    date: 'March 2026',
    image: imgSponsoredMoc,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-uk-maritime-outload',
    category: 'Article',
    headline:
      'UK Maritime Sector Support to a Strategic Base Outload: From Capacity to Competitive Advantage',
    author: 'Capt Tim Grimley RN',
    excerpt:
      'Originally published in The Naval Review. The author reinforces the case for commonsense port infrastructure national security priorities in terms of what he describes as “seamanship applied to national logistics.”',
    date: 'April 2026',
    image: imgUkMaritimeOutload,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-nobody-asked-nafac',
    category: 'Nobody Asked Me, But . . .',
    headline: "NAFAC's Proven Prescience",
    author: 'By Midshipman First Class Jack Anderson',
    excerpt: 'Pay attention to the Naval Academy Foreign Affairs Conference.',
    date: 'April 2026',
    image: imgNobodyAskedNafac,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-commentary-hormuz',
    category: 'Commentary',
    headline: 'The Perilous Options in the Strait of Hormuz',
    author: 'Michael Baucum',
    excerpt:
      'What happens next will determine how deep the United States goes into another Middle East war.',
    date: 'April 2026',
    image: imgCommentaryHormuz,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-old-books',
    category: 'Featured Article',
    headline: 'Old Books Bring Forth New Ideas',
    author: 'By Major Michael Hanson, U.S. Marine Corps',
    excerpt: 'The U.S. Sea Services should use new technology to mine old publications for timeless ideas.',
    date: 'April 2026',
    image: imgOldBooks,
    href: '/proceedings/apr-2026',
  },
  {
    id: 'apr-commentary-iranian-islands',
    category: 'Commentary',
    headline: 'Seizing Iranian Offshore Islands: High Risk, Low Payoff',
    author: 'By Brandon Carr',
    excerpt:
      'The ground operations the United States is considering carry significant tactical and operational risks and major strategic flaws.',
    date: 'April 2026',
    image: imgCommentaryIranianIslands,
    href: '/proceedings/apr-2026',
  },
]
