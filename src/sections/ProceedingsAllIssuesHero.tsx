export default function ProceedingsAllIssuesHero() {
  return (
    <section className="bg-[#ebf4ff] pt-12 pb-16">
      <div className="container-site flex flex-col gap-4">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-[#C2DDFF] pb-4 flex items-center gap-2 text-sm">
          <a href="/" className="font-body font-bold text-navy-subtle hover:text-navy-bolder transition-colors">Home</a>
          <span className="text-neutral-subtle">/</span>
          <a href="/proceedings" className="font-body font-bold text-navy-subtle hover:text-navy-bolder transition-colors">Proceedings</a>
          <span className="text-neutral-subtle">/</span>
          <span className="font-body italic text-neutral-subtle">All Issues</span>
        </nav>

        {/* Page title */}
        <h1 className="font-headline text-[32px] lg:text-[48px] xl:text-[64px] text-navy-bolder leading-[1.1]">
          All Issues
        </h1>

      </div>
    </section>
  )
}
