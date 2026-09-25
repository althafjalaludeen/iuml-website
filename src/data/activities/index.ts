import { Activity, ActivityCategory, EnrichedActivity } from "./types";
import { activities } from "./activities";
import { activityCategories } from "./categories";
import { getOrganization, getCommittee } from "@/src/data/organization";

export * from "./types";
export * from "./categories";
export * from "./activities";

export function getActivities(): Activity[] {
  return activities;
}

export function getPublishedActivities(): Activity[] {
  return activities.filter((a) => a.status === "published" || !a.status);
}

export function getActivityById(id: string): Activity | undefined {
  return activities.find((a) => a.id === id || a.slug === id);
}

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug || a.id === slug);
}

export function getActivitiesByCategory(category: ActivityCategory | "all"): Activity[] {
  const published = getPublishedActivities();
  if (category === "all") return published;
  return published.filter((a) => a.category === category);
}

export function getActivitiesByOrganization(organizationId: string): Activity[] {
  return getPublishedActivities().filter((a) => a.organizationId === organizationId);
}

export function getActivitiesByCommittee(committeeId: string): Activity[] {
  return getPublishedActivities().filter((a) => a.committeeId === committeeId);
}

export function getEnrichedActivity(id: string): EnrichedActivity | undefined {
  const activity = getActivityById(id);
  if (!activity) return undefined;

  const categoryInfo = activityCategories.find((c) => c.id === activity.category);
  const organization = activity.organizationId ? getOrganization(activity.organizationId) : undefined;
  const committee = activity.committeeId ? getCommittee(activity.committeeId) : undefined;

  return {
    ...activity,
    organization,
    committee,
    categoryLabel: categoryInfo?.label ?? activity.category,
  };
}

export const activityNotices = {
  headerNotice:
    "This archive catalogs documented public-facing programs and community initiatives. Entries are published as official records are verified.",
  emptyArchive:
    "Documented activities will appear here as the public archive is compiled.",
  emptyCategory:
    "No verified records are currently documented under this initiative category.",
};
