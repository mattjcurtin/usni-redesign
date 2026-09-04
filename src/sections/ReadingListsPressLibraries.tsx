import { crossLinkedSeries } from '@/data/readingLists'
import { seriesBySlug, seriesHref } from '@/data/bookCollections'

/**
 * The Press's own professional libraries, as cross-links to their series pages.
 *
 * The live reading-lists page repeats the full Blue & Gold bibliography (24
 * titles) and the full Scarlet & Gold one here, both of which already exist in
 * full on their own series pages. That is a second copy to keep in sync — and
 * the client was explicit that the maintenance burden, not the layout, is what
 * has gone wrong with these pages. So the copy stays and the list does not: each
 * library gets its lockup, its introduction, and a link through to the page that
 * owns the bibliography.
 */
export default function ReadingListsPressLibraries() {
  return (
    <section id="press-libraries" className="bg-white py-12 lg:py-16 scroll-mt-40">
      <div className="container-site">
        <div className="pb-4 border-b-2 border-[#0466C8]">
          <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-navy-subtle">
            Naval Institute Press
          </p>
          <h2 className="font-headline text-[26px] lg:text-[36px] text-navy-bolder leading-[1.15] mt-1.5">
            The Press’s professional libraries
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {crossLinkedSeries.map((entry) => {
            const series = seriesBySlug(entry.seriesSlug)
            if (!series) return null

            return (
              <div
                key={entry.seriesSlug}
                className="bg-white border border-navy-subtle p-6 lg:p-8 flex flex-col gap-3 items-start"
              >
                {series.mark && (
                  <img
                    src={series.mark.image}
                    alt={series.mark.alt}
                    className="h-11 w-auto mb-1"
                  />
                )}
                <h3 className="font-headline text-[22px] lg:text-[26px] text-navy-bolder leading-[1.2]">
                  {entry.name}
                </h3>
                <p className="font-body text-[15px] text-neutral-subtle leading-[1.7] flex-1">
                  {entry.blurb}
                </p>
                <a
                  href={seriesHref(entry.seriesSlug)}
                  className="inline-flex items-center gap-2 bg-navy-bolder text-white font-body font-bold text-sm tracking-[-0.2px] px-6 py-4 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors mt-2"
                >
                  View this library
                  <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
