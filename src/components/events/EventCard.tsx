import Link from "next/link";
import { Event } from "@/src/data/events/types";
import { eventCategories } from "@/src/data/events/categories";
import { getOrganization, getCommittee } from "@/src/data/organization";
import { EventDateBadge } from "./EventDateBadge";
import { cn } from "@/src/lib/cn";

type EventCardProps = {
  event: Event;
  isPast?: boolean;
  className?: string;
};

export function EventCard({
  event,
  isPast = false,
  className,
}: EventCardProps) {
  const categoryInfo = event.category
    ? eventCategories.find((c) => c.id === event.category)
    : undefined;

  const organization = event.organizationId
    ? getOrganization(event.organizationId)
    : undefined;

  const committee = event.committeeId
    ? getCommittee(event.committeeId)
    : undefined;

  const href = `/events/${event.slug || event.id}`;

  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-xs border border-charcoal/12 bg-white p-5 sm:p-6 transition-all duration-200 hover:border-primary-green/50 hover:shadow-xs",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        {/* Date block */}
        <EventDateBadge
          dateIso={event.date}
          endDateIso={event.endDate}
          className="self-start"
        />

        {/* Details */}
        <div className="flex-1 min-w-0">
          {categoryInfo && (
            <span className="block font-sans text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-primary-green">
              {categoryInfo.label}
            </span>
          )}

          <h3 className="mt-1 font-display text-xl sm:text-2xl font-medium tracking-tight text-charcoal transition-colors group-hover:text-deep-green leading-snug">
            {event.title}
          </h3>

          {/* Time & Location */}
          {(event.startTime || event.location || event.venue) && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-muted">
              {event.startTime && (
                <span>
                  {event.startTime}
                  {event.endTime ? ` – ${event.endTime}` : ""}
                </span>
              )}
              {event.startTime && (event.venue || event.location) && (
                <span className="text-charcoal/30" aria-hidden="true">
                  ·
                </span>
              )}
              {event.venue && <span>{event.venue}</span>}
              {event.venue && event.location && (
                <span className="text-charcoal/30" aria-hidden="true">
                  ·
                </span>
              )}
              {event.location && !event.venue && <span>{event.location}</span>}
            </div>
          )}

          {/* Organization & Committee */}
          {organization && (
            <p className="mt-1 font-sans text-xs text-muted">
              {organization.shortName}
              {committee ? ` · ${committee.name}` : ""}
            </p>
          )}

          {/* Summary */}
          {event.summary && (
            <p className="mt-2.5 text-xs sm:text-sm text-charcoal/80 leading-relaxed line-clamp-2">
              {event.summary}
            </p>
          )}
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="mt-5 pt-3.5 border-t border-charcoal/8 flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 font-sans text-xs font-medium tracking-wider uppercase text-deep-green transition-colors hover:text-primary-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
          aria-label={`View details for ${event.title}`}
        >
          <span>{isPast ? "View Record" : "View Event"}</span>
          <span
            className="transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            →
          </span>
        </Link>

        {isPast && (
          <span className="font-sans text-[0.625rem] uppercase tracking-wider text-muted font-medium">
            Archived Proceeding
          </span>
        )}
      </div>
    </article>
  );
}
