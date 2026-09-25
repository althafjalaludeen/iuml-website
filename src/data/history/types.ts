export type HistorySourceType =
  | "official"
  | "government"
  | "parliamentary"
  | "independent"
  | "academic";

export type HistoryCategory =
  | "foundation"
  | "constitutional"
  | "electoral"
  | "governance"
  | "parliamentary"
  | "realignment"
  | "contemporary";

export interface HistorySource {
  id: string;
  title: string;
  publisher: string;
  url?: string;
  sourceType: HistorySourceType;
  citationDate?: string;
  notes?: string;
}

export interface HistoryEntry {
  id: string;
  year: string;
  periodLabel?: string;
  startYear?: number;
  endYear?: number;
  title: string;
  summary: string;
  body?: string[];
  category: HistoryCategory;
  importance?: "major" | "standard";
  sourceIds: string[];
}

export interface HistoricalFigure {
  id: string;
  name: string;
  honorific?: string;
  lifespan?: string;
  knownRole: string;
  shortContext?: string;
  historicalContext: string;
  sourceIds: string[];
}

export interface ArchiveCategory {
  id: string;
  title: string;
  description: string;
  statusText?: string;
}
