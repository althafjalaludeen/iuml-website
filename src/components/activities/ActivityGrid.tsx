import { Activity } from "@/src/data/activities/types";
import { ActivityCard } from "./ActivityCard";
import { ActivityEmptyState } from "./ActivityEmptyState";

type ActivityGridProps = {
  activities: Activity[];
  categoryLabel?: string;
  className?: string;
};

export function ActivityGrid({
  activities,
  categoryLabel,
  className,
}: ActivityGridProps) {
  if (activities.length === 0) {
    return <ActivityEmptyState categoryLabel={categoryLabel} className={className} />;
  }

  const hasFeatured = activities.length >= 3;

  return (
    <div
      className={
        className ??
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {activities.map((activity, idx) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          featured={hasFeatured && idx === 0}
        />
      ))}
    </div>
  );
}
