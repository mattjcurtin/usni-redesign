import imgHistory from '@/assets/images/our-histroy-feature-image.png'

/** Key numbers from the history page, pulled out of the running prose. */
const facts = [
  { value: '1873', label: 'Founded at the U.S. Naval Academy' },
  { value: '15', label: 'Naval officers at the first meeting' },
  { value: '100,000+', label: 'Constituents worldwide today' },
]

export default function AboutHistoryIntro() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,440px)] gap-10 lg:gap-16 items-start">

          <div className="flex flex-col gap-6 max-w-[760px]">
            <p className="font-body text-lg lg:text-xl text-navy-bolder leading-[1.6]">
              The U.S. Naval Institute has been a fixture at the U.S. Naval Academy since its founding
              in 1873 by a group of 15 naval officers who began meeting to discuss the serious
              implications of a smaller, post–Civil War Navy and other matters of professional interest.
            </p>
            <p className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]">
              The Naval Institute's headquarters on the grounds of the Naval Academy have a commanding
              view of the Severn River and the cemetery, where lie some of the most prominent heroes in
              Navy and Marine Corps lore.
            </p>
            <p className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]">
              The founding vision was to create a forum for the exchange of ideas, to disseminate and
              advance the knowledge of sea power, and to preserve our naval and maritime heritage. The
              “proceedings” of those earliest discussions were eventually published and read throughout
              the fleet. It was in the fleet, at the tip of the sword, where the value of the Naval
              Institute's forum was truly felt. The impact of the new organization spread quickly and
              soon embraced all of the nation's Sea Services — Navy, Marine Corps, and Coast Guard.
              Today, the Naval Institute boasts more than 100,000 constituents worldwide.
            </p>

            {/* Facts strip */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 border-t border-navy-subtle mt-2">
              {facts.map((fact) => (
                <div
                  key={fact.value}
                  className="flex flex-col gap-1 py-5 sm:pr-6 border-b sm:border-b-0 border-border-light"
                >
                  <dt className="font-headline text-[34px] lg:text-[40px] text-navy-bolder leading-none">
                    {fact.value}
                  </dt>
                  <dd className="font-body text-sm text-neutral-subtle leading-snug">{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="w-full overflow-hidden bg-neutral-subtlest">
            <img
              src={imgHistory}
              alt="Historical naval engagement from the Naval Institute collection"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
