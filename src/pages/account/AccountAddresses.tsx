import AccountLayout from '@/components/layout/AccountLayout'
import { AccountCard, Badge } from '@/components/ui/AccountCard'
import { addresses } from '@/data/account'

export default function AccountAddresses() {
  return (
    <AccountLayout
      title="Addresses"
      lede="Where print issues, books, and member materials are sent."
      actions={
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-navy-bolder text-white font-body font-bold text-[15px] px-5 py-3 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors"
        >
          <i className="fa-solid fa-plus text-[12px]" aria-hidden="true" />
          Add an address
        </button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map(a => (
          <AccountCard
            key={a.label}
            title={a.label}
            action={a.isDefault ? <Badge tone="info">Default</Badge> : undefined}
          >
            <address className="font-body text-[15px] text-neutral-subtle not-italic leading-relaxed">
              <span className="font-bold text-navy-bolder">{a.name}</span>
              <br />
              {a.lines.map(l => <span key={l}>{l}<br /></span>)}
              {a.city}, {a.state} {a.zip}
              <br />
              {a.country}
            </address>
            <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-[#e8eaed]">
              <button type="button" className="font-body font-semibold text-[14px] text-link">
                Edit
              </button>
              {!a.isDefault && (
                <>
                  <button type="button" className="font-body font-semibold text-[14px] text-link">
                    Make default
                  </button>
                  <button type="button" className="font-body font-semibold text-[14px] text-[#c1121f] hover:underline">
                    Remove
                  </button>
                </>
              )}
            </div>
          </AccountCard>
        ))}
      </div>

      <p className="font-body text-[14px] text-neutral-subtle leading-relaxed max-w-[640px]">
        Your default address is used for print delivery and as the billing address at checkout unless you choose
        otherwise.
      </p>
    </AccountLayout>
  )
}
