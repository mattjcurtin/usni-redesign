import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  // 'instant' overrides the global scroll-behavior: smooth so route changes
  // land at the top immediately instead of animating up the old page.
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}
import { CartProvider } from '@/context/CartContext'
import Home from '@/pages/Home'
import Membership from '@/pages/Membership'
import Events from '@/pages/Events'
import EventsPast from '@/pages/EventsPast'
import MembershipJoin from '@/pages/MembershipJoin'
import Proceedings from '@/pages/Proceedings'
import Giving from '@/pages/Giving'
import Donate from '@/pages/Donate'
import DonateCart from '@/pages/DonateCart'
import DonateCheckout from '@/pages/DonateCheckout'
import DonateConfirmation from '@/pages/DonateConfirmation'
import ProceedingsCurrentIssue from '@/pages/ProceedingsCurrentIssue'
import ProceedingsAllIssues from '@/pages/ProceedingsAllIssues'
import ProceedingsPodcast from '@/pages/ProceedingsPodcast'
import BooksAndPress from '@/pages/BooksAndPress'
import ProceedingsArticle from '@/pages/ProceedingsArticle'
import ProceedingsContact from '@/pages/ProceedingsContact'
import MembershipCart from '@/pages/MembershipCart'
import MembershipCheckout from '@/pages/MembershipCheckout'
import MembershipConfirmation from '@/pages/MembershipConfirmation'
import MembershipMagazineUpsell from '@/pages/MembershipMagazineUpsell'
import BookProduct from '@/pages/BookProduct'
import BooksCollection from '@/pages/BooksCollection'
import BooksNewReleases from '@/pages/BooksNewReleases'
import BooksCart from '@/pages/BooksCart'
import NavalHistory from '@/pages/NavalHistory'
import NavalHistorySubscribe from '@/pages/NavalHistorySubscribe'
import NavalHistorySubscribeCart from '@/pages/NavalHistorySubscribeCart'
import NavalHistorySubscribeCheckout from '@/pages/NavalHistorySubscribeCheckout'
import NavalHistorySubscribeConfirmation from '@/pages/NavalHistorySubscribeConfirmation'
import Login from '@/pages/Login'
import Archives from '@/pages/Archives'
import NavalHistoryArticle from '@/pages/NavalHistoryArticle'
import ProceedingsArticleFortifying from '@/pages/ProceedingsArticleFortifying'
import ProceedingsArticleGrubb from '@/pages/ProceedingsArticleGrubb'
import NewsletterJoin from '@/pages/NewsletterJoin'
import EssayContests from '@/pages/EssayContests'
import EssayContestPage from '@/pages/EssayContestPage'
import EssaySubmit from '@/pages/EssaySubmit'
import EssayContestsArchivePage from '@/pages/EssayContestsArchivePage'
import About from '@/pages/About'
import AboutHistory from '@/pages/AboutHistory'
import AboutStrategicPlan from '@/pages/AboutStrategicPlan'
import AboutLeadership from '@/pages/AboutLeadership'
import DesignSystemHome from '@/pages/design-system/DesignSystemHome'
import StyleGuide from '@/pages/design-system/StyleGuide'
import DesignSystemButtons from '@/pages/design-system/Buttons'
import DesignSystemCards from '@/pages/design-system/Cards'
import DesignSystemForms from '@/pages/design-system/Forms'
import DesignSystemNavigation from '@/pages/design-system/Navigation'
import DesignSystemIconography from '@/pages/design-system/Iconography'
import HeaderPreview from '@/pages/design-system/preview/HeaderPreview'
import FooterPreview from '@/pages/design-system/preview/FooterPreview'
import AccountDashboard from '@/pages/account/AccountDashboard'
import AccountProfile from '@/pages/account/AccountProfile'
import AccountAddresses from '@/pages/account/AccountAddresses'
import AccountPayment from '@/pages/account/AccountPayment'
import AccountOrders from '@/pages/account/AccountOrders'
import AccountSubscriptions from '@/pages/account/AccountSubscriptions'
import AccountGiving from '@/pages/account/AccountGiving'
import AccountSaved from '@/pages/account/AccountSaved'
import AccountPreferences from '@/pages/account/AccountPreferences'
import AccountBenefits from '@/pages/account/AccountBenefits'
import AccountApiKeys from '@/pages/account/AccountApiKeys'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/past" element={<EventsPast />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/membership/join" element={<MembershipJoin />} />
        <Route path="/membership/cart" element={<MembershipCart />} />
        <Route path="/membership/checkout" element={<MembershipCheckout />} />
        <Route path="/membership/confirmation" element={<MembershipConfirmation />} />
        <Route path="/membership/magazine-upsell" element={<MembershipMagazineUpsell />} />
        <Route path="/proceedings" element={<Proceedings />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/giving/donate" element={<Donate />} />
        <Route path="/giving/donate/cart" element={<DonateCart />} />
        <Route path="/giving/donate/checkout" element={<DonateCheckout />} />
        <Route path="/giving/donate/confirmation" element={<DonateConfirmation />} />
        <Route path="/proceedings/apr-2026" element={<ProceedingsCurrentIssue />} />
        <Route path="/proceedings/all-issues" element={<ProceedingsAllIssues />} />
        <Route path="/proceedings/podcast" element={<ProceedingsPodcast />} />
        <Route path="/proceedings/contact" element={<ProceedingsContact />} />
        <Route path="/books" element={<BooksAndPress />} />
        <Route path="/books/collection" element={<BooksCollection />} />
        <Route path="/books/new-releases" element={<BooksNewReleases />} />
        <Route path="/books/cart" element={<BooksCart />} />
        <Route path="/naval-history" element={<NavalHistory />} />
        <Route path="/naval-history/subscribe" element={<NavalHistorySubscribe />} />
        <Route path="/naval-history/subscribe/cart" element={<NavalHistorySubscribeCart />} />
        <Route path="/naval-history/subscribe/checkout" element={<NavalHistorySubscribeCheckout />} />
        <Route path="/naval-history/subscribe/confirmation" element={<NavalHistorySubscribeConfirmation />} />
        <Route path="/login" element={<Login />} />

        {/* Account section — no auth gate; the prototype has no sessions */}
        <Route path="/account" element={<AccountDashboard />} />
        <Route path="/account/profile" element={<AccountProfile />} />
        <Route path="/account/addresses" element={<AccountAddresses />} />
        <Route path="/account/payment" element={<AccountPayment />} />
        <Route path="/account/orders" element={<AccountOrders />} />
        <Route path="/account/subscriptions" element={<AccountSubscriptions />} />
        <Route path="/account/giving" element={<AccountGiving />} />
        <Route path="/account/saved" element={<AccountSaved />} />
        <Route path="/account/preferences" element={<AccountPreferences />} />
        <Route path="/account/benefits" element={<AccountBenefits />} />
        <Route path="/account/api-keys" element={<AccountApiKeys />} />
        <Route path="/proceedings/three-mefs" element={<ProceedingsArticle />} />
        <Route path="/proceedings/fortifying-digital-watch" element={<ProceedingsArticleFortifying />} />
        <Route path="/proceedings/naval-aviation-got-better" element={<ProceedingsArticleGrubb />} />
        <Route path="/books/ai-warfighting" element={<BookProduct />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/naval-history/mitscher-at-midway" element={<NavalHistoryArticle />} />
        {/* Reachable by direct URL only. The footer CTA deliberately points at
            the Mailchimp hosted form instead, so nothing on the site links here. */}
        <Route path="/newsletter" element={<NewsletterJoin />} />
        <Route path="/essay-contests" element={<EssayContests />} />
        <Route path="/essay-contests/archive" element={<EssayContestsArchivePage />} />
        {/* One submission page for every contest — see ?contest=<slug> */}
        <Route path="/essay-contests/submit" element={<EssaySubmit />} />
        <Route path="/essay-contests/general-prize" element={<EssayContestPage slug="general-prize" />} />
        <Route path="/essay-contests/leadership" element={<EssayContestPage slug="leadership" />} />
        <Route
          path="/essay-contests/naval-maritime-photo"
          element={<EssayContestPage slug="naval-maritime-photo" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/about/history" element={<AboutHistory />} />
        <Route path="/about/strategic-plan" element={<AboutStrategicPlan />} />
        <Route path="/about/leadership" element={<AboutLeadership />} />
        <Route path="/design-system" element={<DesignSystemHome />} />
        <Route path="/design-system/style-guide" element={<StyleGuide />} />
        <Route path="/design-system/buttons" element={<DesignSystemButtons />} />
        <Route path="/design-system/cards" element={<DesignSystemCards />} />
        <Route path="/design-system/forms" element={<DesignSystemForms />} />
        <Route path="/design-system/navigation" element={<DesignSystemNavigation />} />
        <Route path="/design-system/iconography" element={<DesignSystemIconography />} />
        <Route path="/design-system/preview/header" element={<HeaderPreview />} />
        <Route path="/design-system/preview/footer" element={<FooterPreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}
