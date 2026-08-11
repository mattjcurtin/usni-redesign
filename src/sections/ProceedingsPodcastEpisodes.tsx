import { useState } from 'react'
import Pagination from '@/components/ui/Pagination'

interface Episode {
  title: string
  date: string
  year: number
  description: string
  /** Real SoundCloud track ID from soundcloud.com/naval-institute */
  trackId: number
  /** Naval History Podcast episodes (distinct show art comes through the embed) */
  navalHistory?: boolean
}

const episodes: Episode[] = [
  {
    title: 'EP. 510: News Update—Navy Budget, Shipbuilding, and Operation Epic Fury',
    date: '31 July 2026',
    year: 2026,
    description:
      "Bill Hamblet, Sam LaGrone, and Brian O'Rourke talk about the Navy's budget, shipbuilding, Operation Epic Fury, and recruiting and retention.",
    trackId: 2372873876,
  },
  {
    title: "EP. 509: Razor's Edge: New Shaving Policy Could Cost the Navy Sailors",
    date: '24 July 2026',
    year: 2026,
    description:
      "Host Bill Hamblet interviews John Cordle about the Navy's new shaving policy and its potential impact on sailors affected by pseudofolliculitis barbae (PFB). They discuss the medical condition, readiness, retention, leadership, and whether changes to grooming standards could unintentionally affect recruiting, careers, and the fleet's overall effectiveness.",
    trackId: 2367305228,
  },
  {
    title: 'EP. 508: Lessons from F-35 Accidents and Naval Aviation Safety',
    date: '15 July 2026',
    year: 2026,
    description:
      'Host Bill Hamblet sits down with Captain Robert Niewoehner, U.S. Navy (Retired), and Jefferson D. Grubb, head of the Operations Research Division at the Naval Safety Command, to examine lessons from recent F-35 mishaps, the evolution of naval aviation safety, and how institutional learning can help build a safer, stronger fleet.',
    trackId: 2361298835,
  },
  {
    title: 'Patriots for Hire? The Privateers of 1776',
    date: '09 July 2026',
    year: 2026,
    description:
      'This episode explores the story of the privateer Oliver Cromwell, Captain Joseph Lee, and the high-risk business of Revolutionary War privateering.',
    trackId: 2356336499,
    navalHistory: true,
  },
  {
    title: 'EP. 507: The Future of Navy Recruiting and Retention with the Hon. Ben Kohlmann, ASN M&RA',
    date: '09 July 2026',
    year: 2026,
    description:
      'Host Bill Hamblet talks with the Honorable Ben Kohlmann, Assistant Secretary of the Navy for Manpower and Reserve Affairs, about the future of the fleet.',
    trackId: 2356349657,
  },
  {
    title: 'EP. 506: The Stoic Anchor: Resilience, Readiness, and the Future of Naval Leadership',
    date: '02 July 2026',
    year: 2026,
    description:
      'A new voluntary program at the U.S. Naval Academy is using Stoic philosophy to help midshipmen build resilience, moral clarity, and inner discipline during Plebe Summer.',
    trackId: 2352153617,
  },
  {
    title: 'Naval History Podcast: Requiem for a Flyer',
    date: '02 July 2026',
    year: 2026,
    description:
      'Naval History Editor-in-Chief Emily Abdow brings a first-person account from the pages of Naval History to life.',
    trackId: 2355080069,
    navalHistory: true,
  },
  {
    title: 'EP. 505: When “Figure It Out” Becomes Bad Leadership',
    date: '01 July 2026',
    year: 2026,
    description:
      'For generations, “A Message to Garcia” has been used to celebrate initiative and getting the job done. But Captain Jonathan Corbin, U.S. Marine Corps, argues that “figure it out” leadership can go too far. This episode explores why true decentralized command requires clear intent, useful context, and a culture where smart questions are encouraged—not punished.',
    trackId: 2351328233,
  },
  {
    title: "Naval History Podcast: Midway's Unsung Hero: The Long Fight to Honor Codebreaker Joe Rochefort",
    date: '02 July 2026',
    year: 2026,
    description:
      'Host Emily Abdow talks to author Ed Offley about his article on the quest to award the unsung codebreaking hero of the Battle of Midway, Commander Joe Rochefort, the Distinguished Service Medal.',
    trackId: 2352148463,
    navalHistory: true,
  },
  {
    title: 'EP. 504: Why Wargames Get Cyber Wrong',
    date: '22 June 2026',
    year: 2026,
    description:
      'In this episode, Lieutenant Mary Racicot, U.S. Navy, joins the Proceedings Podcast to discuss why joint wargames may be training commanders to misunderstand cyber operations.',
    trackId: 2344159646,
  },
]

function EpisodePlayer({ trackId, title }: { trackId: number; title: string }) {
  const src =
    'https://w.soundcloud.com/player/?url=' +
    encodeURIComponent(`https://api.soundcloud.com/tracks/${trackId}`) +
    '&color=%23023e7d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true'
  return (
    <iframe
      title={`SoundCloud player: ${title}`}
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      loading="lazy"
      allow="autoplay"
      src={src}
      className="mt-5"
    />
  )
}

function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <article className="py-8 lg:py-10">
      <div className="min-w-0">
        <h3 className="font-body font-bold text-[19px] lg:text-[21px] text-navy-bolder leading-snug">
          <a href="#" className="hover:text-navy-subtle transition-colors">{episode.title}</a>
        </h3>
        <p className="font-body font-semibold text-sm uppercase tracking-[0.08em] text-neutral-subtle mt-2">
          {episode.date}
        </p>
        <p className="font-body text-base text-[#1d2535] leading-relaxed mt-3">
          {episode.description}
        </p>
        <EpisodePlayer trackId={episode.trackId} title={episode.title} />
      </div>
    </article>
  )
}

export default function ProceedingsPodcastEpisodes() {
  const [year, setYear] = useState('all')

  const filtered = episodes.filter((ep) => year === 'all' || ep.year === Number(year))

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-site max-w-[1000px]">

        {/* ── Intro ── */}
        <div className="font-body text-base lg:text-lg text-[#1d2535] leading-relaxed space-y-5">
          <p>
            Every week, the Proceedings Podcast covers a wide range of topics and brings the pages of{' '}
            <em>Proceedings</em> and <em>Naval History</em> to life.
          </p>
          <p>
            Join the Editor-in-Chief of Proceedings, Bill Hamblet, and Editor-in-Chief of Naval History, Emily
            Abdow, as they host a variety of <em>Proceedings</em> and <em>Naval History</em> authors and naval
            leaders &ldquo;in the know&rdquo; to discuss issues facing the Sea Services and explore the latest
            trending topics and stories from <em>USNI News</em>.
          </p>
          <p>
            Whether you're a history major at the U.S. Naval Academy, or you just want to broaden your knowledge
            base, the best <em>Naval History</em> editions are great for anyone looking to add naval history to
            their media diet. Join Naval History Editor-in-Chief Emily Abdow as she dives into{' '}
            <em>Naval History</em> articles, offers first-person accounts, and discusses well known and not so
            well known events in naval history to help inform opinions by understanding naval historical context.
          </p>
        </div>

        {/* ── Episodes heading + year filter ── */}
        <div className="flex flex-wrap items-end justify-between gap-4 mt-12">
          <h2 className="font-headline text-[32px] lg:text-[40px] text-[#060a0a] leading-[1.1]">
            Episodes
          </h2>
          <label className="flex flex-col gap-1.5">
            <span className="font-body font-semibold text-sm uppercase tracking-[0.08em] text-navy-bolder">
              Year
            </span>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="select-field font-body text-sm text-navy-bolder border border-[#94A3B8] px-3 py-2.5 pr-8 outline-none focus:border-navy-bright focus:shadow-[0_0_0_3px_rgba(4,102,200,0.15)] bg-white transition"
              aria-label="Filter episodes by year"
            >
              <option value="all">All Years</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>
          </label>
        </div>

        {/* ── Light accent separator between the filter row and episodes ── */}
        <div className="bg-[#C2DDFF] h-px w-full mt-6" />

        {/* ── Episode list ── */}
        {filtered.length > 0 ? (
          <div className="divide-y divide-[#d5dbe3]">
            {filtered.map((episode) => (
              <EpisodeCard key={episode.title} episode={episode} />
            ))}
          </div>
        ) : (
          <p className="font-body text-lg text-neutral-subtle py-12 text-center">
            No episodes match the selected year.
          </p>
        )}

        {/* ── Pagination (demo) ── */}
        <div className="mt-10">
          <Pagination label="Episode pagination" />
        </div>

      </div>
    </section>
  )
}
