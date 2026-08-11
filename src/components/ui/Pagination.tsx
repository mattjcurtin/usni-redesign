/**
 * Pagination row for archive, listing, and search-results pages.
 *
 * Two modes:
 *  - Demo (no `totalPages`): renders a static 1–5 row, as All Issues and the
 *    Podcast archive have always used it.
 *  - Live (`totalPages` + `page` + `onChange`): a working pager with First /
 *    Previous / Next / Last and elision, for real paged listings.
 */

const wordLinkClasses =
  'font-body font-bold text-sm h-9 flex items-center px-3 border border-[#c4c9d4] transition-colors'

const numberBase =
  'font-body font-bold text-sm min-w-[36px] h-9 flex items-center justify-center px-2 transition-colors'

interface PaginationProps {
  label: string
  /** Omit for the static demo row. */
  totalPages?: number
  page?: number
  onChange?: (page: number) => void
}

/**
 * Page numbers to display, with `null` marking an elision gap. Always keeps the
 * first and last page reachable plus a window around the current page.
 */
function pageWindow(page: number, total: number): (number | null)[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const out: (number | null)[] = [1]
  const from = Math.max(2, page - 1)
  const to = Math.min(total - 1, page + 1)

  if (from > 2) out.push(null)
  for (let p = from; p <= to; p++) out.push(p)
  if (to < total - 1) out.push(null)
  out.push(total)
  return out
}

export default function Pagination({ label, totalPages, page, onChange }: PaginationProps) {
  // ── Demo mode — unchanged behaviour for the pages that predate live paging ──
  if (!totalPages || !page || !onChange) {
    return (
      <nav className="flex flex-wrap items-center justify-center gap-2" aria-label={label}>
        {['1', '2', '3', '4', '5'].map((p, i) => (
          <a
            key={p}
            href="#"
            aria-current={i === 0 ? 'page' : undefined}
            className={`${numberBase} ${
              i === 0
                ? 'bg-navy-bolder text-white'
                : 'text-navy-bolder border border-[#c4c9d4] hover:bg-surface-subtle'
            }`}
          >
            {p}
          </a>
        ))}
        <span className="font-body font-bold text-sm text-neutral-subtle px-1" aria-hidden="true">
          &hellip;
        </span>
        <a href="#" className={`${wordLinkClasses} text-navy-bolder hover:bg-surface-subtle`}>
          Next &rsaquo;
        </a>
        <a href="#" className={`${wordLinkClasses} text-navy-bolder hover:bg-surface-subtle`}>
          Last &raquo;
        </a>
      </nav>
    )
  }

  if (totalPages <= 1) return null

  const atStart = page <= 1
  const atEnd = page >= totalPages

  const wordButton = (
    text: string,
    target: number,
    disabled: boolean,
    ariaLabel: string,
  ) => (
    <button
      type="button"
      onClick={() => onChange(target)}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${wordLinkClasses} ${
        disabled
          ? 'text-neutral-subtle opacity-40 cursor-not-allowed'
          : 'text-navy-bolder hover:bg-surface-subtle'
      }`}
    >
      {text}
    </button>
  )

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2" aria-label={label}>
      {!atStart && (
        <>
          {wordButton('« First', 1, false, 'Go to first page')}
          {wordButton('‹ Previous', page - 1, false, 'Go to previous page')}
        </>
      )}

      {pageWindow(page, totalPages).map((p, i) =>
        p === null ? (
          <span
            key={`gap-${i}`}
            className="font-body font-bold text-sm text-neutral-subtle px-1"
            aria-hidden="true"
          >
            &hellip;
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? 'page' : undefined}
            aria-label={`Go to page ${p}`}
            className={`${numberBase} ${
              p === page
                ? 'bg-navy-bolder text-white'
                : 'text-navy-bolder border border-[#c4c9d4] hover:bg-surface-subtle'
            }`}
          >
            {p}
          </button>
        ),
      )}

      {!atEnd && (
        <>
          {wordButton('Next ›', page + 1, false, 'Go to next page')}
          {wordButton('Last »', totalPages, false, 'Go to last page')}
        </>
      )}
    </nav>
  )
}
