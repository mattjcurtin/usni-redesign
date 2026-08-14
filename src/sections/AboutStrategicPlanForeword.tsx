import imgPace from '@/assets/images/leadership/signature-gen-peter-pace.png'
import imgHarris from '@/assets/images/leadership/signature-adm-harry-harris.png'
import imgSpicer from '@/assets/images/leadership/signature-radm-ray-spicer.png'

/** Signatories as they appear at the foot of the foreword on the current page. */
const signatories = [
  {
    name: 'Gen Peter Pace, USMC (Ret.)',
    role: 'Chair, Board of Trustees',
    image: imgPace,
    href: '/about/leadership/gen-peter-pace-usmc-ret',
  },
  {
    name: 'ADM Harry B. Harris, USN (Ret.)',
    role: 'Chair, Board of Directors',
    image: imgHarris,
    href: '/about/leadership/adm-harry-harris',
  },
  {
    name: 'RADM Raymond A. Spicer, USN (Ret.)',
    role: 'Chief Executive Officer and Publisher',
    image: imgSpicer,
    href: '/about/leadership/radm-ray-spicer-usn-ret',
  },
]

/**
 * The Strategic Plan foreword.
 *
 * The source page runs this as five long unbroken paragraphs with the three
 * signatories stranded at the bottom as loose lines. Here the opening paragraph
 * leads at display size and the signatories sit alongside the text, in the same
 * tan-ringed circles used by the Leadership & Staff roster.
 */
export default function AboutStrategicPlanForeword() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px] gap-10 lg:gap-10 xl:gap-12 items-start">

        <div className="flex flex-col gap-6">
          <div>
            <p className="font-body font-semibold text-sm uppercase tracking-[0.08em] text-navy-subtle mb-2">
              Foreword
            </p>
            <h2 className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1]">
              A new era for the Institute
            </h2>
          </div>

          <p className="font-body text-lg lg:text-xl text-navy-bolder leading-[1.6]">
            Founded by forward-thinking naval officers in 1873, the U.S. Naval Institute has remained
            steadfast in providing an open, independent, and trusted forum for nonpartisan debate,
            historical insight, and professional development, illuminating some of the most pressing
            issues facing our Navy, Marine Corps, Coast Guard, and Merchant Marine.
          </p>

          <p className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]">
            As we look to the horizon, we see a maritime landscape that is becoming increasingly
            complex, shaped by accelerating technological change, global instability, and shifts in
            geopolitical power — including an increasingly aggressive Russia and China. At the same
            time, the rapid rise of disinformation makes access to credible, independent insight more
            critical than ever, underscoring the vital role of the U.S. Naval Institute in supporting
            a strong, informed, and engaged Sea Service community.
          </p>

          {/* The plan's central argument — pulled out as a quote */}
          <blockquote className="border-l-4 border-gold pl-6 py-1 my-2">
            <p className="font-headline text-[22px] lg:text-[26px] text-navy-bolder leading-[1.35]">
              Our nation is at an inflection point potentially as consequential as that of 1940. Then
              the question was whether the United States would build the fleet that could dominate in
              World War II. The question now is whether we are prepared to deter future conflict and,
              should deterrence fail, to fight and win.
            </p>
          </blockquote>

          <p className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]">
            With sea power as a major determinant, our nation's Sea Services play a critical role in
            the outcome, and the Naval Institute's role as a forum for those who dare to read, think,
            speak, and write becomes even more vital.
          </p>

          <p className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]">
            Like the Sea Services, the Naval Institute is entering a new era — one that demands
            agility, innovation, and an uncompromising commitment to our mission. We have already
            taken steps to pave the way ahead, not least of which were the vision, design, and
            construction of the Jack C. Taylor Conference Center and our commitment to digitizing the
            Institute's rich content. We have established the Institute as a thought leader and venue
            for professional engagement. Our aim with this strategic plan is to build on that momentum
            by continuing the growth and impact of events at the Conference Center and by continuing
            to expand the Institute's digital footprint, applying emerging capabilities to broaden our
            reach and influence, enhance our engagement, and build a future-ready workforce.
          </p>

          <p className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]">
            As we have done throughout our history, the Institute will continue to evolve to ensure it
            remains relevant, accessible, and impactful. This strategic plan reaffirms our commitment
            to fostering informed discussion, advancing professional knowledge, and ensuring the most
            innovative ideas reach the right people at the right time. We are committed to fact-based
            analysis and products that individuals, organizations, and corporations can trust. This
            plan also focuses on broadening our efforts to educate the public on the enduring
            importance of sea power and sea control. We will strengthen our position as the preeminent
            forum for maritime thought that will help shape the course of sea power and maritime
            security for the next 150 years.
          </p>

          <p className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]">
            Thank you for your continued support and dedication to our shared mission.
          </p>
        </div>

        {/* Signatories — alongside the foreword rather than stranded beneath it */}
        <ul className="flex flex-col sm:flex-row lg:flex-col gap-8 sm:gap-6 lg:gap-10">
          {signatories.map((s) => (
            <li
              key={s.name}
              className="group relative flex flex-col items-center text-center gap-4 sm:flex-1"
            >
              <div className="w-[150px] h-[150px] lg:w-[190px] lg:h-[190px] rounded-full overflow-hidden border-[6px] border-tan bg-white flex-shrink-0">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover scale-[1.08] group-hover:scale-[1.18] transition-transform duration-300 ease-out"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-headline text-lg lg:text-xl leading-snug">
                  {/* Stretched hit area, matching the Leadership & Staff roster */}
                  <a
                    href={s.href}
                    className="link-underline-hover text-navy-bolder hover:text-navy-bright transition-colors
                               after:absolute after:inset-0"
                  >
                    {s.name}
                  </a>
                </span>
                <span className="font-body font-bold text-sm text-neutral-subtle leading-snug">
                  {s.role}
                </span>
              </div>
            </li>
          ))}
        </ul>

        </div>
      </div>
    </section>
  )
}
