import type { ReactNode } from 'react'
import type { OnFileAddress } from '@/data/testAccount'

/**
 * Signed-in checkout affordances, shared by all three checkouts.
 *
 * Address and payment are presented as radio choices rather than a value plus a
 * "change" link: both options stay on screen, so what is selected is visible and
 * switching back costs nothing.
 */

/** Plain text, deliberately not an alert — nothing has gone wrong. */
export function SignedInAs({ email, onSignOut }: { email: string; onSignOut: () => void }) {
  return (
    <p className="font-body text-[16px] text-[#1d2535]">
      Signed in as <span className="font-bold">{email}</span>.{' '}
      <button
        type="button"
        onClick={onSignOut}
        className="font-body font-semibold text-[15px] text-link"
      >
        Sign out
      </button>
    </p>
  )
}

/**
 * One radio choice. Revealed fields sit outside the <label> so that clicking an
 * input inside them doesn't re-trigger the radio.
 */
export function ChoiceOption({
  name,
  value,
  checked,
  onSelect,
  title,
  detail,
  children,
}: {
  name: string
  value: string
  checked: boolean
  onSelect: () => void
  title: ReactNode
  /** Secondary line, e.g. the address itself or a card's expiry. */
  detail?: ReactNode
  /** Shown only while this option is selected. */
  children?: ReactNode
}) {
  const id = `${name}-${value}`
  return (
    <div className={`border transition-colors ${checked ? 'border-[#023e7d] bg-[#f8fafd]' : 'border-[#c4c9d4] bg-white'}`}>
      <label htmlFor={id} className="flex items-start gap-3 p-4 cursor-pointer">
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onSelect}
          className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#023e7d] cursor-pointer"
        />
        <span className="min-w-0">
          <span className="block font-body font-bold text-[15px] text-[#1d2535]">{title}</span>
          {detail && <span className="block font-body text-[15px] text-[#4e576a] leading-[1.6] mt-1">{detail}</span>}
        </span>
      </label>
      {checked && children && (
        <div className="px-4 pb-5 pt-1 flex flex-col gap-4">{children}</div>
      )}
    </div>
  )
}

/** The address on file, formatted for a ChoiceOption's `detail`. */
export function addressLines(a: OnFileAddress): ReactNode {
  return (
    <>
      <span className="font-bold text-[#1d2535]">{a.name}</span>
      <br />
      {a.lines.map(l => <span key={l}>{l}<br /></span>)}
      {a.city}, {a.state} {a.zip}
      <br />
      {a.country}
    </>
  )
}
