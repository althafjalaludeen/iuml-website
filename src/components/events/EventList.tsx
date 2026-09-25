import { Event } from "@/src/data/events/types";
import { EventCard } from "./EventCard";
import { EventEmptyState } from "./EventEmptyState";

type EventListProps = {
  events: Event[];
  status: "upcoming" | "past" | "all";
  categoryLabel?: string;
  className?: string;
};

export function EventList({
  events,
  status,
  categoryLabel,
  className,
}: EventListProps) {
  if (events.length === 0) {
    return (
      <EventEmptyState
        status={status}
        categoryLabel={categoryLabel}
        className={className}
      />
    );
  }

  return (
    <div className={className ?? "grid grid-cols-1 gap-6 lg:grid-cols-2"}>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isPast={status === "past"}
        />
      ))}
    </div>
  );
}
