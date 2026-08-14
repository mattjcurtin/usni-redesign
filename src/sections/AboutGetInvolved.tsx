import backgroundImage from '@/assets/images/giving-hero-flipped-extended.png'

/**
 * Closing call to action, carrying the mission-and-vision page's last line —
 * "Raise your voice and get involved in this crucial mission."
 *
 * Uses the homepage SplitFeature treatment: full-bleed photo with a white
 * content card floated to the right.
 */
export default function AboutGetInvolved() {
  return (
    <section
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '480px' }}
    >
      <div className="absolute inset-0 bg-navy-boldest/20" aria-hidden="true" />

      {/* Content card — right side */}
      <div className="relative container-site h-full flex items-center justify-end min-h-[480px]">
        <div className="bg-white p-8 lg:p-12 w-full max-w-full md:max-w-[480px] lg:max-w-[520px] my-12">
          <div className="eyebrow-headline mb-4">
            <p className="eyebrow">Get Involved</p>
            <h2 className="font-headline text-3xl lg:text-4xl text-navy-bolder leading-[1.1]">
              Raise your voice in this crucial mission
            </h2>
          </div>
          <p className="font-body text-base text-neutral-subtle leading-relaxed mb-6">
            The forum only works because people take part in it. Join as a member, or support the
            Institute with a gift.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/membership/join"
              className="inline-flex items-center justify-center bg-navy-bolder text-white font-body font-bold text-sm tracking-[-0.3px] px-5 py-3.5 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors"
            >
              Become a member
            </a>
            <a
              href="/giving/donate"
              className="inline-flex items-center justify-center bg-transparent text-navy-bolder font-body font-bold text-sm tracking-[-0.3px] px-5 py-3.5 border border-navy-bolder hover:bg-navy-bolder hover:text-white transition-colors"
            >
              Support the Institute
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
