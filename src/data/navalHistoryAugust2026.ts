import type { Article } from '@/types'

import imgOnOurScope from '@/assets/images/naval-history-article-images/On Our Scope.jpg'
import imgForTheNation from '@/assets/images/naval-history-article-images/For The Nation’s 250th Birthday, An International Naval Review And Tall Ship Parade.jpg'
import imgWreckageOfThe from '@/assets/images/naval-history-article-images/Wreckage of the Coast Guard Cutter Tampa Discovered off Cornwall, United Kingdom.jpg'
import imgATributeTo from '@/assets/images/naval-history-article-images/A Tribute to Don Kazimir, Commanding Officer of the Grumman Submersible Ben Franklin.jpg'
import imgInContact from '@/assets/images/naval-history-article-images/In Contact.jpg'
import imgTheUssSuwannee from '@/assets/images/naval-history-article-images/The USS Suwannee (AO-33-CVE-27)- Oiler, Carrier, Kamikaze Survivor.jpg'
import imgTheNc4 from '@/assets/images/naval-history-article-images/The NC-4’s Second Act.jpg'
import imgClashOfArms from '@/assets/images/naval-history-article-images/Clash of Arms in a Dire Strait.jpg'
import imgOutfittingTheWorld from '@/assets/images/naval-history-article-images/Outfitting the World’s Navies.jpg'
import imgPatriotismOrProfit from '@/assets/images/naval-history-article-images/Patriotism ... or Profit.jpg'
import img50YearsOf from '@/assets/images/naval-history-article-images/50 Years of Persistence.jpg'
import imgThePerfectAmphibious from '@/assets/images/naval-history-article-images/‘The Perfect Amphibious Operation’.jpg'
import imgBattlingBasques from '@/assets/images/naval-history-article-images/Battling Basques.jpg'
import imgTheConvoyHeresy from '@/assets/images/naval-history-article-images/The Convoy Heresy.jpg'
import imgIntoTheFire from '@/assets/images/naval-history-article-images/Into the Fire, Twice.jpg'
import imgBookReviews from '@/assets/images/naval-history-article-images/Book Reviews.jpg'
import imgPawsOfThe from '@/assets/images/naval-history-article-images/Paws of the Past.jpg'
import imgSpiritAndConscience from '@/assets/images/naval-history-article-images/Spirit and Conscience.jpg'
import imgAnAssetTo from '@/assets/images/naval-history-article-images/‘An Asset to the Navy’.jpg'
import imgAMarineS from '@/assets/images/naval-history-article-images/A Marine’s Journey to France (1918–1919) in His Own Words.jpg'
import imgMoreThanA from '@/assets/images/naval-history-article-images/More Than a Parade- How America’s Naval Reviews Capture History.jpg'
import imgRememberingMySea from '@/assets/images/naval-history-article-images/Remembering My Sea Daddies- John McCain III.jpg'
import imgTheRoadTo from '@/assets/images/naval-history-article-images/The Road to Annapolis.jpg'
import imgSeamanshipHowStephen from '@/assets/images/naval-history-article-images/Seamanship- How Stephen B. Luce Wrote the Book on Practical Naval Education.jpg'
import imgWhatILearned from '@/assets/images/naval-history-article-images/What I Learned When I Used AI for Naval History Research.jpg'

/**
 * The complete August 2026 table of contents — all 25 items, in the order the
 * issue page lists them. Transcribed from
 * /magazines/naval-history/2026/august on usni.org.
 *
 * `category` carries each item's department (On Our Scope, Naval History News,
 * Historic Ships, Classic Sea Fights, and so on). Every entry has its own
 * artwork in assets/images/naval-history-article-images, named after the
 * article title.
 */
export const augustIssueArticles: Article[] = [
  {
    id: 'aug-on-our-scope',
    category: 'On Our Scope',
    headline: 'On Our Scope',
    excerpt:
      'This Fourth of July marks the nation’s 250th birthday. Here at Naval History, we bring you a tale from the time of the Revolutionary War, that of the privateer.',
    date: 'August 2026',
    image: imgOnOurScope,
    imageAlt: 'The American privateer Hampden attacks the East India Company ship Bridgewater on 8 March 1779.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-for-the-nation-s',
    category: 'Naval History News',
    headline: 'For The Nation’s 250th Birthday, An International Naval Review And Tall Ship Parade',
    excerpt:
      'On the Fourth of July, the celebration of America’s 250th birthday at the Port of New York and New Jersey will feature an International Naval Review.',
    date: 'August 2026',
    image: imgForTheNation,
    imageAlt: 'The USCGC Eagle serving as the host ship for the 1976 Bicentennial Operation Sail parade in New York Harbor.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-wreckage-of-the-coast',
    category: 'Naval History News',
    headline: 'Wreckage of the Coast Guard Cutter Tampa Discovered off Cornwall, United Kingdom',
    excerpt:
      'On 26 April 2026, the all-volunteer British technical diving team Gasperados located a wreck believed to be the Coast Guard cutter Tampa.',
    date: 'August 2026',
    image: imgWreckageOfThe,
    imageAlt: 'A photo of the wreck believed to be the Tampa.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-a-tribute-to-don',
    category: 'Naval History News',
    headline: 'A Tribute to Don Kazimir, Commanding Officer of the Grumman Submersible Ben Franklin',
    excerpt:
      'On 27 April 2026, Don “Kaz” Kazimir slipped his final moorings in North Palm Beach, Florida, at age 91, at the end of a long and eventful life.',
    date: 'August 2026',
    image: imgATributeTo,
    imageAlt: 'Don Kazimir on board the Ben Franklin submersible in 1969.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-in-contact',
    category: 'In Contact',
    headline: 'In Contact',
    excerpt:
      'Readers respond to recent articles from Naval History.',
    date: 'August 2026',
    image: imgInContact,
    imageAlt: 'January 1870: The seagoing ironclad HMS Monarch, which carried the body of George Peabody across the Atlantic, is the most distant ship. Closest to her is her escort, the USS Plymouth. The nearby twin-turret monitor is likely the USS Miantonomoh.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-the-uss-suwannee-ao',
    category: 'Historic Ships',
    headline: 'The USS Suwannee (AO-33/CVE-27): Oiler, Carrier, Kamikaze Survivor',
    author: 'By Andrew K. Blackley',
    excerpt:
      'To confirm the aphorism that “perfect is the enemy of good enough,” one needs look no further than the World War II ships converted to become escort carriers.',
    date: 'August 2026',
    image: imgTheUssSuwannee,
    imageAlt: 'The SS Markay (AO-33) in June 1941, around the time of her purchase by the Navy but still more than seven months from the start of her conversion to an aircraft carrier.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-the-nc-4-s',
    category: 'Historic Aircraft',
    headline: 'The NC-4’s Second Act',
    author: 'By Hill Goodspeed',
    excerpt:
      'Just as it is now, New York City was the nation’s grandest stage, and in July 1919 the NC-4 played a leading role.',
    date: 'August 2026',
    image: imgTheNc4,
    imageAlt: 'Bearing the scars of its epic transatlantic journey, the NC-4 welcomes visitors while on display in New York City’s Central Park. A recruiting sign (lower right) reads, “A Cruise in the Navy is a Liberal Education,” and directs would-be sailors where to apply.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-clash-of-arms-in',
    category: 'Classic Sea Fights',
    headline: 'Clash of Arms in a Dire Strait',
    author: 'By Eric Mills',
    excerpt:
      'The Fourth of July celebrations came at a fractured time in America that year—and many must have wondered that Independence Day whether the United States could even endure.',
    date: 'August 2026',
    image: imgClashOfArms,
    imageAlt: 'Commander David S. McDougal (pictured here in captain’s uniform after his 1864 promotion) commanded the USS Wyoming in history’s first clash between U.S. and Japanese naval forces: the July 1863 Battle of Shimonoseki Strait.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-outfitting-the-world-s',
    category: 'Armaments & Innovations',
    headline: 'Outfitting the World’s Navies',
    author: 'By Philip K. Allan',
    excerpt:
      'Military uniforms have a long history with land forces.',
    date: 'August 2026',
    image: imgOutfittingTheWorld,
    imageAlt: 'Roman legions standardized clothing, armor, and unit insignia to foster cohesion and distinguish friend from foe on the battlefield.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-patriotism-or-profit',
    category: 'Featured Article',
    headline: 'Patriotism . . . or Profit?',
    author: 'By Ensign Samuel Yankee, U.S. Coast Guard',
    excerpt:
      'Within the ledgers of Captain Joseph Lee lie the complex motives of a privateer fighting for America’s freedom during the Revolutionary War.',
    date: 'August 2026',
    image: imgPatriotismOrProfit,
    imageAlt: 'The American privateer Montgomery captures the English merchantman Millern off the Irish coast in July 1777. Soon after, the Montgomery was captured by an English privateer, then retaken by the American privateer Oliver Cromwell in early August of that year.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-50-years-of-persistence',
    category: 'Featured Article',
    headline: '50 Years of Persistence',
    author: 'By Commander Randy Carol Goguen, U.S. Navy (Retired)',
    excerpt:
      'In July 1976, the first women midshipmen arrived at the U.S. Naval Academy, forging their own paths in the face of an institution resistant to change.',
    date: 'August 2026',
    image: img50YearsOf,
    imageAlt: 'Midshipman Fourth Class Sandra Irwin (class of ’80) practices infantry drill.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-the-perfect-amphibious-operation',
    category: 'Featured Article',
    headline: '‘The Perfect Amphibious Operation’',
    author: 'By Andrew K. Blackley',
    excerpt:
      'The capture of Tinian Island in July 1944 remains a gold standard that could serve as the model for a future war in the Pacific region.',
    date: 'August 2026',
    image: imgThePerfectAmphibious,
    imageAlt: 'Marines pour out from landing barges and wade ashore at Tinian. The battle for the island was praised as an operation in which “the result brilliantly consummated the planning and performance.”',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-battling-basques',
    category: 'Featured Article',
    headline: 'Battling Basques',
    author: 'By Leonard R. Heinz',
    excerpt:
      'With the outbreak of the Spanish Civil War in July 1936, the Basques built a fleet fit for combat from a handful of fishing trawlers.',
    date: 'August 2026',
    image: imgBattlingBasques,
    imageAlt: 'Basque sailors on board the Donostia attempt to rescue survivors from the Nabarra during the Battle of Cape Machichaco on 5 March 1937.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-the-convoy-heresy',
    category: 'Featured Article',
    headline: 'The Convoy Heresy',
    author: 'By Captain Andrew Wilhelm, U.S. Army',
    excerpt:
      'How a cohort of Royal Navy junior officers pushed the convoy system on a reluctant Admiralty to counter the World War I U-boat threat.',
    date: 'August 2026',
    image: imgTheConvoyHeresy,
    imageAlt: 'A U-boat attacking a British merchant ship in 1916. Only when the Royal Navy deviated from its Mahanian theories and embraced a convoy strategy was it able to mitigate the U-boat threat.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-into-the-fire-twice',
    category: 'Featured Article',
    headline: 'Into the Fire, Twice',
    author: 'By Colonel Dwight H. Sullivan, U.S. Marine Corps Reserve (Retired)',
    excerpt:
      'The colorful life of Chief Water Tender John King, who was shackled in the brig when he was awarded the first of two Medals of Honor.',
    date: 'August 2026',
    image: imgIntoTheFire,
    imageAlt: 'A tale of two medals: John King received the highest military decoration twice for heroism during fiery crises. The first was on board the USS Vicksburg (above), where he risked his life to save his crew and ship.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-book-reviews',
    category: 'Book Reviews',
    headline: 'Book Reviews',
    excerpt:
      'Experts review The Great Museum of the Sea, and other new and noteworthy books.',
    date: 'August 2026',
    image: imgBookReviews,
    imageAlt: 'Book review NHJuly 26',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-paws-of-the-past',
    category: 'Pieces of the Past',
    headline: 'Paws of the Past',
    author: 'By Dave Way, Historian, Battleship Iowa, and Captain Rich Abele, USN (Ret.), Tour Guide, Battleship Iowa',
    excerpt:
      'The sole ship’s mascot on board the battleship USS Iowa (BB‑61) during her first period in commission (1943–49) was a dog named Victory, “Vicky” for short.',
    date: 'August 2026',
    image: imgPawsOfThe,
    imageAlt: 'The sole ship’s mascot on board the battleship USS Iowa (BB‑61) during her first period in commission (1943–49) was a dog named Victory, “Vicky” for short.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-spirit-and-conscience',
    category: 'Profiles in Command',
    headline: 'Spirit and Conscience',
    author: 'By Lieutenant Commander Thomas J. Cutler, U.S. Navy (Retired)',
    excerpt:
      'Today, Arleigh Burke and Elmo Zumwalt reside in the Naval Academy Cemetery alongside the Severn River, perhaps watching as their Navy faces new trials and tribulations.',
    date: 'August 2026',
    image: imgSpiritAndConscience,
    imageAlt: 'Many Chiefs of Naval Operations are buried in the cemetery at the U.S. Naval Academy.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-an-asset-to-the',
    category: 'As I Recall',
    headline: '‘An Asset to the Navy’',
    author: 'By Lieutenant Tina-Marie D’Ercole, U.S. Navy',
    excerpt:
      'Midshipman D’Ercole arrived on the Yard in July 1976 as part of the first cohort of women admitted to the Naval Academy. (See “50 Years of Persistence,” pp. 20–27.) That ...',
    date: 'August 2026',
    image: imgAnAssetTo,
    imageAlt: 'Midshipman Lieutenant D’Ercole (far left) participates in a dress parade in 1979.',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-a-marine-s-journey',
    category: 'Featured Article',
    headline: 'A Marine’s Journey to France (1918–1919) in His Own Words',
    author: 'By John Thompson',
    excerpt:
      'Letters from a railroad man who remained a proud Marine all his life.',
    date: 'August 2026',
    image: imgAMarineS,
    imageAlt: 'Marines',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-more-than-a-parade',
    category: 'Featured Article',
    headline: 'More Than a Parade: How America’s Naval Reviews Capture History',
    author: 'By Lieutenant Commander Thomas J. Cutler, U.S. Navy (Retired)',
    excerpt:
      'They send a message about how the United States intends to act in the world.',
    date: 'August 2026',
    image: imgMoreThanA,
    imageAlt: 'Canberra',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-remembering-my-sea-daddies',
    category: 'Featured Article',
    headline: 'Remembering My Sea Daddies: John McCain III',
    author: 'By the Honorable John F. Lehman Jr., U.S. Secretary of the Navy (Retired)',
    excerpt:
      'The unshakeable strength of John McCain’s character set a gold standard.',
    date: 'August 2026',
    image: imgRememberingMySea,
    imageAlt: 'McCain',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-the-road-to-annapolis',
    category: 'Featured Article',
    headline: 'The Road to Annapolis',
    author: 'By Michael Romero',
    excerpt:
      'It was a long-held belief that the only place for officers to learn their profession was on board a warship at sea. That belief was challenged in the early 1800s ...',
    date: 'August 2026',
    image: imgTheRoadTo,
    imageAlt: 'Naval Academy 1853',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-seamanship-how-stephen-b',
    category: 'Featured Article',
    headline: 'Seamanship: How Stephen B. Luce Wrote the Book on Practical Naval Education',
    author: 'By Samuel Limneos',
    excerpt:
      '“He looked every inch a sailor,” wrote one midshipman of Luce. “He was their High Priest of Seamanship, who not only wrote of the art, but lived and practiced it.”',
    date: 'August 2026',
    image: imgSeamanshipHowStephen,
    imageAlt: 'Midshipmen on board the Constitution',
    href: '/naval-history/aug-2026',
  },
  {
    id: 'aug-what-i-learned-when',
    category: 'Featured Article',
    headline: 'What I Learned When I Used AI for Naval History Research',
    author: 'By Captain Derek Dye, U.S. Navy',
    excerpt:
      'These tools can improve historical research and analysis when used with a keen critical eye.',
    date: 'August 2026',
    image: imgWhatILearned,
    imageAlt: 'Barbey',
    href: '/naval-history/aug-2026',
  },
]
