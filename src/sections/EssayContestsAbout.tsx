import { useState } from 'react'
import { essayContestsHistory, essayContestsIntro } from '@/data/essayContests'

/**
 * The contests' origin story, opening the landing page.
 *
 * Previously its own page at /essay-contests/about. It now sits at the top of
 * the overview with only the first paragraph showing, so the history is
 * available without pushing the open contests below the fold.
 */
export default function EssayContestsAbout() {
  const [expanded, setExpanded] = useState(false)

  const [firstParagraph, ...restParagraphs] = [
    ...essayContestsHistory,
    essayContestsIntro.commitment,
  ]

  return (
    <section className="bg-white pt-12 lg:pt-16 pb-10 lg:pb-12">
      <div className="container-site">
        <div className="max-w-[820px] flex flex-col gap-5">

          <h2 className="font-headline text-[28px] lg:text-[38px] text-navy-bolder leading-[1.15]">
            About the Essay Contests
          </h2>

          <p className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]">
            {firstParagraph}
          </p>

          {/* Everything past the opening paragraph is behind the toggle */}
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
              <p className="font-body text-sm text-neutral-subtle leading-relaxed border-l-2 border-gold pl-4 mt-1">
                {essayContestsIntro.note}
              </p>
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
      </div>
    </section>
  )
}
