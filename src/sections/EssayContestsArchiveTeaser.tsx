import archiveCtaImg from '@/assets/images/Naval Intel EC hero_2025.jpg'

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
 * inset by the block's own padding, and a photo half beside it — here on the
 * left, mirroring that page's Ship's Store billboard.
 */
export default function EssayContestsArchiveTeaser() {
  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="container-site">
        <div className="bg-navy-bolder flex flex-col lg:flex-row w-full">
          <div className="flex-1 min-h-[320px] lg:min-h-0 relative overflow-hidden">
            <img
              src={archiveCtaImg}
              alt="A sailor photographs flight operations from the deck of an aircraft carrier"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex items-center p-6 lg:p-12">
            <div className="border border-navy-bold w-full flex flex-col gap-4 px-6 py-10 lg:px-12 lg:py-16">
              <h2 className="font-headline text-[32px] lg:text-[48px] text-white leading-[1.1]">
                Looking for a past contest?
              </h2>
              <p className="font-body text-lg lg:text-xl text-white/90 leading-[1.4]">
                The archive covers more than 260 yearly editions dating back to 1913.
              </p>
              <div className="pt-3">
                <a
                  href="/essay-contests/archive"
                  className="inline-flex items-center gap-2 self-start bg-gold text-navy-boldest font-body font-bold text-base tracking-[-0.5px] px-6 py-4 hover:bg-gold-dark transition-colors"
                >
                  Browse the Archive
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
