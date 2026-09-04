import Breadcrumb from '@/components/ui/Breadcrumb'
export default function ProceedingsContactHero() {
  return (
    <section className="bg-[#ebf4ff] pt-12 pb-20">
      <div className="container-site flex flex-col gap-4">

        {/* Breadcrumb */}
        <Breadcrumb
          trail={[
            { label: 'Home', href: '/' },
            { label: 'Proceedings', href: '/proceedings' },
          ]}
          current="Contact Proceedings"
          className="border-b border-[#C2DDFF] pb-4"
        />

        {/* Page title */}
        <h1 className="font-headline text-[32px] lg:text-[64px] text-navy-bolder leading-[1.1]">
          Contact Proceedings
        </h1>

      </div>
    </section>
  )
}
