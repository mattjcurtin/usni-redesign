import BookSearchBar from '@/components/ui/BookSearchBar'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function BooksCollectionHero() {
  return (
    <section className="bg-[#ebf4ff] pt-12 pb-14">
      <div className="container-site flex flex-col gap-6">

        {/* Breadcrumb */}
        <Breadcrumb
          trail={[
            { label: 'Home', href: '/' },
            { label: 'Books & Press', href: '/books' },
          ]}
          current="All Books"
          className="border-b border-[#C2DDFF] pb-4"
        />

        {/* Title + search row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
          <h1 className="font-headline text-[32px] lg:text-[64px] text-navy-bolder leading-[1.1] flex-shrink-0">
            All Books
          </h1>
          <div className="w-full lg:max-w-[520px] lg:pb-1">
            <BookSearchBar />
          </div>
        </div>

      </div>
    </section>
  )
}
