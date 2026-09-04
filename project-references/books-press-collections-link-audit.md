# Books & Press collections — link audit

Audit of the eleven Books & Press subpages rebuilt as the shared collection
template. Every link in the body content of those pages was resolved against
`test-usni3.pantheonsite.io` (authenticated) on **4 September 2026**.

The client asked for broken links to be flagged rather than silently repaired:

> If feasible, flag the links that are broken — or at least note during handoff
> that links are broken on particular pages — and we can address during post-dev
> content updates prior to go-live.

Where a fix was unambiguous, the prototype uses the correct destination and the
live-site error is recorded below. Where the correct destination could not be
determined, the prototype renders the title as an unavailable reference entry.

**Scope:** 77 unique internal links, 9 external CTAs, 5 mailto addresses.

---

## 1. Dead product links (9)

These resolve to a Drupal error page. Eight return **403 Access denied**
(unpublished or access-restricted nodes); one returns **404 Page not found**.
The prototype lists all nine as titles with no product page.

| Title | Link on live site | Status | Appears on |
|---|---|---|---|
| Naval Innovation for the 21st Century | `/press/books/naval-innovation-21st-century` | 403 | Blue & Gold, Military Reading Lists |
| The Naval Institute Guide to Naval Writing, 3rd Ed. | `/press/books/naval-institute-guide-naval-writing-3rd-edition` | **404** | Blue & Gold |
| The Naval Officer's Guide, 13th Ed. | `/press/books/naval-officers-guide-13th-edition` | 403 | Blue & Gold, Military Reading Lists |
| NavCivGuide | `/press/books/navcivguide` | 403 | Blue & Gold, Military Reading Lists |
| Principles of Naval Engineering | `/press/books/principles-naval-engineering` | 403 | Blue & Gold |
| On the Corps | `/press/books/corps` | 403 | Military Reading Lists |
| Limiting Risk in America's Wars | `/press/books/limiting-risk-americas-wars` | 403 | Transforming War |
| The Other Space Race | `/press/books/other-space-race` | 403 | Transforming War |
| Red Star Over the Pacific, 2nd Ed. | `/press/books/red-star-over-pacific-second-edition` | 403 | Military Reading Lists |

A 403 rather than a 404 suggests the node still exists but is unpublished, so
these may be recoverable by republishing rather than re-authoring.

## 2. Links pointing at the wrong book (3)

These return 200, so no link checker will catch them — the link works, it just
goes to a different book than its label.

| Page | Link label | Points at | Should point at |
|---|---|---|---|
| Blue & Gold | *Petty Officer's Guide* | `/press/books/americas-first-aircraft-carrier` (**America's First Aircraft Carrier**) | `/press/books/petty-officers-guide` — **fixed in prototype** |
| Studies in Naval History & Sea Power | *Churchill's Phoney War* | `/press/books/cossac` (**COSSAC**, the next entry in the same list) | unknown — no product page found; **listed as unavailable in prototype** |
| History of Military Aviation | *Front, 1914–18* | `/press/books/selling-schweinfurt-0` (**Selling Schweinfurt**) | see §3 — this is not a book |

## 3. Content-entry error: one title split into two (1)

**History of Military Aviation.** The list contains:

- `The Bridge to Airpower: Logistics Support for Royal Flying Corps Operations on the Western` — unlinked, with the note "(Available as an eBook from Amazon and other online retailers)"
- …then, eleven entries later, `Front, 1914–18` — linked to *Selling Schweinfurt*

These are one title — *The Bridge to Airpower: Logistics Support for Royal
Flying Corps Operations on the Western Front, 1914–18* — broken across two list
items by a stray line break, with the orphaned fragment given the wrong link.
The prototype restores it as a single entry with the eBook-only note.

## 4. Malformed mailto links (3)

Written without the `mailto:` scheme, so the browser resolves them as relative
paths and the click 404s instead of opening a mail client.

| Page | Markup on live site |
|---|---|
| Blue & Gold | `<a href="scatalano@usni.org">` |
| Scarlet & Gold | `<a href="scatalano@usni.org">` |
| Essentials of Strategy | `<a href="michael.pavkovic@usnwc.edu">` |

Correctly formed on the other pages (`paul.springer@us.af.mil`,
`evan.wilson@usnwc.edu`, `mtseng@marymount.edu`, `billallison@georgiasouthern.edu`,
`william.taylor@angelo.edu`). All are `mailto:` links in the prototype.

## 5. External CTAs — could not be verified (6)

The primary calls to action on **Military Reading Lists** point at `.mil` hosts.
Every one returns **403** to an automated request regardless of user agent or
headers, which is standard DoD bot filtering — not evidence the page is gone.
**These six need a manual click-through in a browser before go-live.**

| Destination | Verified? |
|---|---|
| `navy.mil/CNO-Professional-Reading-Library/` | ❓ 403 to automation |
| `dcms.uscg.mil/…/Reading-List/` | ❓ 403 to automation |
| `af.mil/About-Us/CSAF-Leadership-Library/` | ❓ 403 to automation |
| `army.mil/leaders/csa/readinglist/` | ❓ 403 to automation |
| `starcom.spaceforce.mil/News/Article-Display/Article/3664037/…` | ❓ 403 to automation |
| `nssi.spaceforce.mil/` | ✅ 200 |
| `grc-usmcu.libguides.com/cmc-reading-list/about` | ✅ 200 |
| `amedd.libguides.com/c.php?g=566155&p=3905794` | ✅ 200 |
| `mhptpodcast.com/` (War on Film) | ✅ 200 |

## 6. Stale content (not a link problem, but flagging it)

Independent of link health, the **Military Reading Lists** copy is visibly out
of date in three places:

- **Air Force CSAF Leadership Library** — the quoted introduction is signed
  *Gen. Charles Q. Brown, Jr., Chief of Staff*. He left that post in 2023. The
  page has almost certainly moved along with the content.
- **Coast Guard Leadership Development List** — copy describes the *2022* list.
- **Space Force NSSI list** — copy describes the *2024* list.

Four of the nine lists show "None listed at this time" where their Press titles
should be: Coast Guard, Air Force, Army, and the Chairman of the Joint Chiefs.
Worth a pass to confirm that is still accurate.

---

## Titles listed with no product page (18)

Not errors — the Press lists these in a collection but sells no edition here.
Two carry a retailer note the Press already publishes; the rest have none. The
client's position is that "the books should all be linked, ideally," so this is
the working list for that pass. A site search for each of the 18 found a product
page for only one (*Cassandra in Oz* → `/press/books/cassandra-oz-0`, now linked
in the prototype), which suggests the other 17 are genuinely out of catalog.

**Blue & Gold (5)** — The Citizen's Guide to the U.S. Navy · Dictionary of
Modern Strategy and Tactics · Dictionary of Naval Abbreviations, 4th Ed. ·
Operations Officer's Guide · A Sailor's History of the U.S. Navy

**History of Military Aviation (6)** — The Bridge to Airpower *(eBook only,
per the Press)* · Flight Risk · From Kites to Cold War · "The Man Who Took the
Rap" · The Origins of American Strategic Bombing Theory · Rear Admiral Herbert
V. Wiley

**Studies in Naval History & Sea Power (4)** — Admiral John S. McCain and the
Triumph of Naval Air Power · Churchill's Phoney War *(see §2)* · Progressives in
Navy Blue · Victory without Peace

**Transforming War (1)** — An Untaken Road *(print on demand, per the Press)*

**Scarlet & Gold (1)** — On the Corps *(also a dead link on Military Reading
Lists — see §1)*

**Military Reading Lists (1 additional)** — Shiphandling Fundamentals for
Littoral Combat Ships and the New Frigates

---

## Notes on how this was checked

- All internal links were resolved against the Pantheon test environment with
  HTTP basic auth, following redirects. Several Press product paths 301 to a
  truncated slug (Drupal's path-alias length limit) — e.g.
  `international-law-seagoing-officers-7th-edition` →
  `…-7th-editi`. Those are working links; a checker that does not follow
  redirects will report them as broken.
- `www.usni.org` returns 403 to all automated requests, so production could not
  be used as a control. Findings above are from the test environment.
- Duplicate destinations were compared against their link labels, which is how
  the wrong-book links in §2 surfaced. A conventional link checker reports these
  as healthy.
