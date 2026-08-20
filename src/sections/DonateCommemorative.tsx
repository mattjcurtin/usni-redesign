import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imgChairs from '@/assets/images/giving-opps-modal-hero-Conferences GO.jpg'
import imgBricks from '@/assets/images/jackctaylorcenter-extended.jpg'

/**
 * Commemorative bricks and chairs at the Jack C. Taylor Conference Center.
 *
 * On the live /foundation page these sit inside the main donation form. Here
 * they are a section of their own below the FAQs, with a running subtotal that
 * carries into the donation cart — the prototype's donate page hands its amount
 * to the cart by query string rather than holding form state.
 *
 * TODO: photography is standing in. The live page shows an engraved nameplate on
 * an auditorium seat and the commemorative brick wall on the rooftop terrace.
 */

interface Option {
  id: 'chairs' | 'bricks'
  unitPrice: number
  unitLabel: string
  countLabel: string
  recognition: string
  footnote: string
  image: string
  imageAlt: string
}

const OPTIONS: Option[] = [
  {
    id: 'chairs',
    unitPrice: 2500,
    unitLabel: 'chair(s)',
    countLabel: 'Number of chairs',
    recognition:
      'Gift to be recognized with an engraved silver plate, permanently affixed to a seat in the Conference Center auditorium.*',
    footnote: '*We will be in touch with you regarding text for the nameplate.',
    image: imgChairs,
    imageAlt: 'The auditorium at the Jack C. Taylor Conference Center',
  },
  {
    id: 'bricks',
    unitPrice: 1000,
    unitLabel: 'brick(s)',
    countLabel: 'Number of bricks',
    recognition:
      'Gift to be recognized with my name or that of a loved one, featured on a donor wall on the rooftop terrace.*',
    footnote: '*We will be in touch with you regarding text for the donor wall.',
    image: imgBricks,
    imageAlt: 'The Jack C. Taylor Conference Center',
  },
]

export default function DonateCommemorative() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<Record<string, boolean>>({ chairs: false, bricks: false })
  const [counts, setCounts] = useState<Record<string, number>>({ chairs: 1, bricks: 1 })

  const subtotal = OPTIONS.reduce(
    (sum, o) => (selected[o.id] ? sum + o.unitPrice * counts[o.id] : sum),
    0,
  )

  const clamp = (n: number) => Math.max(1, Math.min(99, n))

  const setCount = (id: string, raw: string) => {
    setCounts(prev => ({ ...prev, [id]: clamp(Number(raw.replace(/[^0-9]/g, '')) || 1) }))
  }


  return (
    <section id="commemorative-gifts" className="py-16 lg:py-20 bg-[#f7f7f2] scroll-mt-[120px]">
      <div className="container-site">
        <h2 className="font-headline text-3xl lg:text-4xl text-navy-bolder leading-[1.1]">
          Purchase a brick or chair at the Jack C. Taylor Conference Center
        </h2>
        <p className="font-body text-base lg:text-lg text-neutral-subtle leading-relaxed mt-4 max-w-[820px]">
          In <strong className="text-navy-bolder">addition</strong> to your gift, consider honoring or
          memorializing someone in your life with a personalized brick or chair at the Jack C. Taylor
          Conference Center.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {OPTIONS.map(option => {
            const on = selected[option.id]
            return (
              <div
                key={option.id}
                className={`bg-white border transition-colors ${on ? 'border-[#023e7d]' : 'border-[#c4c9d4]'}`}
              >
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <input
                      id={`commem-${option.id}`}
                      type="checkbox"
                      checked={on}
                      onChange={e => setSelected(prev => ({ ...prev, [option.id]: e.target.checked }))}
                      className="w-5 h-5 flex-shrink-0 accent-[#023e7d] cursor-pointer"
                    />
                    <label
                      htmlFor={`commem-${option.id}`}
                      className="font-headline text-[26px] text-[#023e7d] leading-none cursor-pointer"
                    >
                      ${option.unitPrice.toLocaleString()} &times;
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={99}
                      step={1}
                      aria-label={option.countLabel}
                      value={counts[option.id]}
                      onChange={e => setCount(option.id, e.target.value)}
                      className="w-20 border border-[#4e576a] bg-white px-2 py-2 font-body text-base text-navy-bolder
                                 outline-none focus:border-navy-bright focus:shadow-[0_0_0_3px_rgba(4,102,200,0.15)] transition"
                    />
                    <span className="font-headline text-[26px] text-[#023e7d] leading-none">
                      {option.unitLabel}
                    </span>
                  </div>

                  <p className="font-body font-bold text-[15px] text-navy-bolder leading-relaxed">
                    {option.recognition}
                  </p>
                  <p className="font-body italic text-[14px] text-neutral-subtle leading-relaxed">
                    {option.footnote}
                  </p>

                </div>

                <img
                  src={option.image}
                  alt={option.imageAlt}
                  loading="lazy"
                  className="w-full h-[280px] object-cover"
                />
              </div>
            )
          })}
        </div>

        {/* Running total and hand-off to the cart */}
        <div className="mt-8 border-t border-[#c4c9d4] pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-base text-neutral-subtle">
            {subtotal > 0 ? (
              <>
                Commemorative gift total{' '}
                <span className="font-headline text-[28px] text-[#023e7d] align-middle ml-1">
                  ${subtotal.toLocaleString()}
                </span>
              </>
            ) : (
              'Select a brick or a chair to add a commemorative gift.'
            )}
          </p>
          <button
            type="button"
            disabled={subtotal === 0}
            onClick={() => navigate(`/giving/donate/cart?amount=${subtotal}&frequency=one-time`)}
            className={`inline-flex items-center justify-center gap-2 font-body font-bold text-base px-6 py-4 border transition-colors ${
              subtotal === 0
                ? 'bg-[#c4c9d4] text-white border-[#c4c9d4] cursor-not-allowed'
                : 'bg-navy-bolder text-white border-navy-bolder hover:bg-navy-bright hover:border-navy-bright'
            }`}
          >
            Add to my donation
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
