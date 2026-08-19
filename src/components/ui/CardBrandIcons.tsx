/**
 * Credit-card brand marks.
 *
 * Artwork supplied by the design side; each mark is a 32x32 canvas with the card
 * body occupying the inner 28x18 (x 2..30, y 7..25), so the rendered box is
 * square and the card reads at ~56% of the box height.
 *
 * Inlined as JSX rather than imported as .svg files so the marks travel inside
 * the single JS bundle — the production build inlines JS and CSS but leaves image
 * assets as separate requests, and behind the Basic Auth gate each extra request
 * is a cost worth avoiding for artwork this small.
 */

type CardBrand = 'visa' | 'mastercard' | 'amex'

const BRAND_LABELS: Record<CardBrand, string> = {
  visa: 'Visa',
  mastercard: 'Mastercard',
  amex: 'American Express',
}

function VisaMark() {
  return (
    <>
      <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#1434cb" strokeWidth="0" />
      <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15" />
      <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0" />
      <path d="m13.392,12.624l-2.838,6.77h-1.851l-1.397-5.403c-.085-.332-.158-.454-.416-.595-.421-.229-1.117-.443-1.728-.576l.041-.196h2.98c.38,0,.721.253.808.69l.738,3.918,1.822-4.608h1.84Z" fill="#fff" strokeWidth="0" />
      <path d="m20.646,17.183c.008-1.787-2.47-1.886-2.453-2.684.005-.243.237-.501.743-.567.251-.032.943-.058,1.727.303l.307-1.436c-.421-.152-.964-.299-1.638-.299-1.732,0-2.95.92-2.959,2.238-.011.975.87,1.518,1.533,1.843.683.332.912.545.909.841-.005.454-.545.655-1.047.663-.881.014-1.392-.238-1.799-.428l-.318,1.484c.41.188,1.165.351,1.947.359,1.841,0,3.044-.909,3.05-2.317" fill="#fff" strokeWidth="0" />
      <path d="m25.423,12.624h-1.494c-.337,0-.62.195-.746.496l-2.628,6.274h1.839l.365-1.011h2.247l.212,1.011h1.62l-1.415-6.77Zm-2.16,4.372l.922-2.542.53,2.542h-1.452Z" fill="#fff" strokeWidth="0" />
      <path fill="#fff" strokeWidth="0" d="M15.894 12.624L14.446 19.394 12.695 19.394 14.143 12.624 15.894 12.624z" />
    </>
  )
}

function MastercardMark() {
  return (
    <>
      <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#141413" strokeWidth="0" />
      <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15" />
      <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0" />
      <path fill="#ff5f00" strokeWidth="0" d="M13.597 11.677H18.407V20.32H13.597z" />
      <path d="m13.902,15.999c0-1.68.779-3.283,2.092-4.322-2.382-1.878-5.849-1.466-7.727.932-1.863,2.382-1.451,5.833.947,7.712,2,1.573,4.795,1.573,6.795,0-1.329-1.038-2.107-2.642-2.107-4.322Z" fill="#eb001b" strokeWidth="0" />
      <path d="m24.897,15.999c0,3.039-2.459,5.497-5.497,5.497-1.237,0-2.428-.412-3.39-1.176,2.382-1.878,2.795-5.329.916-7.727-.275-.336-.58-.657-.916-.916,2.382-1.878,5.849-1.466,7.712.932.764.962,1.176,2.153,1.176,3.39Z" fill="#f79e1b" strokeWidth="0" />
    </>
  )
}

function AmexMark() {
  return (
    <>
      <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#0f70ce" strokeWidth="0" />
      <path d="m27.026,9l-.719,1.965-.708-1.965h-3.885v2.582l-1.136-2.582h-3.119l-3.259,7.409h2.637v6.591h8.097l1.316-1.458,1.322,1.458h2.244c.112-.314.184-.647.184-1v-1.041l-1.58-1.698,1.58-1.655v-7.606c0-.353-.072-.686-.184-1h-2.79Z" fill="#fff" strokeWidth="0" />
      <path d="m17.679,14.433h2.61l.502,1.148h1.78l-2.531-5.754h-2.039l-2.531,5.754h1.734l.477-1.148Zm1.307-3.135l.775,1.844h-1.535l.761-1.844Z" fill="#0f70ce" strokeWidth="0" />
      <path fill="#0f70ce" strokeWidth="0" d="M22.542 9.827L25.018 9.827 26.302 13.39 27.604 9.827 30 9.827 30 15.581 28.45 15.581 28.45 11.603 26.977 15.581 25.608 15.581 24.124 11.631 24.124 15.581 22.542 15.581 22.542 9.827z" />
      <path fill="#0f70ce" strokeWidth="0" d="M19.24 20.82L19.24 19.944 22.484 19.944 22.484 18.624 19.24 18.624 19.24 17.748 22.565 17.748 22.565 16.409 17.664 16.409 17.664 22.173 22.565 22.173 22.565 20.82 19.24 20.82z" />
      <path fill="#0f70ce" strokeWidth="0" d="M24.638 16.409L26.271 18.234 27.968 16.409 30 16.409 27.283 19.254 30 22.173 27.939 22.173 26.249 20.309 24.567 22.173 22.537 22.173 25.272 19.275 22.537 16.409 24.638 16.409z" />
      <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15" />
      <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0" />
    </>
  )
}

const MARKS: Record<CardBrand, () => JSX.Element> = {
  visa: VisaMark,
  mastercard: MastercardMark,
  amex: AmexMark,
}

/** One brand mark. `className` sizes the square canvas, not the card body. */
export function CardBrandIcon({
  brand,
  className = 'h-11 w-11',
}: {
  brand: CardBrand
  className?: string
}) {
  const Mark = MARKS[brand]
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label={BRAND_LABELS[brand]}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mark />
    </svg>
  )
}

/** Cards the Institute accepts. Discover is deliberately absent. */
export const ACCEPTED_CARDS: CardBrand[] = ['visa', 'mastercard', 'amex']

/**
 * The row shown beside a Payment Details heading. Each 32x32 canvas already
 * carries ~2.75px of transparent margin per side at the default size, so the
 * visual gap between cards is this value plus roughly 5.5px.
 */
export function AcceptedCards({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {ACCEPTED_CARDS.map(brand => (
        <li key={brand} className="flex">
          <CardBrandIcon brand={brand} />
        </li>
      ))}
    </ul>
  )
}
