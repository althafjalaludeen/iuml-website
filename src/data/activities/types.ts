import { Organization, Committee } from "@/src/data/organization/types";

export type ActivityCategory =
  | "community"
  | "education"
  | "welfare"
  | "relief"
  | "youth"
  | "students"
  | "public-program"
  | "other";

export interface ActivityCategoryInfo {
  id: ActivityCategory | "all";
  label: string;
  description?: string;
}

export interface Activity {
  id: string;
  title: string;
  slug: string;
  category: ActivityCategory;
  date?: string;
  location?: string;
  organizationId?: string;
  committeeId?: string;
  summary?: string;
  description?: string;
  coverImage?: string;
  gallery?: string[];
  relatedEventId?: string;
  status?: "published" | "draft";
}

export interface EnrichedActivity extends Activity {
  organization?: Organization;
  committee?: Committee;
  categoryLabel: string;
}
