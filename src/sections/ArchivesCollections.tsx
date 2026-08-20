import imgOralHistory from '@/assets/images/JFKWHP-ST-A26-25-62_0.jpg'
import imgPhotos from '@/assets/images/250908-M-IU565-1134K.jpg'
import imgMemoirs from '@/assets/images/3d-rendering-pen-ai-generated.jpg'
import ExternalLinkIcon from '@/components/ui/ExternalLinkIcon'

const collections = [
  {
    id: 'oral-histories',
    title: 'Oral Histories',
    description:
      'More than 800 recorded interviews with admirals, flag officers, enlisted sailors, Marines, and civilians who shaped American sea power — spanning World War II through the present day.',
    image: imgOralHistory,
    imageAlt: 'An oral history interview being recorded',
    href: '/archives/oral-histories',
    cta: 'Browse Oral Histories',
  },
  {
    id: 'memoirs',
    title: 'Memoirs',
    description:
      'Unpublished autobiographical manuscripts and personal papers donated by naval officers and their families. These first-person accounts offer a unique window into naval service across generations.',
    image: imgMemoirs,
    imageAlt: 'A pen resting on a handwritten manuscript page',
    href: '/archives/memoirs',
    cta: 'Browse Memoirs',
  },
  {
    id: 'photos',
    title: 'Photographic Collection',
    description:
      'Hundreds of thousands of photographs documenting ships, personnel, battles, and ceremonies of the U.S. Navy, Marine Corps, and Coast Guard from the 19th century to the present.',
    image: imgPhotos,
    imageAlt: 'Marines photographed during a field exercise',
    href: 'https://photos.usni.org',
    external: true,
    cta: 'Browse Photos',
  },
]

export default function ArchivesCollections() {
  return (
    <section id="collections" className="py-16 lg:py-20 bg-[#f7f7f2]">
      <div className="container-site">

        <div className="flex flex-col gap-3 mb-10">
          <p className="eyebrow text-navy-subtle">Our Collections</p>
          <h2 className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1]">
            Explore the Archives
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((col) => (
            <a
              key={col.id}
              href={col.href}
              {...('external' in col && col.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex flex-col bg-white border border-[#c4c9d4] overflow-hidden hover:border-[#023e7d] transition-colors"
            >
              {/* Image */}
              <div className="h-[240px] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <h3 className="font-headline text-[26px] text-[#023e7d] leading-[1.2]">
                  {col.title}
                </h3>
                <p className="font-body text-base text-neutral-subtle leading-relaxed flex-1">
                  {col.description}
                </p>
                {/* Solid button, matching the About quick-link cards. The card
                    itself is the anchor, so this is a span styled as a button
                    rather than a nested link. */}
                <span
                  className="mt-2 inline-flex items-center justify-center gap-2 w-full bg-navy-bolder text-white
                             font-body font-bold text-sm tracking-[-0.3px] px-5 py-3.5 border border-navy-bolder
                             group-hover:bg-navy-bright group-hover:border-navy-bright transition-colors duration-150"
                >
                  {col.cta}
                  {col.external ? (
                    <>
                      <ExternalLinkIcon />
                      <span className="sr-only">(opens in a new tab)</span>
                    </>
                  ) : (
                    <span aria-hidden="true">&rarr;</span>
                  )}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
