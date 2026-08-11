import heroImage from '@/assets/images/250-year-celebration.png'
import { ButtonLink } from '@/components/ui/Button'

/**
 * About landing hero — the split navy-panel-over-photo treatment used by the
 * Giving landing page, so the two section fronts read as siblings.
 */
export default function AboutHero() {
  return (
    <section
      className="relative w-full bg-cover bg-center lg:py-20"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Mobile-only: image stacks above the content panel */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="lg:hidden w-full aspect-[4/3] object-cover object-center"
      />

      <div className="relative z-10 flex lg:justify-end">
        <div
          className="bg-navy-boldest flex flex-col justify-center gap-6 lg:gap-8
                     w-full lg:w-1/2 xl:w-[49%] max-w-[900px]
                     py-10 lg:py-16 xl:py-20
                     pl-5 lg:pl-14"
          style={{ paddingRight: 'clamp(1.25rem, 6.5vw, 7rem)' }}
        >
          <div className="eyebrow-headline">
            <p className="eyebrow text-light-blue">About USNI</p>
            <div className="flex flex-col gap-4 lg:gap-6">
              <h1 className="font-headline text-[32px] lg:text-5xl xl:text-[54px] text-white leading-[1.1]">
                The Independent Forum of the Sea Services
              </h1>
              <p className="font-body text-[18px] lg:text-xl text-neutral-subtlest leading-relaxed">
                Founded in 1873, the U.S. Naval Institute is the independent forum for those who dare
                to read, think, speak, and write in order to advance the professional, literary, and
                scientific understanding of sea power and other issues critical to global security.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 lg:items-center">
            <ButtonLink href="/membership/join" variant="primary" size="md">
              Become a Member
            </ButtonLink>
            <ButtonLink href="/about/history" variant="outline" size="md">
              Our History
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
