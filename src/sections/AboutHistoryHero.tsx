import heroImage from '@/assets/images/our-histroy-feature-image.png'
import Breadcrumb from '@/components/ui/Breadcrumb'

/**
 * History page hero — the white split-panel treatment from the membership
 * landing page. The feature image that used to sit alongside the intro copy
 * now runs full bleed behind the panel.
 */
export default function AboutHistoryHero() {
  return (
    <section
      className="relative w-full bg-cover bg-center lg:py-24"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Mobile-only: image stacks above the content panel */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="lg:hidden w-full aspect-[4/3] object-cover object-center"
      />

      <div
        className="relative z-10 bg-white flex flex-col justify-center gap-6 lg:gap-8
                   w-full lg:w-1/2 xl:w-[49%] max-w-[900px]
                   py-10 lg:py-16 xl:py-20
                   pr-5 lg:pr-14"
        style={{ paddingLeft: 'clamp(1.25rem, 6.5vw, 7rem)' }}
      >
        <Breadcrumb
          trail={[
            { label: 'Home', href: '/' },
            { label: 'About USNI', href: '/about' },
          ]}
          current="History"
          homeIcon
        />

        <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="font-headline text-[32px] lg:text-5xl xl:text-[64px] text-navy-bolder leading-[1.1]">
            The U.S. Naval Institute
          </h1>
          <p className="font-headline text-[22px] lg:text-[32px] text-navy-subtle leading-[1.15]">
            Who we are, what we do, and why we matter
          </p>
        </div>
      </div>
    </section>
  )
}
