import { HistorySource, HistorySourceType, ArchiveCategory } from "../types";

export type KeralaHistoryCategory =
  | "formation"
  | "state-development"
  | "electoral"
  | "coalition"
  | "governance"
  | "leadership"
  | "social-political"
  | "organizational"
  | "contemporary";

export interface KeralaHistoryEntry {
  id: string;
  year: string;
  periodLabel?: string;
  startYear?: number;
  endYear?: number;
  title: string;
  summary: string;
  body?: string[];
  category: KeralaHistoryCategory;
  importance?: "major" | "standard";
  sourceIds: string[];
}

export interface KeralaHistoricalFigure {
  id: string;
  name: string;
  honorific?: string;
  lifespan?: string;
  knownRole: string;
  shortContext?: string;
  historicalContext: string;
  sourceIds: string[];
}

export type { HistorySource, HistorySourceType, ArchiveCategory };
