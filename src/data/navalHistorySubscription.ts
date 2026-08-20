/**
 * Naval History subscription options.
 *
 * Print and digital are separate products in the catalog — SKUs NH-NH_1 /
 * NH-NH_3 (PRINT) and NH-NH_1_ONL / NH-NH_3_ONL (DIGIT). Digital carries no
 * shipping, so it is one price worldwide and has no region dimension.
 *
 * Digital copy and the feature list come from the live
 * /naval-history-digital-subscription page.
 */

export type Region = 'us' | 'international'
export type Term = '1' | '3'
export type Format = 'print' | 'digital'

export interface Offer {
  /** List price. */
  price: number
  /** What a Naval Institute member pays. */
  memberPrice: number
  /** Struck-through comparison, where a multi-year term beats the annual rate. */
  originalPrice: number | null
}

export const OFFERS: Record<Format, Record<Region, Record<Term, Offer>>> = {
  print: {
    us: {
      '1': { price: 43, memberPrice: 32, originalPrice: null },
      '3': { price: 124, memberPrice: 90, originalPrice: 129 },
    },
    international: {
      '1': { price: 63, memberPrice: 52, originalPrice: null },
      '3': { price: 184, memberPrice: 150, originalPrice: 189 },
    },
  },
  digital: {
    us: {
      '1': { price: 32, memberPrice: 22, originalPrice: null },
      '3': { price: 84, memberPrice: 52, originalPrice: 96 },
    },
    international: {
      '1': { price: 32, memberPrice: 22, originalPrice: null },
      '3': { price: 84, memberPrice: 52, originalPrice: 96 },
    },
  },
}

export const FORMAT_LABELS: Record<Format, string> = {
  print: 'Print & Digital',
  digital: 'Digital Only',
}

export const TERM_LABELS: Record<Term, string> = {
  '1': '1 year',
  '3': '3 years',
}

export const REGION_LABELS: Record<Region, string> = {
  us: 'United States',
  international: 'International',
}

export const FORMAT_BLURBS: Record<Format, string> = {
  print:
    'Six illustrated issues a year delivered to your door, plus full digital access to every issue and the complete archive.',
  digital:
    'Read Naval History from the convenience of your computer or mobile device, the moment each issue publishes. No print edition.',
}

/** Print benefits, as listed on the current subscribe page. */
export const PRINT_FEATURES = [
  'Six beautifully illustrated issues per year delivered to your door',
  'Stunning period photography and artwork in every issue',
  'In-depth original articles from leading naval historians',
  'Complete digital archive access included',
]

/** Digital benefits, taken from the live digital-subscription page. */
export const DIGITAL_FEATURES = [
  'Illuminating profiles of warships, aircraft, armaments, and innovations',
  'In-depth eyewitness accounts of the past',
  'The latest research seeking to educate, preserve, and share naval history',
  'Acts of Valor — Medal of Honor stories in graphic novel format',
  'Naval History News',
]

export const FEATURES: Record<Format, string[]> = {
  print: PRINT_FEATURES,
  digital: DIGITAL_FEATURES,
}

export function offerFor(format: Format, region: Region, term: Term): Offer {
  return OFFERS[format][region][term]
}

/** Print ships; digital does not. Drives whether an address is collected. */
export function shipsPrint(format: Format): boolean {
  return format === 'print'
}
