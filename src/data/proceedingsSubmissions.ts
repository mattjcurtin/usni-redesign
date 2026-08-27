/**
 * Proceedings submission categories.
 *
 * Transcribed from the live page at
 * /periodicals/proceedings-magazine/submission-guidelines, which lists each
 * department as a heading, a parenthetical word count, and a paragraph. The word
 * count is split out as its own field because it is the first thing a writer
 * checks — on the live page it is a `<h6>` sitting under the department name,
 * where it reads as a subtitle rather than a limit.
 */

export interface SubmissionCategory {
  name: string
  /** Ceiling, stated as the live page states it. */
  wordLimit: string
  /** True where the limit excludes endnotes, which is not true of every column. */
  endnotesExcluded?: boolean
  description: string
  /** Departments that take submissions at their own address rather than the portal. */
  email?: { address: string; label: string }
  /** Set where the staff commissions the work instead of taking it over the transom. */
  commissioned?: boolean
}

export const submissionCategories: SubmissionCategory[] = [
  {
    name: 'Feature articles',
    wordLimit: '2,500 words',
    endnotesExcluded: true,
    description:
      'These pieces deal with major issues facing the Sea Services, are instructive, accessible, offer fresh ways of looking at military matters, or describe situations and circumstances of which military professionals should be aware.',
  },
  {
    name: 'Now Hear This / Nobody Asked Me, But . . .',
    wordLimit: '650 words',
    description:
      "Both these columns are commentaries that express a reader's view on an issue of consequence to the national security community, and often challenge conventional thinking.",
  },
  {
    name: 'Comment and Discussion',
    wordLimit: '500 words',
    description:
      'The equivalent of letters to the editor, Comment and Discussion items are commentaries on articles that have run in Proceedings previously. This department is where our independent forum gets a workout and, fittingly, it has its own email address.',
    email: { address: 'commentanddiscussion@usni.org', label: 'Send a comment' },
  },
  {
    name: 'Professional Notes',
    wordLimit: '1,000 words',
    endnotesExcluded: true,
    description:
      'The oldest and among the most popular department in the magazine — the place for tips, advice, and instruction on shiphandling, small unit tactics, organization, training, or other more technical matters. Prof Notes attempt to identify and explain specific problems and, if possible, promote a solution.',
  },
  {
    name: 'Book Reviews',
    wordLimit: '650 words',
    commissioned: true,
    description:
      'All book reviews are commissioned by the editorial staff. If you would like to review books for Proceedings, send a brief email to Book Review Editor Jennifer Pompi describing your writing experience and the subjects you feel qualified to review.',
    email: { address: 'jpompi@usni.org', label: 'Email the Book Review Editor' },
  },
  {
    name: 'Leadership Forum',
    wordLimit: '1,200 words',
    description: 'A monthly departmental column devoted to lessons in leadership.',
  },
  {
    name: 'From the Deckplates',
    wordLimit: '1,000 words',
    description:
      'A column for enlisted professionals to highlight issues and problems affecting the Navy today, and to offer solutions for implementation.',
  },
]
