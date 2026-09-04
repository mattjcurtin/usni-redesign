import type { BookCollection } from '@/data/bookCollections'
import { collectionCover, purchasableTitles } from '@/data/bookCollections'
import CardCta from '@/components/ui/CardCta'

/** Covers in the shelf. Three reads as a set without crowding the card. */
const SHELF_COVERS = 3

/**
 * Teaser for a collection, used on the Professional Military Education hub and
 * in the cross-links at the foot of every collection page.
 *
 * The card leads with covers from the series rather than a stock photograph or
 * an icon. These pages have no art of their own — the books *are* the art — and
 * a row of three real covers tells a reader what kind of series this is faster
 * than the summary line underneath does.
 *
 * Nothing on the card states a count. Series grow and titles go out of print,
 * and a number on a card is a claim someone has to remember to maintain; the
 * shelf conveys "a set of books" without asserting how many.
 */
export default function CollectionTeaserCard({
  collection,
  href,
}: {
  collection: BookCollection
  href: string
}) {
  const covers = purchasableTitles(collection)
    .map((t) => collectionCover(t.slug))
    .filter((c): c is string => Boolean(c))
    .slice(0, SHELF_COVERS)

  return (
    <a
      href={href}
      /* Default site card: white ground, navy-subtle hairline, blue on hover —
         matching EssayContestsCurrentGrid, AboutQuickLinks, and UpcomingEvents. */
      className="group flex flex-col bg-white border border-navy-subtle
                 hover:shadow-md transition-shadow"
    >
      {/*
        Fixed height across all three states below, so the shelf edge — and
        therefore every card's title — lands on the same baseline across the
        grid regardless of what a series has to show.
      */}
      {covers.length > 0 ? (
        /*
          Covers, bottom-aligned so they read as standing on the shelf. The tint
          is what separates the shelf from the white card body; the standard site
          card carries no inner rule.
        */
        <div className="h-[172px] px-6 pt-9 flex items-end justify-center bg-light-blue">
          <div className="flex items-end">
            {covers.map((cover, i) => (
              <img
                key={cover}
                src={cover}
                alt=""
                aria-hidden="true"
                className="w-[90px] aspect-[2/3] object-cover shadow-[0_2px_10px_rgba(0,18,51,0.18)]"
                style={{ marginLeft: i === 0 ? 0 : -22, zIndex: i }}
              />
            ))}
          </div>
        </div>
      ) : collection.hero.variant === 'image' && collection.hero.image ? (
        /*
          No covers to show yet, but the series owns photography — use its hero
          image full-bleed rather than leaving an empty tinted panel. Reuses the
          hero's focal point so the card and the page it links to crop alike.
        */
        <div className="h-[172px] overflow-hidden bg-navy-boldest">
          <img
            src={collection.hero.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ objectPosition: collection.hero.imagePosition ?? 'center' }}
          />
        </div>
      ) : (
        <div className="h-[172px] flex items-center justify-center bg-light-blue">
          <span className="font-body text-[11px] uppercase tracking-[0.14em] text-navy-subtler">
            New series
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2 p-6 flex-1">
        <h3 className="font-headline text-[21px] leading-[1.2] text-navy-bolder">
          {collection.name}
        </h3>

        <p className="font-body text-sm text-neutral-subtle leading-[1.6] flex-1">
          {collection.summary}
        </p>

        <CardCta className="mt-3">Explore this series</CardCta>
      </div>
    </a>
  )
}
