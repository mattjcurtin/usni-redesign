import { upcomingEvents, type UsniEvent } from '@/data/events'
import { NavyButtonLink } from '@/components/ui/Button'

/** Red type badge, carried over from the current site's event cards. */
function KindBadge({ kind }: { kind: UsniEvent['kind'] }) {
  return (
    <span className="absolute top-3 left-3 bg-[#C1272D] text-white font-body font-bold text-xs uppercase tracking-[0.05em] px-2.5 py-1">
      {kind}
    </span>
  )
}

function LocationLine({ location }: { location: string }) {
  return (
    <p className="flex items-center gap-2 font-body text-sm text-navy-subtle">
      <i className="fa-solid fa-location-dot text-xs" aria-hidden="true" />
      {location}
    </p>
  )
}

/** The next event up — full width, image beside the detail. */
function HighlightEvent({ event }: { event: UsniEvent }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 items-stretch bg-white border border-navy-subtle overflow-hidden">
      {/* Image runs to the card's edges rather than sitting inside its padding */}
      <div className="relative overflow-hidden bg-neutral-subtlest min-h-[280px] lg:min-h-full">
        <img
          src={event.image}
          alt={event.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <KindBadge kind={event.kind} />
      </div>

      <div className="flex flex-col justify-center gap-4 p-6 lg:p-10 xl:p-12">
        <h3 className="font-headline text-[28px] lg:text-[38px] text-navy-bolder leading-[1.15]">
          {event.title}
        </h3>
        <LocationLine location={event.location} />
        <div className="flex flex-col gap-0.5">
          <p className="font-body font-bold text-base text-navy-bolder">{event.date}</p>
          {event.time && (
            <p className="font-body font-bold text-base text-navy-bolder">{event.time}</p>
          )}
          {event.venue?.map((line) => (
            <p key={line} className="font-body text-base text-neutral-subtle">
              {line}
            </p>
          ))}
        </div>
        <p className="font-body text-base text-neutral-subtle leading-[1.7]">{event.summary}</p>
        <div className="pt-1">
          <NavyButtonLink href={event.href}>View event details</NavyButtonLink>
        </div>
      </div>
    </article>
  )
}

function EventCard({ event }: { event: UsniEvent }) {
  return (
    <article className="group relative flex flex-col bg-white border border-navy-subtle hover:shadow-md transition-shadow">
      <div className="relative overflow-hidden bg-neutral-subtlest aspect-[16/9]">
        <img
          src={event.image}
          alt={event.imageAlt}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300 ease-out"
        />
        <KindBadge kind={event.kind} />
      </div>

      <div className="flex flex-col flex-1 gap-3 p-6 lg:p-7">
        <h3 className="font-headline text-xl lg:text-2xl text-navy-bolder leading-[1.2]">
          {/* Stretched hit area so the whole card is clickable */}
          <a
            href={event.href}
            className="link-underline-hover text-navy-bolder hover:text-navy-bright transition-colors
                       after:absolute after:inset-0"
          >
            {event.title}
          </a>
        </h3>
        <LocationLine location={event.location} />
        <p className="font-body font-bold text-sm text-navy-bolder">{event.date}</p>
        <p className="font-body text-sm text-neutral-subtle leading-relaxed line-clamp-4">
          {event.summary}
        </p>
        <span className="mt-auto pt-2 inline-flex items-center gap-2 font-body font-bold text-sm text-[#0466c8]">
          <span className="relative">
            View event
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          </span>
          <i
            className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  )
}

export default function UpcomingEvents() {
  const [highlight, ...rest] = upcomingEvents

  return (
    <section
      id="upcoming-events"
      className="py-16 lg:py-20 bg-[#ebf4ff] scroll-mt-[100px]"
      aria-labelledby="upcoming-events-heading"
    >
      <div className="container-site flex flex-col gap-10 lg:gap-12">
        <h2
          id="upcoming-events-heading"
          className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1]"
        >
          Upcoming Events
        </h2>

        <HighlightEvent event={highlight} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rest.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
