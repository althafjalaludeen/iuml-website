/**
 * Backward compatibility re-export for activities data.
 * Canonical data architecture resides in src/data/activities/
 */
export * from "./activities/index";

export const activitiesPlaceholders = {
  overviewNotice:
    "Public initiatives, welfare programs, educational endeavors, and civic services will be catalogued here upon verification of official program documentation.",
  categoryNotice:
    "Programs and initiatives categorized by department will be displayed once verified documentation is provided.",
};
