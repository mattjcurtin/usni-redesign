import podcastArt from '@/assets/images/proceedings-podcast-taller.jpg'
import appleBadge from '@/assets/images/apple-podcasts-badge.svg'
import spotifyBadge from '@/assets/images/listen-on-spotify-badge.png'
import googleBadge from '@/assets/images/google-podcasts-badge.webp'

/**
 * Official platform badges, replacing the hand-built pill buttons that used
 * Font Awesome brand glyphs. Each platform supplies artwork with its own
 * lock-up, so these are scaled to a common height rather than restyled —
 * which is also what the platforms' brand guidelines require.
 *
 * TODO: point href at the real show URLs.
 */
const listenLinks = [
  { label: 'Listen on Apple Podcasts', src: appleBadge, href: '#' },
  { label: 'Listen on Spotify', src: spotifyBadge, href: '#' },
  { label: 'Listen on Google Podcasts', src: googleBadge, href: '#' },
]

export default function ProceedingsPodcastHero() {
  return (
    <section style={{ background: 'linear-gradient(to bottom, #1d2535, #0e121a)' }}>
      <div className="container-site py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10 xl:gap-16">

          {/* Content column */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* Breadcrumb */}
            <div className="pb-4 border-b border-[#C2DDFF]">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body font-bold text-sm lg:text-base text-white">
                <a href="/" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                  <i className="fa-solid fa-house text-[10px]" aria-hidden="true" />
                  Home
                </a>
                <span className="text-white/40">/</span>
                <a href="/proceedings" className="hover:text-white/80 transition-colors">Proceedings</a>
                <span className="text-white/40">/</span>
                <span className="font-normal italic text-[#f4f4f6]">The Proceedings Podcast</span>
              </nav>
            </div>

            {/* Title */}
            <h1 className="font-headline text-[32px] lg:text-[56px] xl:text-[64px] text-white leading-[1.1]">
              The Proceedings Podcast
            </h1>

            {/* Tagline */}
            <p className="font-body font-bold text-[18px] lg:text-[24px] text-gold leading-[1.4]">
              Victory Begins at the U.S. Naval Institute
            </p>

            {/* Ways to listen */}
            <div className="pt-2 flex flex-col gap-3">
              <p className="font-body font-semibold text-sm uppercase tracking-[0.08em] text-[#C2DDFF]">
                Ways to Listen
              </p>
              {/* Scaled to one height; each badge keeps its own aspect ratio.
                  Hover lifts the badge rather than fading it — the platforms'
                  brand guidelines don't allow altering the artwork itself. */}
              <div className="flex flex-wrap items-center gap-3.5">
                {listenLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-block will-change-transform transition-transform duration-200 ease-out
                      hover:-translate-y-1 focus-visible:-translate-y-1"
                  >
                    <img
                      src={link.src}
                      alt={link.label}
                      className="h-12 w-auto block"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Podcast art — stacks below on mobile, right column on desktop */}
          <div className="w-full max-w-[220px] lg:max-w-none lg:w-[280px] xl:w-[316px] lg:flex-shrink-0 lg:self-center">
            <img
              src={podcastArt}
              alt="The Proceedings Podcast cover art"
              className="w-full shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
