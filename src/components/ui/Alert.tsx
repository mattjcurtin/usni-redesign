import type { ReactNode } from 'react'

/**
 * Status alert, in the shape the site already used ad hoc in a dozen places:
 * a tinted panel with a 4px accent bar on the leading edge, an icon, an
 * optional bold title, and body copy.
 *
 * The four palettes are the ones already in the codebase, so converting an
 * existing hand-rolled panel to this component is a no-op visually:
 *   success  #0a5c2e on #e6f7ed   (was AccountProfile)
 *   warning  #ffaa00 on #fff8d6   (was Login, CartItems, ProceedingsContact)
 *   info     #0466c8 on #ebf4ff   (was ContactSections, EssaySubmitForm)
 *   danger   #c1121f on #fef6f6   (was ContactSections, NewsletterJoin)
 *
 * `role` defaults by variant: danger gets role="alert" so it interrupts a
 * screen reader, the rest get role="status" so they are announced politely.
 * Pass role explicitly to override.
 */

export type AlertVariant = 'success' | 'warning' | 'info' | 'danger'

const VARIANTS: Record<AlertVariant, { accent: string; bg: string; icon: string }> = {
  success: { accent: '#0a5c2e', bg: '#e6f7ed', icon: 'fa-circle-check' },
  warning: { accent: '#ffaa00', bg: '#fff8d6', icon: 'fa-triangle-exclamation' },
  info:    { accent: '#0466c8', bg: '#ebf4ff', icon: 'fa-circle-info' },
  danger:  { accent: '#c1121f', bg: '#fef6f6', icon: 'fa-circle-exclamation' },
}

export default function Alert({
  variant = 'info',
  title,
  children,
  icon = true,
  role,
  className = '',
  id,
}: {
  variant?: AlertVariant
  /** Bold first line. Omit for a single-line alert. */
  title?: ReactNode
  children?: ReactNode
  /** Set false to drop the leading icon. */
  icon?: boolean
  role?: 'alert' | 'status'
  className?: string
  id?: string
}) {
  const v = VARIANTS[variant]
  return (
    <div
      id={id}
      role={role ?? (variant === 'danger' ? 'alert' : 'status')}
      className={`flex items-start gap-3 border border-l-4 px-5 py-4 ${className}`}
      style={{ backgroundColor: v.bg, borderColor: v.accent }}
    >
      {icon && (
        <i
          className={`fa-solid ${v.icon} text-[18px] leading-[1.45] flex-shrink-0`}
          style={{ color: v.accent }}
          aria-hidden="true"
        />
      )}
      <div className="min-w-0 flex flex-col gap-1">
        {title && (
          <p className="font-body font-bold text-[16px] text-[#1d2535] leading-snug">{title}</p>
        )}
        {children && (
          <div className="font-body text-[15px] text-[#1d2535] leading-relaxed">{children}</div>
        )}
      </div>
    </div>
  )
}
