import conferenceCenterImage from '@/assets/images/jackctaylorcenter-extended.jpg'

/** The Taylor Center runs its own site, off usni.org. */
const JCTCC_URL = 'https://www.jackctaylorconferencecenter.org/'

function ExternalIcon() {
  return (
    <>
      <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </>
  )
}

/**
 * The Taylor Center as a venue — same treatment as the conference center
 * feature closing the Giving landing page, pointed at hosting rather than
 * giving.
 */
export default function EventsConferenceCenter() {
  return (
    <section
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${conferenceCenterImage})`, minHeight: '520px' }}
    >
      <div className="absolute inset-0 bg-navy-boldest/20" aria-hidden="true" />

      {/* White card — left side */}
      <div className="relative container-site h-full flex items-center min-h-[520px]">
        <div className="bg-white p-8 lg:p-12 w-full max-w-full md:max-w-[480px] lg:max-w-[520px] my-12">
          <div className="eyebrow-headline mb-4">
            <p className="eyebrow">Hosting Inspiring Events</p>
            <h2 className="font-headline text-3xl lg:text-4xl text-navy-bolder leading-[1.1]">
              The Jack C. Taylor Conference Center
            </h2>
          </div>
          <p className="font-body text-base text-neutral-subtle leading-relaxed mb-6">
            The Jack C. Taylor Conference Center is a unique and sophisticated venue for your next
            conference, lecture, workshop, meeting, reception, or special event.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={JCTCC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy-bolder text-white font-body font-bold text-sm tracking-[-0.3px] px-5 py-3.5 hover:bg-navy-bright transition-colors"
            >
              Host an event
              <ExternalIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
