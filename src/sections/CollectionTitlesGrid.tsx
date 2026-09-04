import type { CollectionTitle } from '@/data/bookCollections'
import CollectionTitleCard from '@/components/cards/CollectionTitleCard'

interface CollectionTitlesGridProps {
  titles: CollectionTitle[]
  heading?: string
  /** Sub-heading for a grouped list, e.g. a reading list's category. */
  groupLabel?: string
  /** Sentence above the grid. */
  intro?: string
  background?: 'white' | 'subtle'
  /** Trailing link in the section header. */
  seeAll?: { label: string; href: string }
  /** Section anchor, for jump-link navigation. */
  id?: string
}

/**
 * Grid listing of the titles in a collection.
 *
 * A grid rather than the horizontal carousel used on the Books & Press landing
 * page: these are complete bibliographies, not merchandising rows, and the
 * whole list is the point of the page — a carousel hides two thirds of a series
 * behind a scroll gesture and gives search engines nothing to index.
 *
 * A collection with no titles renders nothing at all — a "Titles in the Series"
 * heading over a placeholder is worse than no section. The guard lives here
 * rather than at each call site so no caller can produce an empty one. Series
 * announced before their first volume ships still carry the editor's proposals
 * address in the introduction rail.
 */
export default function CollectionTitlesGrid({
  titles,
  heading = 'Titles in the Series',
  groupLabel,
  intro,
  background = 'white',
  seeAll,
  id,
}: CollectionTitlesGridProps) {
  if (titles.length === 0) return null

  return (
    <section
      id={id}
      className={`py-12 lg:py-16 scroll-mt-32 ${
        background === 'subtle' ? 'bg-surface-subtle' : 'bg-white'
      }`}
    >
      <div className="container-site">

        {/* Section header */}
        <div className="pb-4 border-b-2 border-[#0466C8]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6">
            <h2 className="font-headline text-[26px] lg:text-[32px] text-navy-bolder leading-[1.15]">
              {heading}
            </h2>

            {seeAll && (
              <a
                href={seeAll.href}
                className="group font-body font-semibold text-sm text-[#0466C8] hover:text-navy transition-colors whitespace-nowrap flex items-center gap-1.5 flex-shrink-0 pb-0.5"
              >
                <span className="relative">
                  {seeAll.label}
                  <span className="absolute bottom-0 left-0 h-px w-full bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </span>
                <i className="fa-solid fa-chevron-right text-xs" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {intro && (
          <p className="font-body text-base text-neutral-bold leading-[1.7] max-w-[780px] mt-6">
            {intro}
          </p>
        )}

        {groupLabel && (
          <h3 className="font-body font-bold text-sm uppercase tracking-[0.08em] text-navy-subtle mt-8">
            {groupLabel}
          </h3>
        )}

        {/* pt-7 buys headroom for the covers' hover lift and its shadow, which
            reach 8px and 16px above the card's own top edge; mt-1 makes the
            visible gap from the section header the intended 32px. */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 mt-1 pt-7">
          {titles.map((title, i) => (
            <CollectionTitleCard key={`${title.slug ?? title.title}-${i}`} title={title} />
          ))}
        </div>
      </div>
    </section>
  )
}
