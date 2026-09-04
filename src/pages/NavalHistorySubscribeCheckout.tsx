import { useId, useRef, useState } from 'react'
import Alert from '@/components/ui/Alert'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import CreditCardModal from '@/components/ui/CreditCardModal'
import { AcceptedCards } from '@/components/ui/CardBrandIcons'
import { Field, SelectInput, TextInput, CheckboxField } from '@/components/ui/FormField'
import { Toggle } from '@/components/ui/AccountCard'
import { countries, militaryStatuses, services, suffixes, usStates } from '@/data/essaySubmission'
import { makeOrderNumber } from '@/data/transactions'
import { ACCOUNT_ADDRESS, ACCOUNT_CARD, isTestLogin } from '@/data/testAccount'
import { ChoiceOption, SignedInAs, addressLines } from '@/components/ui/SavedOnFile'
import {
  FORMAT_LABELS,
  TERM_LABELS,
  offerFor,
  shipsPrint,
  type Format,
  type Region,
  type Term,
} from '@/data/navalHistorySubscription'

/**
 * Naval History subscription checkout — step 2 of the subscribe flow.
 *
 * The subscribe page used to send people to /membership/join, which sells
 * memberships and cannot take a Naval History subscription at all. This is the
 * step it should have been pointing at.
 *
 * Mirrors the other checkouts: account (create or sign in) with the service
 * fields, a delivery address only when print ships, a billing address whenever
 * one isn't otherwise collected, then payment. The gift, auto-renew, and coupon
 * controls come from the live subscription form.
 */

function Card({
  title,
  lede,
  children,
  invalid,
}: {
  title: string
  lede?: string
  children: React.ReactNode
  invalid?: boolean
}) {
  return (
    <div className={`border ${invalid ? 'border-red-600' : 'border-[#c4c9d4]'}`}>
      <div className="p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="font-headline text-[28px] text-[#1d2535] leading-[1.2]">{title}</h2>
          {lede && <p className="font-body text-[15px] text-[#4e576a] leading-[1.5]">{lede}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}

function AddressFields({
  street, setStreet, city, setCity, state, setState, zip, setZip, country, setCountry, err,
}: {
  street: string; setStreet: (v: string) => void
  city: string;   setCity:   (v: string) => void
  state: string;  setState:  (v: string) => void
  zip: string;    setZip:    (v: string) => void
  country: string; setCountry: (v: string) => void
  err: (v: string) => string | undefined
}) {
  const id = useId()
  return (
    <>
      <Field label="Street address" htmlFor={`${id}-street`} required error={err(street)}>
        <TextInput id={`${id}-street`} value={street} onChange={e => setStreet(e.target.value)} placeholder="123 Main Street" hasError={!!err(street)} />
      </Field>
      <div className="flex flex-col sm:flex-row gap-4">
        <Field label="City" htmlFor={`${id}-city`} required error={err(city)} className="flex-1">
          <TextInput id={`${id}-city`} value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" hasError={!!err(city)} />
        </Field>
        <Field label="State" htmlFor={`${id}-state`} required error={err(state)} className="sm:w-44">
          <SelectInput id={`${id}-state`} value={state} onChange={e => setState(e.target.value)} hasError={!!err(state)}>
            <option value="">Select…</option>
            {usStates.map(s => <option key={s} value={s}>{s}</option>)}
          </SelectInput>
        </Field>
        <Field label="ZIP / Postal code" htmlFor={`${id}-zip`} required error={err(zip)} className="sm:w-44">
          <TextInput id={`${id}-zip`} value={zip} onChange={e => setZip(e.target.value)} placeholder="21402" hasError={!!err(zip)} />
        </Field>
      </div>
      <Field label="Country" htmlFor={`${id}-country`} required error={err(country)}>
        <SelectInput id={`${id}-country`} value={country} onChange={e => setCountry(e.target.value)} hasError={!!err(country)}>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </SelectInput>
      </Field>
    </>
  )
}

export default function NavalHistorySubscribeCheckout() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const term   = (searchParams.get('term') === '3' ? '3' : '1') as Term
  const region = (searchParams.get('region') === 'international' ? 'international' : 'us') as Region
  const format = (searchParams.get('format') === 'digital' ? 'digital' : 'print') as Format

  const offer = offerFor(format, region, term)

  /*
   * A membership carried through from the upsell step. It puts the
   * subscription on the member rate and adds a second line to the summary.
   */
  const memPlan  = searchParams.get('memPlan')
  const memPrice = Number(searchParams.get('memPrice')) || 0
  const hasMembership = memPlan === 'digital' || memPlan === 'full'
  const memPlanLabel = memPlan === 'full' ? 'Full' : 'Digital'
  const subPrice = hasMembership ? offer.memberPrice : offer.price
  const orderTotal = subPrice + (hasMembership ? memPrice : 0)
  const isPrint = shipsPrint(format)

  const [tab, setTab] = useState<'create' | 'signin'>('create')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail]         = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [password, setPassword]   = useState('')
  const [phone, setPhone]         = useState('')

  const [service, setService]     = useState('')
  const [militaryStatus, setMilitaryStatus] = useState('')
  const [rank, setRank]           = useState('')
  const [suffix, setSuffix]       = useState('')

  const [street, setStreet] = useState('')
  const [city, setCity]     = useState('')
  const [state, setState]   = useState('')
  const [zip, setZip]       = useState('')
  const [country, setCountry] = useState('United States')

  const [billSame, setBillSame]     = useState(true)
  const [billStreet, setBillStreet] = useState('')
  const [billCity, setBillCity]     = useState('')
  const [billState, setBillState]   = useState('')
  const [billZip, setBillZip]       = useState('')
  const [billCountry, setBillCountry] = useState('United States')

  const [isGift, setIsGift]     = useState(false)
  const [autoRenew, setAutoRenew] = useState(true)
  const [coupon, setCoupon]     = useState('')

  const [cardModalOpen, setCardModalOpen] = useState(false)
  const [savedCardLast4, setSavedCardLast4] = useState<string | null>(null)

  const [showErrors, setShowErrors] = useState(false)
  const alertRef = useRef<HTMLDivElement>(null)

  /** Signing in applies the account's address and card; both stay replaceable. */
  const [signedInAs, setSignedInAs] = useState<string | null>(null)
  const [signInError, setSignInError] = useState(false)
  const [billingChoice, setBillingChoice] = useState<'file' | 'new'>('file')
  const [deliveryChoice, setDeliveryChoice] = useState<'file' | 'new'>('file')
  const [paymentChoice, setPaymentChoice] = useState<'file' | 'new'>('file')
  const signedIn = signedInAs !== null

  const applySignIn = () => {
    if (!isTestLogin(email, password)) { setSignInError(true); return }
    setSignInError(false)
    setSignedInAs(ACCOUNT_ADDRESS.name)
    setStreet(ACCOUNT_ADDRESS.lines[0]); setCity(ACCOUNT_ADDRESS.city)
    setState(ACCOUNT_ADDRESS.state);     setZip(ACCOUNT_ADDRESS.zip)
    setCountry(ACCOUNT_ADDRESS.country)
    setBillStreet(ACCOUNT_ADDRESS.lines[0]); setBillCity(ACCOUNT_ADDRESS.city)
    setBillState(ACCOUNT_ADDRESS.state);     setBillZip(ACCOUNT_ADDRESS.zip)
    setBillCountry(ACCOUNT_ADDRESS.country)
    setSavedCardLast4(ACCOUNT_CARD.last4)
    setBillingChoice('file'); setDeliveryChoice('file'); setPaymentChoice('file')
  }

  const signOut = () => {
    setSignedInAs(null)
    setStreet(''); setCity(''); setState(''); setZip('')
    setBillStreet(''); setBillCity(''); setBillState(''); setBillZip('')
    setSavedCardLast4(null)
    setBillingChoice('file'); setDeliveryChoice('file'); setPaymentChoice('file')
  }

  // A card needs an address to verify against; digital collects one purely for that.
  const needsBilling = !isPrint || !billSame

  const missing: string[] = []
  if (!signedIn && tab === 'create') {
    if (!firstName.trim())    missing.push('First name')
    if (!lastName.trim())     missing.push('Last name')
    if (!email.trim())        missing.push('Email address')
    if (!confirmEmail.trim()) missing.push('Confirm email address')
    if (!password.trim())     missing.push('Password')
    if (!service)             missing.push('Service')
    if (!militaryStatus)      missing.push('Military status')
    if (!rank.trim())         missing.push('Rank / title')
  } else if (!signedIn) {
    if (!email.trim())    missing.push('Email address')
    if (!password.trim()) missing.push('Password')
    missing.push('Sign in')
  }
  if (isPrint) {
    if (!street.trim()) missing.push('Delivery street address')
    if (!city.trim())   missing.push('Delivery city')
    if (!state)         missing.push('Delivery state')
    if (!zip.trim())    missing.push('Delivery ZIP')
  }
  if (needsBilling) {
    if (!billStreet.trim()) missing.push('Billing street address')
    if (!billCity.trim())   missing.push('Billing city')
    if (!billState)         missing.push('Billing state')
    if (!billZip.trim())    missing.push('Billing ZIP')
  }
  if (!savedCardLast4) missing.push('Credit card payment')

  const err = (v: string) => (showErrors && !v.trim() ? 'Required.' : undefined)

  const handleComplete = () => {
    if (missing.length > 0) {
      setShowErrors(true)
      setTimeout(() => alertRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      return
    }
    setShowErrors(false)
    const params = new URLSearchParams({
      term, region, format,
      price: String(subPrice),
      order: makeOrderNumber('NHS'),
      autoRenew: String(autoRenew),
    })
    if (hasMembership) {
      params.set('memPlan', memPlan)
      params.set('memPrice', String(memPrice))
    }
    if (isGift) params.set('gift', 'true')
    if (email.trim()) params.set('email', email.trim())
    if (firstName.trim()) params.set('name', firstName.trim())
    if (savedCardLast4) params.set('card', savedCardLast4)
    navigate(`/naval-history/subscribe/confirmation?${params.toString()}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="bg-[#ebf4ff] py-20">
          <div className="container-site">
            <h1 className="font-headline text-[64px] text-[#1d2535] leading-[1.1] text-center">
              Checkout
            </h1>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="container-site">
            <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

              {/* ── Left: forms ── */}
              <div className="flex-1 min-w-0 flex flex-col gap-8">

                {/* Only mounted when there is something to say — an empty
                    wrapper still consumes the column's gap and knocked the
                    first card out of line with the order summary. The ref
                    attaches on mount, before the scroll fires. */}
                {showErrors && missing.length > 0 && (
                  <div ref={alertRef}>
                    <Alert variant="danger" title="Please complete the required fields" className="scroll-mt-28">
                      The following {missing.length === 1 ? 'item is' : 'items are'} required: {missing.join(', ')}.
                    </Alert>
                  </div>
                )}

                <Card title="Account Information">
                  <div className="flex">
                    {(['create', 'signin'] as const).map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTab(t)}
                        className={`relative flex-1 py-4 font-body font-bold text-[17px] transition-colors ${
                          tab === t ? 'bg-[#cde4f8] text-[#1d2535]' : 'bg-[#ebf4ff] text-[#1d2535] hover:text-[#023e7d]'
                        }`}
                      >
                        {t === 'create' ? 'Create an account' : 'Sign in'}
                        <span className={`absolute bottom-0 left-0 right-0 h-[3px] ${tab === t ? 'bg-[#023e7d]' : 'bg-[#c4c9d4]'}`} />
                      </button>
                    ))}
                  </div>

                  {tab === 'create' ? (
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Field label="First name" htmlFor="nhs-first" required error={err(firstName)} className="flex-1">
                          <TextInput id="nhs-first" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name" hasError={!!err(firstName)} />
                        </Field>
                        <Field label="Last name" htmlFor="nhs-last" required error={err(lastName)} className="flex-1">
                          <TextInput id="nhs-last" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" hasError={!!err(lastName)} />
                        </Field>
                      </div>
                      <Field label="Email address" htmlFor="nhs-email" required error={err(email)}>
                        <TextInput id="nhs-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" hasError={!!err(email)} />
                      </Field>
                      <Field label="Confirm email address" htmlFor="nhs-email2" required error={err(confirmEmail)}>
                        <TextInput id="nhs-email2" type="email" value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} placeholder="your@email.com" hasError={!!err(confirmEmail)} />
                      </Field>
                      <Field label="Password" htmlFor="nhs-pass" required error={err(password)}>
                        <TextInput id="nhs-pass" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} hasError={!!err(password)} />
                      </Field>
                      <Field label="Phone (optional)" htmlFor="nhs-phone">
                        <TextInput id="nhs-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(555) 555-1234" />
                      </Field>

                      <div className="border-t border-[#c4c9d4] pt-5 flex flex-col gap-5">
                        <p className="font-body font-bold text-[12px] uppercase tracking-[0.08em] text-[#4e576a]">
                          Service Information
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Field label="Service" htmlFor="nhs-service" required error={showErrors && !service ? 'Required.' : undefined} className="flex-1">
                            <SelectInput id="nhs-service" value={service} onChange={e => setService(e.target.value)} hasError={showErrors && !service}>
                              <option value="">— Select —</option>
                              {services.map(s => <option key={s} value={s}>{s}</option>)}
                            </SelectInput>
                          </Field>
                          <Field label="Military status" htmlFor="nhs-status" required error={showErrors && !militaryStatus ? 'Required.' : undefined} className="flex-1">
                            <SelectInput id="nhs-status" value={militaryStatus} onChange={e => setMilitaryStatus(e.target.value)} hasError={showErrors && !militaryStatus}>
                              <option value="">— Select —</option>
                              {militaryStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                            </SelectInput>
                          </Field>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Field label="Rank / title" htmlFor="nhs-rank" required error={err(rank)} className="flex-1">
                            <TextInput id="nhs-rank" value={rank} onChange={e => setRank(e.target.value)} placeholder="Enter rank or title" hasError={!!err(rank)} />
                          </Field>
                          <Field label="Suffix" htmlFor="nhs-suffix" className="sm:w-52">
                            <SelectInput id="nhs-suffix" value={suffix} onChange={e => setSuffix(e.target.value)}>
                              <option value="">— None —</option>
                              {suffixes.map(s => <option key={s} value={s}>{s}</option>)}
                            </SelectInput>
                          </Field>
                        </div>
                      </div>
                    </div>
                  ) : signedIn ? (
                    <SignedInAs email={email.trim()} onSignOut={signOut} />
                  ) : (
                    <div className="flex flex-col gap-5">
                      <Field label="Email address" htmlFor="nhs-si-email" required error={err(email)}>
                        <TextInput id="nhs-si-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" hasError={!!err(email)} />
                      </Field>
                      <Field label="Password" htmlFor="nhs-si-pass" required error={err(password)}>
                        <TextInput id="nhs-si-pass" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} hasError={!!err(password)} />
                      </Field>
                      {signInError && (
                        <p role="alert" className="font-body text-[14px] text-[#c1121f]">
                          That email and password don&rsquo;t match an account.
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          type="button"
                          onClick={applySignIn}
                          className="bg-[#002b5c] text-white font-body font-bold text-[16px] px-6 py-3 border border-[#002b5c] hover:bg-navy-bright hover:border-navy-bright transition-colors"
                        >
                          Sign in
                        </button>
                        <a href="/login/forgot" className="font-body text-[15px] w-fit text-link">
                          Forgot your password?
                        </a>
                      </div>
                      <p className="font-body text-[14px] text-neutral-subtle">
                        Members get the member rate on this subscription automatically once signed in.
                      </p>
                    </div>
                  )}
                </Card>

                {isPrint && (
                  <Card
                    title="Delivery Address"
                    lede={`Required for your print edition of Naval History. ${
                      region === 'international' ? 'International rates include shipping.' : ''
                    }`.trim()}
                  >
                    {signedIn ? (
                      <div className="flex flex-col gap-3">
                        <ChoiceOption
                          name="nhs-delivery" value="file"
                          checked={deliveryChoice === 'file'}
                          onSelect={() => setDeliveryChoice('file')}
                          title="Use the address on file"
                          detail={addressLines(ACCOUNT_ADDRESS)}
                        />
                        <ChoiceOption
                          name="nhs-delivery" value="new"
                          checked={deliveryChoice === 'new'}
                          onSelect={() => setDeliveryChoice('new')}
                          title="Use a different address"
                        >
                          <AddressFields
                            street={street} setStreet={setStreet}
                            city={city} setCity={setCity}
                            state={state} setState={setState}
                            zip={zip} setZip={setZip}
                            country={country} setCountry={setCountry}
                            err={err}
                          />
                        </ChoiceOption>
                      </div>
                    ) : (
                      <AddressFields
                        street={street} setStreet={setStreet}
                        city={city} setCity={setCity}
                        state={state} setState={setState}
                        zip={zip} setZip={setZip}
                        country={country} setCountry={setCountry}
                        err={err}
                      />
                    )}
                  </Card>
                )}

                {needsBilling && (
                  <Card
                    title="Billing Address"
                    lede={
                      isPrint
                        ? 'The address on file with your card issuer.'
                        : 'The address on file with your card issuer. Required to verify your payment — nothing is mailed to it.'
                    }
                  >
                    {signedIn ? (
                      <div className="flex flex-col gap-3">
                        <ChoiceOption
                          name="nhs-billing" value="file"
                          checked={billingChoice === 'file'}
                          onSelect={() => setBillingChoice('file')}
                          title="Use the address on file"
                          detail={addressLines(ACCOUNT_ADDRESS)}
                        />
                        <ChoiceOption
                          name="nhs-billing" value="new"
                          checked={billingChoice === 'new'}
                          onSelect={() => setBillingChoice('new')}
                          title="Use a different address"
                        >
                          <AddressFields
                            street={billStreet} setStreet={setBillStreet}
                            city={billCity} setCity={setBillCity}
                            state={billState} setState={setBillState}
                            zip={billZip} setZip={setBillZip}
                            country={billCountry} setCountry={setBillCountry}
                            err={err}
                          />
                        </ChoiceOption>
                      </div>
                    ) : (
                      <AddressFields
                        street={billStreet} setStreet={setBillStreet}
                        city={billCity} setCity={setBillCity}
                        state={billState} setState={setBillState}
                        zip={billZip} setZip={setBillZip}
                        country={billCountry} setCountry={setBillCountry}
                        err={err}
                      />
                    )}
                  </Card>
                )}

                <div className={`border ${showErrors && !savedCardLast4 ? 'border-red-600' : 'border-[#c4c9d4]'}`}>
                  <div className="p-6 flex flex-col gap-6">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-headline text-[28px] text-[#1d2535] leading-[1.2]">Payment Details</h2>
                      <AcceptedCards />
                    </div>

                    {signedIn ? (
                      <div className="flex flex-col gap-3">
                        <ChoiceOption
                          name="nhs-payment" value="file"
                          checked={paymentChoice === 'file'}
                          onSelect={() => { setPaymentChoice('file'); setSavedCardLast4(ACCOUNT_CARD.last4) }}
                          title={`${ACCOUNT_CARD.brand} ····\u00a0${ACCOUNT_CARD.last4}`}
                          detail={`Card on file · expires ${ACCOUNT_CARD.expires}`}
                        />
                        <ChoiceOption
                          name="nhs-payment" value="new"
                          checked={paymentChoice === 'new'}
                          onSelect={() => { setPaymentChoice('new'); setSavedCardLast4(null) }}
                          title="Use a new card"
                          detail={
                            paymentChoice === 'new' && savedCardLast4
                              ? `Card ending in ${savedCardLast4} added`
                              : undefined
                          }
                        >
                          <Button type="button" variant="primary" size="lg" className="self-start" onClick={() => setCardModalOpen(true)}>
                            {savedCardLast4 ? 'Change credit card' : 'Add new credit card'}
                          </Button>
                        </ChoiceOption>
                      </div>
                    ) : savedCardLast4 ? (
                      <p className="font-body text-[15px] text-[#1d2535]">
                        The credit card ending in <span className="font-bold">{savedCardLast4}</span> was successfully added.
                      </p>
                    ) : null}

                    <div className="flex flex-col items-start gap-4">
                      {!signedIn && (
                        <Button type="button" variant="primary" size="lg" onClick={() => setCardModalOpen(true)}>
                          {savedCardLast4 ? 'Change credit card' : 'Add new credit card'}
                        </Button>
                      )}

                      {isPrint && (
                        <CheckboxField id="nhs-billsame" checked={billSame} onChange={setBillSame}>
                          My billing address is the same as my delivery address.
                        </CheckboxField>
                      )}
                    </div>
                  </div>
                </div>

                <CreditCardModal
                  open={cardModalOpen}
                  onClose={() => setCardModalOpen(false)}
                  onSuccess={last4 => { setSavedCardLast4(last4); setCardModalOpen(false) }}
                />
              </div>

              {/* ── Right: summary ── */}
              <div className="w-full lg:w-[360px] lg:flex-shrink-0 lg:sticky top-8">
                <div className="border border-[#c4c9d4]">
                  <div className="p-6 flex flex-col gap-6">
                    <h2 className="font-headline text-[24px] text-[#1d2535] leading-[1.2]">Order summary</h2>

                    <div className="flex flex-col">
                      {[
                        ['Publication', 'Naval History'],
                        ['Format', FORMAT_LABELS[format]],
                        ['Term', TERM_LABELS[term]],
                        ['Region', region === 'us' ? 'United States' : 'International'],
                        ...(hasMembership
                          ? [['Membership', `${memPlanLabel} — $${memPrice}/yr`]]
                          : []),
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between items-baseline gap-4 py-3 border-b border-[#e8eaed]">
                          <span className="font-body font-bold text-[15px] text-[#1d2535]">{label}</span>
                          <span className="font-body text-[15px] text-[#4e576a] text-right">{value}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-baseline gap-4 pt-4 mt-1">
                        <span className="font-body font-bold text-[17px] text-[#1d2535]">Total</span>
                        <span className="font-headline text-[30px] text-[#023e7d]">${orderTotal}</span>
                      </div>
                      <p className="font-body text-[13px] text-neutral-subtle leading-[1.5] mt-2">
                        {hasMembership
                          ? `Member pricing applied — subscription $${subPrice}, membership $${memPrice}.`
                          : `Members pay $${offer.memberPrice}. Sign in above to apply member pricing.`}
                      </p>
                    </div>

                    <div className="h-px bg-[#c4c9d4]" />

                    <Field label="Coupon code" htmlFor="nhs-coupon">
                      <TextInput id="nhs-coupon" value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Optional" />
                    </Field>

                    <CheckboxField id="nhs-gift" checked={isGift} onChange={setIsGift}>
                      This subscription is a gift for another person
                    </CheckboxField>

                    <div className="flex items-start gap-3">
                      <Toggle on={autoRenew} label="Automatically renew subscription" onChange={() => setAutoRenew(!autoRenew)} />
                      <p className="font-body text-[14px] text-[#4e576a] leading-[1.5]">
                        {autoRenew
                          ? `Automatically renews at the end of your ${TERM_LABELS[term]} term.`
                          : 'We’ll email you before your subscription ends.'}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleComplete}
                      className="w-full bg-[#002b5c] text-white font-body font-extrabold text-[18px] py-4 px-6 hover:bg-navy-bright transition-colors"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
