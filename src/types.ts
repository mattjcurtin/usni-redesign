export interface Article {
  id: string
  category: string
  headline: string
  excerpt?: string
  author?: string
  date: string
  image?: string
  imageAlt?: string
  href: string
}

export interface MegaMenuCTA {
  eyebrow?: string
  headline: string
  body: string
  ctaLabel: string
  ctaHref: string
  image?: string
  imageAlt?: string
  imageLayout?: 'top' | 'side'
}

export interface NavItem {
  label: string
  href: string
  /** Leaves the site — renders an external-link marker and opens in a new tab. */
  external?: boolean
  children?: NavItem[]
  megaCta?: MegaMenuCTA
  alignRight?: boolean
}

export interface PlainCardData {
  headline: string
  body: string
  cta: string
  href: string
}
