import { PLACEHOLDER_IMAGE, type Person } from '@/data/leadership'

interface LeadershipRosterProps {
  /** Anchor target for the jump-link nav. */
  id: string
  title: string
  people: Person[]
  /** Optional nested roster rendered below the main one, e.g. board liaisons. */
  subgroup?: { title: string; people: Person[]; note?: string }
  background?: 'white' | 'light-blue'
}

function PersonGrid({ people }: { people: Person[] }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-10">
      {people.map((person) => {
        // The watermark stands in for a missing headshot. It already has its own
        // margin, so it skips the resting zoom real photos need.
        const isPlaceholder = person.image === PLACEHOLDER_IMAGE
        return (
        <li key={person.name} className="group relative flex flex-col items-center text-center gap-4">
          {/* Circle mask carried over from the current site, with a tan ring.
              Sources are pre-cropped to the circle itself, and the resting scale
              clears the anti-aliased edge so no matte shows inside the ring. */}
          <div
            className={`w-[140px] h-[140px] lg:w-[168px] lg:h-[168px] rounded-full overflow-hidden border-[6px] border-tan flex-shrink-0
                        ${isPlaceholder ? 'bg-tan-subtlest' : 'bg-white'}`}
          >
            <img
              src={person.image}
              alt={isPlaceholder ? '' : person.name}
              aria-hidden={isPlaceholder || undefined}
              loading="lazy"
              className={
                isPlaceholder
                  ? 'w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-300 ease-out'
                  : 'w-full h-full object-cover scale-[1.08] group-hover:scale-[1.18] transition-transform duration-300 ease-out'
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-headline text-lg lg:text-xl leading-[1.2]">
              {/* The pseudo-element stretches the hit area over the whole tile,
                  so hovering anywhere drives both the underline and the zoom. */}
              <a
                href={person.href}
                className="link-underline-hover text-navy-bolder hover:text-navy-bright transition-colors
                           after:absolute after:inset-0"
              >
                {person.name}
              </a>
            </h3>
            {person.titles.map((title) => (
              <p key={title} className="font-body font-bold text-sm text-neutral-subtle leading-snug">
                {title}
              </p>
            ))}
          </div>
        </li>
        )
      })}
    </ul>
  )
}

export default function LeadershipRoster({
  id,
  title,
  people,
  subgroup,
  background = 'white',
}: LeadershipRosterProps) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-20 scroll-mt-[150px] ${background === 'white' ? 'bg-white' : 'bg-[#ebf4ff]'}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-site">
        <h2
          id={`${id}-heading`}
          className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1] mb-10 lg:mb-12"
        >
          {title}
        </h2>

        <PersonGrid people={people} />

        {subgroup && (
          <div className="mt-14 lg:mt-16 pt-10 lg:pt-12 border-t border-navy-subtle">
            <h3 className="font-headline text-2xl lg:text-3xl text-navy-bolder leading-[1.15] mb-10">
              {subgroup.title}
            </h3>
            <PersonGrid people={subgroup.people} />
            {subgroup.note && (
              <p className="font-body text-sm text-neutral-subtle leading-relaxed mt-10 max-w-[900px]">
                {subgroup.note}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
