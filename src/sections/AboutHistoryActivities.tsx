import imgProceedings from '@/assets/images/giving-opps-modal-hero-Conferences GO.jpg'
import imgPress from '@/assets/images/giving-opps-modal-hero-The Naval Institute Press.png'
import imgHeritage from '@/assets/images/giving-opps-modal-hero-OralHistoryGO.jpg'
import imgFoundation from '@/assets/images/giving-feature-2.jpg'

/**
 * "The Naval Institute has these core activities" — the four programme areas
 * from the history page, each currently a heading and a dense paragraph.
 *
 * Rendered as alternating image/text rows so each area can be read on its own
 * rather than as one continuous wall of prose.
 */
const activities = [
  {
    id: 'magazines-and-conferences',
    eyebrow: 'Since 1874',
    title: 'Magazines and Conferences',
    image: imgProceedings,
    imageAlt: 'A Naval Institute conference session',
    body: [
      'Since 1874, Proceedings magazine has been the most identifiable journal of the Naval Institute. Each monthly issue includes articles from military professionals and civilian experts, historical essays, book reviews, full-color photography, and lively reader commentary. Its sister publication, the bimonthly Naval History, was added in 1987.',
      'To expand the impact of the forum, the Naval Institute created a conferences program in 1985 that harks back to its earliest days. The conferences program, open to members and to the public, features live discussion of crucial defense-related topics at three sites each year: San Diego, Washington, DC, and Virginia Beach.',
    ],
    cta: { label: 'Explore Proceedings', href: '/proceedings' },
  },
  {
    id: 'naval-institute-press',
    eyebrow: 'Since 1898',
    title: 'Naval Institute Press',
    image: imgPress,
    imageAlt: 'Naval Institute Press titles',
    body: [
      'The Naval Institute Press is the book-publishing arm of the Naval Institute. Created in 1898 with basic guides to naval practices, the Press has broadened its scope to include books of more general interest.',
      'Now the Naval Institute Press publishes about eighty titles each year, ranging from how-to books on boating and navigation to battle histories, biographies, ship and aircraft guides, and novels. Institute members receive significant discounts on the Press’ more than eight hundred books in print.',
    ],
    cta: { label: 'Browse Books & Press', href: '/books' },
  },
  {
    id: 'history-and-preservation',
    eyebrow: 'Heritage',
    title: 'History and Preservation',
    image: imgHeritage,
    imageAlt: 'Oral history recording session',
    body: [
      'One of the primary aspects of the Naval Institute’s mission is to preserve our naval and maritime heritage with an ever-expanding collection of more than 200 oral histories and 450,000 rare naval and maritime images. Bound copies of the oral histories and photographs of naval ships, aircraft, and other historically significant images are sold, the profits of which are used to fund further growth.',
      'The department recently began to digitize the photo collection and now sells digital images. The Naval Institute also has produced Americans at War, a living history of Americans at war in their own words and from their own experiences. These 90-second vignettes convey powerful stories of inspiration, pride, and patriotism.',
    ],
    cta: { label: 'Visit the Archives', href: '/archives' },
  },
  {
    id: 'naval-institute-foundation',
    eyebrow: 'Since 1992',
    title: 'The Naval Institute Foundation',
    image: imgFoundation,
    imageAlt: 'Supporters of the Naval Institute Foundation',
    body: [
      'The Naval Institute Foundation, Inc., was established in 1992 to ensure that the Naval Institute would have the firm financial footing necessary to continue its mission of advancing professional, literary, and scientific knowledge in the naval and maritime services.',
      'The Internal Revenue Service has certified the Foundation as a 501(c)(3) educational / charitable organization, contributions to which, by individuals, corporations, and foundations, are tax-deductible to the extent allowed by law.',
    ],
    cta: { label: 'Support the Institute', href: '/giving' },
  },
]

export default function AboutHistoryActivities() {
  return (
    <section className="py-16 lg:py-20 bg-[#ebf4ff]" aria-labelledby="core-activities-heading">
      <div className="container-site">
        <div className="border-t-2 border-navy-bold pt-8 mb-10 lg:mb-14 max-w-[760px]">
          <p className="font-body font-semibold text-sm uppercase tracking-[0.08em] text-navy-subtle mb-2">
            What we do
          </p>
          <h2
            id="core-activities-heading"
            className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1]"
          >
            Core Activities
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:gap-16">
          {activities.map((activity, i) => (
            <article
              key={activity.id}
              id={activity.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center bg-white border border-navy-subtle p-6 lg:p-8`}
            >
              <div
                className={`overflow-hidden bg-neutral-subtlest aspect-[4/3] ${
                  // Alternate sides so four stacked rows don't read as a list
                  i % 2 === 1 ? 'lg:order-last' : ''
                }`}
              >
                <img
                  src={activity.image}
                  alt={activity.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="eyebrow-headline">
                  <p className="eyebrow">{activity.eyebrow}</p>
                  <h3 className="font-headline text-[28px] lg:text-[34px] text-navy-bolder leading-[1.15]">
                    {activity.title}
                  </h3>
                </div>
                {activity.body.map((para, j) => (
                  <p key={j} className="font-body text-base text-neutral-subtle leading-[1.7]">
                    {para}
                  </p>
                ))}
                <a
                  href={activity.cta.href}
                  className="group inline-flex items-center gap-2 self-start font-body font-bold text-base text-[#0466c8] hover:text-navy-bolder transition-colors"
                >
                  {activity.cta.label}
                  <i
                    className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
