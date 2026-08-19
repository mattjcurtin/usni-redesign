import type { ReactNode } from 'react'

/**
 * Light blue interior page header, in left and centered variants.
 *
 * The left variant is the treatment already used by EventsPageHero,
 * EssayContestsHero, and the About / Books sub-page headers — same background,
 * padding, and type scale, so a page adopting this component looks unchanged.
 * The centered variant exists for pages whose header is a standalone statement
 * rather than the top of a reading column.
 *
 * Existing headers were left as they are; this is the shared piece for new ones.
 */
export default function PageHero({
  title,
  description,
  eyebrow,
  align = 'left',
  breadcrumb,
  children,
}: {
  title: string
  description?: ReactNode
  eyebrow?: string
  align?: 'left' | 'center'
  /** Rendered above the title, under its own rule — see EventsPageHero. */
  breadcrumb?: ReactNode
  /** Anything that belongs under the description, e.g. a CTA row. */
  children?: ReactNode
}) {
  const centered = align === 'center'

  return (
    <section className="bg-[#ebf4ff] pt-10 lg:pt-12 pb-12 lg:pb-16">
      <div className={`container-site flex flex-col gap-4 ${centered ? 'items-center text-center' : ''}`}>
        {breadcrumb}

        {eyebrow && (
          <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-[#023e7d]">
            {eyebrow}
          </p>
        )}

        <h1
          className={`font-headline text-[32px] lg:text-[64px] text-navy-bolder leading-[1.1] ${
            centered ? 'max-w-[900px]' : ''
          }`}
        >
          {title}
        </h1>

        {description && (
          /*
           * The centered variant gets a wider measure than the left one. At the
           * left variant's 760px a two-sentence intro wrapped to three lines with
           * a two-word orphan on the last; centered text has no column to align
           * with, so it can run wider. `text-balance` then evens the lines out
           * rather than leaving a short tail.
           */
          <p
            className={`font-body text-base lg:text-lg text-neutral-subtle leading-[1.6] ${
              centered ? 'max-w-[900px] mx-auto text-balance' : 'max-w-[760px]'
            }`}
          >
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
