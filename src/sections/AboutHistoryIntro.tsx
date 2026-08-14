/** Key numbers from the history page, pulled out of the running prose. */
const facts = [
  { value: '1873', label: 'Founded at the U.S. Naval Academy.' },
  { value: '15', label: 'Naval officers at the first meeting.' },
  { value: '100,000+', label: 'Constituents worldwide today.' },
]

export default function AboutHistoryIntro() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">

          {/* Left column — the page's opening prose */}
          <div className="flex flex-col gap-6 lg:w-[62%]">
            <p className="font-body font-bold text-lg lg:text-xl text-navy-bolder leading-[1.6]">
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
          </div>

          {/* Right column — key numbers, in the membership landing's callout treatment */}
          <dl className="flex flex-col gap-12 lg:flex-1 lg:pl-4">
            {facts.map((fact) => (
              <div key={fact.value} className="flex flex-col gap-6">
                <dt className="font-headline text-[48px] text-navy-subtle leading-[1.1]">
                  {fact.value}
                </dt>
                <div className="h-1 w-full bg-gold-subtle" />
                <dd className="font-body text-[18px] text-navy-bolder leading-[1.4]">{fact.label}</dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </section>
  )
}
