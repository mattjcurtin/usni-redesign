import imgLeft from '@/assets/images/our-histroy-feature-image.png'
import imgTopRight from '@/assets/images/jackctaylorcenter-extended.jpg'
import imgBottomRight from '@/assets/images/oral-history-50-feature.png'

/**
 * Mission and vision, absorbed onto the About landing page.
 *
 * The standalone /about-us/mission-and-vision page is being retired, so its copy
 * lives here. Laid out with the same text-plus-photo-grid treatment as the
 * Giving landing's "About the Foundation" block.
 */
export default function AboutMissionVision() {
  return (
    <section id="mission-and-vision" className="py-16 lg:py-20 bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 lg:gap-16">

          {/* Left — text content */}
          <div className="flex flex-col gap-6">
            <div className="eyebrow-headline">
              <p className="eyebrow">Mission &amp; Vision</p>
              <h2 className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1]">
                A place where free and independent debate may flourish
              </h2>
            </div>

            <p className="font-body text-base lg:text-lg text-neutral-subtle leading-relaxed">
              Founded in 1873, the U.S. Naval Institute is the independent forum for those who dare
              to read, think, speak, and write in order to advance the professional, literary, and
              scientific understanding of sea power and other issues critical to global security.
              Your membership ensures that the Naval Institute carries on its vital mission as{' '}
              <em>The Independent Forum of the Sea Services</em> — a place where free and independent
              debate may flourish.
            </p>

            <p className="font-body text-base lg:text-lg text-neutral-subtle leading-relaxed">
              The U.S. Naval Institute is a non-profit membership association serving a community of
              individuals who participate in an open forum to debate key issues in the Sea Services.
              We serve our members by providing a monthly journal,{' '}
              <a href="/proceedings" className="text-[#023E7D] underline hover:no-underline">
                Proceedings
              </a>
              , and other benefits such as our daily news service{' '}
              <a href="/news" className="text-[#023E7D] underline hover:no-underline">
                USNI News
              </a>
              ; blogs, newsletters, and mobile apps; discounts off all titles from the{' '}
              <a href="/books" className="text-[#023E7D] underline hover:no-underline">
                Naval Institute Press
              </a>
              ; as well as a discounted subscription rate on our award-winning bi-monthly{' '}
              <a href="/naval-history" className="text-[#023E7D] underline hover:no-underline">
                Naval History
              </a>{' '}
              magazine. Naval Institute members also have access to our{' '}
              <a href="/archives" className="text-[#023E7D] underline hover:no-underline">
                archive
              </a>
              , and networking and professional development programs via our conferences and events.
            </p>
          </div>

          {/* Right — photo grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3 h-[600px]">
            <div className="overflow-hidden row-span-2">
              <img
                src={imgLeft}
                alt="Historical naval artwork from the Naval Institute collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={imgTopRight}
                alt="The Jack C. Taylor Conference Center in Annapolis"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={imgBottomRight}
                alt="Oral history recording at the Naval Institute"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
