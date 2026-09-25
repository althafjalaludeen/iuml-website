import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPublishedActivities,
  getEnrichedActivity,
  getActivitiesByCategory,
} from "@/src/data/activities";
import { ActivityDetail } from "@/src/components/activities/ActivityDetail";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const published = getPublishedActivities();
  return published.map((activity) => ({
    id: activity.slug || activity.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const activity = getEnrichedActivity(id);

  if (!activity) {
    return {
      title: "Activity Not Found",
    };
  }

  return {
    title: `${activity.title} · Activities`,
    description:
      activity.summary ||
      `Documentation of ${activity.title} under ${activity.categoryLabel}.`,
  };
}

export default async function ActivityPage({ params }: Props) {
  const { id } = await params;
  const activity = getEnrichedActivity(id);

  if (!activity) {
    notFound();
  }

  const related = getActivitiesByCategory(activity.category).filter(
    (a) => a.id !== activity.id,
  );

  return <ActivityDetail activity={activity} relatedActivities={related} />;
}
