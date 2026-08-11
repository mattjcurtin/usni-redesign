function ArrowIcon() {
  return (
    <svg
      className="w-3 h-3 flex-shrink-0"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6h8M6 2l4 4-4 4" />
    </svg>
  )
}

/**
 * Pointer from the landing page to the archive listing.
 *
 * Uses the contained billboard treatment from the Books landing page
 * (BooksBillboards): a navy block inside `container-site` with a thin rule
 * inset by the block's own padding — minus that block's photo half, so the
 * content spans the full width and is centred.
 */
export default function EssayContestsArchiveTeaser() {
  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="container-site">
        <div className="bg-navy-bolder w-full flex items-center p-6 lg:p-12">
          <div className="border border-navy-bold w-full flex flex-col items-center text-center gap-4 px-6 py-10 lg:px-12 lg:py-16">
            <h2 className="font-headline text-[32px] lg:text-[48px] text-white leading-[1.1]">
              Looking for a past contest?
            </h2>
            <p className="font-body text-lg lg:text-xl text-white/90 leading-[1.4] max-w-[640px]">
              The archive covers more than 260 yearly editions dating back to 1913.
            </p>
            <div className="pt-3">
              <a
                href="/essay-contests/archive"
                className="inline-flex items-center gap-2 bg-gold text-navy-boldest font-body font-bold text-base tracking-[-0.5px] px-6 py-4 hover:bg-gold-dark transition-colors"
              >
                Browse the Archive
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
