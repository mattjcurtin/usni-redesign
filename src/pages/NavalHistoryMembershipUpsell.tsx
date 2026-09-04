import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NavalHistorySubNav from '@/sections/NavalHistorySubNav'
import { Button } from '@/components/ui/Button'
import proceedingsCovers from '@/assets/images/proceedings-magazine-april-cover.png'
import {
  FORMAT_LABELS,
  offerFor,
  type Format,
  type Region,
  type Term,
} from '@/data/navalHistorySubscription'

/**
 * Membership cross-promotion — step 2 of the Naval History subscribe flow.
 *
 * The client asked whether a subscriber who is not a member should be offered
 * one before reaching the cart, and whether that gets unwieldy. This is the
 * lean version: the two annual plans for the region already chosen, no extra
 * region or term selectors, and a skip straight to the cart. Everything the
 * reader picked in step 1 carries through untouched.
 *
 * The pitch is the arithmetic rather than a claim. A membership takes the
 * subscription to the member rate, so the panel shows the reader's own
 * subscription dropping from the list price to that rate — and is honest that
 * a membership does not pay for itself on this purchase alone.
 *
 * A member who has already signed in never sees this step: `member=true`
 * redirects to the cart. In a real build that flag comes from the session; the
 * prototype has no shared auth, so it travels in the URL.
 */

interface Plan {
  plan: 'digital' | 'full'
  name: string
  price: Record<Region, number>
  description: string
  features: string[]
}

/** Annual plans, matching MembershipCustomizer's 1-year tier. */
const PLANS: Plan[] = [
  {
    plan: 'digital',
    name: 'Digital',
    price: { us: 45, international: 45 },
    description: 'Full online access to USNI.org and the digital edition of Proceedings.',
    features: [
      'Digital edition of Proceedings + full access to USNI.org',
      '28% off Naval History Magazine',
      'Up to 40% off Naval Institute Press titles',
      '150+ years of archives — oral histories, photographs, every Proceedings article since 1874',
    ],
  },
  {
    plan: 'full',
    name: 'Full',
    price: { us: 75, international: 155 },
    description: 'Everything in Digital plus the print edition of Proceedings mailed monthly.',
    features: [
      'Print Proceedings delivered monthly + digital edition',
      '28% off Naval History Magazine',
      'Up to 40% off Naval Institute Press titles',
      'Free invitations to the USNI conference series',
    ],
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#0466c8]" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function NavalHistoryMembershipUpsell() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const term = (searchParams.get('term') === '3' ? '3' : '1') as Term
  const region = (searchParams.get('region') === 'international'
    ? 'international'
    : 'us') as Region
  const format = (searchParams.get('format') === 'digital' ? 'digital' : 'print') as Format
  const alreadyMember = searchParams.get('member') === 'true'

  const offer = offerFor(format, region, term)
  const termLabel = term === '3' ? '3 years' : '1 year'

  const cartBase =
    `/naval-history/subscribe/cart?term=${term}&region=${region}` +
    `&format=${format}&price=${offer.price}`

  // A signed-in member skips the step entirely — they already have the rate.
  useEffect(() => {
    if (alreadyMember) navigate(cartBase, { replace: true })
  }, [alreadyMember, cartBase, navigate])

  if (alreadyMember) return null

  const addMembership = (plan: Plan) => {
    const memPrice = plan.price[region]
    navigate(
      `/naval-history/subscribe/cart?term=${term}&region=${region}&format=${format}` +
        // The subscription switches to the member rate, which is the whole point.
        `&price=${offer.memberPrice}&memPlan=${plan.plan}&memPrice=${memPrice}`,
    )
  }

  const skip = () => navigate(cartBase)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavalHistorySubNav />
      <main className="flex-1 bg-white">

        {/* Alert banner — mirrors the membership join flow's magazine upsell */}
        <div className="bg-[#fff8d6] border-b border-[#ffaa00]">
          <div className="container-site py-5">
            <p className="font-body text-[18px] text-[#1d2535] leading-[1.4]">
              <span className="font-bold">
                Your Naval History subscription has been added to the cart.
              </span>{' '}
              Members pay less for it — add a membership below, or{' '}
              <button type="button" onClick={skip} className="transition-colors font-bold text-link">
                continue to cart
              </button>
              .
            </p>
          </div>
        </div>

        {/* Billboard */}
        <div className="py-10 lg:py-14">
          <div className="container-site">
            <div className="bg-[#F7F7F2] border border-[#D9D7BF] px-8 lg:px-16 py-10 lg:py-14 flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="flex-1 min-w-0 flex flex-col gap-4">
                <p className="eyebrow">Before you check out</p>
                <h1 className="font-headline text-[32px] lg:text-[46px] text-navy-bolder leading-[1.1]">
                  Members pay ${offer.memberPrice} for this subscription
                </h1>
                <p className="font-body text-[18px] text-neutral-subtle leading-[1.5]">
                  A Naval Institute membership takes your {termLabel}{' '}
                  {FORMAT_LABELS[format]} subscription from ${offer.price} to $
                  {offer.memberPrice}, and brings Proceedings and 150 years of archives with it.
                </p>

                {/* The arithmetic, stated plainly rather than implied */}
                <dl className="flex flex-wrap items-end gap-x-10 gap-y-4 border-t border-[#D9D7BF] pt-5 mt-1">
                  <div className="flex flex-col gap-1">
                    <dt className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-neutral-subtle">
                      Subscription alone
                    </dt>
                    <dd className="font-headline text-[30px] text-neutral-subtle leading-none">
                      ${offer.price}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-navy-subtle">
                      With a membership
                    </dt>
                    <dd className="font-headline text-[30px] text-navy-bolder leading-none">
                      ${offer.memberPrice}
                      <span className="font-body text-[15px] text-neutral-subtle ml-2">
                        + membership
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              <img
                src={proceedingsCovers}
                alt="Proceedings magazine, included with membership"
                className="hidden lg:block w-[210px] flex-shrink-0 shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="container-site pb-8 flex flex-col items-center gap-8">
          <div className="w-full max-w-[980px] grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {PLANS.map(plan => (
              <div key={plan.plan} className="bg-white border border-[#c4c9d4] flex flex-col">
                <div className="flex flex-col flex-1 px-8 py-8 gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-headline text-[30px] text-navy-bolder leading-[1.1]">
                      {plan.name}
                    </h2>
                    <div className="flex flex-col items-end flex-shrink-0">
                      <div className="flex items-start">
                        <span className="font-body font-bold text-base text-navy-bolder mt-[4px]">$</span>
                        <span className="font-headline text-[44px] text-navy-bolder leading-[1.0]">
                          {plan.price[region]}
                        </span>
                      </div>
                      <span className="font-body text-sm text-neutral-subtle">/ yr</span>
                    </div>
                  </div>

                  <p className="font-body text-[17px] text-neutral-subtle leading-[1.5]">
                    {plan.description}
                  </p>

                  <Button
                    variant={plan.plan === 'full' ? 'navy' : 'outline-dark'}
                    size="lg"
                    fullWidth
                    onClick={() => addMembership(plan)}
                  >
                    Add {plan.name} Membership
                  </Button>

                  <ul className="flex flex-col border-t border-[#e4e7ec] pt-5 gap-1 mt-auto">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 py-0.5">
                        <CheckIcon />
                        <span className="font-body text-[15px] text-neutral-subtle leading-[1.5]">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline-dark" size="lg" onClick={skip}>
            No thanks, continue to cart
          </Button>

          <p className="font-body text-[14px] text-neutral-subtle text-center max-w-[620px] -mt-2">
            Already a member?{' '}
            <a href="/login" className="text-link">
              Sign in
            </a>{' '}
            to apply your rate — you can skip this step.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
