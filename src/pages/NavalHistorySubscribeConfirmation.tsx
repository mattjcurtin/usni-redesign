import { useSearchParams } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {
  ConfirmationActions,
  ConfirmationBanner,
  ConfirmationSupport,
  NextSteps,
  PrintReceiptButton,
  ReceiptCard,
  ReceiptMeta,
  ReceiptRow,
  ReceiptTotal,
} from '@/components/ui/Confirmation'
import {
  MEMBER_SERVICES_EMAIL,
  MEMBER_SERVICES_PHONE,
  formatReceiptDate,
  formatRenewalDate,
} from '@/data/transactions'
import {
  FORMAT_LABELS,
  REGION_LABELS,
  TERM_LABELS,
  offerFor,
  shipsPrint,
  type Format,
  type Region,
  type Term,
} from '@/data/navalHistorySubscription'

/**
 * Naval History subscription receipt — the step the subscribe flow previously
 * had no equivalent of. Same shape as the membership and donation receipts.
 */
export default function NavalHistorySubscribeConfirmation() {
  const [searchParams] = useSearchParams()

  const term   = (searchParams.get('term') === '3' ? '3' : '1') as Term
  const region = (searchParams.get('region') === 'international' ? 'international' : 'us') as Region
  const format = (searchParams.get('format') === 'digital' ? 'digital' : 'print') as Format

  const orderNumber = searchParams.get('order') ?? 'NHS-2026-204817'
  const email       = searchParams.get('email') ?? 'subscriber@example.com'
  const firstName   = searchParams.get('name')  ?? ''
  const cardLast4   = searchParams.get('card')
  const isGift      = searchParams.get('gift') === 'true'
  const autoRenew   = searchParams.get('autoRenew') !== 'false'

  const price = Number(searchParams.get('price') ?? offerFor(format, region, term).price)
  const isPrint = shipsPrint(format)

  const steps = [
    {
      title: 'Your receipt is on its way',
      body: (
        <>
          A confirmation carrying this order number has been emailed to{' '}
          <span className="font-bold text-[#1d2535]">{email}</span>.
        </>
      ),
    },
    {
      title: isPrint ? 'Digital access starts now, print follows' : 'Digital access starts now',
      body: isPrint ? (
        <>
          Sign in with the email above to read every issue and the complete archive immediately. Your
          first print issue arrives with the next published number — Naval History publishes six times a
          year, so allow up to eight weeks.
        </>
      ) : (
        <>
          Sign in with the email above to read Naval History on any device, plus the complete archive.
          Nothing will be mailed to you.
        </>
      ),
    },
    {
      title: autoRenew ? 'Set to renew automatically' : 'Renewal is up to you',
      body: autoRenew ? (
        <>
          Your subscription renews on {formatRenewalDate()} at the then-current rate. You can switch
          auto-renew off any time in your account settings.
        </>
      ) : (
        <>We’ll email you before your subscription lapses on {formatRenewalDate()}.</>
      ),
    },
  ]

  return (
    <div className="print-receipt flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <ConfirmationBanner
          eyebrow="Subscription confirmed"
          title={
            isGift
              ? 'Your gift subscription is confirmed'
              : firstName
                ? `You’re subscribed, ${firstName}`
                : 'You’re subscribed to Naval History'
          }
        >
          {isGift
            ? 'Thank you for giving Naval History — the award-winning magazine dedicated to preserving and promoting naval history.'
            : 'Thank you for subscribing to Naval History, the award-winning bimonthly dedicated to preserving and promoting naval history.'}
        </ConfirmationBanner>

        <section className="bg-white py-12 lg:py-16">
          <div className="container-site">
            <div className="max-w-[860px] mx-auto flex flex-col gap-8">

              <ReceiptMeta
                items={[
                  { label: 'Order number', value: orderNumber },
                  { label: 'Date', value: formatReceiptDate() },
                  { label: 'Receipt sent to', value: email },
                ]}
              />

              <ReceiptCard title="What you subscribed to" action={<PrintReceiptButton />}>
                <div className="flex flex-col">
                  <ReceiptRow label="Publication" value="Naval History" />
                  <ReceiptRow label="Format" value={FORMAT_LABELS[format]} />
                  <ReceiptRow label="Term" value={TERM_LABELS[term]} />
                  <ReceiptRow label="Region" value={REGION_LABELS[region]} />
                  <ReceiptRow
                    label="Payment method"
                    value={cardLast4 ? `Credit card ending in ${cardLast4}` : 'Credit card'}
                  />
                  <ReceiptTotal value={`$${price.toLocaleString()}`} />
                </div>

                <p className="font-body text-[14px] text-neutral-subtle leading-relaxed border-t border-[#e8eaed] pt-4">
                  {isPrint
                    ? 'Print delivery begins with the next published issue; digital access is available immediately.'
                    : 'This is a digital-only subscription — no print edition ships.'}
                  {autoRenew
                    ? ` Auto-renew is on and next runs on ${formatRenewalDate()}.`
                    : ' Auto-renew is off.'}
                </p>
              </ReceiptCard>

              <ReceiptCard title="What happens next">
                <NextSteps steps={steps} />
              </ReceiptCard>

              <ConfirmationActions
                links={[
                  { label: 'Start reading Naval History', href: '/naval-history' },
                  { label: 'Explore the archives', href: '/archives' },
                  { label: 'Back to home', href: '/' },
                ]}
              />

              <ConfirmationSupport>
                Questions about this subscription? Call member services at{' '}
                <a
                  href={`tel:${MEMBER_SERVICES_PHONE.replace(/[^0-9]/g, '')}`}
                  className="text-link"
                >
                  {MEMBER_SERVICES_PHONE}
                </a>{' '}
                or email{' '}
                <a
                  href={`mailto:${MEMBER_SERVICES_EMAIL}`}
                  className="text-link"
                >
                  {MEMBER_SERVICES_EMAIL}
                </a>{' '}
                and reference order {orderNumber}.
              </ConfirmationSupport>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
