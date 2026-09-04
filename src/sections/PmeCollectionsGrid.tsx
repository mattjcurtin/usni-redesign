import { bookSeries, seriesHref } from '@/data/bookCollections'
import CollectionTeaserCard from '@/components/cards/CollectionTeaserCard'

/**
 * The grid of every Press series, on the Professional Military Education hub.
 *
 * The client's answer to "should this page reference all the list and series
 * pages?" was yes — the live PME page is a two-paragraph intro that ended up on
 * its own page while the nine series it introduces sit unlinked beside it in
 * the section menu. This is the part that makes it a hub.
 */
export default function PmeCollectionsGrid() {
  return (
    <section className="bg-surface-subtle py-12 lg:py-16">
      <div className="container-site">
        <div className="pb-4 border-b-2 border-[#0466C8]">
          <h2 className="font-headline text-[26px] lg:text-[32px] text-navy-bolder leading-[1.15]">
            Series from the Naval Institute Press
          </h2>
          <p className="font-body text-sm text-neutral-subtle mt-1.5">
            Each series is edited by a scholar or practitioner in the field
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {bookSeries.map((collection) => (
            <CollectionTeaserCard
              key={collection.slug}
              collection={collection}
              href={seriesHref(collection.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
