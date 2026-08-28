import { useEffect, useId, useRef, useState, type ReactNode } from 'react'

/**
 * Field-level help behind an ⓘ button.
 *
 * Click to toggle rather than hover to reveal: these sit on forms that are used
 * on phones, where hover never fires, and the Service guidance is two sentences
 * — too much to read in the time a hover tooltip survives a moving cursor.
 *
 * The popover is `aria-describedby`-linked to nothing on purpose; it is a
 * disclosure, not a description, so the button owns the accessible name and the
 * panel is announced when it opens.
 */
export default function InfoTooltip({
  label,
  children,
  align = 'left',
}: {
  /** Accessible name, e.g. "About the Service field". */
  label: string
  children: ReactNode
  /** Which edge of the button the panel hangs from. */
  align?: 'left' | 'right'
}) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLSpanElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <span ref={wrapRef} className="relative inline-flex align-middle ml-1.5">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={label}
        className={`flex items-center justify-center w-[18px] h-[18px] rounded-full border text-[11px] font-body font-bold
                    transition-colors ${
                      open
                        ? 'bg-navy-bolder border-navy-bolder text-white'
                        : 'bg-white border-[#94A3B8] text-navy-subtle hover:border-navy-bright hover:text-navy-bright'
                    }`}
      >
        <span aria-hidden="true">i</span>
      </button>

      {open && (
        <span
          id={panelId}
          role="status"
          className={`absolute top-[calc(100%+8px)] z-40 w-[min(320px,calc(100vw-3rem))]
                      bg-navy-boldest border border-navy-bold shadow-xl px-4 py-3.5
                      font-body font-normal text-[14px] text-white leading-relaxed
                      ${align === 'right' ? 'right-0' : 'left-0'}`}
        >
          {children}
        </span>
      )}
    </span>
  )
}
