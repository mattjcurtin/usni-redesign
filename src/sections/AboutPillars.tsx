/**
 * "The Naval Institute shall remain: Independent / Non-Partisan / Innovative."
 *
 * On the current mission-and-vision page these are three bold words with a line
 * of copy each, buried in running text. They're the Institute's defining
 * commitments, so they get the card treatment from the Giving landing page.
 */
const pillars = [
  {
    title: 'Independent',
    body: 'A non-profit member association, with no government support, that does not lobby for special interests.',
  },
  {
    title: 'Non-Partisan',
    body: 'An independent, professional military association with a mission, goals, and objectives that transcend political affiliations.',
  },
  {
    title: 'Innovative',
    body: 'Ideas and debate flourish through its respected journals, Proceedings and Naval History, its conferences, its books, and its online content, in support of those who serve.',
  },
]

export default function AboutPillars() {
  return (
    <section className="py-16 lg:py-20 bg-[#002B5C]" aria-labelledby="pillars-heading">
      <div className="container-site">
        <div className="flex flex-col gap-3 mb-10 max-w-[760px]">
          <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-light-blue">
            Our Commitments
          </p>
          <h2 id="pillars-heading" className="font-headline text-4xl lg:text-5xl text-white leading-[1.1]">
            The Naval Institute shall remain
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white p-8 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="font-headline text-2xl text-navy-bolder leading-[1.2]">
                  {pillar.title}
                </h3>
                <p className="font-body text-base text-neutral-subtle leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
