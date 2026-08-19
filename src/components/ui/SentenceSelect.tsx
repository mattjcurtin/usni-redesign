/**
 * The oversized inline <select> used in "I live ___ and want to buy a ___"
 * selectors. Extracted from MembershipCustomizer, which had it inline, so the
 * membership page, the Naval History upsell, and the Naval History subscribe
 * page all present the same control instead of three near-copies.
 *
 * The chevron comes from `select.select-field` in index.css — do not add an
 * overlay SVG on top of it.
 */
export default function SentenceSelect({
  value,
  onChange,
  options,
  'aria-label': ariaLabel,
}: {
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
  'aria-label': string
}) {
  return (
    <div className="inline-block">
      <select
        value={value}
        aria-label={ariaLabel}
        onChange={e => onChange(e.target.value)}
        className="select-field bg-white border border-navy-subtle text-navy-bolder font-headline text-[28px] lg:text-[36px] leading-[1.2] pl-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0466c8]"
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

/** Static counterpart, for when a choice is fixed by an earlier selection. */
export function SentenceFixed({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-headline text-[28px] lg:text-[36px] text-navy-bolder leading-[1.2] border border-navy-subtle px-4 py-3">
      {children}
    </span>
  )
}

export function SentenceText({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-headline text-[28px] lg:text-[36px] text-neutral-subtle leading-[1.2]">
      {children}
    </span>
  )
}
