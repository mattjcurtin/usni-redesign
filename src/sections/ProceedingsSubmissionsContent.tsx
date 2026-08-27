import type { ReactNode } from 'react'
import Alert from '@/components/ui/Alert'
import { ButtonLink } from '@/components/ui/Button'
import { submissionCategories } from '@/data/proceedingsSubmissions'

/**
 * Proceedings submission guidelines.
 *
 * The live page is one undifferentiated column: how to submit, seven department
 * descriptions, and four paragraphs of policy all set at the same weight, with
 * each word limit demoted to an `<h6>` subtitle under its department name. Three
 * things change here. Submitting comes first as its own band, because that is
 * what the page is for. The departments become a card grid with the word limit
 * promoted to a badge, since the limit is what a writer checks before reading
 * anything else. And the two policy paragraphs that carry consequences — the AI
 * checker, and payment — are pulled out as alerts rather than left buried mid-run.
 */

const ARTICLE_FORM = '/proceedings/submissions/article-form'

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="border-b border-[#0466C8] pb-4">
      <h2 className="font-headline text-[32px] lg:text-[36px] text-navy-bolder leading-[1.2]">
        {children}
      </h2>
    </div>
  )
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="font-body font-bold text-[12px] uppercase tracking-[0.08em] text-neutral-subtle">
      {children}
    </p>
  )
}

/* ── How to submit ───────────────────────────────────────────────────────── */

function HowToSubmit() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="container-site flex flex-col gap-8 lg:gap-10">
        <SectionHeading>How to submit</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* The portal is the route the magazine wants used, so it is the only
              panel with a filled border and a button. */}
          <div className="border-2 border-navy-bold bg-[#ebf4ff] p-6 lg:p-7 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Preferred</Label>
              <h3 className="font-headline text-[24px] text-navy-bolder leading-tight">
                Through the online portal
              </h3>
            </div>
            <p className="font-body text-base text-navy-bolder leading-[1.7] flex-1">
              Submit your manuscript as a Microsoft Word document. Illustrations and graphics
              should be embedded in the document, or sent as separate attachments.
            </p>
            <ButtonLink href={ARTICLE_FORM} variant="navy" size="md" fullWidth>
              <i className="fa-solid fa-file-arrow-up text-[14px]" aria-hidden="true" />
              Article Submission Form
            </ButtonLink>
          </div>

          <div className="border border-navy-subtle p-6 lg:p-7 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Artwork</Label>
              <h3 className="font-headline text-[24px] text-navy-bolder leading-tight">
                Illustrations and graphics
              </h3>
            </div>
            <p className="font-body text-base text-navy-bolder leading-[1.7] flex-1">
              Embed them in the document, or send them as separate attachments to the
              articles desk.
            </p>
            <a
              href="mailto:articlequestions@usni.org"
              className="font-body font-bold text-base w-fit text-link"
            >
              articlequestions@usni.org
            </a>
          </div>

          <div className="border border-navy-subtle p-6 lg:p-7 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Also accepted</Label>
              <h3 className="font-headline text-[24px] text-navy-bolder leading-tight">
                By U.S. mail
              </h3>
            </div>
            <address className="font-body text-base text-navy-bolder leading-[1.7] not-italic flex-1">
              Editor-in-Chief, <em>Proceedings</em>
              <br />
              U.S. Naval Institute
              <br />
              291 Wood Road
              <br />
              Annapolis, MD 21402-5034
            </address>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Categories ──────────────────────────────────────────────────────────── */

function Categories() {
  return (
    <section className="bg-surface-subtle py-14 lg:py-16">
      <div className="container-site flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-5">
          <SectionHeading>Guidelines and categories</SectionHeading>
          <p className="font-body text-base lg:text-lg text-neutral-subtle leading-[1.7] max-w-[760px]">
            Every department has its own length and its own purpose. Name the one you are
            writing for in your submission — it tells the editors how to read the piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {submissionCategories.map(cat => (
            <article
              key={cat.name}
              className="bg-white border border-navy-subtle p-6 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-headline text-[24px] text-navy-bolder leading-tight">
                  {cat.name}
                </h3>
                {/* The limit is the first thing a writer checks, so it reads as a
                    spec rather than as a subtitle the way the live page sets it. */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#ebf4ff] border border-[#bcd8f7] px-2.5 py-1 font-body font-bold text-[13px] text-[#023e7d]">
                    <i className="fa-solid fa-pen-nib text-[11px]" aria-hidden="true" />
                    {cat.wordLimit} max
                  </span>
                  {cat.endnotesExcluded && (
                    <span className="font-body text-[13px] text-neutral-subtle">
                      excluding endnotes
                    </span>
                  )}
                  {cat.commissioned && (
                    <span className="inline-flex items-center bg-[#fff8d6] border border-[#f0d98a] px-2.5 py-1 font-body font-bold text-[13px] text-[#7a5c00]">
                      By assignment
                    </span>
                  )}
                </div>
              </div>

              <p className="font-body text-[15px] text-navy-bolder leading-[1.7] flex-1">
                {cat.description}
              </p>

              {cat.email && (
                <a
                  href={`mailto:${cat.email.address}`}
                  className="font-body font-bold text-[15px] w-fit text-link"
                >
                  {cat.email.address}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── What happens next ───────────────────────────────────────────────────── */

function WhatHappensNext() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="container-site flex flex-col gap-8 lg:gap-10">
        <SectionHeading>What happens next</SectionHeading>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 lg:items-start">

          {/* Left: the review process as prose */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            <p className="font-body text-base lg:text-lg text-navy-bolder leading-[1.7]">
              Submissions are reviewed by the editorial staff of <em>Proceedings</em> and by the{' '}
              <a href="/about/leadership#editorial-board" className="text-link">
                Editorial Board
              </a>
              , which meets once a month. This peer review process can take up to ten weeks,
              depending on when in the monthly review cycle an article is received. You can
              expect further communication from us in that time frame, accepting or regretfully
              rejecting the submission.
            </p>

            <Alert variant="danger" title="Generative AI will disqualify a submission">
              The editorial staff runs both a plagiarism checker and an artificial intelligence
              checker in the initial review. If we determine a tool such as ChatGPT was used to
              write the piece, it will be rejected without further review. Using such a tool to
              format endnotes is fine — Chicago Manual of Style, please.
            </Alert>

            <Alert variant="success" title="The Naval Institute pays on publication">
              Nonmembers published in <em>Proceedings</em> also receive a complimentary one-year
              membership in the Naval Institute.
            </Alert>
          </div>

          {/* Right: the standing disclaimer, set apart because it describes the
              publisher rather than the submission. */}
          <aside className="flex-none w-full lg:w-[350px] bg-surface-subtle border-l-2 border-navy-bold p-6 flex flex-col gap-3">
            <Label>About the forum</Label>
            <p className="font-body text-[15px] text-navy-bolder leading-[1.7]">
              The U.S. Naval Institute is a private, self-supporting, not-for-profit professional
              society that publishes <em>Proceedings</em> as part of the open forum it maintains
              for the Sea Services. The Naval Institute is not an agency of the U.S. government;
              the opinions expressed in these pages are the personal views of the authors.
            </p>
          </aside>

        </div>

        {/* Closing action, so the page ends where it began. */}
        <div className="border-t border-border-light pt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href={ARTICLE_FORM} variant="primary" size="lg">
            <i className="fa-solid fa-file-arrow-up text-[14px]" aria-hidden="true" />
            Start a submission
          </ButtonLink>
          <ButtonLink href="/proceedings/contact" variant="outline-dark" size="lg">
            Contact Proceedings
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default function ProceedingsSubmissionsContent() {
  return (
    <>
      <HowToSubmit />
      <Categories />
      <WhatHappensNext />
    </>
  )
}
