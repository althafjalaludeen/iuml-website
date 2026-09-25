/**
 * Re-export historical data layer for backward compatibility.
 * All core history types and data reside in src/data/history/
 */
export * from "./history/index";

// Backward compatibility types and placeholders
export type TimelineMilestone = {
  id: string;
  year?: string;
  date?: string;
  title: string;
  description: string;
  documentRef?: string;
  archiveNote?: string;
};

export type HistoryEra = {
  eraTitle: string;
  period?: string;
  milestones: TimelineMilestone[];
};

export const historyPlaceholders = {
  overviewNotice:
    "A chronological overview of the Indian Union Muslim League from its formation in independent India through its subsequent political, constitutional, and parliamentary development.",
  timelineNotice:
    "Historical milestones documented from authenticated primary, parliamentary, and official records.",
  archiveNotice:
    "Historical documents, photographs, and publications will be added as verified archival material is compiled and authenticated.",
};
