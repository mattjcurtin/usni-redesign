import type { ReactNode } from 'react'
import SiteBreadcrumb from '@/components/ui/Breadcrumb'

interface EssayContestsHeroProps {
  title: string
  deck?: string
  /** Optional — some pages carry their intro in the body instead. */
  description?: string
  /** Small label above the headline. Photo variant only. */
  eyebrow?: string
  /** Trailing breadcrumb label for an interior page. Omit on the landing page. */
  breadcrumbLabel?: string
  /**
   * Banner artwork. Supplying it selects the large split photo/navy-panel
   * treatment (as on the landing page); without it the page gets the
   * light-blue, left-aligned header used elsewhere on the site.
   */
  image?: string
  /** Buttons for the photo variant, e.g. a submit CTA. */
  actions?: ReactNode
  /**
   * Which side the navy panel sits on in the photo variant. Defaults to the
   * right; flip it when the photo's subject would otherwise sit behind it.
   */
  panelSide?: 'left' | 'right'
}

/** Essay Contests trail. */
function Breadcrumb({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <SiteBreadcrumb
      trail={[
        { label: 'Home', href: '/' },
        { label: 'Essay Contests', href: '/essay-contests' },
      ]}
      current={label}
      tone={dark ? 'dark' : 'light'}
      className={`pb-4 border-b ${dark ? 'border-white/25' : 'border-[#C2DDFF]'}`}
    />
  )
}

/** Light-blue, left-aligned header — the default for interior pages. */
function InteriorHero({
  title,
  deck,
  description,
  breadcrumbLabel,
}: EssayContestsHeroProps & { breadcrumbLabel: string }) {
  return (
    <section className="bg-[#ebf4ff] pt-10 lg:pt-12 pb-12 lg:pb-16">
      <div className="container-site flex flex-col gap-4">
        <Breadcrumb label={breadcrumbLabel} />

        <h1 className="font-headline text-[32px] lg:text-[64px] text-navy-bolder leading-[1.1]">
          {title}
        </h1>

        {deck && (
          <p className="font-body font-bold text-[18px] lg:text-[22px] text-navy-subtle leading-[1.4]">
            {deck}
          </p>
        )}

        {description && (
          <p className="font-body text-base lg:text-lg text-neutral-subtle leading-[1.6] max-w-[760px]">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

/**
 * Large split photo/navy-panel treatment, matching the Giving landing page.
 * Used by the section front and by contests that have their own banner art.
 */
function PhotoHero({
  eyebrow,
  title,
  deck,
  description,
  breadcrumbLabel,
  image,
  actions,
  panelSide = 'right',
}: EssayContestsHeroProps & { image: string }) {
  const onLeft = panelSide === 'left'
  // The panel's viewport-edge side takes the wide clamped padding, so its text
  // lines up with the site container's gutter; the inner side, facing the photo,
  // stays tighter. Both mirror with the panel.
  const edgePadding = 'clamp(1.25rem, 6.5vw, 7rem)'

  return (
    <section
      className="relative w-full bg-cover bg-center lg:py-20"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Mobile-only: the photo stacks above the panel rather than sitting behind it */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="lg:hidden w-full aspect-[4/3] object-cover object-center"
      />

      <div className={`relative z-10 flex ${onLeft ? 'lg:justify-start' : 'lg:justify-end'}`}>
        <div
          className={`bg-navy-boldest flex flex-col justify-center gap-6 lg:gap-8
                     w-full lg:w-1/2 xl:w-[49%] max-w-[900px]
                     py-10 lg:py-16 xl:py-20
                     ${onLeft ? 'pr-5 lg:pr-14' : 'pl-5 lg:pl-14'}`}
          style={onLeft ? { paddingLeft: edgePadding } : { paddingRight: edgePadding }}
        >
          {breadcrumbLabel && <Breadcrumb label={breadcrumbLabel} dark />}

          <div className="eyebrow-headline">
            {eyebrow && <p className="eyebrow text-light-blue">{eyebrow}</p>}
            <div className="flex flex-col gap-3 lg:gap-4">
              <h1 className="font-headline text-[32px] lg:text-5xl xl:text-[54px] text-white leading-[1.1]">
                {title}
              </h1>
              {deck && (
                <p className="font-body font-bold text-[18px] lg:text-[22px] text-light-blue leading-[1.4]">
                  {deck}
                </p>
              )}
              {description && (
                <p className="font-body text-[18px] lg:text-xl text-neutral-subtlest leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>

          {actions && (
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 lg:items-center">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function EssayContestsHero(props: EssayContestsHeroProps) {
  if (props.image) return <PhotoHero {...props} image={props.image} />
  if (props.breadcrumbLabel) {
    return <InteriorHero {...props} breadcrumbLabel={props.breadcrumbLabel} />
  }
  return <InteriorHero {...props} breadcrumbLabel={props.title} />
}
