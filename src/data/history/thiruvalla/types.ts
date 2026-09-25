export type ThiruvallaTimelineType =
  | "organization"
  | "leadership"
  | "election"
  | "conference"
  | "restructuring"
  | "public-program"
  | "affiliated-wing"
  | "political-participation"
  | "other";

export interface ThiruvallaTimelineEntry {
  id: string;
  year: string;
  date?: string;
  title: string;
  summary: string;
  description: string | string[];
  type: ThiruvallaTimelineType;
  organization?: string;
  location?: string;
  people?: string[];
  sourceIds: string[];
}

export type ThiruvallaElectionType = "assembly" | "parliamentary" | "local-body";

export interface ThiruvallaElectionRecord {
  id: string;
  year: string;
  electionType: ThiruvallaElectionType;
  constituency: string;
  candidate?: string;
  organization: string;
  result: string;
  votes?: number;
  voteShare?: string;
  sourceIds: string[];
  notes?: string;
}

export type ThiruvallaOrganizationLevel = "mandalam" | "municipality" | "panchayat" | "wing" | "unit";

export interface ThiruvallaOrganizationRecord {
  id: string;
  organization: string;
  level: ThiruvallaOrganizationLevel;
  name: string;
  location: string;
  establishedYear?: string;
  officeBearers?: string[];
  parentOrganization?: string;
  period?: string;
  sourceIds: string[];
  notes?: string;
}

export interface ThiruvallaHistoricalFigure {
  id: string;
  name: string;
  period?: string;
  role: string;
  committee: string;
  electionInvolvement?: string;
  documentedContext: string;
  sourceIds: string[];
}

export type ThiruvallaSourceType =
  | "official"
  | "election"
  | "legislative"
  | "archival"
  | "academic"
  | "journalism"
  | "organizational"
  | "oral-history";

export interface ThiruvallaSource {
  id: string;
  title: string;
  publisher: string;
  year?: string;
  type: ThiruvallaSourceType;
  url?: string;
  notes?: string;
}

export interface ThiruvallaArchiveCategory {
  id: string;
  title: string;
  description: string;
  statusText?: string;
}
