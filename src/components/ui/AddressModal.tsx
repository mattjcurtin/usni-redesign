import { useEffect, useState } from 'react'
import Modal from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Field, SelectInput, TextInput, CheckboxField } from '@/components/ui/FormField'
import { countries, usStates } from '@/data/essaySubmission'
import type { AddressRecord } from '@/data/account'

const LABELS = ['Home', 'Office', 'Other']

/**
 * Add an address from the account. Fields match the checkout address form so a
 * saved address can satisfy delivery and billing without a second pass, and the
 * State control uses the same full-name vocabulary those forms do.
 */
export default function AddressModal({
  open,
  onClose,
  onSave,
}: {
  open: boolean
  onClose: () => void
  onSave: (address: AddressRecord) => void
}) {
  const [label, setLabel]     = useState('Home')
  const [name, setName]       = useState('')
  const [street, setStreet]   = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity]       = useState('')
  const [state, setState]     = useState('')
  const [zip, setZip]         = useState('')
  const [country, setCountry] = useState('United States')
  const [makeDefault, setMakeDefault] = useState(false)
  const [showErrors, setShowErrors]   = useState(false)

  // A reopened modal should be empty, not still holding the last attempt.
  useEffect(() => {
    if (open) return
    setLabel('Home'); setName(''); setStreet(''); setStreet2('')
    setCity(''); setState(''); setZip(''); setCountry('United States')
    setMakeDefault(false); setShowErrors(false)
  }, [open])

  const err = (v: string) => (showErrors && !v.trim() ? 'Required.' : undefined)
  const valid = [name, street, city, state, zip, country].every(v => v.trim() !== '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) { setShowErrors(true); return }
    onSave({
      label,
      isDefault: makeDefault,
      name: name.trim(),
      lines: [street.trim(), street2.trim()].filter(Boolean),
      city: city.trim(),
      state,
      zip: zip.trim(),
      country,
    })
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Add an address" maxWidth="600px">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <Field label="Address label" htmlFor="addr-label">
          <SelectInput id="addr-label" value={label} onChange={e => setLabel(e.target.value)}>
            {LABELS.map(l => <option key={l} value={l}>{l}</option>)}
          </SelectInput>
        </Field>

        <Field label="Full name" htmlFor="addr-name" required error={err(name)}>
          <TextInput id="addr-name" value={name} onChange={e => setName(e.target.value)} placeholder="First and last name" hasError={!!err(name)} />
        </Field>

        <Field label="Street address" htmlFor="addr-street" required error={err(street)}>
          <TextInput id="addr-street" value={street} onChange={e => setStreet(e.target.value)} placeholder="123 Main Street" hasError={!!err(street)} />
        </Field>

        <Field label="Apartment, suite, building (optional)" htmlFor="addr-street2">
          <TextInput id="addr-street2" value={street2} onChange={e => setStreet2(e.target.value)} placeholder="Apt 4B" />
        </Field>

        <div className="flex flex-col sm:flex-row gap-4">
          <Field label="City" htmlFor="addr-city" required error={err(city)} className="flex-1">
            <TextInput id="addr-city" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" hasError={!!err(city)} />
          </Field>
          <Field label="State" htmlFor="addr-state" required error={showErrors && !state ? 'Required.' : undefined} className="sm:w-40">
            <SelectInput id="addr-state" value={state} onChange={e => setState(e.target.value)} hasError={showErrors && !state}>
              <option value="">Select…</option>
              {usStates.map(s => <option key={s} value={s}>{s}</option>)}
            </SelectInput>
          </Field>
          <Field label="ZIP code" htmlFor="addr-zip" required error={err(zip)} className="sm:w-36">
            <TextInput id="addr-zip" value={zip} onChange={e => setZip(e.target.value)} placeholder="21402" hasError={!!err(zip)} />
          </Field>
        </div>

        <Field label="Country" htmlFor="addr-country" required error={err(country)}>
          <SelectInput id="addr-country" value={country} onChange={e => setCountry(e.target.value)} hasError={!!err(country)}>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </SelectInput>
        </Field>

        <CheckboxField id="addr-default" checked={makeDefault} onChange={setMakeDefault}>
          Make this my default address
        </CheckboxField>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button type="submit" variant="navy" size="lg">Save address</Button>
          <button
            type="button"
            onClick={onClose}
            className="font-body font-bold text-[16px] text-navy-bolder px-6 py-3 border border-navy-bolder hover:bg-navy-bolder hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  )
}
