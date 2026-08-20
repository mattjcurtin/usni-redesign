/**
 * The signed-in demo account used by every checkout's "Sign in" tab.
 *
 * The prototype has no auth, so this stands in for "what the account knows
 * about you": credentials that unlock it, the address on file, and the card on
 * file. Signing in with these prefills the billing address and selects the
 * saved card, which is the behaviour a real account would produce.
 */

export const TEST_CREDENTIALS = {
  email: 'test',
  password: 'test',
}

export interface OnFileAddress {
  name: string
  lines: string[]
  city: string
  state: string
  zip: string
  country: string
}

/** The Institute's own address, used as the account's address on file. */
export const ACCOUNT_ADDRESS: OnFileAddress = {
  name: 'Mr. Matt Curtin',
  lines: ['291 Wood Road'],
  city: 'Annapolis',
  state: 'MD',
  zip: '21402',
  country: 'United States',
}

/** Matches the default card in the account section's payment methods. */
export const ACCOUNT_CARD = {
  brand: 'Visa',
  last4: '4242',
  expires: '04 / 2029',
}

export function isTestLogin(email: string, password: string): boolean {
  return (
    email.trim().toLowerCase() === TEST_CREDENTIALS.email &&
    password.trim() === TEST_CREDENTIALS.password
  )
}

export function formatOnFileAddress(a: OnFileAddress): string {
  return [a.lines.join(', '), `${a.city}, ${a.state} ${a.zip}`, a.country].join(' · ')
}
