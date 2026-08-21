import { useEffect, useId, useRef, type ReactNode } from 'react'

/**
 * Modal shell — backdrop, panel, close control, Escape, scroll lock.
 *
 * The site had three hand-rolled copies of this chrome (CreditCardModal, the
 * gallery lightbox, the member-update reader) and they had already drifted on
 * z-index and close-button treatment. New modals build on this one.
 */
export default function Modal({
  open,
  onClose,
  title,
  children,
  maxWidth = '560px',
}: {
  open: boolean
  onClose: () => void
  /** Accessible name, rendered as the panel heading. */
  title: string
  children: ReactNode
  maxWidth?: string
}) {
  const headingId = useId()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // Move focus into the dialog so the keyboard lands somewhere sensible.
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
    >
      <div className="absolute inset-0 bg-navy-boldest/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        ref={panelRef}
        tabIndex={-1}
        style={{ maxWidth }}
        className="relative z-10 bg-white w-full max-h-[88vh] overflow-y-auto shadow-2xl outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-navy-subtle text-white hover:bg-navy-bright transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>

        <div className="px-7 lg:px-8 pt-8 pb-8 flex flex-col gap-6">
          <h2 id={headingId} className="font-headline text-[28px] text-[#1d2535] leading-[1.2] pr-12">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  )
}
