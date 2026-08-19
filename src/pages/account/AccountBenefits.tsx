import AccountLayout from '@/components/layout/AccountLayout'
import { AccountCard } from '@/components/ui/AccountCard'
import { partnerDiscounts } from '@/data/account'

/**
 * Partner discounts. On the live site this is a content node at /partners that
 * happens to be linked from the account menu; here it stays in the account shell
 * but is grouped under benefits rather than mixed in with the member's own records.
 */
export default function AccountBenefits() {
  return (
    <AccountLayout
      title="Partner discounts"
      lede="Offers negotiated for the membership community. Your member number is the credential."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partnerDiscounts.map(p => (
          <AccountCard key={p.name} title={p.name}>
            <p className="font-headline text-[20px] text-[#023e7d] leading-snug mb-2">{p.offer}</p>
            <p className="font-body text-[15px] text-neutral-subtle leading-relaxed">{p.detail}</p>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-[#e8eaed]">
              <p className="font-body text-[13px] text-neutral-subtle">
                Code{' '}
                <span className="font-mono font-bold text-navy-bolder border border-dashed border-[#c4c9d4] bg-white px-2 py-0.5">
                  {p.code}
                </span>
              </p>
              <button
                type="button"
                className="font-body font-semibold text-[14px] text-link"
              >
                Reserve and save
              </button>
            </div>
          </AccountCard>
        ))}
      </div>

      <p className="font-body text-[14px] text-neutral-subtle leading-relaxed max-w-[640px]">
        Partner offers are provided by the named companies, not by the Naval Institute, and their terms can change.
      </p>
    </AccountLayout>
  )
}
