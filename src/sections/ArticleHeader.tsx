interface ArticleHeaderProps {
  publication?: string
  breadcrumbs?: { label: string; href?: string }[]
  title: string
  deck: string
  date: string
  magazineName?: string
  author: string
  commentCount?: number
}

export default function ArticleHeader({
  publication = 'Proceedings',
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Publications', href: '/publications' },
    { label: 'Proceedings', href: '/proceedings' },
    { label: 'April 2026', href: '/proceedings/apr-2026' },
    { label: "Three MEFs Won't Be Enough" },
  ],
  title = "Three MEFs Won't Be Enough",
  deck = "The Marine Corps' current three-MEF structure cannot meet simultaneous crises across competing theaters — a fourth expeditionary force is no longer optional.",
  date = 'April 2026',
  magazineName = 'Proceedings Magazine',
  author = 'Corporal Richard Sweeney III, U.S. Marine Corps Reserve',
  commentCount = 0,
}: ArticleHeaderProps) {
  return (
    <section className="bg-white pt-8 pb-8">
      <div className="container-site">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-6">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-neutral-subtle/50 text-xs">/</span>}
              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="font-body text-sm text-neutral-subtle hover:text-navy-subtle transition-colors"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="font-body text-sm text-navy-bolder font-medium truncate max-w-[240px]">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="font-headline text-5xl lg:text-[60px] xl:text-[68px] text-navy-bolder leading-[1.0] mb-5 max-w-4xl text-balance">
          {title}
        </h1>

        {/* Deck */}
        <p className="font-body text-lg lg:text-xl text-navy-bolder/65 mb-6 max-w-3xl leading-relaxed">
          {deck}
        </p>

        {/* Date + Magazine */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-body text-sm font-semibold text-navy-subtle">{date}</span>
          <span className="text-border-light text-sm">•</span>
          <span className="font-body text-sm text-navy-subtle">{magazineName}</span>
        </div>

        {/* Author */}
        <p className="font-body text-sm text-navy-bolder font-medium mb-7">
          By {author}
        </p>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pb-8 border-b border-border-light">
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-navy-bolder text-navy-bolder font-body font-semibold text-sm px-5 py-2.5 hover:bg-surface-subtle transition-colors"
          >
            <i className="fa-solid fa-share-nodes text-xs" aria-hidden="true" />
            Share
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-border-light text-navy-bolder font-body font-semibold text-sm px-5 py-2.5 hover:bg-surface-subtle transition-colors"
          >
            <i className="fa-regular fa-comment text-xs" aria-hidden="true" />
            Comments {commentCount > 0 && `(${commentCount})`}
          </button>
        </div>

      </div>
    </section>
  )
}
