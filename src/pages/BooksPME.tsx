import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BooksSubNav from '@/sections/BooksSubNav'
import CollectionHero from '@/sections/CollectionHero'
import PmeIntro from '@/sections/PmeIntro'
import PmeCollectionsGrid from '@/sections/PmeCollectionsGrid'
import PmeReadingListsPromo from '@/sections/PmeReadingListsPromo'
import { pmeHero } from '@/data/bookCollections'

/**
 * Professional Military Education — the hub for the Press's series and the
 * military reading lists.
 *
 * The live page is two paragraphs of introduction and nothing else, while the
 * nine series and the reading lists it describes sit beside it in the section
 * menu with no link between them. Asked whether this page should reference
 * them, the client's answer was "yeah, I think that's the right answer here —
 * it feels like an intro paragraph that somehow ended up on its own page."
 *
 * The page is ordered to get a visitor into a subcategory quickly: introduction
 * (with its covers set beside the copy rather than stacked beneath it), then
 * straight into the series grid.
 */
export default function BooksPME() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <BooksSubNav />

        <CollectionHero
          title="Professional Military Education"
          description="Since 1902, the sea services have relied on the Naval Institute Press for the professional literature that prepares sailors, Marines, and Coast Guardsmen for the responsibilities of their next assignment."
          eyebrow="Naval Institute Press"
          breadcrumbLabel="Professional Military Education"
          hero={{
            variant: 'image',
            image: pmeHero,
            imageAlt:
              'The national ensign flying from a ship’s stern, with a destroyer on the horizon',
          }}
        />

        <PmeIntro />

        <PmeCollectionsGrid />

        <PmeReadingListsPromo />
      </main>
      <Footer />
    </div>
  )
}
