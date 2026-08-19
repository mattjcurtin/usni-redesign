import { useMemo, useRef, useState } from 'react'
import {
  Field,
  Fieldset,
  TextInput,
  SelectInput,
  TextArea,
  CheckboxField,
} from '@/components/ui/FormField'
import {
  countries,
  usStates,
  services,
  militaryStatuses,
  suffixes,
  ranksForService,
  AUTHOR_BIO_MAX,
  ESSAY_TITLE_MAX,
  FILE_MAX_MB,
  ALLOWED_FILE_EXT,
} from '@/data/essaySubmission'
import { contestFullTitle, isPhotoEntry, type EssayContest } from '@/data/essayContests'

/** Upload rules per entry kind. Photos come in batches; an essay is one file. */
const PHOTO_FILE_EXT = '.jpg, .jpeg, .tif, .tiff'
const PHOTO_ACCEPT = '.jpg,.jpeg,.tif,.tiff,image/jpeg,image/tiff'
const PHOTO_MAX_FILES = 5

/**
 * Essay submission form, shared by every contest.
 *
 * The live site runs a separate form per contest with the same fields, and
 * validates almost nothing client-side — notably it asks the author to type
 * their word count but never checks it against the contest maximum, so an
 * over-length essay is only caught after a human reads it. This form takes the
 * contest as a prop and enforces its rules at the point of entry.
 */

interface Person {
  email: string
  otherEmail: string
  firstName: string
  middleInitial: string
  lastName: string
  country: string
  address1: string
  address2: string
  address3: string
  city: string
  state: string
  zip: string
  service: string
  militaryStatus: string
  rank: string
  suffix: string
  bio: string
  phone: string
}

const emptyPerson: Person = {
  email: '',
  otherEmail: '',
  firstName: '',
  middleInitial: '',
  lastName: '',
  country: 'United States',
  address1: '',
  address2: '',
  address3: '',
  city: '',
  state: '',
  zip: '',
  service: '',
  militaryStatus: '',
  rank: '',
  suffix: '',
  bio: '',
  phone: '',
}

type Errors = Record<string, string>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function PersonFields({
  person,
  set,
  errors,
  prefix,
  /** Postal address is only collected for the primary author, as on the live form. */
  withAddress,
  /** Second person, so copy addressed to "you" has to shift to "them". */
  isPrimary = true,
}: {
  person: Person
  set: (patch: Partial<Person>) => void
  errors: Errors
  prefix: string
  withAddress: boolean
  isPrimary?: boolean
}) {
  const id = (name: string) => `${prefix}-${name}`
  const err = (name: string) => errors[`${prefix}.${name}`]
  const rankOptions = useMemo(() => ranksForService(person.service), [person.service])
  const isUS = person.country === 'United States'

  return (
    <>
      <Field label="Email" htmlFor={id('email')} required error={err('email')}>
        <TextInput
          id={id('email')}
          type="email"
          autoComplete="email"
          value={person.email}
          hasError={!!err('email')}
          onChange={(e) => set({ email: e.target.value })}
        />
      </Field>

      <Field
        label="Other Email"
        htmlFor={id('otherEmail')}
        help={
          isPrimary
            ? 'An alternate address we can reach you at if your primary bounces.'
            : 'An alternate address for the co-author if their primary bounces.'
        }
        error={err('otherEmail')}
      >
        <TextInput
          id={id('otherEmail')}
          type="email"
          value={person.otherEmail}
          hasError={!!err('otherEmail')}
          onChange={(e) => set({ otherEmail: e.target.value })}
        />
      </Field>

      {/* Name row — three short fields that don't need their own lines */}
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_90px_minmax(0,1fr)] gap-4">
        <Field label="First Name" htmlFor={id('firstName')} required error={err('firstName')}>
          <TextInput
            id={id('firstName')}
            autoComplete="given-name"
            value={person.firstName}
            hasError={!!err('firstName')}
            onChange={(e) => set({ firstName: e.target.value })}
          />
        </Field>
        <Field label="M.I." htmlFor={id('middleInitial')}>
          <TextInput
            id={id('middleInitial')}
            maxLength={1}
            value={person.middleInitial}
            onChange={(e) => set({ middleInitial: e.target.value })}
          />
        </Field>
        <Field label="Last Name" htmlFor={id('lastName')} required error={err('lastName')}>
          <TextInput
            id={id('lastName')}
            autoComplete="family-name"
            value={person.lastName}
            hasError={!!err('lastName')}
            onChange={(e) => set({ lastName: e.target.value })}
          />
        </Field>
      </div>

      {withAddress && (
        <>
          <Field label="Country" htmlFor={id('country')} required error={err('country')}>
            <SelectInput
              id={id('country')}
              value={person.country}
              hasError={!!err('country')}
              onChange={(e) => set({ country: e.target.value, state: '' })}
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </SelectInput>
          </Field>

          <Field
            label="Street address"
            htmlFor={id('address1')}
            required
            error={err('address1')}
            help="Add a second or third line only if you need them."
          >
            <div className="flex flex-col gap-2">
              <TextInput
                id={id('address1')}
                autoComplete="address-line1"
                value={person.address1}
                hasError={!!err('address1')}
                onChange={(e) => set({ address1: e.target.value })}
              />
              <TextInput
                aria-label="Street address line 2"
                autoComplete="address-line2"
                value={person.address2}
                onChange={(e) => set({ address2: e.target.value })}
              />
              <TextInput
                aria-label="Street address line 3"
                value={person.address3}
                onChange={(e) => set({ address3: e.target.value })}
              />
            </div>
          </Field>

          {/* City / State / ZIP on one row — the live form stacks these down a full screen */}
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)] gap-4">
            <Field label="City" htmlFor={id('city')} required error={err('city')}>
              <TextInput
                id={id('city')}
                autoComplete="address-level2"
                value={person.city}
                hasError={!!err('city')}
                onChange={(e) => set({ city: e.target.value })}
              />
            </Field>
            <Field
              label={isUS ? 'State' : 'State / Province'}
              htmlFor={id('state')}
              required
              error={err('state')}
            >
              {isUS ? (
                <SelectInput
                  id={id('state')}
                  value={person.state}
                  hasError={!!err('state')}
                  onChange={(e) => set({ state: e.target.value })}
                >
                  <option value="">- Select -</option>
                  {usStates.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </SelectInput>
              ) : (
                <TextInput
                  id={id('state')}
                  value={person.state}
                  hasError={!!err('state')}
                  onChange={(e) => set({ state: e.target.value })}
                />
              )}
            </Field>
            <Field
              label={isUS ? 'Zip code' : 'Postal code'}
              htmlFor={id('zip')}
              required
              error={err('zip')}
            >
              <TextInput
                id={id('zip')}
                autoComplete="postal-code"
                inputMode={isUS ? 'numeric' : 'text'}
                value={person.zip}
                hasError={!!err('zip')}
                onChange={(e) => set({ zip: e.target.value })}
              />
            </Field>
          </div>
        </>
      )}

      {/* Rank group */}
      <div className="flex flex-col gap-5 border border-border-light bg-surface-subtle p-5">
        <p className="font-body font-semibold text-base text-navy-bolder">Rank</p>

        <Field
          label="Service"
          htmlFor={id('service')}
          required
          error={err('service')}
          help={
            <ul className="flex flex-col gap-1">
              <li>
                If you are a veteran, choose <strong>Civilian</strong> here — you'll identify your
                branch under Military Status.
              </li>
              <li>If you are active-duty, reserve, or retired, choose your branch of service.</li>
            </ul>
          }
        >
          <SelectInput
            id={id('service')}
            value={person.service}
            hasError={!!err('service')}
            // Ranks are service-specific, so a service change invalidates any prior pick
            onChange={(e) => set({ service: e.target.value, rank: '' })}
          >
            <option value="">- Select -</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </SelectInput>
        </Field>

        <Field label="Military Status" htmlFor={id('militaryStatus')} required error={err('militaryStatus')}>
          <SelectInput
            id={id('militaryStatus')}
            value={person.militaryStatus}
            hasError={!!err('militaryStatus')}
            onChange={(e) => set({ militaryStatus: e.target.value })}
          >
            <option value="">- Select -</option>
            {militaryStatuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </SelectInput>
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-4">
          <Field
            label="Rank / Title"
            htmlFor={id('rank')}
            required
            error={err('rank')}
            help={person.service ? undefined : 'Choose a service first.'}
          >
            <SelectInput
              id={id('rank')}
              value={person.rank}
              disabled={!person.service}
              hasError={!!err('rank')}
              onChange={(e) => set({ rank: e.target.value })}
              className={!person.service ? 'opacity-50 cursor-not-allowed' : ''}
            >
              <option value="">- Select -</option>
              {rankOptions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </SelectInput>
          </Field>
          <Field label="Suffix" htmlFor={id('suffix')}>
            <SelectInput
              id={id('suffix')}
              value={person.suffix}
              onChange={(e) => set({ suffix: e.target.value })}
            >
              <option value="">- Select -</option>
              {suffixes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </SelectInput>
          </Field>
        </div>
      </div>

      <Field
        label="Author Bio"
        htmlFor={id('bio')}
        required
        error={err('bio')}
        hint={`${Math.max(0, AUTHOR_BIO_MAX - person.bio.length)} character${
          AUTHOR_BIO_MAX - person.bio.length === 1 ? '' : 's'
        } remaining`}
        help="A short biography. For contests with eligibility categories, say which one you qualify under."
      >
        <TextArea
          id={id('bio')}
          maxLength={AUTHOR_BIO_MAX}
          value={person.bio}
          hasError={!!err('bio')}
          onChange={(e) => set({ bio: e.target.value })}
        />
      </Field>

      <Field label="Phone" htmlFor={id('phone')} required error={err('phone')}>
        <TextInput
          id={id('phone')}
          type="tel"
          autoComplete="tel"
          value={person.phone}
          hasError={!!err('phone')}
          onChange={(e) => set({ phone: e.target.value })}
        />
      </Field>
    </>
  )
}

export default function EssaySubmitForm({ contest }: { contest: EssayContest }) {
  const isPhoto = isPhotoEntry(contest)
  const wordLimitMax = contest.wordLimitMax

  const [author, setAuthor] = useState<Person>(emptyPerson)
  const [hasCoAuthor, setHasCoAuthor] = useState(false)
  const [coAuthor, setCoAuthor] = useState<Person>(emptyPerson)

  const [title, setTitle] = useState('')
  const [wordCount, setWordCount] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [acknowledged, setAcknowledged] = useState(false)

  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const summaryRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const setAuthorField = (patch: Partial<Person>) => setAuthor((p) => ({ ...p, ...patch }))
  const setCoAuthorField = (patch: Partial<Person>) => setCoAuthor((p) => ({ ...p, ...patch }))

  const wordCountNum = Number(wordCount.replace(/[^0-9]/g, ''))
  const overLimit = wordLimitMax !== undefined && wordCount !== '' && wordCountNum > wordLimitMax
  // "2,500-word limit" rather than "2,500 words limit" — wordLimit already
  // carries the noun, so it can't be interpolated in front of "limit".
  const overLimitMessage = wordLimitMax
    ? `${(wordCountNum - wordLimitMax).toLocaleString()} words over the ${wordLimitMax.toLocaleString()}-word limit for this contest.`
    : ''

  function validatePerson(p: Person, prefix: string, withAddress: boolean, next: Errors) {
    const req = (key: keyof Person, label: string) => {
      if (!String(p[key]).trim()) next[`${prefix}.${key}`] = `${label} is required.`
    }
    req('email', 'Email')
    if (p.email.trim() && !EMAIL_RE.test(p.email.trim())) {
      next[`${prefix}.email`] = 'Enter a valid email address.'
    }
    if (p.otherEmail.trim() && !EMAIL_RE.test(p.otherEmail.trim())) {
      next[`${prefix}.otherEmail`] = 'Enter a valid email address.'
    }
    req('firstName', 'First name')
    req('lastName', 'Last name')
    if (withAddress) {
      req('country', 'Country')
      req('address1', 'Street address')
      req('city', 'City')
      req('state', 'State')
      req('zip', 'Zip code')
    }
    req('service', 'Service')
    req('militaryStatus', 'Military status')
    req('rank', 'Rank/Title')
    req('bio', 'Author bio')
    req('phone', 'Phone')
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const next: Errors = {}

    validatePerson(author, 'author', true, next)
    if (hasCoAuthor) validatePerson(coAuthor, 'coAuthor', false, next)

    if (!title.trim()) next.title = `${isPhoto ? 'Entry' : 'Essay'} title is required.`

    // Word count only applies where the contest sets a limit — the photo
    // contest has none
    if (wordLimitMax !== undefined) {
      if (!wordCount.trim()) {
        next.wordCount = 'Essay word count is required.'
      } else if (!Number.isFinite(wordCountNum) || wordCountNum <= 0) {
        next.wordCount = 'Enter the word count as a number.'
      } else if (wordCountNum > wordLimitMax) {
        next.wordCount = overLimitMessage
      }
    }

    const oversize = files.find((f) => f.size > FILE_MAX_MB * 1024 * 1024)
    if (isPhoto) {
      const badType = files.find(
        (f) => !/\.(jpe?g|tiff?)$/i.test(f.name),
      )
      if (files.length === 0) {
        next.file = 'Attach at least one photograph.'
      } else if (files.length > PHOTO_MAX_FILES) {
        next.file = `Up to ${PHOTO_MAX_FILES} photographs per person — you attached ${files.length}.`
      } else if (badType) {
        next.file = `Only ${PHOTO_FILE_EXT} files are accepted.`
      } else if (oversize) {
        next.file = `“${oversize.name}” is over the ${FILE_MAX_MB} MB limit.`
      }
    } else {
      const file = files[0]
      if (!file) {
        next.file = `Attach your essay as a ${ALLOWED_FILE_EXT} file.`
      } else if (!file.name.toLowerCase().endsWith(ALLOWED_FILE_EXT)) {
        next.file = `Only ${ALLOWED_FILE_EXT} files are accepted.`
      } else if (oversize) {
        next.file = `That file is over the ${FILE_MAX_MB} MB limit.`
      }
    }

    if (!acknowledged) next.acknowledged = 'Please acknowledge the screening notice.'

    setErrors(next)

    if (Object.keys(next).length > 0) {
      summaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const errorCount = Object.keys(errors).length

  // ── Success state ──
  if (submitted) {
    return (
      <section className="bg-white py-14 lg:py-20">
        <div className="container-site">
          <div className="max-w-[720px] mx-auto border border-navy-subtle bg-white p-8 lg:p-10 flex flex-col gap-5">
            <div className="w-14 h-14 bg-[#e6f7ed] flex items-center justify-center">
              <i className="fa-solid fa-check text-2xl text-[#0a5c2e]" aria-hidden="true" />
            </div>
            <h2 className="font-headline text-3xl lg:text-4xl text-navy-bolder leading-tight">
              {isPhoto ? 'Your photos are in' : 'Your essay is in'}
            </h2>
            <p className="font-body text-base lg:text-lg text-neutral-subtle leading-relaxed">
              Thank you for entering the {contest.year} {contestFullTitle(contest)}. We've sent a
              confirmation to <span className="font-bold text-navy-bolder">{author.email}</span>.
            </p>
            <dl className="flex flex-col gap-3 border-t border-b border-border-light py-5">
              <div className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                <dt className="font-body font-semibold text-sm text-navy-bolder">
                  {isPhoto ? 'Entry' : 'Essay'}
                </dt>
                <dd className="font-body text-sm text-neutral-subtle text-right">{title}</dd>
              </div>
              {wordLimitMax !== undefined && (
                <div className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                  <dt className="font-body font-semibold text-sm text-navy-bolder">Word count</dt>
                  <dd className="font-body text-sm text-neutral-subtle text-right">
                    {wordCountNum.toLocaleString()} of {contest.wordLimit} allowed
                  </dd>
                </div>
              )}
              <div className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                <dt className="font-body font-semibold text-sm text-navy-bolder">
                  {files.length > 1 ? 'Files' : 'File'}
                </dt>
                <dd className="font-body text-sm text-neutral-subtle text-right break-all">
                  {files.map((f) => f.name).join(', ')}
                </dd>
              </div>
            </dl>
            <p className="font-body text-sm text-neutral-subtle leading-relaxed">
              {isPhoto
                ? 'Winning and runner-up photos are featured in Proceedings and on usni.org. We’ll email you if yours is selected.'
                : 'Essays are judged in the blind. Because we receive more than 100 submissions a month, notification can take 4–6 months. We’ll email you if your essay is selected for a prize or for publication.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={contest.href}
                className="inline-flex items-center justify-center gap-2 bg-navy-bolder text-white font-body font-bold text-base px-6 py-3.5 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors"
              >
                Back to the contest
              </a>
              <a
                href="/essay-contests"
                className="inline-flex items-center justify-center gap-2 font-body font-bold text-base text-navy-bolder px-6 py-3.5 border border-navy-bolder hover:bg-navy-bolder hover:text-white transition-colors"
              >
                See all contests
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ── Form ──
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-site">
        <div className="max-w-[760px] mx-auto">

          {/* Error summary — keyboard and screen-reader users land here on a failed submit */}
          <div ref={summaryRef}>
            {errorCount > 0 && (
              <div
                role="alert"
                className="border border-l-4 border-[#c1121f] bg-[#fef6f6] px-5 py-4 mb-8"
              >
                <p className="font-body font-bold text-base text-navy-bolder mb-1">
                  {errorCount} {errorCount === 1 ? 'field needs' : 'fields need'} attention
                </p>
                <p className="font-body text-sm text-neutral-subtle">
                  Scroll down to the highlighted fields to fix them, then submit again.
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">

            <Fieldset legend="Instructions">
              <p className="font-body text-base lg:text-[17px] text-neutral-subtle leading-[1.75]">
                Enter your {isPhoto ? 'photo' : 'essay'} submission content below. Everything is
                judged in the blind, so leave your name off the{' '}
                {isPhoto ? 'image metadata' : 'manuscript itself'}.{' '}
                {isPhoto
                  ? `Entries must be ${PHOTO_FILE_EXT} files, up to ${PHOTO_MAX_FILES} per person.`
                  : `Your essay must be a ${ALLOWED_FILE_EXT} file of no more than ${contest.wordLimit}.`}{' '}
                If you need help submitting your {isPhoto ? 'photos' : 'essay'}, email{' '}
                <a
                  href="mailto:essayquestions@usni.org"
                  className="text-link"
                >
                  essayquestions@usni.org
                </a>
                .
              </p>
              <p className="font-body font-bold text-base text-[#c1121f]">* Required fields</p>
            </Fieldset>

            <Fieldset legend="Author Information">
              <PersonFields
                person={author}
                set={setAuthorField}
                errors={errors}
                prefix="author"
                withAddress
              />
            </Fieldset>

            {/* Co-author — the live form has this checkbox but no fields behind it */}
            <div className="flex flex-col gap-6">
              <CheckboxField
                id="has-co-author"
                checked={hasCoAuthor}
                onChange={setHasCoAuthor}
              >
                This essay has a co-author
              </CheckboxField>

              {hasCoAuthor && (
                <Fieldset
                  legend="Co-Author Information"
                  description="We'll contact the primary author about the entry; the co-author is recorded for credit and prize splitting."
                  className="border-l-4 border-[#0466c8] pl-5"
                >
                  <PersonFields
                    person={coAuthor}
                    set={setCoAuthorField}
                    errors={errors}
                    prefix="coAuthor"
                    withAddress={false}
                    isPrimary={false}
                  />
                </Fieldset>
              )}
            </div>

            <Fieldset legend={isPhoto ? 'Entry Information' : 'Essay Information'}>
              <Field
                label={isPhoto ? 'Entry Title' : 'Essay Title'}
                htmlFor="essay-title"
                required
                error={errors.title}
                hint={`${Math.max(0, ESSAY_TITLE_MAX - title.length)} character${
                  ESSAY_TITLE_MAX - title.length === 1 ? '' : 's'
                } remaining`}
              >
                <TextInput
                  id="essay-title"
                  maxLength={ESSAY_TITLE_MAX}
                  value={title}
                  hasError={!!errors.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Field>

              {wordLimitMax !== undefined && (
                <Field
                  label="Essay Word Count"
                  htmlFor="essay-word-count"
                  required
                  // Flag an over-length count as soon as it's typed, not just on
                  // submit — the live form never checks this at all.
                  error={errors.wordCount || (overLimit ? overLimitMessage : undefined)}
                  help={`Excluding footnotes, endnotes, and sources. This contest allows ${contest.wordLimit}.`}
                  hint={
                    wordCount && !overLimit && wordCountNum > 0
                      ? `${(wordLimitMax - wordCountNum).toLocaleString()} under the limit`
                      : undefined
                  }
                >
                  <TextInput
                    id="essay-word-count"
                    inputMode="numeric"
                    value={wordCount}
                    hasError={!!errors.wordCount || overLimit}
                    onChange={(e) => setWordCount(e.target.value)}
                  />
                </Field>
              )}

              <Field
                label={isPhoto ? 'Photographs' : 'Essay File'}
                htmlFor="essay-file"
                required
                error={errors.file}
                help={
                  isPhoto
                    ? `Up to ${PHOTO_MAX_FILES} files. ${FILE_MAX_MB} MB each. Allowed types: ${PHOTO_FILE_EXT}. 300 dpi minimum preferred; no AI or manipulation beyond colour enhancement and cropping.`
                    : `One file only. ${FILE_MAX_MB} MB limit. Allowed type: ${ALLOWED_FILE_EXT}.`
                }
              >
                <div className="flex flex-col gap-3">
                  <input
                    ref={fileInputRef}
                    id="essay-file"
                    type="file"
                    multiple={isPhoto}
                    accept={isPhoto ? PHOTO_ACCEPT : ALLOWED_FILE_EXT}
                    aria-invalid={errors.file ? true : undefined}
                    onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
                    className={`w-full font-body text-base text-navy-bolder border px-3.5 py-3 bg-white
                      file:mr-4 file:py-2 file:px-4 file:border-0 file:font-body file:font-bold
                      file:text-sm file:bg-navy-bolder file:text-white file:cursor-pointer
                      hover:file:bg-navy-bright cursor-pointer outline-none
                      focus:border-navy-bright focus:shadow-[0_0_0_3px_rgba(4,102,200,0.15)]
                      ${errors.file ? 'border-[#c1121f] bg-[#fef6f6]' : 'border-[#94A3B8]'}`}
                  />
                  {files.length > 0 && !errors.file && (
                    <ul className="flex flex-col gap-1.5">
                      {files.map((f) => (
                        <li
                          key={`${f.name}-${f.size}`}
                          className="flex items-center gap-2 font-body text-sm text-[#0a5c2e]"
                        >
                          <i
                            className={`fa-solid ${isPhoto ? 'fa-file-image' : 'fa-file-word'}`}
                            aria-hidden="true"
                          />
                          <span className="break-all">{f.name}</span>
                          <span className="text-neutral-subtle">
                            ({(f.size / 1024 / 1024).toFixed(1)} MB)
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Field>

              <div className="bg-surface-subtle border-l-4 border-[#0466c8] px-5 py-4">
                <CheckboxField
                  id="acknowledge-screening"
                  checked={acknowledged}
                  onChange={setAcknowledged}
                  required
                  error={errors.acknowledged}
                >
                  I understand the Naval Institute uses digital tools to screen submissions for
                  plagiarism and AI-generated writing.
                </CheckboxField>
              </div>
            </Fieldset>

            <div className="flex justify-end border-t border-border-light pt-8">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-bolder font-body font-bold text-base px-8 py-4 border border-gold hover:bg-gold-dark transition-colors"
              >
                <i className={`fa-solid ${isPhoto ? 'fa-camera' : 'fa-pen-nib'}`} aria-hidden="true" />
                {isPhoto ? 'Submit Photos' : 'Submit Essay'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
