import { Link } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/**
 * Catch-all for paths the prototype has no route for. Registered last in
 * `App.tsx` as `path="*"`. Without it an unmatched path rendered an empty page,
 * which read as a broken build rather than a missing route.
 */
export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        <div className="container-site py-20 lg:py-28 max-w-[720px]">
          <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-[#023e7d] mb-3">
            404: Page not found
          </p>
          <h1 className="font-headline text-[40px] lg:text-[52px] text-navy-bolder leading-[1.1] mb-4">
            There's nothing at this address
          </h1>
          <p className="font-body text-base text-neutral-subtle leading-relaxed mb-8">
            Either the route hasn't been built yet or the link is wrong.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-navy-bolder text-white font-body font-bold text-base px-6 py-3.5 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors"
          >
            Back to the homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
