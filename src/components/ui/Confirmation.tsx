import type { ReactNode } from 'react'

/**
 * Shared pieces for the post-transaction confirmation pages (membership and
 * donation). Both are receipts, so they speak one visual language: the pale-blue
 * band the Checkout pages use for their heading, then bordered cards that reuse
 * the order-summary row rhythm those pages already established, so the receipt
 * reads as the last step of the same flow rather than a different design.
 *
 * `print-hide` marks chrome that should drop out of a printed receipt; the rule
 * lives in `index.css` under the opt-in `.print-receipt` wrapper.
 */

export function ConfirmationBanner({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <section className="bg-[#ebf4ff] py-14 lg:py-20">
      <div className="container-site flex flex-col items-center text-center gap-5">
        <span
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <i className="fa-solid fa-check text-[26px] text-[#0a5c2e]" />
        </span>
        <p className="font-body font-medium text-sm uppercase tracking-[0.08em] text-[#023e7d]">
          {eyebrow}
        </p>
        <h1 className="font-headline text-[36px] lg:text-[52px] text-[#1d2535] leading-[1.1] max-w-[820px]">
          {title}
        </h1>
        {children && (
          <div className="font-body text-base lg:text-lg text-neutral-subtle leading-relaxed max-w-[640px]">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}

/** Order number / date / receipt-email strip, directly under the banner. */
export function ReceiptMeta({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl
      className="grid grid-cols-1 sm:grid-cols-3 border border-[#c4c9d4]
                 divide-y divide-[#c4c9d4] sm:divide-y-0 sm:divide-x"
    >
      {items.map(item => (
        <div key={item.label} className="px-5 py-4 flex flex-col gap-1 min-w-0">
          <dt className="font-body font-semibold text-[12px] uppercase tracking-[0.06em] text-[#4e576a]">
            {item.label}
          </dt>
          <dd className="font-body font-bold text-[16px] text-[#1d2535] break-words">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function ReceiptCard({
  title,
  action,
  children,
}: {
  title: string
  action?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="border border-[#c4c9d4]">
      <div className="p-6 lg:p-8 flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h2 className="font-headline text-[26px] lg:text-[28px] text-[#1d2535] leading-[1.2]">
            {title}
          </h2>
          {action}
        </div>
        {children}
      </div>
    </div>
  )
}

export function ReceiptRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex justify-between items-baseline gap-4 py-3 border-b border-[#e8eaed]">
      <span className="font-body font-bold text-[15px] text-[#1d2535]">{label}</span>
      <span className="font-body text-[15px] text-[#4e576a] text-right">{value}</span>
    </div>
  )
}

export function ReceiptTotal({ label = 'Total charged', value }: { label?: string; value: ReactNode }) {
  return (
    <div className="flex justify-between items-baseline gap-4 pt-4 mt-1">
      <span className="font-body font-bold text-[17px] text-[#1d2535]">{label}</span>
      <span className="font-headline text-[32px] text-[#023e7d]">{value}</span>
    </div>
  )
}

export function NextSteps({ steps }: { steps: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4 lg:gap-5 py-5 border-b border-[#e8eaed] last:border-b-0 last:pb-0">
          <span
            aria-hidden="true"
            className="flex-shrink-0 w-9 h-9 bg-[#ebf4ff] text-[#023e7d] font-body font-bold text-[15px] flex items-center justify-center"
          >
            {i + 1}
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <p className="font-body font-bold text-[16px] text-[#1d2535]">{step.title}</p>
            <p className="font-body text-[15px] text-neutral-subtle leading-relaxed">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function PrintReceiptButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print-hide inline-flex items-center gap-2 font-body font-semibold text-[15px] text-link"
    >
      <i className="fa-solid fa-print" aria-hidden="true" />
      {/* Just "Print": the button sits in a ReceiptCard header whose title
          already names what is being printed. */}
      Print
    </button>
  )
}

/** Closing row of links. The first entry renders as the solid navy CTA. */
export function ConfirmationActions({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="print-hide flex flex-col sm:flex-row flex-wrap gap-3">
      {links.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          className={
            i === 0
              ? 'inline-flex items-center justify-center gap-2 bg-navy-bolder text-white font-body font-bold text-base px-6 py-4 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors'
              : 'inline-flex items-center justify-center gap-2 font-body font-bold text-base text-navy-bolder px-6 py-4 border border-navy-bolder hover:bg-navy-bright hover:text-white hover:border-navy-bright transition-colors'
          }
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}

/** Support footer — one line, differs per flow. */
export function ConfirmationSupport({ children }: { children: ReactNode }) {
  return (
    <p className="font-body text-[15px] text-neutral-subtle leading-relaxed">{children}</p>
  )
}
