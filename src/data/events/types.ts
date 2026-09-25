import { Organization, Committee } from "@/src/data/organization/types";
import { Activity } from "@/src/data/activities/types";

export type EventStatus = "upcoming" | "ongoing" | "past" | "cancelled";

export type EventCategory =
  | "public-program"
  | "meeting"
  | "educational"
  | "community"
  | "youth"
  | "students"
  | "welfare"
  | "cultural"
  | "other";

export interface EventCategoryInfo {
  id: EventCategory | "all";
  label: string;
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;

  date: string; // ISO format: YYYY-MM-DD
  endDate?: string; // Optional end date: YYYY-MM-DD

  startTime?: string; // e.g. "10:00 AM"
  endTime?: string; // e.g. "1:00 PM"

  location?: string;
  venue?: string;

  organizationId?: string; // references organization
  committeeId?: string; // references committee

  category?: EventCategory;

  summary?: string;
  description?: string;

  coverImage?: string;
  gallery?: string[];

  registrationUrl?: string;
  contact?: string;

  relatedActivityId?: string;

  status?: EventStatus;
}

export interface EnrichedEvent extends Event {
  organization?: Organization;
  committee?: Committee;
  relatedActivity?: Activity;
  categoryLabel?: string;
  computedStatus: "upcoming" | "ongoing" | "past" | "cancelled";
}
