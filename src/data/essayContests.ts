import imgCnoMidn from '@/assets/images/250-year-celebration.png'
import imgCnoProfessional from '@/assets/images/our-histroy-feature-image.png'
import imgCnoRising from '@/assets/images/nh-uss-arizona.png'
import imgCoastGuard from '@/assets/images/usni-news-Middle-East-Shipping.png'
import imgEnlisted from '@/assets/images/usni-news-Program-Has-Helped-Train-700.png'
import bannerCno from '@/assets/images/CNO Naval History Essay Contest hero banner.jpg'

/**
 * Essay contest content, transcribed from the current usni.org essay contest
 * pages. The live pages present everything — deadline, word limit, prizes,
 * eligibility — as undifferentiated prose partway down a long page, so the
 * shape here deliberately pulls the decision-making facts (deadline, word
 * limit, top prize, who may enter) out of the body copy and into named fields
 * the templates can surface up front.
 */

export type ContestStatus = 'open' | 'closing-soon' | 'closed'

export interface EssayContestPrize {
  place: string
  amount: string
}

export interface EssayContestWinner {
  prize: string
  title: string
  name: string
}

/** One year's winners for a contest (or one division of it). */
export interface EssayContestWinnerGroup {
  label: string
  funding?: string
  winners: EssayContestWinner[]
}

/**
 * A titled run of body content. Rendered in field order: paragraphs, then the
 * bullet lead-in and bullets, then any closing paragraphs — so a block whose
 * point is its list (judging criteria) can still end on a note.
 */
export interface EssayContestBlock {
  heading: string
  paragraphs?: string[]
  bulletsLead?: string
  bullets?: string[]
  closingParagraphs?: string[]
}

export interface EssayContestContact {
  label: string
  value: string
  href?: string
}

export interface EssayContest {
  slug: string
  year: string
  /** Full contest name, without the year. */
  title: string
  /** Division qualifier for multi-track contests, e.g. "Midshipmen and Cadets". */
  division?: string
  /** Compact label for sub-nav and breadcrumbs. */
  navLabel: string
  href: string
  image: string
  imageAlt: string
  /** Wide banner art. When set, the page uses the large split photo hero. */
  heroImage?: string
  heroImageAlt?: string
  status: ContestStatus
  /** One-sentence pitch used on cards and in the hero. */
  summary: string
  /** Optional scene-setting paragraphs above "The Challenge". */
  intro?: string[]
  deadline: string
  /** ISO form, for sorting and for <time dateTime>. */
  deadlineISO: string
  wordLimit: string
  /** Numeric form of wordLimit, so the submission form can validate against it. */
  wordLimitMax: number
  submitUrl: string
  eligibility: string[]
  challenge: {
    paragraphs: string[]
    bulletsLead?: string
    bullets?: string[]
  }
  submissionGuidelines: string[]
  prizes: EssayContestPrize[]
  /** Non-cash awards and publication commitments. */
  prizeExtras?: string[]
  blocks: EssayContestBlock[]
  fundedBy?: string[]
  contacts?: EssayContestContact[]
  previousWinners?: EssayContestWinnerGroup[]
}

// ── Content shared across the three CNO Naval History divisions ──────────────

const cnoIntro = [
  'The Chief of Naval Operations (CNO) announces the 2026 CNO Naval History Essay Contest, commemorating the enduring legacy of America’s Navy and the 250th anniversary of our Nation. As the Navy continues to operate at a strategic inflection point, this contest provides an opportunity to reflect on our history, deepen our understanding of the present, and strengthen the intellectual readiness required for the future fight.',
  'The Naval History and Heritage Command (NHHC) is the lead for the contest. The United States Naval Institute (USNI) will support contest execution, publication, and awards.',
]

const cnoChallenge = {
  paragraphs: [
    'The Chief of Naval Operations invites submissions for the 2026 CNO Naval History Essay Contest that use the power of naval history to illuminate the serious challenges confronting today’s Navy. As we enter what may be the most consequential era in American sea power, the demands on our Fleet and our Sailors have never been greater. Great power competition, proliferating threats, rapid technological convergence, and an increasingly contested maritime domain require fresh thinking informed by historical experience.',
    'Across 250 years of American naval operations — from the age of sail to the nuclear era — our Navy has repeatedly adapted to strategic disruption, advanced technology, and global instability. Participants are encouraged to examine those historical touchpoints and derive insights that sharpen our understanding of how to generate, deploy, and fight a Fleet that is resilient, agile, globally present and combat credible. This contest is an opportunity to harness the intellectual capital of the Fleet and the Nation, leveraging history to strengthen the Foundry, the Fleet, and the way we Fight.',
  ],
  bulletsLead:
    'Areas of Historic Interest for the 2026 contest continue to highlight how lessons from the past can inform the Navy’s modernization and operational challenges. Submissions may explore:',
  bullets: [
    'Historic Approaches to Defending the Rules-Based Maritime Order. From early American anti-piracy patrols to Cold War freedom-of-navigation operations, how has the Navy countered threats to maritime law and security, and what can these examples teach us as competitors increasingly challenge the global order?',
    'Historic Approaches to Technological Disruption and Warfighting Transformation. Examples might include the transition from sail to steam, the rise of naval aviation, or the advent of nuclear propulsion. How can these past transformations inform today’s integration of AI, autonomy, and distributed maritime operations?',
    'Historic Approaches to Maritime Competition. From great power rivalries in the 19th century to the Pacific campaigns of the 20th, how has the Navy adapted to long-term strategic competition, and what lessons should guide our approach to multi-domain rivalry today?',
    'America as a Maritime Nation. How has sea power shaped U.S. national prosperity, deterrence, and the ability to project power far from home?',
    'The Enduring Impact of the American Sailor. For nearly 250 years, Sailors have delivered the ingenuity, grit, and courage that give the Navy its decisive edge. What historic examples best illuminate the Sailor as our main weapon system?',
  ],
}

const cnoIntentBlock: EssayContestBlock = {
  heading: 'CNO’s Intent',
  paragraphs: [
    'CNO priorities are clear: Foundry, Fleet, and Fight. To deliver the world’s most powerful Fleet and be ready for the Fight, we must strengthen our most critical advantage — our people. The intent of this contest is to generate bold, actionable ideas that will sharpen our warfighting edge, applying insights drawn from the past to successfully navigate the challenges of the present.',
    'Consistent with the CNO’s vision and theory of victory, the contest seeks to stimulate analysis that strengthens our ability to deliver peace through strength, calibrate our course, and transform how we solve the Navy’s toughest problems. As the Navy accelerates shipbuilding and repair, modernizes force-generation, and integrates cutting-edge technologies into a Future Fleet Design, understanding how previous generations confronted similar inflection points is essential.',
    'The contest invites authors from across the Fleet, the Joint Force, academia, and the maritime community to examine historic approaches to deterrence, warfighting, and sea power — and to connect those lessons directly to the Foundry, the Fleet, and the way we Fight today. The goal is clear: harness history to ensure that America’s Navy remains the most lethal, survivable, and globally capable maritime force in the world.',
  ],
}

const cnoJudgingBlock: EssayContestBlock = {
  heading: 'Judging',
  bulletsLead: 'Essays will be judged on the following criteria:',
  bullets: [
    'Relevance to the topic: applying lessons from naval history to establishing and maintaining maritime superiority in an era of great power competition',
    'Readability',
    'Thoroughness of research',
    'Quality of insights based on historical events',
    'Uniqueness/novelty of ideas presented',
  ],
  closingParagraphs: [
    'All essays are judged in the blind. A six-person panel will select the winning essays. We will notify you via email if your essay is selected for a prize or for publication.',
  ],
}

const cnoPrizeExtras = [
  'Invitational travel orders to the 2026 CNO Naval History Essay Contest Awards Reception (to be determined) to meet the CNO and potentially present their papers.',
  'Winners will be published in Naval History magazine or Proceedings and online with the Naval History and Heritage Command (NHHC). Other essays may be published in Naval History or Proceedings and/or online by NHHC.',
  'Copper sheathing from USS Constitution (provided by NHHC).',
  'Recognition on NHHC’s website.',
  'A one-year Naval Institute membership and a one-year subscription to Naval History magazine (courtesy of the Naval Institute).',
]

const cnoContacts: EssayContestContact[] = [
  {
    label: 'NHHC contest page',
    value: 'history.navy.mil/get-involved/essay-contest.html',
    href: 'https://www.history.navy.mil/get-involved/essay-contest.html',
  },
  { label: 'Questions for NHHC', value: 'stephen.a.hill6.civ@us.navy.mil', href: 'mailto:stephen.a.hill6.civ@us.navy.mil' },
  { label: 'Writing guidance', value: 'essayquestions@usni.org', href: 'mailto:essayquestions@usni.org' },
]

const cnoBaseGuidelines = [
  'All entries must include either enumerated footnotes or enumerated endnotes; a bibliographic list of sources at the end of the essay is not permitted as a substitute for the footnotes or endnotes.',
  'Include word count on title page of essay, but do not include author name(s) on the title page or within the essay.',
  'Essays must be the author’s original work — neither previously published (online or in print), currently under consideration for publication elsewhere, nor previously submitted to the CNO Naval History Essay Contest.',
  'Entrants may submit multiple essays, but the judging panel will select only one winning essay per entrant.',
  'The short biography should detail the author’s eligibility for the contest.',
]

/** The Proceedings-run contests share one selection-process description. */
const proceedingsSelectionBlock: EssayContestBlock = {
  heading: 'Selection Process',
  paragraphs: [
    'The Proceedings staff members will evaluate every essay and screen the top essays to a special Essay Selection Committee of at least six members who will include two members of the Naval Institute’s Editorial Board and four subject experts. All essays will be judged in the blind — i.e., the Proceedings staff members and judges will not know the authors of the essays.',
    'Since we receive so many submissions (more than 100 per month), notification of acceptance on one of our platforms can take 4–6 months. We will notify you via email if your essay is selected for a prize or for publication.',
  ],
}

// ── Contests ────────────────────────────────────────────────────────────────

export const essayContests: EssayContest[] = [
  {
    slug: 'cno-naval-history-midshipmen-cadets',
    year: '2026',
    title: 'CNO Naval History Essay Contest',
    division: 'Midshipmen and Cadets',
    navLabel: 'CNO Naval History',
    href: '/essay-contests/cno-naval-history-midshipmen-cadets',
    image: imgCnoMidn,
    imageAlt: 'Sailors in formation during a 250th anniversary commemoration',
    heroImage: bannerCno,
    heroImageAlt: 'A Fairey Swordfish torpedo bomber attacking a capital ship',
    status: 'open',
    summary:
      'Use the power of naval history to illuminate the challenges confronting today’s Navy — the midshipmen and cadets division of the CNO’s contest.',
    intro: cnoIntro,
    deadline: '30 May 2026',
    deadlineISO: '2026-05-30',
    wordLimit: '3,000 words',
    wordLimitMax: 3000,
    submitUrl: 'https://www.usni.org/cnonhessaycontestmidn-cadet',
    eligibility: [
      'Navy, Marine Corps, Coast Guard, and Merchant Marine Academy midshipmen and cadets (Naval Academy, NROTC, Coast Guard Academy, Kings Point).',
      'State maritime academy midshipmen.',
    ],
    challenge: cnoChallenge,
    submissionGuidelines: [
      'Word count: 3,000 words maximum (excludes endnotes/footnotes).',
      ...cnoBaseGuidelines,
    ],
    prizes: [
      { place: 'First Prize', amount: '$4,000' },
      { place: 'Second Prize', amount: '$2,000' },
      { place: 'Third Prize', amount: '$1,000' },
    ],
    prizeExtras: cnoPrizeExtras,
    blocks: [cnoIntentBlock, cnoJudgingBlock],
    fundedBy: ['Drs. Jack and Jennifer London Charitable Foundation'],
    contacts: cnoContacts,
    previousWinners: [
      {
        label: '2025 — Midshipmen and Cadets',
        funding: 'Supported by Drs. Jack and Jennifer London Charitable Fund',
        winners: [
          { prize: 'First Prize', title: 'Hollow Navy: A Defensive Force With Little to Defend', name: 'Midshipman Third Class Brendan McGrew, U.S. Navy Reserve' },
          { prize: 'Second Prize', title: 'Clash of Fleets in the South China Sea', name: 'Cadet Brandon Tran, U.S. Military Academy' },
          { prize: 'Third Prize', title: 'A Tale of Two Declines: The Collapse of British and American Shipbuilding', name: 'Midshipman Third Class Eva Berry, U.S. Navy Reserve' },
        ],
      },
      {
        label: '2024 — Midshipmen and Cadets',
        funding: 'Supported by Drs. Jack and Jennifer London Charitable Fund',
        winners: [
          { prize: 'First Prize', title: 'How Marine Aviation Came of Age in Nicaragua', name: 'Midshipman First Class Nathan Scherry Jr., U.S. Navy' },
        ],
      },
    ],
  },

  {
    slug: 'cno-naval-history-rising-historian',
    year: '2026',
    title: 'CNO Naval History Essay Contest',
    division: 'Rising Historian',
    navLabel: 'CNO Naval History',
    href: '/essay-contests/cno-naval-history-rising-historian',
    image: imgCnoRising,
    imageAlt: 'Salvage work at the wreck of USS Arizona',
    heroImage: bannerCno,
    heroImageAlt: 'A Fairey Swordfish torpedo bomber attacking a capital ship',
    status: 'open',
    summary:
      'For serving and retired sea service personnel: draw on naval history to sharpen how the Fleet generates, deploys, and fights.',
    intro: cnoIntro,
    deadline: '30 May 2026',
    deadlineISO: '2026-05-30',
    wordLimit: '3,500 words',
    wordLimitMax: 3500,
    submitUrl: 'https://www.usni.org/cnonhessaycontestrising',
    // Phrased so each item stands alone — the first doubles as the blurb on the
    // division switcher and contest card, where a dangling "…are either:" reads
    // as truncated text.
    eligibility: [
      'Active duty, reserve, retired, and federal civilian personnel from the U.S. Navy, Marine Corps, Coast Guard, or Merchant Marine who do not fall in the Professional Historian category; or',
      'Members of foreign militaries who have orders and are serving in an official billet in one of the above Services.',
    ],
    challenge: cnoChallenge,
    submissionGuidelines: [
      'Word count: 3,500 words maximum (excludes endnotes/footnotes).',
      ...cnoBaseGuidelines,
      'Essays in the Rising Historian category may be co-authored, with both authors meeting the Rising category qualifications.',
    ],
    prizes: [
      { place: 'First Prize', amount: '$5,000' },
      { place: 'Second Prize', amount: '$2,500' },
      { place: 'Third Prize', amount: '$1,500' },
    ],
    prizeExtras: cnoPrizeExtras,
    blocks: [
      cnoIntentBlock,
      {
        ...cnoJudgingBlock,
        closingParagraphs: [
          ...(cnoJudgingBlock.closingParagraphs ?? []),
          'Note: For non-winning essays, since we receive so many submissions (more than 100 per month), notification of acceptance on one of our platforms may take 4–6 months.',
        ],
      },
    ],
    contacts: cnoContacts,
    previousWinners: [
      {
        label: '2025 — Rising Historian',
        winners: [
          { prize: 'First Prize', title: 'The Big Little Ships That MUSVs Should Emulate', name: 'Captain Karl Flynn, U.S. Marine Corps' },
          { prize: 'Second Prize', title: 'Naval Quarantine: A Forceful Option Short of War', name: 'Major Aric Ramsey, U.S. Marine Corps' },
          { prize: 'Third Prize', title: 'China’s Redlines Aren’t Where You Think They Are', name: 'Lieutenant Colonel Brian Kerg, U.S. Marine Corps' },
        ],
      },
      {
        label: '2024 — Rising Historian',
        winners: [
          { prize: 'First Prize', title: 'What Imperial Germany Teaches about China’s Naval Basing Ambitions', name: 'Commander Chuck Ridgway, U.S. Navy (Retired)' },
          { prize: 'Second Prize', title: 'The Shell Crisis: A Lesson from the First World War', name: 'Commander J. Brandon Wilgus, U.S. Navy (Retired)' },
          { prize: 'Third Prize', title: 'Timeless Lessons From the Messaging After Midway', name: 'Lieutenant Jack Tribolet, U.S. Navy' },
        ],
      },
    ],
  },

  {
    slug: 'cno-naval-history-professional-historian',
    year: '2026',
    title: 'CNO Naval History Essay Contest',
    division: 'Professional Historian',
    navLabel: 'CNO Naval History',
    href: '/essay-contests/cno-naval-history-professional-historian',
    image: imgCnoProfessional,
    imageAlt: 'Archival naval photography from the Naval Institute collection',
    heroImage: bannerCno,
    heroImageAlt: 'A Fairey Swordfish torpedo bomber attacking a capital ship',
    status: 'open',
    summary:
      'For historians, curators, archivists, and published authors writing on naval history and its bearing on the Fleet today.',
    intro: cnoIntro,
    deadline: '30 May 2026',
    deadlineISO: '2026-05-30',
    wordLimit: '3,500 words',
    wordLimitMax: 3500,
    submitUrl: 'https://www.usni.org/cnonhessaycontestprofessional',
    eligibility: [
      'U.S. and international professional historians, including history museum curators, archivists, history teachers/professors, and PhDs.',
      'Authors of books on naval history (not including self-published works); or',
      'Civilians and active-duty members of the military who have published historical articles in an established historical or naval journal or magazine.',
    ],
    challenge: cnoChallenge,
    submissionGuidelines: [
      'Word count: 3,500 words maximum (excludes endnotes/footnotes).',
      ...cnoBaseGuidelines,
    ],
    prizes: [
      { place: 'First Prize', amount: '$5,000' },
      { place: 'Second Prize', amount: '$2,500' },
    ],
    prizeExtras: cnoPrizeExtras,
    blocks: [
      cnoIntentBlock,
      {
        ...cnoJudgingBlock,
        closingParagraphs: [
          ...(cnoJudgingBlock.closingParagraphs ?? []),
          'Note: For non-winning essays, since we receive so many submissions (more than 100 per month), notification of acceptance on one of our platforms may take 4–6 months.',
        ],
      },
    ],
    contacts: cnoContacts,
    previousWinners: [
      {
        label: '2025 — Professional Historian',
        winners: [
          { prize: 'First Prize', title: 'The Legacy and Lessons of the U.S. Navy War Crimes Program, 1945–1949', name: 'Michael Eastman' },
          { prize: 'Second Prize', title: 'Wars are Won in Preparation: Carl Vinson and the Naval Acts', name: 'Commander J. Brandon Wilgus, U.S. Navy (Retired)' },
        ],
      },
      {
        label: '2024 — Professional Historian',
        winners: [
          { prize: 'First Prize', title: 'Learn from the Fall of the Philippines: Prepare the Third Island Chain', name: 'Lieutenant Commander Frederick “Andy” Cichon, U.S. Navy (Retired)' },
          { prize: 'Second Prize', title: 'Long Live the Aircraft Carrier', name: 'Sub-Lieutenant Joseph Reilly, Royal Navy' },
        ],
      },
    ],
  },

  {
    slug: 'coast-guard',
    year: '2026',
    title: 'Coast Guard Essay Contest',
    navLabel: 'Coast Guard',
    href: '/essay-contests/coast-guard',
    image: imgCoastGuard,
    imageAlt: 'Cutter underway on a maritime security patrol',
    status: 'closing-soon',
    summary:
      'What changes should the Coast Guard make today to meet the Nation’s maritime security challenges 5, 10, or 20 years from now?',
    deadline: '15 April 2026',
    deadlineISO: '2026-04-15',
    wordLimit: '2,500 words',
    wordLimitMax: 2500,
    submitUrl: 'https://www.usni.org/cgessay',
    eligibility: [
      'Open to all contributors — active-duty military, reservists, veterans, and civilians.',
    ],
    challenge: {
      paragraphs: [
        'What changes should the U.S. Coast Guard make today to meet the Nation’s maritime security challenges 5, 10, or 20 years in the future? All topics are welcome, and no issue is too big or too small.',
      ],
      bulletsLead: 'Authors might consider:',
      bullets: [
        'Changes to missions and force structure',
        'How best to integrate the Coast Guard’s unique authorities and capabilities with the other Sea Services',
        'Innovative ideas to make the Coast Guard a more capable instrument of national power, including platforms and technologies',
        'Barriers to mission execution and how to remove them',
        'How to better leverage partnerships at home and abroad',
      ],
    },
    submissionGuidelines: [
      'Essays must be no more than 2,500 words, excluding end notes and sources. Include word count on the title page of the essay.',
      'Essays are judged in the blind. Do not include author name(s) on the title page or within the body of the essay.',
      'Submit essay as a Word document at usni.org/cgessay no later than 15 April 2026.',
      'Essay must be original and not previously published (online or in print) or being considered for publication elsewhere.',
    ],
    prizes: [
      { place: 'First Prize', amount: '$5,000' },
      { place: 'Second Prize', amount: '$2,500' },
      { place: 'Third Prize', amount: '$1,500' },
    ],
    blocks: [
      {
        heading: 'Push the Dare Factor',
        paragraphs: [
          'Consider how to make the Coast Guard stronger. This does not mean authors cannot be critical and take on “it’s always been done that way” practices. In fact, we encourage you to push the “dare factor.”',
        ],
      },
      proceedingsSelectionBlock,
      {
        heading: 'Announcement of the Winners',
        paragraphs: ['Winners will be published in the August 2026 issue of Proceedings.'],
      },
    ],
    fundedBy: ['Susan Curtin', 'The Naval Institute'],
    previousWinners: [
      {
        label: '2025 Coast Guard Essay Contest',
        funding: 'Funded by Susan Curtin and the Naval Institute',
        winners: [
          { prize: 'First Prize', title: 'Close the Icebreaker Gap with Ice Pact', name: 'Lieutenant Isaac LaLonde, U.S. Coast Guard' },
          { prize: 'Second Prize', title: 'How Unmanned Systems Can Improve SAR', name: 'Ensigns Merrill Magowan and Travis Moore, U.S. Coast Guard' },
          { prize: 'Third Prize', title: 'Time to Evolve the Boatswain’s Mate Rating', name: 'Chief Petty Officer William A. Bleyer, U.S. Coast Guard' },
        ],
      },
      {
        label: '2024 Coast Guard Essay Contest',
        funding: 'Funded by Susan Curtin and the Naval Institute',
        winners: [
          { prize: 'First Prize', title: 'Where the Coast Guard’s Techrev Fell Short — and a Path to a New One', name: 'Lieutenants Evan Trawog and Drew Cheneler, U.S. Coast Guard' },
          { prize: 'Second Prize', title: 'How Smart Data Can Drive Smart Maintenance on Cutters', name: 'Lieutenant Jacob Skimmons, U.S. Coast Guard' },
          { prize: 'Third Prize', title: 'There’s A Better Way to Organize the Coast Guard', name: 'Lieutenant Commander Craig Johnson, U.S. Coast Guard' },
        ],
      },
      {
        label: '2023 Coast Guard Essay Contest',
        funding: 'Cosponsored by Susan Curtin and the U.S. Naval Institute',
        winners: [
          { prize: 'First Prize', title: 'The Elephant in the Engine Room', name: 'Commander Kelsey Barrion, U.S. Coast Guard' },
          { prize: 'Second Prize', title: 'Build a Coalition for Northern Sea Route Security', name: 'Lieutenant Kyle Cregge and Commander Chris O’Connor, U.S. Navy' },
          { prize: 'Third Prize', title: 'The Coast Guard Should Lead to Protect Undersea Cables', name: 'Lieutenant Andrew Niedbala and Ensign Ryan Berry, U.S. Coast Guard' },
        ],
      },
      {
        label: '2022 Coast Guard Essay Contest',
        funding: 'Cosponsored by Susan Curtin and the U.S. Naval Institute',
        winners: [
          { prize: 'First Prize', title: 'Expeditionary Cutter Deployments Should Not Be a Mission to Mars', name: 'Commander Craig Allen Jr., U.S. Coast Guard' },
          { prize: 'Second Prize', title: 'The World’s Fishermen as a Maritime Sensor Network', name: 'Lieutenant Holden Takahashi, U.S. Coast Guard' },
          { prize: 'Third Prize', title: 'Lost At Sea: Teaching, Studying, and Promoting Coast Guard History', name: 'Lieutenant Christopher Booth, U.S. Coast Guard, and Auxiliarist Mark Snell, U.S. Coast Guard Auxiliary' },
        ],
      },
      {
        label: '2021 Coast Guard Essay Contest',
        funding: 'Sponsored by the Naval Institute',
        winners: [
          { prize: 'First Prize', title: 'Sea Duty: Still Wanna Do It?', name: 'Commander Craig H. Allen Jr., U.S. Coast Guard' },
          { prize: 'Second Prize', title: 'The Path to a Data-Driven Coast Guard', name: 'Lieutenant (junior grade) Evan Twarog and Lieutenants Joseph Kidwell and Caleb James, U.S. Coast Guard' },
          { prize: 'Third Prize', title: 'Send the Coast Guard Into the Cold', name: 'Lieutenant Commander David Zwirblis, U.S. Coast Guard' },
        ],
      },
      {
        label: '2020 Coast Guard Essay Contest',
        funding: 'Sponsored by the Naval Institute',
        winners: [
          { prize: 'First Prize', title: 'Employ Coast Guard LEDets in the Indo-Pacific', name: 'Lieutenant Andrew Ray, U.S. Coast Guard' },
          { prize: 'Second Prize', title: 'Send in the Coast Guard…with the Marines!', name: 'Lieutenant Commander Daniel Wiltshire, U.S. Coast Guard' },
          { prize: 'Third Prize', title: 'Create ‘Patrol Forces Indo-Pacific’?', name: 'Petty Officer Third Class Merrill A. Magowan, U.S. Coast Guard' },
        ],
      },
      {
        label: '2019 Coast Guard Essay Contest',
        funding: 'Sponsored by the Naval Institute',
        winners: [
          { prize: 'First Prize', title: 'Connectivity Maketh the Cutter', name: 'Commander Craig Allen Jr., U.S. Coast Guard' },
          { prize: 'Second Prize', title: 'Rethink Coast Guard Priorities', name: 'Lieutenant Noah Miller, U.S. Coast Guard' },
          { prize: 'Third Prize', title: 'Guard the African Coast', name: 'Lieutenant Commander Stuart J. Ambrose, U.S. Coast Guard Reserve' },
        ],
      },
    ],
  },

  {
    slug: 'enlisted-prize',
    year: '2026',
    title: 'Enlisted Prize Essay Contest',
    navLabel: 'Enlisted Prize',
    href: '/essay-contests/enlisted-prize',
    image: imgEnlisted,
    imageAlt: 'Sailors during shipboard training',
    status: 'closing-soon',
    summary:
      'How can the Sea Services better recruit, retain, train, and educate enlisted personnel for the challenges they must face?',
    deadline: '15 April 2026',
    deadlineISO: '2026-04-15',
    wordLimit: '1,500 words',
    wordLimitMax: 1500,
    submitUrl: 'https://www.usni.org/enlistedessay',
    eligibility: [
      'Open to enlisted personnel — active duty, reserve, and retired — from any of the Nation’s sea services.',
    ],
    challenge: {
      paragraphs: [
        'Operational demands on the Sea Services are growing as a result of too few ships and submarines in the U.S. fleet and the increased pace of adversary activity around the world. As a result, Sailors, Marines, and Coast Guardsmen must maintain and operate for longer periods of time in challenging environments, putting a strain on themselves, their teams, and their equipment.',
        'How can the Sea Services better recruit, retain, train, and educate enlisted personnel for the challenges they must face?',
      ],
      bulletsLead: 'Authors might consider:',
      bullets: [
        'Preparing to lead in combat',
        'Learning from recent combat operations',
        'Maximizing training to lower risks',
        'Balancing leadership development with tactical acumen',
        'Ensuring readiness and safety',
        'Maintaining platforms and systems to reach higher readiness goals',
      ],
    },
    submissionGuidelines: [
      'Essays must be no more than 1,500 words, excluding end notes and sources. Include word count on the title page of the essay.',
      'Essays are judged in the blind. Do not include author name(s) on the title page or within the body of the essay.',
      'Submit essay as a Word document at usni.org/enlistedessay no later than 15 April 2026.',
      'Essay must be original and not previously published (online or in print) or being considered for publication elsewhere.',
    ],
    prizes: [
      { place: 'First Prize', amount: '$3,000' },
      { place: 'Second Prize', amount: '$2,000' },
      { place: 'Third Prize', amount: '$1,000' },
    ],
    blocks: [
      proceedingsSelectionBlock,
      {
        heading: 'Announcement of the Winners',
        paragraphs: ['Winners will be published in a future issue of Proceedings and recognized at WEST 2027.'],
      },
    ],
    fundedBy: ['The Honorable Ellen Lord'],
    previousWinners: [
      {
        label: '2025 Enlisted Prize Essay Contest',
        funding: 'Funded by The Honorable Ellen Lord',
        winners: [
          { prize: 'First Prize', title: 'Bases Are for Service Members', name: 'Petty Officer First Class Marcus Lewis, U.S. Navy Reserve' },
          { prize: 'Second Prize', title: 'A Schoolhouse Built on Trust', name: 'Petty Officer Second Class Andréa Mayrose, U.S. Navy' },
          { prize: 'Third Prize', title: 'Readiness Is About More Than Sailors', name: 'Petty Officer First Class Kenneth Vidmar, U.S. Navy' },
        ],
      },
    ],
  },
]

export function getContest(slug: string): EssayContest {
  const contest = essayContests.find((c) => c.slug === slug)
  if (!contest) throw new Error(`Unknown essay contest slug: ${slug}`)
  return contest
}

/** Full contest name including division, e.g. "CNO Naval History Essay Contest — Rising Historian". */
export function contestFullTitle(contest: EssayContest): string {
  return contest.division ? `${contest.title} — ${contest.division}` : contest.title
}

/**
 * Link to the shared submission form for a contest. One page serves every
 * contest via this query param — `submitUrl` above is the live site's external
 * endpoint, kept for reference in the transcribed guidelines copy.
 */
export function essaySubmitPath(contest: EssayContest): string {
  return `/essay-contests/submit?contest=${contest.slug}`
}

/**
 * Archive listing pre-filtered to one contest's series. A contest's `title`
 * matches its series name in `essayContestSeries`, so the title doubles as the
 * filter term.
 */
export function contestArchivePath(contest: EssayContest): string {
  return `/essay-contests/archive?q=${encodeURIComponent(contest.title)}`
}

/** The archive series matching a contest, for edition counts and year spans. */
export function seriesForContest(contest: EssayContest): EssayContestSeries | undefined {
  return essayContestSeries.find((s) => s.name === contest.title)
}

// ── Landing-page supporting content ─────────────────────────────────────────

export const essayContestsIntro = {
  origin:
    'On 13 June 1878, with Commander Alfred Thayer Mahan as acting Chair, the Naval Institute adopted rules for the first essay contest — the General Prize Essay Contest. This contest continues to this day.',
  count: 'Currently, the Naval Institute sponsors 14 essay contests a year.',
  commitment:
    'The bottom line in all these essay contests is the Naval Institute remains committed to those authors who dare to write to advance the naval profession.',
  note:
    'All the essay contests include publication of the winning essays in Proceedings or Naval History magazine, recognition of the winners at a public event, and cash prizes. See each contest page for specific details — eligibility, word length, and deadlines.',
}

/** The "About" page narrative, transcribed from /essay-contests/about. */
export const essayContestsHistory: string[] = [
  'Almost from the earliest days of the Naval Institute, its essay contests have been one of its most important functions. The idea of having such an event was first proposed by Lieutenant Commander Allan D. Brown, USN, at the 9 May 1878 meeting of the Naval Institute. The Chair at the time, Commander Alfred Thayer Mahan, USN, Vice President of the Naval Institute, appointed as chairman of a committee Commander William T. Sampson, USN, to prepare a prize to be offered to the author of a paper deemed the best out of those submitted.',
  'An essay contest on professional subjects for American naval officers clearly was indicated, but for a young and struggling organization with a total membership of only 250, it was a bold project to undertake. On 13 June 1878, with Commander Mahan again “in the Chair,” Commander Sampson delivered the report of his committee, which was adopted without change. The rules for the essay contest were adopted by resolution “without reference to the Constitution.”',
  'This action created the Naval Institute’s Prize Essay Contest. In 1948, the name changed to the General Prize Essay Contest. For the period of 1985–2007 the name changed to the Arleigh Burke Essay Contest to honor World War II hero and Cold War Navy CNO and Naval Institute President Admiral Arleigh Burke. From 2008–2013, the Naval Institute awarded General Prizes, but these went to authors of Proceedings articles judged as the best in a calendar year.',
  'In 2014, the General Prize Essay Contest came back as generally envisioned by the Naval Institute’s founding fathers. Currently, the Naval Institute sponsors 14 essay contests a year.',
]


/**
 * Every contest series the Institute has run, as listed on the current landing
 * page. Each is a series hub on usni.org listing that contest's yearly
 * editions — `editions` and `years` are those counts, read off the hubs.
 *
 * The live hubs render every edition on one unpaginated page (the General Prize
 * hub is 110 rows), which is why the archive here is a paged results listing.
 */
export interface EssayContestSeries {
  name: string
  slug: string
  /** Number of yearly editions listed on the series hub. */
  editions: number
  /** Year span of those editions, e.g. "2019–2026". Empty when undetermined. */
  years: string
}

export const essayContestSeries: EssayContestSeries[] = [
  { name: 'Anchoring Sea Enterprise Essay Contest', slug: 'anchoring-sea-enterprise-essay-contest', editions: 2, years: '2003–2006' },
  { name: 'CNO Naval History Essay Contest', slug: 'cno-naval-history-essay-contest', editions: 9, years: '2017–2026' },
  { name: 'Coast Guard Essay Contest', slug: 'coast-guard-essay-contest', editions: 8, years: '2019–2026' },
  { name: 'Commander William Earl Fannin Class of 1945 Capstone Essay Contest', slug: 'commander-william-earl-fannin-class-1945-capstone-essay-contest', editions: 12, years: '2011–2025' },
  { name: 'Cutting Edge of Technology Essay Contest', slug: 'cutting-edge-technology-essay-contest', editions: 1, years: '1988' },
  { name: 'Cyber Essay Contest', slug: 'cyber-essay-contest', editions: 3, years: '2016–2018' },
  { name: 'Diversity & Inclusion', slug: 'diversity-inclusion', editions: 4, years: '2021–2024' },
  { name: 'Education and Training Essay Contest', slug: 'education-and-training-essay-contest', editions: 0, years: '' },
  { name: 'Emerging & Disruptive Technologies Essay Contest', slug: 'emerging-disruptive-technologies-essay-contest', editions: 6, years: '2016–2021' },
  { name: 'Enlisted Prize Essay Contest', slug: 'enlisted-prize-essay-contest', editions: 8, years: '2019–2026' },
  { name: 'Faces of the Naval Academy Essay Contest', slug: 'faces-naval-academy-essay-contest', editions: 1, years: '1995' },
  { name: 'Fiction Essay Contest', slug: 'fiction-essay-contest', editions: 3, years: '2020–2022' },
  { name: 'General Prize Essay Contest', slug: 'general-prize-essay-contest', editions: 110, years: '1913–2025' },
  { name: 'Global Defense Burden Essay Contest', slug: 'global-defense-burden-essay-contest', editions: 2, years: '2013–2014' },
  { name: 'Information Dominance Essay Contest', slug: 'information-dominance-essay-contest', editions: 2, years: '2014–2015' },
  { name: 'Information Warfare Essay Contest', slug: 'information-warfare-essay-contest', editions: 4, years: '2020–2023' },
  { name: 'Innovation and Risk Essay Contest', slug: 'innovation-and-risk-essay-contest', editions: 1, years: '2015' },
  { name: 'Innovation for Sea Power Essay Contest', slug: 'innovation-sea-power-essay-contest', editions: 1, years: '2025' },
  { name: 'International Navies Essay Contest', slug: 'international-navies-essay-contest', editions: 0, years: '' },
  { name: 'Leadership Essay Contest', slug: 'leadership-essay-contest', editions: 13, years: '2013–2025' },
  { name: 'Lieutenant General John A. Lejeune Writing Award', slug: 'lieutenant-general-john-lejeune-writing-award', editions: 7, years: '2019–2025' },
  { name: 'Marine Corps Essay Contest', slug: 'marine-corps-essay-contest', editions: 8, years: '2019–2026' },
  { name: 'Midshipmen and Cadets Essay Contest', slug: 'midshipmen-and-cadets-essay-contest', editions: 4, years: '2019–2022' },
  { name: 'Naval and Maritime Photo Contest', slug: 'naval-and-maritime-photo-contest', editions: 5, years: '2020–2025' },
  { name: 'Naval Aviation Essay Contest', slug: 'naval-aviation-essay-contest', editions: 1, years: '1986' },
  { name: 'Naval History Essay Contest', slug: 'naval-history-essay-contest', editions: 5, years: '2014–2018' },
  { name: 'Naval Intelligence Essay Contest', slug: 'naval-intelligence-essay-contest', editions: 7, years: '2019–2025' },
  { name: 'Naval Mine Warfare Essay Contest', slug: 'naval-mine-warfare-essay-contest', editions: 14, years: '2013–2026' },
  { name: 'Naval Reserve Essay Contest', slug: 'naval-reserve-essay-contest', editions: 1, years: '1990' },
  { name: 'NPS Foundation/U.S. Naval Institute Annual Essay Contest Award', slug: 'nps-foundationus-naval-institute-annual-essay-contest-award', editions: 8, years: '2019–2026' },
  { name: 'Reserve Forces Essay Contest', slug: 'reserve-forces-essay-contest', editions: 1, years: '1984' },
  { name: 'Robotics Essay Contest', slug: 'robotics-essay-contest', editions: 1, years: '2010' },
  { name: 'Submarine and Antisubmarine Warfare Essay Contest', slug: 'submarine-and-antisubmarine-warfare-essay-contest', editions: 1, years: '1987' },
  { name: 'The Future of Naval Warfare Essay Contest', slug: 'future-naval-warfare-essay-contest', editions: 2, years: '2023–2024' },
  { name: 'The Principles of War Essay Contest', slug: 'principles-war-essay-contest', editions: 1, years: '2005' },
  { name: 'U.S. Naval Institute/U.S. Naval War College Non-Resident Essay Contest', slug: 'us-naval-instituteus-naval-war-college-non-resident-essay-contest', editions: 2, years: '2025–2026' },
  { name: 'Unmanned Maritime Systems Essay Contest', slug: 'unmanned-maritime-systems-essay-contest', editions: 1, years: '' },
  { name: 'Warfighting Essay Contest', slug: 'warfighting-essay-contest', editions: 0, years: '' },
]
