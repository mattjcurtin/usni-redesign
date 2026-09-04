import DesignSystemLayout from '@/components/design-system/DesignSystemLayout'
import DocSection from '@/components/design-system/DocSection'
import DocLabel from '@/components/design-system/DocLabel'
import CodeBlock from '@/components/design-system/CodeBlock'
import PropsTable from '@/components/design-system/PropsTable'
import Alert, { type AlertVariant } from '@/components/ui/Alert'

const VARIANTS: { variant: AlertVariant; accent: string; bg: string; title: string; body: string; use: string }[] = [
  {
    variant: 'success',
    accent: '#0A5C2E',
    bg: '#E6F7ED',
    title: 'You’ve been logged out',
    body: 'Don’t worry, you can log back in below.',
    use: 'An action completed — saved preferences, a submitted form, a signed-out session.',
  },
  {
    variant: 'warning',
    accent: '#FFAA00',
    bg: '#FFF8D6',
    title: 'Membership information is temporarily unavailable',
    body: 'Please contact Member Services at 410-268-6110 with any membership questions.',
    use: 'Something needs attention but nothing has failed — a degraded service, an expiring term.',
  },
  {
    variant: 'info',
    accent: '#0466C8',
    bg: '#EBF4FF',
    title: 'Response times',
    body: 'Simple requests are typically fulfilled within one week.',
    use: 'Context the reader benefits from, with no action implied.',
  },
  {
    variant: 'danger',
    accent: '#C1121F',
    bg: '#FEF6F6',
    title: 'Please complete the required fields',
    body: 'The following items are required: Email address, Rank/Title.',
    use: 'A failure or a block — validation errors, a declined payment.',
  },
]

export default function Alerts() {
  return (
    <DesignSystemLayout breadcrumb="Alerts">
      <div className="max-w-container mx-auto px-6 lg:px-8 py-16">
        <div className="mb-14 max-w-[760px]">
          <h1 className="font-headline text-5xl text-navy-bolder leading-[1.1] mb-5">Alerts</h1>
          <p className="font-body text-lg text-neutral-subtle leading-relaxed">
            Status messages. One component, four variants — a tinted panel with a 4px accent bar on
            the leading edge, an icon, an optional bold title, and body copy. Hard edges, matching
            every other surface in the system.
          </p>
        </div>

        <DocSection title="The four variants">
          <div className="flex flex-col gap-8">
            {VARIANTS.map(v => (
              <div key={v.variant}>
                <DocLabel>
                  {v.variant} — accent {v.accent} on {v.bg}
                </DocLabel>
                <Alert variant={v.variant} title={v.title}>
                  {v.body}
                </Alert>
                <p className="font-body text-sm text-neutral-subtle leading-relaxed mt-3">
                  <span className="font-bold text-navy-bolder">When to use: </span>
                  {v.use}
                </p>
              </div>
            ))}
          </div>
        </DocSection>

        <DocSection title="Without a title">
          <p className="font-body text-base text-neutral-subtle leading-relaxed mb-6 max-w-[720px]">
            Omit <code className="font-mono text-sm">title</code> for a single-line alert. The icon
            stays aligned to the first line of copy.
          </p>
          <div className="flex flex-col gap-4">
            <Alert variant="info">
              Saved reading doesn’t count against the free-article meter.
            </Alert>
            <Alert variant="warning" icon={false}>
              Set <code className="font-mono text-sm">icon={'{false}'}</code> to drop the leading icon.
            </Alert>
          </div>
        </DocSection>

        <DocSection title="With an action">
          <p className="font-body text-sm text-neutral-subtle leading-relaxed mb-6 max-w-2xl">
            Pass <code className="font-mono text-sm">action</code> to put a control on the trailing
            edge. Used on the wishlist, where removing a book happens without a confirm, so the
            acknowledgement carries the way back.
          </p>
          <div className="mb-6">
            <Alert
              variant="success"
              title="Removed The Bluejacket&rsquo;s Manual from your wishlist"
              action={
                <button
                  type="button"
                  className="bg-white border border-navy-bolder text-navy-bolder font-body font-bold text-[15px] px-5 py-2.5 hover:bg-navy-bright hover:text-white hover:border-navy-bright transition-colors"
                >
                  Undo
                </button>
              }
            />
          </div>
          <CodeBlock code={`<Alert
  variant="success"
  title="Removed The Bluejacket's Manual from your wishlist"
  action={<button onClick={undoRemove}>Undo</button>}
/>`} />
        </DocSection>

        <DocSection title="Usage">
          <CodeBlock
            code={`import Alert from '@/components/ui/Alert'

<Alert variant="success" title="Changes saved">
  Prototype only — nothing is persisted between page loads.
</Alert>

// Single line, no title
<Alert variant="danger">Your card was declined.</Alert>`}
          />
        </DocSection>

        <DocSection title="Accessibility">
          <p className="font-body text-base text-neutral-subtle leading-relaxed max-w-[760px] mb-6">
            The <code className="font-mono text-sm">role</code> is chosen by variant so alerts are
            announced correctly without the caller having to think about it:{' '}
            <code className="font-mono text-sm">danger</code> gets{' '}
            <code className="font-mono text-sm">role="alert"</code>, which interrupts a screen reader,
            and the other three get <code className="font-mono text-sm">role="status"</code>, which is
            announced politely. Pass <code className="font-mono text-sm">role</code> to override.
            Icons are <code className="font-mono text-sm">aria-hidden</code> — colour and icon never
            carry meaning on their own, so the copy always states the status.
          </p>
          <PropsTable
            rows={[
              { name: 'variant', type: "'success' | 'warning' | 'info' | 'danger'", default: "'info'", description: 'Palette and icon.' },
              { name: 'title', type: 'ReactNode', description: 'Bold first line. Omit for a single-line alert.' },
              { name: 'children', type: 'ReactNode', description: 'Body copy.' },
              { name: 'icon', type: 'boolean', default: 'true', description: 'Set false to drop the leading icon.' },
              { name: 'action', type: 'ReactNode', description: 'Control on the trailing edge — an Undo for a destructive action taken without a confirm, for instance. Wraps below the copy on narrow screens.' },
              { name: 'role', type: "'alert' | 'status'", default: 'by variant', description: 'Override the announced role.' },
              { name: 'className', type: 'string', description: 'Extra classes — spacing and max-width live here.' },
              { name: 'id', type: 'string', description: 'For aria-describedby wiring.' },
            ]}
          />
        </DocSection>
      </div>
    </DesignSystemLayout>
  )
}
