import Breadcrumb from '@/components/ui/Breadcrumb'
export default function ProceedingsAllIssuesHero() {
  return (
    <section className="bg-[#ebf4ff] pt-12 pb-16">
      <div className="container-site flex flex-col gap-4">

        {/* Breadcrumb */}
        <Breadcrumb
          trail={[
            { label: 'Home', href: '/' },
            { label: 'Proceedings', href: '/proceedings' },
          ]}
          current="All Issues"
          className="border-b border-[#C2DDFF] pb-4"
        />

        {/* Page title */}
        <h1 className="font-headline text-[32px] lg:text-[64px] text-navy-bolder leading-[1.1]">
          All Issues
        </h1>

      </div>
    </section>
  )
}
