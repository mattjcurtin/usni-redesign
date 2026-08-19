import { useState } from 'react'
import AccountLayout from '@/components/layout/AccountLayout'
import { AccountCard, Toggle } from '@/components/ui/AccountCard'
import { mailPreferences, newsletterInterests } from '@/data/account'

/**
 * Email and mail preferences.
 *
 * /newsletter collects six interests and an email format at signup with no way to
 * revisit them afterwards. This is that missing surface, using the same interest
 * list so the two stay in step.
 */
export default function AccountPreferences() {
  const [emails, setEmails] = useState(
    Object.fromEntries(newsletterInterests.map(i => [i.id, i.subscribed])),
  )
  const [mail, setMail] = useState(
    Object.fromEntries(mailPreferences.map(m => [m.id, m.enabled])),
  )
  const [format, setFormat] = useState<'html' | 'text'>('html')
  const [saved, setSaved] = useState(false)

  const subscribedCount = Object.values(emails).filter(Boolean).length

  return (
    <AccountLayout
      title="Email & mail preferences"
      lede="What the Institute sends you, and how."
    >
      {saved && (
        <div role="alert" className="border border-l-4 border-[#0a5c2e] bg-[#e6f7ed] px-5 py-4">
          <p className="font-body font-bold text-[15px] text-navy-bolder">Preferences saved</p>
          <p className="font-body text-[14px] text-neutral-subtle">
            Prototype only — nothing is persisted between page loads.
          </p>
        </div>
      )}

      <AccountCard title={`Newsletters (${subscribedCount} of ${newsletterInterests.length})`}>
        <ul className="flex flex-col">
          {newsletterInterests.map(i => (
            <li
              key={i.id}
              className="flex items-start justify-between gap-6 py-4 border-b border-[#e8eaed] last:border-b-0 last:pb-0 first:pt-0"
            >
              <div className="min-w-0">
                <p className="font-body font-bold text-[16px] text-navy-bolder">{i.name}</p>
                <p className="font-body text-[13px] text-neutral-subtle mt-0.5">{i.frequency}</p>
              </div>
              <Toggle
                on={emails[i.id]}
                label={`Subscribe to ${i.name}`}
                onChange={() => { setEmails(p => ({ ...p, [i.id]: !p[i.id] })); setSaved(false) }}
              />
            </li>
          ))}
        </ul>
      </AccountCard>

      <AccountCard title="Email format">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {(['html', 'text'] as const).map(f => (
            <label key={f} className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="email-format"
                checked={format === f}
                onChange={() => { setFormat(f); setSaved(false) }}
                className="mt-1 w-4 h-4 accent-[#023e7d]"
              />
              <span>
                <span className="block font-body font-bold text-[15px] text-navy-bolder">
                  {f === 'html' ? 'HTML' : 'Plain text'}
                </span>
                <span className="block font-body text-[14px] text-neutral-subtle">
                  {f === 'html' ? 'Images and formatting.' : 'Text only — lighter, and works on any client.'}
                </span>
              </span>
            </label>
          ))}
        </div>
      </AccountCard>

      <AccountCard title="Print mail">
        <ul className="flex flex-col">
          {mailPreferences.map(m => (
            <li
              key={m.id}
              className="flex items-start justify-between gap-6 py-4 border-b border-[#e8eaed] last:border-b-0 last:pb-0 first:pt-0"
            >
              <div className="min-w-0">
                <p className="font-body font-bold text-[16px] text-navy-bolder">{m.label}</p>
                <p className="font-body text-[13px] text-neutral-subtle mt-0.5">{m.detail}</p>
              </div>
              <Toggle
                on={mail[m.id]}
                label={m.label}
                onChange={() => { setMail(p => ({ ...p, [m.id]: !p[m.id] })); setSaved(false) }}
              />
            </li>
          ))}
        </ul>
      </AccountCard>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => setSaved(true)}
          className="inline-flex items-center justify-center bg-navy-bolder text-white font-body font-bold text-base px-6 py-3.5 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors"
        >
          Save preferences
        </button>
        <button
          type="button"
          onClick={() => { setEmails(Object.fromEntries(newsletterInterests.map(i => [i.id, false]))); setSaved(false) }}
          className="font-body font-semibold text-[15px] text-[#c1121f] hover:underline"
        >
          Unsubscribe from all email
        </button>
      </div>
    </AccountLayout>
  )
}
