import type { BookCollection, CollectionEditor } from '@/data/bookCollections'

/**
 * The custom introduction region of a collection page.
 *
 * On the live site this is one WYSIWYG blob: "About the Series", then "About the
 * Series Editor", then a bolded line with a proposals address. The template
 * keeps all three but gives them structure — narrative prose in a reading
 * column, and whoever to write to in a rail beside it, where a prospective
 * author can find them without reading to the bottom of the page.
 *
 * The rail always carries a contact. Most series have a named editor who takes
 * proposals; the Blue & Gold and Scarlet & Gold libraries are managed in-house
 * and name a Press contact instead. Either way it sits in the same place on
 * every page rather than dropping to a panel under the copy.
 */
export default function CollectionIntro({
  collection,
}: {
  collection: BookCollection
}) {
  const { about, aboutHeading = 'About the Series', editor, contact } = collection
  const hasRail = Boolean(editor || contact)

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-site">
        <div
          className={
            hasRail
              ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16'
              : ''
          }
        >
          {/* Prose column */}
          <div className={hasRail ? '' : 'max-w-[780px]'}>
            <h2 className="font-headline text-[26px] lg:text-[32px] text-navy-bolder leading-[1.15] pb-4 border-b-2 border-[#0466C8]">
              {aboutHeading}
            </h2>
            <div className="flex flex-col gap-5 mt-6 max-w-[720px]">
              {about.map((para, i) => (
                <p
                  key={i}
                  className="font-body text-base lg:text-[17px] text-neutral-bold leading-[1.7]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Rail */}
          {hasRail && (
            <aside className="lg:pt-14 flex flex-col gap-6">
              {editor && <EditorCard editor={editor} />}
              {contact && <ContactCard contact={contact} />}
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}

function EditorCard({ editor }: { editor: CollectionEditor }) {
  return (
    <div className="bg-surface-subtle border border-light-blue p-6 lg:p-7 flex flex-col gap-4">
      <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-navy-subtle">
        Series Editor
      </p>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-headline text-[24px] text-navy-bolder leading-[1.15]">
          {editor.name}
        </h3>
        <p className="font-body font-semibold text-[13px] text-navy-subtle leading-snug">
          {editor.role}
        </p>
      </div>

      <p className="font-body text-sm text-neutral-subtle leading-[1.65]">{editor.bio}</p>

      {editor.email && (
        <div className="border-t border-light-blue pt-4 mt-1">
          <p className="font-body font-bold text-sm text-navy-bolder mb-2">
            Send inquiries and proposals to:
          </p>
          <a
            href={`mailto:${editor.email}`}
            className="font-body text-sm text-[#0466C8] hover:text-navy-bolder transition-colors break-words link-underline-hover"
          >
            {editor.email}
          </a>
        </div>
      )}
    </div>
  )
}

function ContactCard({
  contact,
}: {
  contact: NonNullable<BookCollection['contact']>
}) {
  return (
    <div className="bg-surface-subtle border border-light-blue p-6 lg:p-7 flex flex-col gap-4">
      <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-navy-subtle">
        Series Contact
      </p>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-headline text-[24px] text-navy-bolder leading-[1.15]">
          {contact.name}
        </h3>
        {contact.note && (
          <p className="font-body text-sm text-neutral-subtle leading-[1.65]">
            {contact.note}
          </p>
        )}
      </div>

      <div className="border-t border-light-blue pt-4 mt-1">
        <p className="font-body font-bold text-sm text-navy-bolder mb-2">
          Send inquiries to:
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="font-body text-sm text-[#0466C8] hover:text-navy-bolder transition-colors break-words link-underline-hover"
        >
          {contact.email}
        </a>
      </div>
    </div>
  )
}
