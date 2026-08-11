import { ButtonLink, NavyButtonLink } from '@/components/ui/Button'
import imgTaylorCenter from '@/assets/images/jackctaylorcenter-extended.jpg'

/**
 * The plan document itself.
 *
 * On the current page the plan is an embedded flipbook viewer with no visible
 * title, download, or explanation — easy to miss entirely. This gives it a
 * labelled placement with an explicit action.
 */
export default function AboutStrategicPlanDocument() {
  return (
    <section className="py-16 lg:py-20 bg-[#ebf4ff]" aria-labelledby="plan-document-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center bg-white border border-navy-subtle p-6 lg:p-10">

          <div className="flex flex-col gap-5">
            <div className="eyebrow-headline">
              <p className="eyebrow">The Document</p>
              <h2
                id="plan-document-heading"
                className="font-headline text-[28px] lg:text-[38px] text-navy-bolder leading-[1.15]"
              >
                Strategic Plan 2030
              </h2>
            </div>
            <p className="font-body text-base lg:text-lg text-neutral-subtle leading-relaxed">
              Read the full plan, including the Institute's goals for its forum, its digital reach,
              the Jack C. Taylor Conference Center, and its workforce through 2030.
            </p>
            <dl className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border-light pt-4">
              <div className="flex flex-col">
                <dt className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-neutral-subtle">
                  Published by
                </dt>
                <dd className="font-body text-base text-navy-bolder">U.S. Naval Institute</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-neutral-subtle">
                  Horizon
                </dt>
                <dd className="font-body text-base text-navy-bolder">Through 2030</dd>
              </div>
            </dl>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <NavyButtonLink href="/about/strategic-plan">Read the Plan</NavyButtonLink>
              <ButtonLink href="/about/strategic-plan" variant="outline-dark" size="md">
                Download PDF
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden bg-neutral-subtlest aspect-[4/3]">
            <img
              src={imgTaylorCenter}
              alt="The Jack C. Taylor Conference Center, central to the Institute's strategic plan"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
