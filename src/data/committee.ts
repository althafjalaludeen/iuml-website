export type CommitteeMember = {
  id: string;
  name: string;
  designation: string;
  image?: string;
  shortBio?: string;
  biography?: string;
  responsibilities?: string[];
};

export type CommitteeStructure = {
  tier: string;
  description: string;
  members: CommitteeMember[];
};

/**
 * Committee registry data structure.
 * Populated only upon supply of verified, authenticated records.
 * Currently empty in adherence to data integrity requirements.
 */
export const committeeRegistry: CommitteeStructure[] = [];

export const committeePlaceholders = {
  notice:
    "[Official committee members and office-bearers will be listed here once verified names, official designations, and authenticated records are provided.]",
  structureNotice:
    "[Organizational leadership hierarchy and committee tier records are pending official authentication.]",
  memberProfileNotice:
    "[Detailed profile, official responsibilities, and biographical records will be populated from official records.]",
};
