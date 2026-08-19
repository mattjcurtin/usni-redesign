/**
 * Labels and receipt helpers shared by the membership and donation purchase
 * flows — cart, checkout, and confirmation.
 *
 * The label maps were previously copied into `sections/CartItems.tsx` and
 * `pages/MembershipCheckout.tsx`, and the two copies had drifted: the checkout's
 * lacked every Life plan, so a Life membership was relabelled "Full Membership"
 * on the way to payment. The confirmation pages need the same lookups for a
 * receipt, where a wrong plan name is worse still, so there is now one map.
 */

export const PLAN_LABELS: Record<string, string> = {
  digital: 'Digital Membership',
  full: 'Full Membership',
  student: 'Student Membership',
  life: 'Life Membership',
  'full-life': 'Full Life Membership',
  'online-life': 'Online Life Membership',
  'senior-life': 'Senior Life Membership',
  'senior-online-life': 'Senior Online Life Membership',
}

export const TERM_LABELS: Record<string, string> = {
  '1': '1 year',
  '3': '3 years',
  life: 'Lifetime',
  lifetime: 'Lifetime',
}

export const PRIORITY_LABELS: Record<string, string> = {
  'usni-news':         'USNI News',
  'proceedings':       'Proceedings Magazine',
  'sponsored-student': 'Sponsored Student Program',
  'naval-history':     'Naval History',
  'oral-history':      'Oral History Program',
  'photo-archives':    'Photo Archives',
  'taylor-center':     'Jack C. Taylor Conference Center',
}

/** Naval Institute Foundation, per the figures on /giving. */
export const FOUNDATION_TAX_ID = '52-1814344'

/** Contact details as published in the site footer and on /giving. */
export const MEMBER_SERVICES_PHONE = '410-268-6110'
export const MEMBER_SERVICES_EMAIL = 'member@usni.org'
export const FOUNDATION_PHONE = '(410) 295-1062'
export const FOUNDATION_EMAIL = 'foundation@usni.org'

/**
 * The prototype has no payment backend, so checkout mints a plausible reference
 * at the moment of "purchase" and hands it to the confirmation page in the URL.
 * Keeping it in the URL means a confirmation link survives a refresh and can be
 * shared with reviewers.
 */
export function makeOrderNumber(prefix: string): string {
  const serial = Math.floor(100000 + Math.random() * 900000)
  return `${prefix}-${new Date().getFullYear()}-${serial}`
}

export function formatReceiptDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

/** One year out from the transaction — used for the auto-renew notice. */
export function formatRenewalDate(date: Date = new Date()): string {
  const next = new Date(date)
  next.setFullYear(next.getFullYear() + 1)
  return formatReceiptDate(next)
}

/** One month out — used for the next charge on a recurring gift. */
export function formatNextChargeDate(date: Date = new Date()): string {
  const next = new Date(date)
  next.setMonth(next.getMonth() + 1)
  return formatReceiptDate(next)
}
