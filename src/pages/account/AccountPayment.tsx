import AccountLayout from '@/components/layout/AccountLayout'
import { AccountCard, Badge, DataTable, Td } from '@/components/ui/AccountCard'
import { paymentMethods } from '@/data/account'

export default function AccountPayment() {
  return (
    <AccountLayout
      title="Payment methods"
      lede="Cards on file for renewals and checkout. We accept Visa, Mastercard, and American Express."
      actions={
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-navy-bolder text-white font-body font-bold text-[15px] px-5 py-3 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors"
        >
          <i className="fa-solid fa-plus text-[12px]" aria-hidden="true" />
          Add a card
        </button>
      }
    >
      <AccountCard>
        <DataTable caption="Saved payment methods" columns={['Card', 'Expires', 'Used for', '']}>
          {paymentMethods.map(m => (
            <tr key={m.last4} className="border-b border-[#e8eaed] last:border-b-0">
              <Td className="whitespace-nowrap">
                <span className="font-bold text-navy-bolder">{m.brand} ····&nbsp;{m.last4}</span>
                {m.isDefault && <span className="ml-2 inline-block align-middle"><Badge tone="info">Default</Badge></span>}
              </Td>
              <Td className="whitespace-nowrap">{m.expires}</Td>
              <Td>
                {m.usedFor.length > 0 ? (
                  <ul className="flex flex-col gap-0.5">
                    {m.usedFor.map(u => <li key={u}>{u}</li>)}
                  </ul>
                ) : (
                  '—'
                )}
              </Td>
              <Td>
                <div className="flex flex-wrap gap-3 justify-end">
                  <button type="button" className="font-body font-semibold text-[14px] text-link">
                    Edit
                  </button>
                  {!m.isDefault && (
                    <button type="button" className="font-body font-semibold text-[14px] text-[#c1121f] hover:underline">
                      Remove
                    </button>
                  )}
                </div>
              </Td>
            </tr>
          ))}
        </DataTable>
      </AccountCard>

      <div className="border border-l-4 border-[#bcd8f7] bg-[#ebf4ff] px-5 py-4">
        <p className="font-body font-bold text-[15px] text-navy-bolder mb-0.5">Removing a card on auto-renew</p>
        <p className="font-body text-[14px] text-neutral-subtle leading-relaxed">
          Your Visa ending 4242 covers two auto-renewals. Add a replacement before removing it, or those renewals
          will switch off.
        </p>
      </div>
    </AccountLayout>
  )
}
