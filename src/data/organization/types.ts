export type CommitteeLevel = "district" | "mandalam" | "unit";

export interface Organization {
  id: string;
  name: string;
  shortName: string;
  description: string;
}

export interface Committee {
  id: string;
  organizationId: string;
  name: string;
  level: CommitteeLevel;
  location?: string;
  parentId?: string;
  order?: number;
  description?: string;
}

export interface Member {
  id: string;
  committeeId: string;
  name: string;
  designation: string;
  image?: string;
  biography?: string;
  responsibilities?: string[];
}

export interface EnrichedMember extends Member {
  committee: Committee;
  organization: Organization;
}
