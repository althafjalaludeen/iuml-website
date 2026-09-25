import Link from "next/link";
import { eventNotices } from "@/src/data/events";
import { cn } from "@/src/lib/cn";

type EventEmptyStateProps = {
  status: "upcoming" | "past" | "all";
  categoryLabel?: string;
  className?: string;
};

export function EventEmptyState({
  status,
  categoryLabel,
  className,
}: EventEmptyStateProps) {
  const isFiltered = Boolean(categoryLabel && categoryLabel !== "All Events");

  let eyebrow = "Event Calendar";
  let heading = "Upcoming Events & Programs";
  let note = eventNotices.upcomingEmpty;

  if (status === "past") {
    eyebrow = "Event Archive";
    heading = "Past Events & Proceedings";
    note = eventNotices.pastEmpty;
  } else if (status === "all") {
    eyebrow = "Event Registry";
    heading = "Institutional Events & Assemblies";
    note = eventNotices.allEmpty;
  }

  if (isFiltered) {
    heading = `${categoryLabel} Records`;
  }

  return (
    <div
      className={cn(
        "rounded-xs border border-charcoal/10 bg-white/70 p-8 sm:p-12 lg:p-16 text-left max-w-3xl",
        className,
      )}
    >
      <span className="font-sans text-[0.6875rem] font-semibold tracking-[0.16em] uppercase text-primary-green">
        {eyebrow}
      </span>

      <h2 className="mt-2 font-display text-2xl sm:text-3xl text-charcoal font-medium">
        {heading}
      </h2>

      <div className="mt-4 border-l border-gold/70 pl-4 py-1">
        <p className="text-body text-charcoal/85 leading-relaxed italic">
          {note}
        </p>
        <p className="mt-2 text-xs text-muted leading-relaxed">
          Official schedules for state conferences, working committee sessions, and authenticated delegate conventions are published following authorized notification.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-charcoal/8 text-xs font-semibold uppercase tracking-wider">
        <Link
          href="/activities"
          className="text-deep-green hover:text-primary-green transition-colors focus-visible:outline-2 focus-visible:outline-primary-green"
        >
          View Activities & Initiatives →
        </Link>
        <span className="text-charcoal/30" aria-hidden="true">
          ·
        </span>
        <Link
          href="/organization"
          className="text-muted hover:text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-primary-green"
        >
          Leadership Directory →
        </Link>
      </div>
    </div>
  );
}
