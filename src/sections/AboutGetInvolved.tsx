import { ButtonLink, NavyButtonLink } from '@/components/ui/Button'

/**
 * Closing call to action, carrying the mission-and-vision page's last line —
 * "Raise your voice and get involved in this crucial mission."
 */
export default function AboutGetInvolved() {
  return (
    <section className="py-16 lg:py-20 bg-surface-subtle">
      <div className="container-site">
        <div className="max-w-[760px] mx-auto flex flex-col items-center text-center gap-6">
          <div className="eyebrow-headline items-center">
            <p className="eyebrow">Get Involved</p>
            <h2 className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1]">
              Raise your voice in this crucial mission
            </h2>
          </div>
          <p className="font-body text-base lg:text-lg text-neutral-subtle leading-relaxed">
            The forum only works because people take part in it. Join as a member, write for
            Proceedings or Naval History, or support the Institute with a gift.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-1">
            <NavyButtonLink href="/membership/join">Become a Member</NavyButtonLink>
            <ButtonLink href="/essay-contests" variant="outline-dark" size="md">
              Enter an Essay Contest
            </ButtonLink>
            <ButtonLink href="/giving/donate" variant="outline-dark" size="md">
              Support the Institute
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
