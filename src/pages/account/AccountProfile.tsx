import { useState } from 'react'
import AccountLayout from '@/components/layout/AccountLayout'
import { AccountCard } from '@/components/ui/AccountCard'
import { Field, SelectInput, TextInput, CheckboxField } from '@/components/ui/FormField'
import { countries, militaryStatuses, services, suffixes } from '@/data/essaySubmission'
import { member } from '@/data/account'

/**
 * Profile / Edit Account.
 *
 * The live form is one undivided Drupal column that also exposes account status,
 * every role checkbox, and URL alias settings — none of which belong to a member.
 * Same member-owned fields here, grouped into what you are, how we reach you, and
 * how you sign in.
 */
export default function AccountProfile() {
  const [form, setForm] = useState({
    salutation: member.salutation,
    firstName: member.firstName,
    lastName: member.lastName,
    suffix: member.suffix,
    service: member.service,
    militaryStatus: member.militaryStatus,
    rank: member.rank,
    gradYear: member.graduationYear,
    email: member.email,
    phone: member.phone,
    country: 'United States',
    acceptsTexts: member.acceptsTexts,
  })
  const [saved, setSaved] = useState(false)

  const set = (k: keyof typeof form, v: string | boolean) => {
    setForm(prev => ({ ...prev, [k]: v }))
    setSaved(false)
  }

  return (
    <AccountLayout
      title="Profile"
      lede="Your name, service record, and how the Institute reaches you."
    >
      {saved && (
        <div role="alert" className="border border-l-4 border-[#0a5c2e] bg-[#e6f7ed] px-5 py-4">
          <p className="font-body font-bold text-[15px] text-navy-bolder">Changes saved</p>
          <p className="font-body text-[14px] text-neutral-subtle">
            Prototype only — nothing is persisted between page loads.
          </p>
        </div>
      )}

      <form
        onSubmit={e => { e.preventDefault(); setSaved(true) }}
        className="flex flex-col gap-8"
      >
        <AccountCard title="Name and service">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr_1fr_110px] gap-4">
              <Field label="Title" htmlFor="ac-salutation">
                <SelectInput id="ac-salutation" value={form.salutation} onChange={e => set('salutation', e.target.value)}>
                  {['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.'].map(s => <option key={s}>{s}</option>)}
                </SelectInput>
              </Field>
              <Field label="First name" htmlFor="ac-first" required>
                <TextInput id="ac-first" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
              </Field>
              <Field label="Last name" htmlFor="ac-last" required>
                <TextInput id="ac-last" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
              </Field>
              <Field label="Suffix" htmlFor="ac-suffix">
                <SelectInput id="ac-suffix" value={form.suffix} onChange={e => set('suffix', e.target.value)}>
                  <option value="">—</option>
                  {suffixes.map(s => <option key={s}>{s}</option>)}
                </SelectInput>
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Service" htmlFor="ac-service">
                <SelectInput id="ac-service" value={form.service} onChange={e => set('service', e.target.value)}>
                  <option value="">Select…</option>
                  {services.map(s => <option key={s}>{s}</option>)}
                </SelectInput>
              </Field>
              <Field label="Military status" htmlFor="ac-status">
                <SelectInput id="ac-status" value={form.militaryStatus} onChange={e => set('militaryStatus', e.target.value)}>
                  <option value="">Select…</option>
                  {militaryStatuses.map(s => <option key={s}>{s}</option>)}
                </SelectInput>
              </Field>
              <Field label="Rank / title" htmlFor="ac-rank">
                <TextInput id="ac-rank" value={form.rank} onChange={e => set('rank', e.target.value)} />
              </Field>
              <Field label="Graduation year" htmlFor="ac-grad">
                <TextInput id="ac-grad" inputMode="numeric" value={form.gradYear} onChange={e => set('gradYear', e.target.value)} />
              </Field>
            </div>
          </div>
        </AccountCard>

        <AccountCard title="How we reach you">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Email address"
                htmlFor="ac-email"
                required
                help="Also your sign-in address and where receipts are sent."
              >
                <TextInput id="ac-email" type="email" value={form.email} onChange={e => set('email', e.target.value)} />
              </Field>
              <Field label="Phone" htmlFor="ac-phone">
                <TextInput id="ac-phone" type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} />
              </Field>
            </div>
            <Field label="Country" htmlFor="ac-country">
              <SelectInput id="ac-country" value={form.country} onChange={e => set('country', e.target.value)}>
                {countries.map(c => <option key={c}>{c}</option>)}
              </SelectInput>
            </Field>
            <CheckboxField
              id="ac-texts"
              checked={form.acceptsTexts}
              onChange={checked => set('acceptsTexts', checked)}
            >
              Accept text messages
              <span className="block font-body text-[14px] text-neutral-subtle">
                Event reminders and time-sensitive membership notices only.
              </span>
            </CheckboxField>
            <p className="font-body text-[14px] text-neutral-subtle leading-relaxed">
              Mailing addresses live under{' '}
              <a href="/account/addresses" className="text-link">Addresses</a>, so a
              change of address doesn’t mean re-saving this whole form.
            </p>
          </div>
        </AccountCard>

        <AccountCard title="Password">
          <div className="flex flex-col gap-5">
            <p className="font-body text-[15px] text-neutral-subtle leading-relaxed">
              Leave these blank to keep your current password.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Field label="Current password" htmlFor="ac-cur">
                <TextInput id="ac-cur" type="password" autoComplete="current-password" />
              </Field>
              <Field label="New password" htmlFor="ac-new">
                <TextInput id="ac-new" type="password" autoComplete="new-password" />
              </Field>
              <Field label="Confirm new password" htmlFor="ac-confirm">
                <TextInput id="ac-confirm" type="password" autoComplete="new-password" />
              </Field>
            </div>
          </div>
        </AccountCard>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-navy-bolder text-white font-body font-bold text-base px-6 py-3.5 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors"
          >
            Save changes
          </button>
          <a
            href="/account"
            className="inline-flex items-center justify-center font-body font-bold text-base text-navy-bolder px-6 py-3.5 border border-navy-bolder hover:bg-navy-bolder hover:text-white transition-colors"
          >
            Cancel
          </a>
        </div>
      </form>
    </AccountLayout>
  )
}
