export type PathanamthittaTimelineType =
  | "organization"
  | "leadership"
  | "election"
  | "conference"
  | "restructuring"
  | "public-program"
  | "affiliated-wing"
  | "political-participation"
  | "other";

export interface PathanamthittaTimelineEntry {
  id: string;
  year: string;
  date?: string;
  title: string;
  summary: string;
  description: string | string[];
  type: PathanamthittaTimelineType;
  organization?: string;
  location?: string;
  people?: string[];
  sourceIds: string[];
}

export type PathanamthittaElectionType = "assembly" | "parliamentary" | "local-body";

export interface PathanamthittaElectionRecord {
  id: string;
  year: string;
  electionType: PathanamthittaElectionType;
  constituency: string;
  candidate?: string;
  organization: string;
  result: string;
  votes?: number;
  voteShare?: string;
  sourceIds: string[];
  notes?: string;
}

export type OrganizationLevel = "district" | "mandalam" | "municipality" | "panchayat" | "wing";

export interface PathanamthittaOrganizationRecord {
  id: string;
  organization: string;
  level: OrganizationLevel;
  name: string;
  location: string;
  establishedYear?: string;
  officeBearers?: string[];
  parentOrganization?: string;
  period?: string;
  sourceIds: string[];
  notes?: string;
}

export interface PathanamthittaHistoricalFigure {
  id: string;
  name: string;
  period?: string;
  designation: string;
  organization: string;
  constituency?: string;
  biography: string;
  responsibilities?: string[];
  sourceIds: string[];
}

export type PathanamthittaSourceType =
  | "official"
  | "election"
  | "legislative"
  | "archival"
  | "academic"
  | "journalism"
  | "organizational"
  | "oral-history";

export interface PathanamthittaSource {
  id: string;
  title: string;
  publisher: string;
  year?: string;
  type: PathanamthittaSourceType;
  url?: string;
  notes?: string;
}

export interface PathanamthittaArchiveCategory {
  id: string;
  title: string;
  description: string;
  statusText?: string;
}
