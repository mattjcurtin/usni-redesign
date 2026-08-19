import MagazineHero from '@/sections/MagazineHero'
import nhLogo from '@/assets/images/Naval_History_logo_white_500px.webp'
import heroImage from '@/assets/images/naval-history-main-hero-banner.webp'

export default function NavalHistoryHero() {
  return (
    <MagazineHero
      image={heroImage}
      logo={nhLogo}
      logoAlt="Naval History — U.S. Naval Institute"
    >
      The world's most authoritative and engaging periodical for readers interested in nautical
      heritage. Published six times a year, Naval History brings the past to life through firsthand
      accounts, bold scholarship, and stunning imagery.
    </MagazineHero>
  )
}
