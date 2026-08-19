import type { ReactNode } from 'react'

/**
 * Hero banner for the Proceedings and Naval History landing pages.
 *
 * A photograph behind a flat #0E121A overlay, which replaced the flat
 * #1d2535 → #0e121a gradient both pages previously used. The overlay is one
 * value in one place so the two banners can't drift apart, and so its strength
 * can be tuned once — it is doing the work that keeps white type legible over
 * whatever the photograph happens to be.
 *
 * On desktop a min-height gives the photograph room to read as an image rather
 * than a tinted strip. It also makes the two banners the same height: driven by
 * padding alone they differed by 25px, because the Proceedings copy wraps to one
 * more line than the Naval History copy.
 */
const OVERLAY_OPACITY = 0.72

export default function MagazineHero({
  image,
  logo,
  logoAlt,
  children,
}: {
  image: string
  logo: string
  logoAlt: string
  children: ReactNode
}) {
  return (
    <section
      className="relative flex flex-col items-center justify-center py-12 lg:py-28 lg:min-h-[480px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(14, 18, 26, ${OVERLAY_OPACITY})` }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <img src={logo} alt={logoAlt} className="h-[58px] w-auto object-contain mb-8" />
        <p className="font-body text-white text-center text-lg leading-[1.4] max-w-[764px] px-6">
          {children}
        </p>
      </div>
    </section>
  )
}
