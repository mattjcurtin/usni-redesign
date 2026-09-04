import { pmeFeaturedSlugs, titlesBySlugs, collectionCover } from '@/data/bookCollections'

/**
 * The Professional Military Education introduction, with a block of covers
 * beside it.
 *
 * The live page puts a pre-rendered banner of six 3D covers *below* the copy,
 * which stacks two full-width blocks before a visitor reaches anything they can
 * click. Setting real flat covers alongside the text instead keeps the page
 * short, gives the copy something to point at, and makes every cover a link to
 * its product page rather than a flat picture of one.
 *
 * The prose lives here as JSX rather than in `src/data` because it carries
 * inline links — the same arrangement AboutMissionVision uses. Every book and
 * series the copy names is linked; the live page links five of the eight books
 * and neither series, which is the gap this hub exists to close.
 *
 * The covers are the titles the copy names — see `pmeFeaturedSlugs`.
 */
export default function PmeIntro() {
  const featured = titlesBySlugs(pmeFeaturedSlugs)

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-10 lg:gap-16 xl:gap-20 items-start">

          {/* Copy */}
          <div className="max-w-[680px] flex flex-col gap-5 font-body text-base lg:text-[17px] text-neutral-bold leading-[1.7]">
            <p>
              The Naval Institute Press supports professional military education
              (PME) in the sea services. Since 1902, when the Naval Institute first
              published{' '}
              <a href="/books/bluejackets-manual-26th-edition" className="text-link">
                <em>The Bluejacket’s Manual</em>
              </a>
              , the Navy, Marine Corps, and Coast Guard have relied upon our
              ever-growing library of professional books as an important source of
              information and guidance for sailors of all ranks. The{' '}
              <a href="/books/series/blue-and-gold" className="text-link">
                Blue &amp; Gold
              </a>{' '}
              and{' '}
              <a href="/books/series/scarlet-and-gold" className="text-link">
                Scarlet &amp; Gold
              </a>{' '}
              series offer such iconic titles as{' '}
              <a href="/books/watch-officers-guide-16th-edition" className="text-link">
                <em>Watch Officer’s Guide</em>
              </a>
              ,{' '}
              <a href="/books/command-at-sea-7th-edition" className="text-link">
                <em>Command at Sea</em>
              </a>
              ,{' '}
              <a href="/books/handbook-for-marine-ncos-5th-edition" className="text-link">
                <em>Handbook for Marine NCOs</em>
              </a>
              , and{' '}
              <a
                href="/books/newly-commissioned-naval-officers-guide-2nd-edition"
                className="text-link"
              >
                <em>The Newly Commissioned Officer’s Guide</em>
              </a>
              . These books provide experiential advice and guidance that helps naval
              professionals better carry out their duties and assignments.
            </p>

            <p>
              In addition, modern classics such as Wayne Hughes’{' '}
              <a
                href="/books/fleet-tactics-and-naval-operations-3rd-edition"
                className="text-link"
              >
                <em>Fleet Tactics and Naval Operations</em>
              </a>{' '}
              have been joined by more recent titles such as{' '}
              <a
                href="/books/cyberspace-in-peace-and-war-2nd-edition"
                className="text-link"
              >
                <em>Cyberspace in Peace and War</em>
              </a>{' '}
              and{' '}
              <a href="/books/airpower-applied" className="text-link">
                <em>Airpower Applied</em>
              </a>{' '}
              as mainstays at the war college level. Numerous books have also been
              selected for the{' '}
              <a href="/books/reading-lists" className="text-link">
                CNO’s Reading List
              </a>
              . Under the guidance of the Gordon England Chair of Professional Naval
              Literature, these works are kept up to date through frequent revisions,
              while new titles are constantly being added to this important
              professional library to ensure that it evolves with the ever-changing
              nature of the sea services themselves.
            </p>
          </div>

          {/* Covers */}
          <div className="flex flex-col gap-4 lg:w-[420px] xl:w-[468px]">
            <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-navy-subtle">
              From the professional library
            </p>
            <ul className="grid grid-cols-3 gap-4 lg:gap-5">
              {featured.map((title) => {
                const cover = collectionCover(title.slug)
                if (!cover) return null
                return (
                  <li key={title.slug}>
                    <a href={title.href} className="group block">
                      <img
                        src={cover}
                        alt={title.title}
                        /* Same lift as every other clickable cover on the site
                           (BooksProductSection, CollectionTitleCard) — the
                           shadow rides the image so it travels with it. */
                        className="w-full aspect-[2/3] object-cover object-center
                          transition-[transform,box-shadow] duration-300
                          shadow-[0_2px_8px_rgba(0,18,51,0.14)]
                          group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_26px_rgba(0,18,51,0.24)]"
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
