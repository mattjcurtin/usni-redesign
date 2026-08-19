import AccountLayout from '@/components/layout/AccountLayout'
import { AccountCard, EmptyState } from '@/components/ui/AccountCard'
import { entitlements } from '@/data/account'

/**
 * API keys. Serves a small number of `api_subscriber` accounts, so it sits last in
 * the nav and shows a gated state rather than pretending every member has keys.
 */
export default function AccountApiKeys() {
  const hasApi = entitlements.find(e => e.role === 'api_subscriber')?.active ?? false

  return (
    <AccountLayout
      title="API keys"
      lede="Programmatic access to Naval Institute content for institutional and developer subscribers."
    >
      <AccountCard>
        {hasApi ? (
          <p className="font-body text-[15px] text-neutral-subtle">
            Your keys would be listed here, with the ability to rotate or revoke each one.
          </p>
        ) : (
          <EmptyState
            icon="fa-key"
            title="API access isn't on your plan"
            action={
              <a
                href="/proceedings/contact"
                className="inline-flex items-center justify-center font-body font-bold text-[15px] text-navy-bolder px-5 py-3 border border-navy-bolder hover:bg-navy-bolder hover:text-white transition-colors"
              >
                Contact us about API access
              </a>
            }
          >
            API keys are available to institutional subscribers and developers working with Naval Institute content.
          </EmptyState>
        )}
      </AccountCard>
    </AccountLayout>
  )
}
