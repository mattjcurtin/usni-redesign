interface IssueCoverCardProps {
  href: string
  cover: string
  alt: string
  /** First line, e.g. "Naval History – August 2026". */
  title: string
  /** Second line, e.g. "Volume 40, Number 4" or "Vol. 152/8/1,482". */
  subtitle: string
  /**
   * Cover proportions, which differ per magazine because the scanned cover
   * assets do. Passed as a Tailwind aspect class so each archive keeps its own
   * true ratio and object-cover never has to crop.
   */
  aspect?: string
}

/**
 * A magazine cover linking to its issue, as used by the Proceedings and Naval
 * History "All Issues" archives.
 *
 * Both archives render this so the hover reads identically across the two
 * magazines: the cover lifts and deepens its shadow while a blue underline
 * sweeps both lines of the caption.
 */
export default function IssueCoverCard({
  href,
  cover,
  alt,
  title,
  subtitle,
  aspect = 'aspect-[2400/3175]',
}: IssueCoverCardProps) {
  return (
    <a href={href} className="group flex flex-col">
      {/* No overflow-hidden on the aspect box: the cover lifts out of it on
          hover and the deepened shadow falls outside it — the same move the
          book cards use. Clipping would eat both. */}
      <div className={`${aspect} bg-neutral-subtlest`}>
        <img
          src={cover}
          alt={alt}
          loading="lazy"
          /* Hand-rolled shadows rather than shadow-md/shadow-xl: those carry a
             negative spread and a big downward offset, so on a tall cover the
             blur pools under the bottom edge and pinches out at the corners,
             reading as a shadow cut off at the sides. Zero horizontal offset
             and no spread reduction wraps all four edges evenly. */
          className="w-full h-full object-cover transition-[transform,box-shadow] duration-300
            shadow-[0_2px_8px_rgba(0,18,51,0.14)]
            group-hover:-translate-y-2 group-hover:shadow-[0_10px_26px_rgba(0,18,51,0.24)]"
        />
      </div>
      <p className="font-body font-bold text-[17px] lg:text-[18px] text-navy-bolder leading-snug mt-4 group-hover:text-navy-subtle transition-colors">
        {/* article-link--card sweeps the blue underline from a hover anywhere
            on the card. Both lines carry it, as one span each rather than a
            block wrapper: the class clones its gradient per rendered line, so a
            long issue name that wraps still underlines every line of itself. */}
        <span className="article-link article-link--card">{title}</span>
        <br />
        <span className="article-link article-link--card">{subtitle}</span>
      </p>
    </a>
  )
}
