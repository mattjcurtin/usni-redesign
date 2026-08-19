import MagazineHero from '@/sections/MagazineHero'
import proceedingsLogo from '@/assets/images/Proceedings_logo_white.png'
import heroImage from '@/assets/images/proceedings-main-hero-bk.webp'

export default function ProceedingsHero() {
  return (
    <MagazineHero
      image={heroImage}
      logo={proceedingsLogo}
      logoAlt="Proceedings — U.S. Naval Institute"
    >
      Our flagship publication since 1874, Proceedings is the independent forum where military
      professionals, scholars, and strategists debate the most consequential issues facing naval and
      maritime defense. Every issue delivers peer-reviewed analysis, firsthand perspective, and bold
      argument.
    </MagazineHero>
  )
}
