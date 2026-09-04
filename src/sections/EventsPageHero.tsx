import Breadcrumb from '@/components/ui/Breadcrumb'
interface EventsPageHeroProps {
  title: string
  description?: string
  /** Trailing breadcrumb label. */
  breadcrumbLabel: string
}

/**
 * Light blue interior header for pages under /events — the same treatment the
 * essay contest archive and the About sub-pages use.
 */
export default function EventsPageHero({
  title,
  description,
  breadcrumbLabel,
}: EventsPageHeroProps) {
  return (
    <section className="bg-[#ebf4ff] pt-10 lg:pt-12 pb-12 lg:pb-16">
      <div className="container-site flex flex-col gap-4">
        <Breadcrumb
          trail={[
            { label: 'Home', href: '/' },
            { label: 'Events', href: '/events' },
          ]}
          current={breadcrumbLabel}
          className="pb-4 border-b border-[#C2DDFF]"
        />

        <h1 className="font-headline text-[32px] lg:text-[64px] text-navy-bolder leading-[1.1]">
          {title}
        </h1>

        {description && (
          <p className="font-body text-base lg:text-lg text-neutral-subtle leading-[1.6] max-w-[760px]">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
