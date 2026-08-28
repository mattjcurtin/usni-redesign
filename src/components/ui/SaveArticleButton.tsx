import { useState } from 'react'

interface SaveArticleButtonProps {
  /** Starts saved — for an article already in the reader's bookmarks. */
  defaultSaved?: boolean
}

/**
 * Bookmark toggle that sits beside Share at the top of an article. Saved
 * articles collect under /account/saved; like the other account interactions in
 * this prototype the state is local rather than persisted.
 */
export default function SaveArticleButton({ defaultSaved = false }: SaveArticleButtonProps) {
  const [saved, setSaved] = useState(defaultSaved)

  return (
    <button
      type="button"
      onClick={() => setSaved(v => !v)}
      aria-pressed={saved}
      className={`inline-flex items-center gap-2 border border-navy-bolder text-navy-bolder font-body font-bold text-sm px-5 py-3 transition-colors ${
        saved ? 'bg-[#EBF4FF]' : 'hover:bg-[#EBF4FF]'
      }`}
    >
      {/* Fixed label width so toggling Save → Saved doesn't nudge the row. */}
      <span className="min-w-[3.1rem] text-left">{saved ? 'Saved' : 'Save'}</span>
      <i
        className={`${saved ? 'fa-solid' : 'fa-regular'} fa-bookmark text-xs`}
        aria-hidden="true"
      />
    </button>
  )
}
