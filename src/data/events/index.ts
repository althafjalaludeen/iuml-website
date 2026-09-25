import { Event, EventCategory, EventStatus, EnrichedEvent } from "./types";
import { events } from "./events";
import { eventCategories } from "./categories";
import { getOrganization, getCommittee } from "@/src/data/organization";
import { getActivityById } from "@/src/data/activities";

export * from "./types";
export * from "./categories";
export * from "./events";

export function getTodayIso(): string {
  const now = new Date();
  return now.toISOString().split("T")[0] ?? "2026-09-24";
}

export function computeEventStatus(event: Event): EventStatus {
  if (event.status) return event.status;

  const today = getTodayIso();
  const eventEnd = event.endDate || event.date;

  if (event.date <= today && eventEnd >= today) {
    return "ongoing";
  }
  if (event.date > today) {
    return "upcoming";
  }
  return "past";
}

export function getEvents(): Event[] {
  return events;
}

export function getEventById(id: string): Event | undefined {
  return events.find((e) => e.id === id || e.slug === id);
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug || e.id === slug);
}

export function getUpcomingEvents(): Event[] {
  return events
    .filter((e) => {
      const status = computeEventStatus(e);
      return status === "upcoming" || status === "ongoing";
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents(): Event[] {
  return events
    .filter((e) => computeEventStatus(e) === "past")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getEventsByStatus(status: "upcoming" | "past" | "all"): Event[] {
  if (status === "upcoming") return getUpcomingEvents();
  if (status === "past") return getPastEvents();
  return [...events].sort((a, b) => b.date.localeCompare(a.date));
}

export function getEventsByCategory(category: EventCategory | "all"): Event[] {
  if (category === "all") return getEvents();
  return events.filter((e) => e.category === category);
}

export function getEventsByOrganization(organizationId: string): Event[] {
  return events.filter((e) => e.organizationId === organizationId);
}

export function getEventsByCommittee(committeeId: string): Event[] {
  return events.filter((e) => e.committeeId === committeeId);
}

export function getEnrichedEvent(id: string): EnrichedEvent | undefined {
  const event = getEventById(id);
  if (!event) return undefined;

  const organization = event.organizationId ? getOrganization(event.organizationId) : undefined;
  const committee = event.committeeId ? getCommittee(event.committeeId) : undefined;
  const relatedActivity = event.relatedActivityId ? getActivityById(event.relatedActivityId) : undefined;
  const categoryInfo = event.category ? eventCategories.find((c) => c.id === event.category) : undefined;
  const computedStatus = computeEventStatus(event);

  return {
    ...event,
    organization,
    committee,
    relatedActivity,
    categoryLabel: categoryInfo?.label,
    computedStatus,
  };
}

export const eventNotices = {
  headerNotice:
    "Official schedule of upcoming conventions, working committee sessions, and institutional assemblies.",
  upcomingEmpty:
    "Upcoming programs and events will appear here once officially documented.",
  pastEmpty:
    "Past events will be added as verified records are compiled.",
  allEmpty:
    "Official records of organizational assemblies and public proceedings will appear here upon authenticated documentation.",
};
