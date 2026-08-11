import { Link } from 'react-router-dom'
import bgImg from '@/assets/images/restricted-member-bg.webp'

/**
 * In-article paywall block shown in place of restricted article content when a
 * visitor hits their free-article limit. Hero-banner treatment: unobscured
 * photo on top, solid navy panel carrying the membership CTA below (no
 * gradient scrims — see ArchivesHero/JoinHero for the pattern). Pairs with
 * ArticleMeterBanner (the bottom-fixed metering alert) — this block replaces
 * the article body itself.
 */
export default function ArticlePaywall() {
  return (
    <div className="overflow-hidden" role="region" aria-label="Members-only content">
      {/* Photo — fully visible, no overlay */}
      <img
        src={bgImg}
        alt=""
        aria-hidden="true"
        className="w-full h-[280px] lg:h-[400px] object-cover object-center"
      />

      {/* Solid navy panel — pulled up over the photo, inset from the edges so
          the image frames it on both sides (JoinHero offset-card pattern) */}
      <div className="relative bg-navy-boldest flex flex-col items-center text-center px-6 py-12 lg:px-12 lg:py-16 -mt-16 lg:-mt-40 mx-5 sm:mx-8 lg:mx-14">
        <p className="font-body font-bold text-eyebrow lg:text-eyebrow-lg uppercase text-gold">
          Premium Member-Only Content
        </p>
        <p className="font-headline text-[26px] lg:text-[32px] text-white leading-[1.25] mt-3 max-w-[560px]">
          Don't miss out. Become a member of the Naval Institute today.
        </p>

        <Link
          to="/membership/join"
          className="font-body font-bold text-base bg-gold text-navy-bolder px-8 py-3 mt-8 hover:bg-gold-dark transition-colors whitespace-nowrap"
        >
          Join Today
        </Link>

        <p className="font-body text-[15px] text-white mt-6">
          Already a member?{' '}
          <Link to="/login" className="font-bold underline hover:text-light-blue transition-colors">
            Sign in
          </Link>{' '}
          to continue reading.
        </p>
      </div>
    </div>
  )
}
