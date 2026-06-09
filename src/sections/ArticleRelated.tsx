import { featuredArticlesLeft, latestIssueCol1, latestIssueCol2 } from '@/data/proceedings'

const relatedArticles = [
  featuredArticlesLeft[0],   // Fortifying the Digital Watch
  latestIssueCol1[0],        // The Hallmarks of Russia's Hybrid War
  latestIssueCol2[0],        // Confronting Cyber Threats
]

interface RelatedArticleCardProps {
  article: (typeof relatedArticles)[0]
}

function RelatedArticleCard({ article }: RelatedArticleCardProps) {
  return (
    <article className="flex flex-col gap-3">
      {article.image && (
        <a href={article.href} className="block overflow-hidden aspect-[16/10] bg-neutral-subtlest flex-shrink-0">
          <img
            src={article.image}
            alt={article.imageAlt ?? article.headline}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </a>
      )}
      <div className="flex flex-col gap-2">
        <p className="font-body font-semibold text-xs uppercase tracking-widest text-navy-subtle">
          {article.category}
        </p>
        <a href={article.href}>
          <h3 className="font-headline text-lg lg:text-xl text-navy-bolder leading-tight hover:text-navy-subtle transition-colors">
            {article.headline}
          </h3>
        </a>
        <p className="font-body text-xs text-neutral-subtle">
          {article.date}{article.author ? ` | by ${article.author}` : ''}
        </p>
      </div>
    </article>
  )
}

export default function ArticleRelated() {
  return (
    <section className="bg-white pt-12 pb-20 border-t border-border-light">
      <div className="container-site">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline text-3xl lg:text-4xl text-navy-bolder">Related Articles</h2>
          <a
            href="/proceedings/apr-2026"
            className="font-body font-semibold text-sm text-navy-subtle hover:text-navy-bolder transition-colors flex items-center gap-1.5"
          >
            See all articles
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          </a>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {relatedArticles.map((article) => (
            article && <RelatedArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
