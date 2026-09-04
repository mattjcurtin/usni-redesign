import Breadcrumb from '@/components/ui/Breadcrumb'
interface AboutPageHeroProps {
  title: string
  /** Secondary line under the title, where the source page carries one. */
  subtitle?: string
  deck?: string
  /** Trailing breadcrumb label. Omit on the About landing page itself. */
  breadcrumbLabel: string
}

/**
 * Light blue hero for About sub-pages (Leadership & Staff, Strategic Plan).
 *
 * Matches the interior hero banner used across Proceedings, Books, and Naval
 * History — breadcrumb over a rule, then a left-aligned page title. The About
 * landing and History pages get the full split photo hero instead.
 */
export default function AboutPageHero({
  title,
  subtitle,
  deck,
  breadcrumbLabel,
}: AboutPageHeroProps) {
  return (
    <section className="bg-[#ebf4ff] pt-12 pb-16">
      <div className="container-site flex flex-col gap-4">

        {/* Breadcrumb */}
        <Breadcrumb
          trail={[
            { label: 'Home', href: '/' },
            { label: 'About USNI', href: '/about' },
          ]}
          current={breadcrumbLabel}
          className="border-b border-[#C2DDFF] pb-4"
        />

        {/* Page title */}
        <div className="flex flex-col gap-3">
          <h1 className="font-headline text-[32px] lg:text-[64px] text-navy-bolder leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="font-headline text-[22px] lg:text-[32px] text-navy-subtle leading-[1.15]">
              {subtitle}
            </p>
          )}
          {deck && (
            <p className="font-body text-base lg:text-lg text-neutral-subtle leading-[1.5] max-w-[820px]">
              {deck}
            </p>
          )}
        </div>

      </div>
    </section>
  )
}
