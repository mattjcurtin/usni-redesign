# Account section — audit of the live Drupal site

Source: `https://test-usni3.pantheonsite.io`, signed in as a staff account.
Account identifiers are omitted deliberately — this repository is public.
Captured 18 August 2026.
Screenshots: `current-website-screenshots/account/account-*.png`

## Shared template

Every account page uses the same shell:

- Page banner — solid blue on subpages, photographic on My Account, page title centred
- Two columns: a light-blue **sidebar card** (avatar, "Edit Photo", salutation + surname,
  then the account nav as stacked rows with arrow icons) and a wide right content area
- Quicklinks block + site footer below

The My Account banner adds "Welcome to the U.S. Naval Institute" and the member's
salutation + surname in gold ("Ms. Curtin" — note it uses salutation, not first name).

## Account navigation, as configured

From the `account` menu. Enabled, in order:

| Label | Path |
| --- | --- |
| My Account | `/user/{alias}` |
| Edit Account | `/user/{uid}/edit` |
| Address Book | `/user/{uid}/address-book?profile_type=customer` |
| Orders | `/user/{uid}/orders` |
| Payment Methods | `/user/{uid}/payment-methods` |
| API Keys | `/user/{uid}/key-auth` |
| Partner Discounts | `/partners` |
| Wishlist | `/wishlist` |
| Log Out | `/user/logout?token=…` |

Disabled links still in the menu: "My account" (duplicate of the first), Postgraduate RSS
(`/api/v1/postgraduate-school`), Open Access Survey (`/user/open-access-survey`).

Drupal also exposes tabs the account menu omits: Submissions (`/user/{uid}/submissions`),
Manage display, Salesforce. The Salesforce tab returns a 500 on this environment.

## Page by page

### My Account
1. Gold **Refresh Memberships** button
2. `USNI Member #: <member number>`
3. **Membership and Subscription Information** panel (navy header bar). Live content today:
   *"Your Membership information is temporarily unavailable online. Please contact Member
   Services with any Membership related questions. Thank You."*
4. **My Bookmarks** — "No bookmarks available."
5. **Member Updates** — paginated feed of promo posts (`member_update` content type), each
   with a red "Member Update" eyebrow, headline, one-line blurb, and a Read More button.
   Five on page one: summer membership sale, America 250, Proceedings archive, Ship's Store
   discount, 250th sale extension.

That is the entire landing page. No dues, no renewal date, no order summary, no
subscription list.

### Edit Account
One long Drupal form. Member-relevant fields, in source order:

- **Name / service:** First Name, Last Name, Service, Military Status, Rank/Title, Suffix,
  Graduation year
- **Credentials:** Current password, Email address, Username, Password, Confirm password
- **Contact:** Phone, Accept text messages
- **Photo:** user picture upload
- **Address:** Country, Street address, line 2, line 3, City, State, Zip code
- **Locale:** Site language

Also present because this account is an admin, and *not* part of the member experience:
account status (Blocked/Active), the full role checkbox list, and URL alias settings.

### Address Book
Empty state: "There are no addresses yet." Profile type `customer`.

### Orders
Heading "Your Orders" plus a standing notice: recently placed orders may take a few minutes
to appear, contact USNI Support if it looks wrong, with a Contact Us link.

The table is the `commerce_user_orders` view — columns **Order number | Date (Placed) |
Total | State**, filtered to the current customer and excluding Draft orders. This account
has no orders, so only the notice renders; the table is absent rather than showing an
empty row.

### Payment Methods
Table columns **Payment method | Expires | Operations**. Empty state: "There are no payment
methods yet."

### Wishlist
"Your wishlist is empty." with a Browse Books link.

### Partner Discounts
Not account data — a content node listing member perks: Enterprise, Alamo, and National car
rental, plus the Brooks Brothers Corporate Membership Program (15% off).

## Platform notes that shape what an account page can show

- **Drupal Commerce** with order types `default`, `combined`, `subscription`, `donation`;
  product types `subscription` and `donation`; a `subscription_term` product attribute.
  So subscriptions and donations are already modelled as commerce entities.
- **Roles** that encode entitlements: `online_member`, `proceedings_subscriber`,
  `naval_history_subscriber`, `combat_fleets_subscriber`, `api_subscriber`.
- **Salesforce** is integrated per-user. Membership status appears to be read from
  Salesforce rather than stored in Drupal, which is what the "Refresh Memberships" button
  and the "temporarily unavailable" fallback are about.
- There is **no** `/user/{uid}/subscriptions` or `/memberships` route. Membership term,
  renewal date, and auto-renew have no member-facing surface at all.

## Gaps worth fixing in the redesign

1. **The landing page leads with promos, not the member's own status.** The one piece of
   personal data above the fold is a member number and an apology. A member arriving here
   most likely wants: am I current, when do I renew, what am I paying, what do I get.
2. **Membership status degrades to a phone number.** Whatever the Salesforce dependency,
   the design should have a real status card — plan, term, expiry, auto-renew state, and
   entitlements — with the "unavailable" copy as a fallback state, not the default.
3. **Renewal is invisible.** No renew action, no auto-renew toggle, no payment-on-file link
   from the membership context. The checkout flow can already express all of this.
4. **Orders and giving are one undifferentiated (empty) list.** Commerce already separates
   `donation` from `subscription` and product orders. Members think of "my magazines", "my
   orders", and "my giving" as three different things, and gift receipts have a tax purpose
   that book receipts do not.
5. **Nothing connects to the confirmation receipts.** The prototype now mints order numbers
   at checkout; order history is where a member goes to find one again.
6. **No communication preferences.** The newsletter form collects six interests and an email
   format at signup, with no way to revisit them from the account.
7. **Bookmarks are present but undeveloped** — an empty heading. Saved articles are a real
   reason for a metered publisher's account to exist.
8. **Nav mixes audiences.** API Keys serves a handful of API subscribers; Partner Discounts
   is marketing content; Submissions is hidden from the menu but exists. Worth separating
   "my stuff" from "member benefits" from "developer".
