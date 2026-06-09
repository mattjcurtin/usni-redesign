import inlineImg from '@/assets/images/proceedings-prepare-marine-corps.png'
import americaSeaPowerImg from '@/assets/images/america-power-project-series.png'
import podcastImg from '@/assets/images/proceedings-podcast.png'
import { featuredArticlesRight, latestIssueCol1 } from '@/data/proceedings'

// ── Audio Player ─────────────────────────────────────────────────────────────

function AudioPlayer() {
  return (
    <div className="border border-border-light bg-neutral-subtlest/40 p-5 mb-8">
      <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-[#C0392B] mb-2">
        Podcast Feature
      </p>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Play audio"
          className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E85D04] flex items-center justify-center hover:brightness-90 transition-all"
        >
          <i className="fa-solid fa-play text-white text-sm ml-0.5" aria-hidden="true" />
        </button>
        <div className="flex-1 min-w-0">
          <p className="font-body font-semibold text-sm text-navy-bolder mb-2">Listen to this story</p>
          {/* Waveform bars */}
          <div className="flex items-end gap-[3px] h-7">
            {[4,6,10,8,12,7,9,14,11,8,6,10,13,9,7,11,8,5,9,12,10,7,11,8,6,9,12,10,8,6].map((h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-sm flex-shrink-0"
                style={{
                  height: `${h * 2}px`,
                  backgroundColor: i < 8 ? '#E85D04' : '#C0B9A8',
                }}
              />
            ))}
          </div>
        </div>
        <span className="font-body text-xs text-neutral-subtle flex-shrink-0">8:42</span>
      </div>
    </div>
  )
}

// ── Sidebar ───────────────────────────────────────────────────────────────────

function SidebarPromoCard({
  image,
  imageAlt,
  eyebrow,
  headline,
  href,
}: {
  image: string
  imageAlt: string
  eyebrow: string
  headline: string
  href: string
}) {
  return (
    <a href={href} className="block group relative overflow-hidden">
      <div className="aspect-[4/3] bg-navy-boldest overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-boldest/85 via-navy-boldest/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-body font-semibold text-[10px] uppercase tracking-widest text-gold mb-1">{eyebrow}</p>
        <p className="font-headline text-base text-white leading-tight">{headline}</p>
      </div>
    </a>
  )
}

function SidebarArticleCard({ article }: { article: (typeof featuredArticlesRight)[0] }) {
  return (
    <article className="flex gap-3 py-4 border-b border-border-light last:border-b-0">
      {article.image && (
        <a href={article.href} className="flex-shrink-0 w-20 h-16 overflow-hidden bg-neutral-subtlest block">
          <img
            src={article.image}
            alt={article.imageAlt ?? article.headline}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </a>
      )}
      <div className="flex-1 min-w-0">
        <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-navy-subtle mb-1">
          {article.category}
        </p>
        <a href={article.href}>
          <h4 className="font-body font-semibold text-xs text-navy-bolder leading-snug hover:text-navy-subtle transition-colors line-clamp-3">
            {article.headline}
          </h4>
        </a>
      </div>
    </article>
  )
}

function ArticleSidebar() {
  const sidebarArticles = [latestIssueCol1[3], latestIssueCol1[4], featuredArticlesRight[0]]

  return (
    <aside className="flex flex-col gap-6">

      {/* Promo cards */}
      <SidebarPromoCard
        image={americaSeaPowerImg}
        imageAlt="American Sea Power Project series"
        eyebrow="USNI Book Series"
        headline="The American Sea Power Project"
        href="/books/american-sea-power-project"
      />
      <SidebarPromoCard
        image={podcastImg}
        imageAlt="Proceedings Podcast"
        eyebrow="Listen Now"
        headline="The Proceedings Podcast"
        href="/proceedings/podcast"
      />

      {/* Related sidebar articles */}
      <div>
        <h3 className="font-body font-bold text-xs uppercase tracking-widest text-navy-boldest pb-3 border-b-2 border-navy-boldest mb-0">
          More from April 2026
        </h3>
        {sidebarArticles.map((article) => (
          article && <SidebarArticleCard key={article.id} article={article} />
        ))}
      </div>

    </aside>
  )
}

// ── Topics ────────────────────────────────────────────────────────────────────

const topics = ['Marine Corps', 'Force Structure', 'Pacific Strategy', 'Amphibious Operations']

function ArticleTopics() {
  return (
    <div className="mt-10 pt-8 border-t border-border-light">
      <p className="font-body font-semibold text-xs uppercase tracking-widest text-navy-subtle mb-3">Topics</p>
      <div className="flex flex-wrap gap-2">
        {topics.map((tag) => (
          <a
            key={tag}
            href={`/proceedings/series?topic=${encodeURIComponent(tag.toLowerCase())}`}
            className="font-body text-sm font-medium text-navy-bolder border border-border-light px-4 py-1.5 hover:bg-surface-subtle hover:border-navy-subtle transition-colors"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  )
}

// ── Author Bio ────────────────────────────────────────────────────────────────

function ArticleAuthorBio() {
  return (
    <div className="mt-10 border border-border-light p-6">
      <p className="font-body font-semibold text-xs uppercase tracking-widest text-navy-subtle mb-4">
        About the Author
      </p>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-neutral-subtlest flex-shrink-0 overflow-hidden flex items-center justify-center">
          <i className="fa-solid fa-user text-2xl text-neutral-subtle/50" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-headline text-xl text-navy-bolder mb-2">
            Corporal Richard Sweeney III,{' '}
            <span className="block text-base font-body font-semibold">U.S. Marine Corps Reserve</span>
          </h3>
          <p className="font-body text-sm text-neutral-subtle leading-relaxed mb-4">
            Corporal Sweeney is a rifleman with 2nd Battalion, 24th Marines, 4th Marine Division. He holds a degree
            in political science from the University of Notre Dame, where he focused on national security
            and military force structure. He has participated in multiple amphibious exercises with I and II MEF.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="/author/richard-sweeney-iii"
              className="inline-flex items-center gap-2 bg-navy-bolder text-white font-body font-semibold text-xs px-4 py-2.5 hover:bg-navy transition-colors"
            >
              More stories from this author
            </a>
            <a
              href="/author/richard-sweeney-iii/biography"
              className="inline-flex items-center gap-2 border border-navy-bolder text-navy-bolder font-body font-semibold text-xs px-4 py-2.5 hover:bg-surface-subtle transition-colors"
            >
              View Biography
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Comments ──────────────────────────────────────────────────────────────────

function ArticleComments() {
  return (
    <section className="bg-white pt-14 pb-16 border-t border-border-light mt-16">
      <div className="container-site">
        <h2 className="font-headline text-4xl text-navy-bolder mb-8">Comments</h2>

        {/* Comment policy */}
        <div className="bg-surface-subtle border border-border-light p-5 mb-8 flex items-start justify-between gap-6">
          <div>
            <p className="font-body font-semibold text-sm text-navy-bolder mb-1">U.S. Naval Institute Comment Policy</p>
            <p className="font-body text-sm text-neutral-subtle leading-relaxed">
              We encourage open discussion. Comments deemed inappropriate may be removed. Please read our{' '}
              <a href="/comment-policy" className="text-navy-subtle underline hover:no-underline">comment policy</a>{' '}
              before contributing.
            </p>
          </div>
          <button
            type="button"
            className="flex-shrink-0 bg-navy-bolder text-white font-body font-semibold text-sm px-5 py-2 hover:bg-navy transition-colors"
          >
            Got it
          </button>
        </div>

        {/* Comment count + input */}
        <div className="mb-6">
          <p className="font-body text-sm text-neutral-subtle mb-5">0 Comments</p>
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-navy-subtle/20 flex-shrink-0 flex items-center justify-center">
              <i className="fa-solid fa-user text-sm text-navy-subtle/60" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full border border-border-light font-body text-sm text-navy-bolder px-4 py-3 focus:outline-none focus:border-navy-subtle transition-colors bg-white"
              />
            </div>
          </div>
        </div>

        {/* Social sharing */}
        <div className="flex items-center gap-4 pt-6 border-t border-border-light">
          <span className="font-body text-sm font-semibold text-neutral-subtle">Share this article:</span>
          <div className="flex items-center gap-3">
            {[
              { icon: 'fa-brands fa-facebook-f', label: 'Share on Facebook', color: '#1877F2' },
              { icon: 'fa-brands fa-x-twitter', label: 'Share on X', color: '#000' },
              { icon: 'fa-brands fa-linkedin-in', label: 'Share on LinkedIn', color: '#0A66C2' },
              { icon: 'fa-solid fa-envelope', label: 'Share by email', color: '#4E576A' },
              { icon: 'fa-solid fa-print', label: 'Print article', color: '#4E576A' },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                className="w-8 h-8 border border-border-light flex items-center justify-center hover:bg-surface-subtle transition-colors"
              >
                <i className={`${item.icon} text-xs`} style={{ color: item.color }} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ArticleBody() {
  return (
    <>
      <section className="bg-white pt-10 pb-0">
        <div className="container-site">
          <div className="flex gap-10 xl:gap-14 items-start">

            {/* ── Main content column ── */}
            <div className="flex-1 min-w-0">
              <AudioPlayer />

              {/* Article body */}
              <div className="font-body text-base text-navy-bolder leading-relaxed space-y-5 article-body">

                {/* Drop cap paragraph */}
                <p>
                  <span
                    className="float-left font-headline text-[5.5rem] leading-[0.8] text-navy-boldest mr-3 mt-1 select-none"
                    aria-hidden="true"
                  >
                    T
                  </span>
                  he United States Marine Corps maintains three Marine Expeditionary Forces — I&nbsp;MEF at Camp
                  Pendleton, II&nbsp;MEF at Camp Lejeune, and III&nbsp;MEF at Okinawa. For nearly four decades, this
                  structure has served as the foundation of America's expeditionary naval capability. Yet today's
                  operating environment — defined by simultaneous coercion campaigns from China, Russia, Iran, and North
                  Korea — demands a force structure designed for sustained, multi-theater competition. Three MEFs cannot
                  deliver that.
                </p>

                <p>
                  The assertion is not a critique of individual Marine units, which remain among the most capable
                  expeditionary forces on earth. It is a critique of capacity. When planners map current combatant
                  commander requirements against available MEF resources, the numbers do not add up. INDOPACOM needs
                  III&nbsp;MEF's amphibious assault capability to deter Chinese aggression across the first island chain.
                  EUCOM needs II&nbsp;MEF's capacity to reassure NATO allies along Europe's eastern flank. CENTCOM
                  requires continuous rotational presence to maintain access and reassure Gulf partners. SOUTHCOM and
                  AFRICOM make steady demands as well. The result is a Corps with no true strategic reserve.
                </p>

                {/* Section heading */}
                <h2 className="font-headline text-2xl lg:text-3xl text-navy-bolder pt-4 pb-1 clear-left">
                  A Force Built for Sequential Conflict
                </h2>

                <p>
                  The current MEF structure was optimized for the post-Cold War era of sequential engagements and
                  uncontested maritime access. Each MEF commands approximately 50,000 Marines and sailors — together with
                  the ground combat element, aviation combat element, and logistics combat element needed to conduct
                  independent joint operations. In theory, the Marine Corps can surge any combination of these forces to
                  meet a contingency. In practice, simultaneous demands have stretched this construct to its structural
                  limits.
                </p>

                <p>
                  Military history offers few examples of major powers successfully sustaining two-theater warfighting
                  capacity without either a large standing army or a well-resourced reserve. The Marine Corps possesses
                  both active and reserve components, yet they are not currently organized, equipped, or trained to
                  function as a fourth operational MEF. That gap is not inevitable — it is a resource and policy choice
                  that can be reversed.
                </p>

                {/* Inline image */}
                <figure className="my-8 clear-left">
                  <div className="aspect-[16/9] overflow-hidden bg-neutral-subtlest">
                    <img
                      src={inlineImg}
                      alt="Marine Corps expeditionary training operations"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 font-body text-xs text-neutral-subtle leading-relaxed">
                    Marines conduct combined-arms live-fire training at Twentynine Palms. Sustained multi-theater
                    capability requires a larger rotational base than three MEFs can provide.
                    <span className="block text-neutral-subtle/60 mt-0.5">Photo Credit: U.S. Marine Corps</span>
                  </figcaption>
                </figure>

                {/* Section heading */}
                <h2 className="font-headline text-2xl lg:text-3xl text-navy-bolder pt-4 pb-1">
                  The Force Generation Problem
                </h2>

                <p>
                  The problem is not only numbers — it is regeneration time. A Marine Expeditionary Unit, the building
                  block of MEF-level operations, requires roughly 18 months from return to re-deployment-ready status.
                  With three MEFs, the Corps maintains a rotation base that leaves almost no strategic reserve. A major
                  contingency in the Western Pacific would immediately strip II&nbsp;MEF of aviation and logistics combat
                  elements to reinforce I and III&nbsp;MEFs. That is not a theoretical concern — it is the current
                  planning reality facing the service today.
                </p>

                <p>
                  Advocates for Force Design 2030 will rightly note that the Marine Corps has made important structural
                  reforms, distributing forces across the Pacific, adding long-range fires, and shedding legacy tank and
                  infantry battalion capacity in favor of lighter, more dispersible formations. Those reforms improve the
                  quality of what three MEFs can do within a single theater. They do not resolve the fundamental capacity
                  problem of operating across two theaters simultaneously while sustaining deterrence in a third.
                </p>

                {/* Section heading */}
                <h2 className="font-headline text-2xl lg:text-3xl text-navy-bolder pt-4 pb-1">
                  A Path to Four MEFs
                </h2>

                <p>
                  Establishing a fourth Marine Expeditionary Force is not a new idea — it has surfaced periodically in
                  service planning discussions for over a decade. What has changed is the urgency. A IV&nbsp;MEF built
                  around the Marine Reserve's existing 4th Marine Division, 4th Marine Aircraft Wing, and 4th Marine
                  Logistics Group could provide the strategic reserve the Corps currently lacks without requiring a
                  significant increase in active-duty end strength.
                </p>

                <p>
                  The key investment is readiness infrastructure. Reserve units today lack consistent access to amphibious
                  shipping for training, limited pre-positioned equipment sets in key theaters, and constrained annual
                  training days relative to operational requirements. Targeted congressional action on each of these areas
                  — shipping access agreements, pre-positioned materiel in Guam and Diego Garcia, and expanded training
                  authorizations — could move IV&nbsp;MEF from concept to operational reality within a single
                  Future Years Defense Program cycle. The force structure already exists. The political will to resource
                  it is the missing ingredient.
                </p>

                {/* References */}
                <div className="pt-8 mt-8 border-t border-border-light">
                  <h3 className="font-body font-bold text-sm uppercase tracking-widest text-navy-subtle mb-4">
                    References
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 font-body text-sm text-neutral-subtle leading-relaxed">
                    <li>
                      Congressional Budget Office, "Options for Restructuring the Marine Corps," November 2025.
                    </li>
                    <li>
                      Force Design Working Group, "MEF Capacity Analysis: 2025 Update," Marine Corps Combat
                      Development Command, Quantico, VA.
                    </li>
                    <li>
                      Lieutenant General (Ret.) Robert Schmidle, "The Case for a Fourth MEF," <em>Proceedings</em>,
                      March 2025, 44–49.
                    </li>
                  </ol>
                </div>

              </div>

              <ArticleTopics />
              <ArticleAuthorBio />
            </div>

            {/* ── Sidebar ── */}
            <div className="hidden lg:block flex-shrink-0 w-[300px] xl:w-[320px] sticky top-28">
              <ArticleSidebar />
            </div>

          </div>
        </div>
      </section>

      <ArticleComments />
    </>
  )
}
