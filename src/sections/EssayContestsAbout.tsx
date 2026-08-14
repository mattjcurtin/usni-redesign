import { useState } from 'react'
import { essayContestsHistory, essayContestsIntro } from '@/data/essayContests'
import featureGrid1 from '@/assets/images/essay-contest-feature-grid-1.jpg'
import featureGrid2 from '@/assets/images/essay-contest-feature-grid-2.jpg'
import featureGrid3 from '@/assets/images/essay-contest-feature-grid-3.jpg'

/** Subjects the contests draw essays on, shown beside the history. */
const featureImages = [
  {
    src: featureGrid1,
    alt: 'An amphibious landing ship laying a smoke screen as it approaches a beach',
  },
  {
    src: featureGrid2,
    alt: 'An MH-60 helicopter towing a mine-hunting sonar sled over open water',
  },
  {
    src: featureGrid3,
    alt: 'A sailor at a darkened console wearing a headset, overlaid with streams of binary code',
  },
]

/**
 * The contests' origin story, opening the landing page.
 *
 * Previously its own page at /essay-contests/about. It now sits at the top of
 * the overview with only the first two paragraphs showing, so the history is
 * available without pushing the open contests below the fold.
 *
 * The image mosaic beside it is decorative — it gives the collapsed state
 * enough visual weight to hold the full width, and stays put as the text
 * column grows past it on expand.
 */
export default function EssayContestsAbout() {
  const [expanded, setExpanded] = useState(false)

  const allParagraphs = [...essayContestsHistory, essayContestsIntro.commitment]
  const visibleParagraphs = allParagraphs.slice(0, 2)
  const restParagraphs = allParagraphs.slice(2)

  return (
    <section className="bg-white pt-12 lg:pt-16 pb-10 lg:pb-12">
      <div className="container-site flex flex-col lg:flex-row lg:items-start gap-10 xl:gap-12">
        <div className="flex-1 lg:max-w-[820px] flex flex-col gap-5">

          <h2 className="font-headline text-[28px] lg:text-[38px] text-navy-bolder leading-[1.15]">
            About the Essay Contests
          </h2>

          <div className="flex flex-col gap-4">
            {visibleParagraphs.map((para, i) => (
              <p
                key={i}
                className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Everything past the opening two paragraphs is behind the toggle */}
          {expanded && (
            <div className="flex flex-col gap-4">
              {restParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]"
                >
                  {para}
                </p>
              ))}
              {/* Same seasonal-alert treatment used on the homepage */}
              <div className="bg-[#FFF9EB] border border-l-4 border-gold px-5 py-3 mt-1">
                <p className="font-body text-base text-navy-bolder">
                  {essayContestsIntro.note}
                </p>
              </div>
            </div>
          )}

          <button
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="flex items-center gap-2 font-body font-semibold text-sm text-[#023E7D] group self-start"
          >
            <span className="underline group-hover:no-underline">
              {expanded ? 'See less' : 'See more'}
            </span>
            <i
              className={`fa-solid ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}
              aria-hidden="true"
            />
          </button>

        </div>

        {/* One wide plate over a pair, so three landscape crops don't read as a
            stack of equal rows */}
        <div className="w-full lg:w-[420px] xl:w-[460px] lg:flex-shrink-0 flex flex-col gap-3">
          <div className="aspect-[16/10] overflow-hidden bg-neutral-subtlest">
            <img
              src={featureImages[0].src}
              alt={featureImages[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {featureImages.slice(1).map((image) => (
              <div
                key={image.src}
                className="aspect-[4/3] overflow-hidden bg-neutral-subtlest"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
