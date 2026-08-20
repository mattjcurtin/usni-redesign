import type { ReactNode } from 'react'
import { Field, SelectInput, TextArea, TextInput } from '@/components/ui/FormField'
import ExternalLinkIcon from '@/components/ui/ExternalLinkIcon'
import { useState } from 'react'
import {
  archivesContact,
  contactTypes,
  foundationContact,
  foundationStaff,
  generalContact,
  memberServices,
  pressContact,
  pressGroups,
  pressNotes,
  visiting,
  type ContactPerson,
} from '@/data/contact'

/* ── Shared pieces ───────────────────────────────────────────────────────── */

const telHref = (n: string) => `tel:${n.replace(/[^0-9]/g, '')}`

function Section({
  id,
  title,
  lede,
  tinted,
  children,
}: {
  id: string
  title: string
  lede?: string
  tinted?: boolean
  children: ReactNode
}) {
  return (
    <section
      id={id}
      /* scroll-mt clears the sticky header plus the jump-link bar */
      className={`py-16 lg:py-20 scroll-mt-[150px] ${tinted ? 'bg-[#ebf4ff]' : 'bg-white'}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-site">
        <h2
          id={`${id}-heading`}
          className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1]"
        >
          {title}
        </h2>
        {lede && (
          <p className="font-body text-base lg:text-lg text-neutral-subtle leading-relaxed mt-4 max-w-[820px]">
            {lede}
          </p>
        )}
        <div className="mt-10 lg:mt-12">{children}</div>
      </div>
    </section>
  )
}

function DetailBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-body font-bold text-[12px] uppercase tracking-[0.08em] text-neutral-subtle">
        {title}
      </p>
      <div className="font-body text-base text-navy-bolder leading-[1.7]">{children}</div>
    </div>
  )
}

function PersonCard({ person }: { person: ContactPerson }) {
  return (
    <div className="border border-navy-subtle bg-white p-5 flex flex-col gap-1">
      <p className="font-headline text-[20px] text-navy-bolder leading-tight">{person.name}</p>
      <p className="font-body text-sm text-neutral-subtle leading-snug">{person.role}</p>
      <div className="flex flex-col gap-0.5 mt-2">
        {person.phone && (
          <a href={telHref(person.phone)} className="font-body text-sm w-fit text-link">
            {person.phone}
          </a>
        )}
        {person.email && (
          <a href={`mailto:${person.email}`} className="font-body text-sm w-fit text-link">
            {person.email}
          </a>
        )}
      </div>
    </div>
  )
}

function PeopleGrid({ people }: { people: ContactPerson[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {people.map(p => <PersonCard key={p.name + p.role} person={p} />)}
    </div>
  )
}

/* ── General inquiries, with the contact form ────────────────────────────── */

export function ContactGeneral() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', type: '', subject: '', message: '' })
  const [showErrors, setShowErrors] = useState(false)

  const missing = [
    !form.name.trim() && 'Your name',
    !form.email.trim() && 'Your email',
    !form.type && 'Contact type',
    !form.message.trim() && 'Message',
  ].filter(Boolean) as string[]

  const err = (v: string) => (showErrors && !v.trim() ? 'Required.' : undefined)

  return (
    <Section
      id="general"
      title="General inquiries"
      lede="For anything that isn’t handled by a department below — orders, book returns, website trouble, or a question you’re not sure where to send."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 lg:gap-16">

        <div className="flex flex-col gap-7">
          <DetailBlock title="Mailing address">
            {generalContact.address.map(l => <span key={l} className="block">{l}</span>)}
          </DetailBlock>
          <DetailBlock title="Telephone">
            <a href={telHref(generalContact.tollFree)} className="w-fit text-link">{generalContact.tollFree}</a>
            <span className="block text-sm text-neutral-subtle">Toll free</span>
            <a href={telHref(generalContact.local)} className="w-fit text-link mt-2">{generalContact.local}</a>
            <span className="block text-sm text-neutral-subtle">Local</span>
            <span className="block mt-2">Fax {generalContact.fax}</span>
          </DetailBlock>
          <DetailBlock title="Email">
            <a href={`mailto:${generalContact.customerEmail}`} className="w-fit text-link">{generalContact.customerEmail}</a>
            <span className="block text-sm text-neutral-subtle">Orders and customer service</span>
            <a href={`mailto:${generalContact.memberEmail}`} className="w-fit text-link mt-2">{generalContact.memberEmail}</a>
            <span className="block text-sm text-neutral-subtle">Membership</span>
          </DetailBlock>
        </div>

        <div className="border border-navy-subtle p-6 lg:p-8">
          {sent ? (
            <div className="flex flex-col gap-3">
              <p className="font-headline text-[26px] text-navy-bolder">Message sent</p>
              <p className="font-body text-base text-neutral-subtle leading-relaxed">
                Thanks — we’ll reply to {form.email || 'your email'} within two business days.
              </p>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={e => {
                e.preventDefault()
                if (missing.length) { setShowErrors(true); return }
                setSent(true)
              }}
              className="flex flex-col gap-5"
            >
              <p className="font-headline text-[26px] text-navy-bolder leading-tight">Send us a message</p>
              {showErrors && missing.length > 0 && (
                <div role="alert" className="border border-l-4 border-[#c1121f] bg-[#fef6f6] px-5 py-4">
                  <p className="font-body font-bold text-[15px] text-navy-bolder mb-0.5">
                    Please complete the required fields
                  </p>
                  <p className="font-body text-[14px] text-neutral-subtle">{missing.join(', ')}.</p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <Field label="Your name" htmlFor="ct-name" required error={err(form.name)} className="flex-1">
                  <TextInput id="ct-name" value={form.name} hasError={!!err(form.name)}
                    onChange={e => setForm({ ...form, name: e.target.value })} />
                </Field>
                <Field label="Your email" htmlFor="ct-email" required error={err(form.email)} className="flex-1">
                  <TextInput id="ct-email" type="email" value={form.email} hasError={!!err(form.email)}
                    onChange={e => setForm({ ...form, email: e.target.value })} />
                </Field>
              </div>
              <Field label="Contact type" htmlFor="ct-type" required error={showErrors && !form.type ? 'Required.' : undefined}>
                <SelectInput id="ct-type" value={form.type} hasError={showErrors && !form.type}
                  onChange={e => setForm({ ...form, type: e.target.value })}>
                  <option value="">— Select —</option>
                  {contactTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </SelectInput>
              </Field>
              <Field label="Subject" htmlFor="ct-subject">
                <TextInput id="ct-subject" value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })} />
              </Field>
              <Field label="Message" htmlFor="ct-message" required error={err(form.message)}>
                <TextArea id="ct-message" rows={6} value={form.message} hasError={!!err(form.message)}
                  onChange={e => setForm({ ...form, message: e.target.value })} />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center self-start bg-navy-bolder text-white font-body font-bold text-base px-6 py-3.5 border border-navy-bolder hover:bg-navy-bright hover:border-navy-bright transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}

/* ── Member services ─────────────────────────────────────────────────────── */

export function ContactMembership() {
  return (
    <Section id="membership" title="Member services" lede={memberServices.blurb} tinted>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[900px]">
        <DetailBlock title="Email">
          <a href={`mailto:${memberServices.email}`} className="w-fit text-link">{memberServices.email}</a>
        </DetailBlock>
        <DetailBlock title="Telephone">
          <a href={telHref(memberServices.tollFree)} className="w-fit text-link">{memberServices.tollFree}</a>
          <span className="block text-sm text-neutral-subtle">Toll free</span>
          <a href={telHref(memberServices.local)} className="w-fit text-link mt-2">{memberServices.local}</a>
          <span className="block text-sm text-neutral-subtle">Local</span>
        </DetailBlock>
        <DetailBlock title="Hours">{memberServices.hours}</DetailBlock>
      </div>
    </Section>
  )
}

/* ── Naval Institute Foundation ──────────────────────────────────────────── */

export function ContactFoundation() {
  return (
    <Section id="foundation" title="Naval Institute Foundation" lede={foundationContact.blurb}>
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[900px]">
          <DetailBlock title="Mailing address">
            {foundationContact.address.map(l => <span key={l} className="block">{l}</span>)}
          </DetailBlock>
          <DetailBlock title="Telephone">
            <a href={telHref(foundationContact.phone)} className="w-fit text-link">{foundationContact.phone}</a>
            <span className="block mt-2">Fax {foundationContact.fax}</span>
          </DetailBlock>
          <DetailBlock title="Email">
            <a href={`mailto:${foundationContact.email}`} className="w-fit text-link">{foundationContact.email}</a>
          </DetailBlock>
        </div>

        <div>
          <h3 className="font-headline text-2xl lg:text-3xl text-navy-bolder leading-[1.15] mb-8">
            Foundation staff
          </h3>
          <PeopleGrid people={foundationStaff} />
        </div>
      </div>
    </Section>
  )
}

/* ── Naval Institute Press ───────────────────────────────────────────────── */

export function ContactPress() {
  return (
    <Section
      id="press"
      title="Naval Institute Press"
      lede="Review copies, author events, trade orders, manuscript submissions, and rights inquiries."
      tinted
    >
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressNotes.map(n => (
            <div key={n.title} className="border border-navy-subtle bg-white p-5">
              <p className="font-body font-bold text-base text-navy-bolder mb-1">{n.title}</p>
              <p className="font-body text-[15px] text-neutral-subtle leading-relaxed">{n.body}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[900px]">
          <DetailBlock title="Mailing address">
            {pressContact.address.map(l => <span key={l} className="block">{l}</span>)}
          </DetailBlock>
          <DetailBlock title="Telephone">
            <a href={telHref(pressContact.phone)} className="w-fit text-link">{pressContact.phone}</a>
            <span className="block mt-2">Fax {pressContact.fax}</span>
          </DetailBlock>
          <DetailBlock title="Trade orders">
            <a href={`mailto:${pressContact.tradeEmail}`} className="w-fit text-link">{pressContact.tradeEmail}</a>
          </DetailBlock>
        </div>

        {pressGroups.map(group => (
          <div key={group.title}>
            <h3 className="font-headline text-2xl lg:text-3xl text-navy-bolder leading-[1.15] mb-8">
              {group.title}
            </h3>
            <PeopleGrid people={group.people} />
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ── Archives and research ───────────────────────────────────────────────── */

export function ContactArchives() {
  return (
    <Section id="archives" title="Archives & research" lede={archivesContact.blurb}>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[900px]">
          <DetailBlock title="Research inquiries">
            <a href={`mailto:${archivesContact.researchEmail}`} className="w-fit text-link">
              {archivesContact.researchEmail}
            </a>
          </DetailBlock>
          <DetailBlock title="Photo archive">
            <a href={`mailto:${archivesContact.photoEmail}`} className="w-fit text-link">
              {archivesContact.photoEmail}
            </a>
            <a
              href={archivesContact.photoSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 w-fit text-link mt-2 text-sm"
            >
              photos.usni.org
              <ExternalLinkIcon />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </DetailBlock>
          <DetailBlock title="Schedule a library visit">
            <a href={telHref(archivesContact.libraryPhone)} className="w-fit text-link">
              {archivesContact.libraryPhone}
            </a>
          </DetailBlock>
        </div>

        <div className="border border-l-4 border-[#bcd8f7] bg-[#ebf4ff] px-5 py-4 max-w-[820px]">
          <p className="font-body font-bold text-[15px] text-navy-bolder mb-1">Response times</p>
          <p className="font-body text-[15px] text-neutral-subtle leading-relaxed">
            {archivesContact.turnaround}
          </p>
        </div>
      </div>
    </Section>
  )
}

/* ── Visiting ────────────────────────────────────────────────────────────── */

export function ContactVisiting() {
  return (
    <Section id="visiting" title="Visiting us" lede={visiting.intro} tinted>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="flex flex-col gap-6">
          <DetailBlock title="For GPS navigation">{visiting.gps}</DetailBlock>
          <div>
            <p className="font-body font-bold text-base text-navy-bolder mb-3">
              {visiting.directionsTitle}
            </p>
            <ol className="flex flex-col gap-2 list-decimal pl-5">
              {visiting.directions.map(d => (
                <li key={d} className="font-body text-base text-neutral-subtle leading-relaxed">{d}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="font-body font-bold text-base text-navy-bolder mb-3">Getting on base</p>
            <ul className="flex flex-col gap-2.5">
              {visiting.passSteps.map(s => (
                <li key={s} className="flex gap-2.5 font-body text-base text-neutral-subtle leading-relaxed">
                  <span className="text-[#0466c8] flex-shrink-0" aria-hidden="true">—</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-l-4 border-[#ffaa00] bg-[#fff8d6] px-5 py-4">
            <p className="font-body font-bold text-[15px] text-navy-bolder mb-1">Before you travel</p>
            <p className="font-body text-[15px] text-neutral-subtle leading-relaxed">
              {visiting.securityNote.split(visiting.academyPhone)[0]}
              <a href={telHref(visiting.academyPhone)} className="text-link">{visiting.academyPhone}</a>
              {visiting.securityNote.split(visiting.academyPhone)[1]}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
