interface BookPriceProps {
  /** What a non-member pays. */
  listPrice: number
  /** What a member pays. Omit for a title with no member discount. */
  memberPrice?: number
  /**
   * Binding, shown on the second line beside the list price. Cards that give
   * format its own line above the price leave this unset.
   */
  format?: string
  /** Slightly tighter scale, for the narrow cards in a six-across carousel. */
  size?: 'md' | 'sm'
}

/**
 * Price block for a book teaser.
 *
 * One rule, applied everywhere a teaser shows a price: the member price leads,
 * at a size you can read across a grid, with the list price it beats struck
 * through beneath it. Member pricing used to be set at 12px under a bolder list
 * price, which buried the very thing a member is meant to notice.
 *
 * Props are named for what the numbers mean rather than which field they came
 * from, because the two book data sources express the same pair in opposite
 * directions — `books.ts` stores the member price as `price` and the list price
 * as `originalPrice`, while `bookCollections.ts` stores list as `price` and adds
 * `memberPrice`. Mapping happens at the call site so the label can never end up
 * on the wrong number.
 */
export default function BookPrice({ listPrice, memberPrice, format, size = 'md' }: BookPriceProps) {
  const lead = size === 'md' ? 'text-[20px]' : 'text-[18px]'

  const discounted = memberPrice !== undefined && memberPrice < listPrice

  return (
    <div className="flex flex-col gap-1">
      {/* Centred, not baseline-aligned: on a 20px price the small-caps label
          sits visibly low when it shares the number's baseline. */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`font-body font-bold ${lead} text-navy-bolder leading-none`}>
          ${(discounted ? memberPrice : listPrice).toFixed(2)}
        </span>
        {discounted && (
          <span className="font-body font-bold text-[10px] uppercase tracking-[0.09em] text-[#0466C8] leading-none">
            Member price
          </span>
        )}
      </div>

      {/* The list price is plain — no rule through it and no "list" label. The
          blue MEMBER PRICE tag above already says which number is which, and
          the strikethrough read as a clearance sale rather than a member
          discount. */}
      {(discounted || format) && (
        <span className="font-body text-[16px] text-neutral-subtle leading-none flex items-baseline gap-2">
          {discounted && <span>${listPrice.toFixed(2)}</span>}
          {discounted && format && <span aria-hidden="true">·</span>}
          {format && <span>{format}</span>}
        </span>
      )}
    </div>
  )
}
