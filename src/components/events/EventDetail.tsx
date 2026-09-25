import Link from "next/link";
import Image from "next/image";
import { EnrichedEvent, Event } from "@/src/data/events/types";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Divider } from "@/src/components/ui/Divider";
import { EventDateBadge } from "./EventDateBadge";
import { EventCard } from "./EventCard";

type EventDetailProps = {
  event: EnrichedEvent;
  relatedEvents?: Event[];
};

export function EventDetail({
  event,
  relatedEvents = [],
}: EventDetailProps) {
  const isPast = event.computedStatus === "past";

  return (
    <div>
      <PageHeader
        eyebrow={event.categoryLabel ?? "Event"}
        title={event.title}
        description={event.summary}
        breadcrumbs={[
          { label: "Events", href: "/events" },
          {
            label: event.categoryLabel ?? "Category",
            href: `/events?category=${event.category}`,
          },
          { label: event.title },
        ]}
      />

      <div className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Date, Logistics & Organization */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-xs border border-charcoal/12 bg-white p-6 sm:p-7 space-y-6">
                {/* Date Badge */}
                <div className="flex items-center gap-4">
                  <EventDateBadge
                    dateIso={event.date}
                    endDateIso={event.endDate}
                  />
                  <div>
                    <span className="block font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-primary-green">
                      Status
                    </span>
                    <span className="font-display text-lg font-medium text-charcoal capitalize">
                      {event.computedStatus}
                    </span>
                  </div>
                </div>

                {/* Logistics */}
                <div className="pt-5 border-t border-charcoal/8 space-y-3">
                  {event.startTime && (
                    <div>
                      <span className="block font-sans text-[0.625rem] uppercase tracking-wider text-muted font-semibold">
                        Schedule
                      </span>
                      <span className="text-xs sm:text-sm text-charcoal/90">
                        {event.startTime}
                        {event.endTime ? ` – ${event.endTime}` : ""}
                      </span>
                    </div>
                  )}

                  {(event.venue || event.location) && (
                    <div>
                      <span className="block font-sans text-[0.625rem] uppercase tracking-wider text-muted font-semibold">
                        Location / Venue
                      </span>
                      {event.venue && (
                        <p className="text-xs sm:text-sm font-medium text-charcoal">
                          {event.venue}
                        </p>
                      )}
                      {event.location && (
                        <p className="text-xs text-muted mt-0.5">
                          {event.location}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Organization Integration */}
                {event.organization && (
                  <div className="pt-5 border-t border-charcoal/8 space-y-1.5">
                    <span className="block font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      Organized By
                    </span>
                    <p className="font-display text-base sm:text-lg text-deep-green font-medium">
                      {event.organization.name}
                    </p>
                    {event.committee && (
                      <p className="text-xs text-muted">
                        {event.committee.name}
                        {event.committee.location && ` (${event.committee.location})`}
                      </p>
                    )}
                  </div>
                )}

                {/* Optional Registration or Contact */}
                {(event.registrationUrl || event.contact) && (
                  <div className="pt-5 border-t border-charcoal/8 space-y-3">
                    {event.registrationUrl && !isPast && (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-xs bg-deep-green px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-green focus-visible:outline-2 focus-visible:outline-primary-green"
                      >
                        Official Registration →
                      </a>
                    )}
                    {event.contact && (
                      <div>
                        <span className="block font-sans text-[0.625rem] uppercase tracking-wider text-muted font-semibold">
                          Communications Point
                        </span>
                        <p className="text-xs text-charcoal/80 mt-0.5">
                          {event.contact}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-deep-green uppercase hover:text-primary-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
                >
                  ← Return to Events Calendar
                </Link>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="lg:col-span-8 space-y-10">
              {/* Optional Cover Image */}
              {event.coverImage && (
                <div className="relative aspect-16/9 w-full overflow-hidden rounded-xs border border-charcoal/10 bg-ivory">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Event Description */}
              {event.description && (
                <section aria-labelledby="event-description-heading">
                  <SectionHeading
                    id="event-description-heading"
                    eyebrow="Event Proceedings"
                    title="Program Overview"
                  />
                  <div className="mt-4 prose prose-stone max-w-none text-body text-charcoal/85 leading-relaxed">
                    <p>{event.description}</p>
                  </div>
                </section>
              )}

              {/* Activity Integration: Link to Documented Activity Record */}
              {event.relatedActivity && (
                <>
                  <Divider subtle />
                  <section aria-labelledby="related-activity-heading">
                    <SectionHeading
                      id="related-activity-heading"
                      eyebrow="Initiative Documentation"
                      title="Related Activity Archive"
                      description="Documented public service and activity records resulting from this event."
                    />
                    <div className="mt-4 rounded-xs border border-charcoal/12 bg-white p-5">
                      <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-primary-green">
                        {event.relatedActivity.category}
                      </span>
                      <h4 className="mt-1 font-display text-xl font-medium text-charcoal">
                        {event.relatedActivity.title}
                      </h4>
                      {event.relatedActivity.summary && (
                        <p className="mt-1 text-xs text-muted">
                          {event.relatedActivity.summary}
                        </p>
                      )}
                      <Link
                        href={`/activities/${event.relatedActivity.slug || event.relatedActivity.id}`}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-deep-green hover:text-primary-green"
                      >
                        View Activity Documentation →
                      </Link>
                    </div>
                  </section>
                </>
              )}

              {/* Media Gallery (strictly when authentic gallery items exist) */}
              {event.gallery && event.gallery.length > 0 && (
                <>
                  <Divider subtle />
                  <section aria-labelledby="event-gallery-heading">
                    <SectionHeading
                      id="event-gallery-heading"
                      eyebrow="Media Record"
                      title="Photographic Proceedings"
                    />
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {event.gallery.map((imgSrc, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-4/3 overflow-hidden rounded-xs border border-charcoal/10 bg-ivory"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${event.title} proceedings photo ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-300 hover:scale-103"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              )}

              {/* Related Events (strictly when they exist) */}
              {relatedEvents.length > 0 && (
                <>
                  <Divider subtle />
                  <section aria-labelledby="related-events-heading">
                    <SectionHeading
                      id="related-events-heading"
                      eyebrow="Related Calendar"
                      title="Associated Events"
                    />
                    <div className="mt-6 grid gap-6">
                      {relatedEvents.map((rel) => (
                        <EventCard key={rel.id} event={rel} />
                      ))}
                    </div>
                  </section>
                </>
              )}
            </main>
          </div>
        </Container>
      </div>
    </div>
  );
}
