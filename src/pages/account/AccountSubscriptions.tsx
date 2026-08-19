import { useState } from 'react'
import { Link } from 'react-router-dom'
import AccountLayout from '@/components/layout/AccountLayout'
import { AccountCard, Badge, DataRow, Toggle } from '@/components/ui/AccountCard'
import { subscriptions } from '@/data/account'

/**
 * Subscriptions.
 *
 * There is no equivalent page on the live site — no /user/{uid}/subscriptions
 * route exists — even though Commerce models subscriptions as their own order
 * type. Magazine term, next issue, and auto-renew have had no member-facing
 * surface at all.
 */
export default function AccountSubscriptions() {
  const [renew, setRenew] = useState<Record<string, boolean>>(
    Object.fromEntries(subscriptions.map(s => [s.title, s.autoRenew])),
  )

  return (
    <AccountLayout
      title="Subscriptions"
      lede="Your magazines, when the next issue ships, and what renews when."
    >
      <div className="flex flex-col gap-6">
        {subscriptions.map(s => (
          <AccountCard
            key={s.title}
            title={s.title}
            action={<Badge tone="active">Active</Badge>}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
              <dl className="flex-1 min-w-0 flex flex-col">
                <DataRow label="Format" value={s.format} />
                <DataRow label="Term" value={s.term} />
                <DataRow label="Next issue" value={s.nextIssue} />
                <DataRow label="Renews on" value={s.renewsOn} />
                <DataRow
                  label="Price"
                  value={s.price === 0 ? 'Included with membership' : `$${s.price}/year`}
                />
              </dl>

              <div className="lg:w-[300px] lg:flex-shrink-0 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Toggle
                    on={renew[s.title]}
                    label={`Auto-renew ${s.title}`}
                    onChange={() => setRenew(p => ({ ...p, [s.title]: !p[s.title] }))}
                  />
                  <p className="font-body text-[14px] text-neutral-subtle leading-relaxed">
                    {renew[s.title]
                      ? `Renews automatically on ${s.renewsOn}.`
                      : `Ends on ${s.renewsOn} unless you renew.`}
                  </p>
                </div>
                <Link
                  to="/account/preferences"
                  className="font-body font-semibold text-[14px] text-link"
                >
                  Change delivery or email format
                </Link>
              </div>
            </div>
          </AccountCard>
        ))}
      </div>

      <AccountCard title="Add a subscription">
        <p className="font-body text-[15px] text-neutral-subtle leading-relaxed mb-4">
          Naval History is available in print as an add-on, and the Combat Fleets reference database can be added to
          any membership.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/naval-history/subscribe"
            className="inline-flex items-center justify-center font-body font-bold text-[15px] text-navy-bolder px-5 py-3 border border-navy-bolder hover:bg-navy-bolder hover:text-white transition-colors"
          >
            Naval History
          </Link>
          <Link
            to="/membership/join"
            className="inline-flex items-center justify-center font-body font-bold text-[15px] text-navy-bolder px-5 py-3 border border-navy-bolder hover:bg-navy-bolder hover:text-white transition-colors"
          >
            Compare memberships
          </Link>
        </div>
      </AccountCard>
    </AccountLayout>
  )
}
