import type { ReactNode } from 'react'

interface EssayContestsHeroProps {
  title: string
  deck?: string
  description: string
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
}

/** Breadcrumb trail, styled for either a light or a dark ground. */
function Breadcrumb({ label, dark }: { label: string; dark?: boolean }) {
  const link = dark
    ? 'font-body font-bold text-light-blue hover:text-white transition-colors'
    : 'font-body font-bold text-navy-subtle hover:text-navy-bolder transition-colors'
  const sep = dark ? 'text-white/40' : 'text-neutral-subtle'
  const current = dark
    ? 'font-body italic text-[#f4f4f6]'
    : 'font-body italic text-neutral-subtle'

  return (
    <nav
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm pb-4 border-b ${
        dark ? 'border-white/25' : 'border-[#C2DDFF]'
      }`}
      aria-label="Breadcrumb"
    >
      <a href="/" className={link}>Home</a>
      <span className={sep}>/</span>
      <a href="/essay-contests" className={link}>Essay Contests</a>
      <span className={sep}>/</span>
      <span className={current}>{label}</span>
    </nav>
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

        <h1 className="font-headline text-[32px] lg:text-[48px] xl:text-[56px] text-navy-bolder leading-[1.1]">
          {title}
        </h1>

        {deck && (
          <p className="font-body font-bold text-[18px] lg:text-[22px] text-navy-subtle leading-[1.4]">
            {deck}
          </p>
        )}

        <p className="font-body text-base lg:text-lg text-neutral-subtle leading-[1.6] max-w-[760px]">
          {description}
        </p>
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
}: EssayContestsHeroProps & { image: string }) {
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

      <div className="relative z-10 flex lg:justify-end">
        <div
          className="bg-navy-boldest flex flex-col justify-center gap-6 lg:gap-8
                     w-full lg:w-1/2 xl:w-[49%] max-w-[900px]
                     py-10 lg:py-16 xl:py-20
                     pl-5 lg:pl-14"
          style={{ paddingRight: 'clamp(1.25rem, 6.5vw, 7rem)' }}
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
              <p className="font-body text-[18px] lg:text-xl text-neutral-subtlest leading-relaxed">
                {description}
              </p>
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
