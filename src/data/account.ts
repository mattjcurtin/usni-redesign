/**
 * Mock member account data.
 *
 * The live Drupal account reads membership status from Salesforce and currently
 * degrades to "temporarily unavailable" — see
 * `project-references/account-section-audit.md`. This file is what the redesign
 * shows when that data *is* available; the fallback state is still rendered from
 * `membership.statusAvailable === false`.
 */

export interface Entitlement {
  label: string
  detail: string
  /** Maps to the Drupal role that grants it, for the integration team. */
  role: string
  active: boolean
}

export interface Membership {
  memberNumber: string
  plan: string
  term: string
  joinedOn: string
  renewsOn: string
  price: number
  autoRenew: boolean
  isLifetime: boolean
  /** False reproduces the live site's Salesforce-unavailable state. */
  statusAvailable: boolean
}

export interface OrderRecord {
  number: string
  placedOn: string
  items: string
  total: number
  state: 'Completed' | 'Processing' | 'Shipped' | 'Refunded'
  kind: 'membership' | 'books' | 'subscription' | 'donation'
  /** Where the receipt lives, when the prototype has one to show. */
  receiptHref?: string
}

export interface SubscriptionRecord {
  title: string
  format: string
  term: string
  renewsOn: string
  price: number
  autoRenew: boolean
  nextIssue: string
}

export interface GiftRecord {
  receipt: string
  givenOn: string
  designation: string
  amount: number
  frequency: 'One-time' | 'Monthly'
  anonymous: boolean
  receiptHref?: string
}

export interface SavedArticle {
  title: string
  publication: string
  issue: string
  savedOn: string
  href: string
}

export interface AddressRecord {
  label: string
  isDefault: boolean
  name: string
  lines: string[]
  city: string
  state: string
  zip: string
  country: string
}

export interface PaymentMethodRecord {
  brand: string
  last4: string
  expires: string
  isDefault: boolean
  usedFor: string[]
}

export const member = {
  salutation: 'Mr.',
  firstName: 'Matt',
  lastName: 'Curtin',
  email: 'member@example.com',
  phone: '(410) 268-6110',
  acceptsTexts: false,
  service: 'U.S. Navy',
  militaryStatus: 'Veteran',
  rank: 'LCDR',
  suffix: '',
  graduationYear: '2004',
  memberSince: 'March 2019',
}

export const membership: Membership = {
  memberNumber: '10012345',
  plan: 'Full Membership',
  term: '1 year',
  joinedOn: 'March 14, 2019',
  renewsOn: 'March 14, 2027',
  price: 75,
  autoRenew: true,
  isLifetime: false,
  statusAvailable: true,
}

/**
 * Derived from the roles the live site uses to gate access:
 * online_member, proceedings_subscriber, naval_history_subscriber,
 * combat_fleets_subscriber, api_subscriber.
 */
export const entitlements: Entitlement[] = [
  { label: 'Proceedings', detail: 'Print and digital, plus the full archive', role: 'proceedings_subscriber', active: true },
  { label: 'Naval History', detail: 'Digital access; print available as an add-on', role: 'naval_history_subscriber', active: true },
  { label: 'Digital archive', detail: 'Every issue back to 1874', role: 'online_member', active: true },
  { label: 'Combat Fleets', detail: 'Reference database — not on your plan', role: 'combat_fleets_subscriber', active: false },
  { label: 'API access', detail: 'Developer keys — not on your plan', role: 'api_subscriber', active: false },
]

export const orders: OrderRecord[] = [
  {
    number: 'USNI-2026-408215',
    placedOn: 'March 14, 2026',
    items: 'Full Membership, 1 year · Naval History Magazine, 1 year',
    total: 118,
    state: 'Completed',
    kind: 'membership',
    receiptHref: '/membership/confirmation?plan=full&term=1&price=75&magTerm=1&magPrice=43&order=USNI-2026-408215&email=member%40example.com&name=Matt&card=4242',
  },
  {
    number: 'USNI-2026-391044',
    placedOn: 'February 2, 2026',
    items: 'AI Warfighting (hardcover) · Warfare Beneath the Waves',
    total: 68.90,
    state: 'Shipped',
    kind: 'books',
  },
  {
    number: 'NIF-2025-317604',
    placedOn: 'December 18, 2025',
    items: 'Gift — Oral History Program',
    total: 500,
    state: 'Completed',
    kind: 'donation',
    receiptHref: '/giving/donate/confirmation?amount=500&frequency=one-time&priorities=oral-history&order=NIF-2025-317604&email=member%40example.com&name=Matt&card=4242',
  },
  {
    number: 'USNI-2025-288117',
    placedOn: 'August 9, 2025',
    items: 'Standing Up the Space Force',
    total: 24.95,
    state: 'Completed',
    kind: 'books',
  },
  {
    number: 'USNI-2025-201338',
    placedOn: 'March 14, 2025',
    items: 'Full Membership, 1 year',
    total: 75,
    state: 'Completed',
    kind: 'membership',
  },
]

export const subscriptions: SubscriptionRecord[] = [
  {
    title: 'Proceedings',
    format: 'Print + digital',
    term: '1 year',
    renewsOn: 'March 14, 2027',
    price: 0,
    autoRenew: true,
    nextIssue: 'September 2026',
  },
  {
    title: 'Naval History',
    format: 'Print + digital',
    term: '1 year',
    renewsOn: 'March 14, 2027',
    price: 43,
    autoRenew: true,
    nextIssue: 'October 2026',
  },
]

export const giving: GiftRecord[] = [
  {
    receipt: 'NIF-2025-317604',
    givenOn: 'December 18, 2025',
    designation: 'Oral History Program',
    amount: 500,
    frequency: 'One-time',
    anonymous: false,
    receiptHref: '/giving/donate/confirmation?amount=500&frequency=one-time&priorities=oral-history&order=NIF-2025-317604&email=member%40example.com&name=Matt&card=4242',
  },
  {
    receipt: 'NIF-2025-284910',
    givenOn: 'June 30, 2025',
    designation: 'Most Needed',
    amount: 250,
    frequency: 'One-time',
    anonymous: true,
  },
  {
    receipt: 'NIF-2024-197455',
    givenOn: 'December 29, 2024',
    designation: 'Photo Archives',
    amount: 100,
    frequency: 'One-time',
    anonymous: false,
  },
]

export const givingTotals = {
  calendarYear: 2026,
  yearToDate: 0,
  lifetime: 850,
  leadershipCircleThreshold: 1000,
}

export const savedArticles: SavedArticle[] = [
  {
    title: 'Three MEFs Won’t Be Enough',
    publication: 'Proceedings',
    issue: 'April 2026',
    savedOn: 'August 11, 2026',
    href: '/proceedings/three-mefs',
  },
  {
    title: 'Fortifying the Digital Watch',
    publication: 'Proceedings',
    issue: 'April 2026',
    savedOn: 'July 28, 2026',
    href: '/proceedings/fortifying-digital-watch',
  },
  {
    title: 'Mitscher at Midway',
    publication: 'Naval History',
    issue: 'June 2026',
    savedOn: 'July 3, 2026',
    href: '/naval-history/mitscher-at-midway',
  },
]

export const addresses: AddressRecord[] = [
  {
    label: 'Home',
    isDefault: true,
    name: 'Matt Curtin',
    lines: ['401 South Bouldin Street'],
    city: 'Baltimore',
    state: 'MD',
    zip: '21224',
    country: 'United States',
  },
  {
    label: 'Office',
    isDefault: false,
    name: 'Matt Curtin',
    lines: ['291 Wood Road', 'Beach Hall'],
    city: 'Annapolis',
    state: 'MD',
    zip: '21402',
    country: 'United States',
  },
]

export const paymentMethods: PaymentMethodRecord[] = [
  { brand: 'Visa', last4: '4242', expires: '04 / 2029', isDefault: true, usedFor: ['Membership auto-renew', 'Naval History auto-renew'] },
  { brand: 'Mastercard', last4: '8891', expires: '11 / 2027', isDefault: false, usedFor: [] },
]

/** Mirrors the six interests on /newsletter so preferences can be revisited. */
export const newsletterInterests = [
  { id: 'usni-news', name: 'USNI News', frequency: 'Daily', subscribed: true },
  { id: 'proceedings', name: 'Proceedings', frequency: 'Monthly', subscribed: true },
  { id: 'naval-history', name: 'Naval History', frequency: 'Bimonthly', subscribed: true },
  { id: 'books-press', name: 'Books & Press', frequency: 'Regularly', subscribed: false },
  { id: 'member-updates', name: 'Member Updates', frequency: 'Monthly', subscribed: true },
  { id: 'events', name: 'Events', frequency: 'As scheduled', subscribed: false },
]

export const mailPreferences = [
  { id: 'print-renewal', label: 'Renewal notices by mail', detail: 'In addition to email reminders.', enabled: true },
  { id: 'print-catalog', label: 'Naval Institute Press catalog', detail: 'Two mailings a year.', enabled: true },
  { id: 'print-appeals', label: 'Foundation appeals by mail', detail: 'Year-end and spring giving appeals.', enabled: false },
]

/** From /partners on the live site. */
export const partnerDiscounts = [
  { name: 'Enterprise Rent-A-Car', offer: 'Member rates at 5,500+ locations', detail: 'Great cars, low rates, free pickup.', code: 'USNI-ENT' },
  { name: 'Alamo Rent A Car', offer: 'Everyday low member pricing', detail: 'Skip the counter with self-serve check-in.', code: 'USNI-ALM' },
  { name: 'National Car Rental', offer: 'Up to 20% off rentals', detail: 'Emerald Club privileges included.', code: 'USNI-NAT' },
  { name: 'Brooks Brothers', offer: '15% off full-price merchandise', detail: 'Corporate Membership Program, U.S. and Canadian stores.', code: 'USNI-BB' },
]

/** The Member Updates feed that currently dominates the live account landing page. */
export const memberUpdates = [
  { title: 'Our Summer Membership Sale — Extended!', blurb: 'In response to overwhelming demand, we’ve extended our America 250th membership promotion until 31 August.' },
  { title: 'Save and Celebrate America’s 250-Year Legacy', blurb: 'America turns 250 next month. Honor this milestone by renewing your commitment to the Naval Institute.' },
  { title: 'Proceedings Digital Magazine Archive Now Live', blurb: 'It’s now easier than ever to reach our full archive of flippable Proceedings PDFs in one place.' },
]
