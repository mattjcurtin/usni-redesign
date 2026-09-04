import { emptyLists } from '@/data/readingLists'
import CardCta from '@/components/ui/CardCta'

/**
 * The service reading lists that carry no Naval Institute Press titles.
 *
 * Four of the nine lists on the live page say only "None listed at this time"
 * where their books should be, each taking a full section to say it. Collapsed
 * into one row of link cards, they stay on the page — a reader looking for the
 * Army list still finds it — without four empty bibliographies between them and
 * the lists that do carry Press books.
 */
export default function ReadingListsOther() {
  return (
    <section id="other-lists" className="bg-surface-subtle py-12 lg:py-16 scroll-mt-40">
      <div className="container-site">
        <div className="pb-4 border-b-2 border-[#0466C8]">
          <h2 className="font-headline text-[26px] lg:text-[36px] text-navy-bolder leading-[1.15]">
            Other service reading lists
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {emptyLists.map((list) => (
            <a
              key={list.name}
              href={list.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-navy-subtle hover:shadow-md
                         transition-shadow p-6 flex flex-col gap-2"
            >
              <p className="font-body font-medium text-xs uppercase tracking-[0.08em] text-navy-subtle">
                {list.service}
              </p>
              <h3 className="font-headline text-[20px] leading-[1.25] text-navy-bolder">
                {list.name}
              </h3>
              <p className="font-body text-sm text-neutral-subtle leading-[1.65] flex-1">
                {list.blurb}
              </p>
              <CardCta external className="mt-2">
                {list.cta.label}
              </CardCta>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
