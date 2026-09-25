/**
 * Backward compatibility re-export for events data.
 * Canonical data architecture resides in src/data/events/
 */
export * from "./events/index";

export const eventsPlaceholders = {
  overviewNotice:
    "Official schedule of upcoming conventions, working committee sessions, and institutional assemblies.",
  upcomingNotice:
    "Upcoming programs and events will appear here once officially documented.",
  pastNotice:
    "Past events will be added as verified records are compiled.",
};
