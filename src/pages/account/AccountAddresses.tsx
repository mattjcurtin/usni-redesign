import { useState } from 'react'
import AccountLayout from '@/components/layout/AccountLayout'
import { AccountCard, Badge } from '@/components/ui/AccountCard'
import AddressModal from '@/components/ui/AddressModal'
import Alert from '@/components/ui/Alert'
import { addresses as seedAddresses, type AddressRecord } from '@/data/account'

export default function AccountAddresses() {
  const [addresses, setAddresses] = useState<AddressRecord[]>(seedAddresses)
  const [modalOpen, setModalOpen] = useState(false)
  const [saved, setSaved] = useState<string | null>(null)

  /** A new default demotes the old one — two defaults is not a state. */
  const handleSave = (address: AddressRecord) => {
    setAddresses(prev =>
      address.isDefault
        ? [...prev.map(a => ({ ...a, isDefault: false })), address]
        : [...prev, address],
    )
    setSaved(`${address.label} address saved.`)
  }

  return (
    <AccountLayout
      title="Addresses"
      lede="Where print issues, books, and member materials are sent."
      actions={
        <button
          type="button"
          onClick={() => { setSaved(null); setModalOpen(true) }}
          className="inline-flex items-center gap-2 bg-navy-bolder text-white font-body font-bold text-[15px] px-5 py-3 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors"
        >
          <i className="fa-solid fa-plus text-[12px]" aria-hidden="true" />
          Add an address
        </button>
      }
    >
      {saved && (
        <Alert variant="success" title={saved}>
          Prototype only — nothing is persisted between page loads.
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((a, i) => (
          <AccountCard
            key={`${a.label}-${i}`}
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

      <AddressModal open={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} />
    </AccountLayout>
  )
}
