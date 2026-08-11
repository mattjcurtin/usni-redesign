/**
 * Option data for the essay submission form.
 *
 * Ranks are keyed by service because the live form's Rank/Title list is a single
 * flat menu of every rank across every branch plus civilian honorifics — a Navy
 * lieutenant has to scroll past Marine and Coast Guard ranks to find theirs.
 * Keying the list to the selected service cuts it to the relevant options.
 */

export const countries = [
  'United States',
  'Australia',
  'Brazil',
  'Canada',
  'Chile',
  'Denmark',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'India',
  'Indonesia',
  'Italy',
  'Japan',
  'Netherlands',
  'New Zealand',
  'Norway',
  'Philippines',
  'Poland',
  'Portugal',
  'Singapore',
  'South Korea',
  'Spain',
  'Sweden',
  'Taiwan',
  'Turkey',
  'United Kingdom',
  'Other',
]

export const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

export const services = [
  'Civilian',
  'U.S. Navy',
  'U.S. Marine Corps',
  'U.S. Coast Guard',
  'U.S. Army',
  'U.S. Air Force',
  'U.S. Space Force',
  'U.S. Merchant Marine',
  'Foreign Military',
]

export const militaryStatuses = [
  'Civilian',
  'Active Duty',
  'Reserve',
  'Retired',
  'Veteran — U.S. Navy',
  'Veteran — U.S. Marine Corps',
  'Veteran — U.S. Coast Guard',
  'Veteran — U.S. Army',
  'Veteran — U.S. Air Force',
  'Midshipman / Cadet',
]

export const suffixes = ['Jr.', 'Sr.', 'II', 'III', 'IV', 'USN (Ret.)', 'USMC (Ret.)', 'USCG (Ret.)']

const civilianTitles = [
  'Ambassador (Amb. Civilian)',
  'Dr.',
  'Professor',
  'The Honorable',
  'Mr.',
  'Ms.',
  'Mrs.',
  'Mx.',
]

const navyRanks = [
  'Seaman Recruit', 'Seaman Apprentice', 'Seaman',
  'Petty Officer Third Class', 'Petty Officer Second Class', 'Petty Officer First Class',
  'Chief Petty Officer', 'Senior Chief Petty Officer', 'Master Chief Petty Officer',
  'Midshipman', 'Warrant Officer', 'Chief Warrant Officer',
  'Ensign', 'Lieutenant (junior grade)', 'Lieutenant',
  'Lieutenant Commander', 'Commander', 'Captain',
  'Rear Admiral (lower half)', 'Rear Admiral', 'Vice Admiral', 'Admiral',
]

const marineRanks = [
  'Private', 'Private First Class', 'Lance Corporal', 'Corporal', 'Sergeant',
  'Staff Sergeant', 'Gunnery Sergeant', 'Master Sergeant', 'First Sergeant',
  'Master Gunnery Sergeant', 'Sergeant Major',
  'Warrant Officer', 'Chief Warrant Officer',
  'Second Lieutenant', 'First Lieutenant', 'Captain', 'Major',
  'Lieutenant Colonel', 'Colonel',
  'Brigadier General', 'Major General', 'Lieutenant General', 'General',
]

const coastGuardRanks = [
  'Seaman Recruit', 'Seaman Apprentice', 'Seaman',
  'Petty Officer Third Class', 'Petty Officer Second Class', 'Petty Officer First Class',
  'Chief Petty Officer', 'Senior Chief Petty Officer', 'Master Chief Petty Officer',
  'Cadet', 'Warrant Officer', 'Chief Warrant Officer',
  'Ensign', 'Lieutenant (junior grade)', 'Lieutenant',
  'Lieutenant Commander', 'Commander', 'Captain',
  'Rear Admiral (lower half)', 'Rear Admiral', 'Vice Admiral', 'Admiral',
]

const armyAirRanks = [
  'Private', 'Specialist', 'Corporal', 'Sergeant', 'Staff Sergeant',
  'Sergeant First Class', 'Master Sergeant', 'First Sergeant', 'Sergeant Major',
  'Cadet', 'Warrant Officer', 'Chief Warrant Officer',
  'Second Lieutenant', 'First Lieutenant', 'Captain', 'Major',
  'Lieutenant Colonel', 'Colonel',
  'Brigadier General', 'Major General', 'Lieutenant General', 'General',
]

const merchantMarineRanks = [
  'Cadet', 'Third Mate', 'Second Mate', 'Chief Mate', 'Master',
  'Third Assistant Engineer', 'Second Assistant Engineer', 'First Assistant Engineer',
  'Chief Engineer',
]

/** Rank/Title options for a given Service selection. */
export function ranksForService(service: string): string[] {
  switch (service) {
    case 'U.S. Navy':
      return navyRanks
    case 'U.S. Marine Corps':
      return marineRanks
    case 'U.S. Coast Guard':
      return coastGuardRanks
    case 'U.S. Army':
    case 'U.S. Air Force':
    case 'U.S. Space Force':
      return armyAirRanks
    case 'U.S. Merchant Marine':
      return merchantMarineRanks
    case 'Foreign Military':
      return [...navyRanks, 'Other — specify in Author Bio']
    case 'Civilian':
    default:
      return civilianTitles
  }
}

export const AUTHOR_BIO_MAX = 1000
export const ESSAY_TITLE_MAX = 80
export const FILE_MAX_MB = 100
export const ALLOWED_FILE_EXT = '.docx'
