import type { ReactNode } from 'react'
import ExternalLinkIcon from '@/components/ui/ExternalLinkIcon'

/**
 * The trailing call-to-action row on a linked card.
 *
 * Half of the site's card hover: the underline sweeps in and the arrow nudges
 * when the *card* is hovered, not just this row — so it must sit inside an
 * element carrying `group`. The other half is the card wrapper itself, which
 * keeps a static border and raises its shadow (`hover:shadow-md
 * transition-shadow`).
 *
 * Card headlines stay dark and static. Only the stylized link animates — the
 * headline used to shift blue and sweep an underline as well, which meant two
 * things moving on one hover.
 *
 * Extracted because six cards had grown four different versions of this row —
 * some sweeping the underline, some only nudging the arrow, some widening the
 * gap. `UpcomingEvents` was the treatment we settled on; this is it.
 */
export default function CardCta({
  children,
  /** Swaps the arrow for the external-link glyph and adds the new-tab note. */
  external = false,
  className = '',
}: {
  children: ReactNode
  external?: boolean
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-body font-bold text-sm text-[#0466c8] ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
      </span>
      {external ? (
        <>
          <ExternalLinkIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </>
      ) : (
        <i
          className="fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </span>
  )
}
