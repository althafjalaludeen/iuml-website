import Link from "next/link";
import Image from "next/image";
import { EnrichedActivity, Activity } from "@/src/data/activities/types";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Divider } from "@/src/components/ui/Divider";
import { ActivityCard } from "./ActivityCard";

type ActivityDetailProps = {
  activity: EnrichedActivity;
  relatedActivities?: Activity[];
};

export function ActivityDetail({
  activity,
  relatedActivities = [],
}: ActivityDetailProps) {
  return (
    <div>
      <PageHeader
        eyebrow={activity.categoryLabel}
        title={activity.title}
        description={activity.summary}
        breadcrumbs={[
          { label: "Activities", href: "/activities" },
          {
            label: activity.categoryLabel,
            href: `/activities?category=${activity.category}`,
          },
          { label: activity.title },
        ]}
      />

      <div className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Sidebar: Metadata & Organizational Relationship */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-xs border border-charcoal/12 bg-white p-6 sm:p-7 space-y-5">
                <div>
                  <span className="block font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-primary-green">
                    Initiative Category
                  </span>
                  <p className="mt-1 font-display text-lg sm:text-xl text-charcoal">
                    {activity.categoryLabel}
                  </p>
                </div>

                {(activity.date || activity.location) && (
                  <div className="pt-4 border-t border-charcoal/8 space-y-3">
                    {activity.date && (
                      <div>
                        <span className="block font-sans text-[0.625rem] uppercase tracking-wider text-muted font-semibold">
                          Date
                        </span>
                        <span className="text-xs sm:text-sm text-charcoal/90">
                          {activity.date}
                        </span>
                      </div>
                    )}

                    {activity.location && (
                      <div>
                        <span className="block font-sans text-[0.625rem] uppercase tracking-wider text-muted font-semibold">
                          Location
                        </span>
                        <span className="text-xs sm:text-sm text-charcoal/90">
                          {activity.location}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Organization Relationship */}
                {activity.organization && (
                  <div className="pt-4 border-t border-charcoal/8 space-y-1.5">
                    <span className="block font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      Organized By
                    </span>
                    <p className="font-display text-base sm:text-lg text-deep-green font-medium">
                      {activity.organization.name}
                    </p>
                    {activity.committee && (
                      <p className="text-xs text-muted">
                        {activity.committee.name}
                        {activity.committee.location && ` (${activity.committee.location})`}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-deep-green uppercase hover:text-primary-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
                >
                  ← Return to Activities Archive
                </Link>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="lg:col-span-8 space-y-10">
              {/* Optional Cover Image */}
              {activity.coverImage && (
                <div className="relative aspect-16/9 w-full overflow-hidden rounded-xs border border-charcoal/10 bg-ivory">
                  <Image
                    src={activity.coverImage}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Main Description */}
              {activity.description && (
                <section aria-labelledby="activity-description-heading">
                  <SectionHeading
                    id="activity-description-heading"
                    eyebrow="Documentation Record"
                    title="Initiative Overview"
                  />
                  <div className="mt-4 prose prose-stone max-w-none text-body text-charcoal/85 leading-relaxed">
                    <p>{activity.description}</p>
                  </div>
                </section>
              )}

              {/* Gallery (rendered strictly if images exist) */}
              {activity.gallery && activity.gallery.length > 0 && (
                <>
                  <Divider subtle />
                  <section aria-labelledby="activity-gallery-heading">
                    <SectionHeading
                      id="activity-gallery-heading"
                      eyebrow="Media Record"
                      title="Photographic Documentation"
                      description="Photographic records archived from this initiative."
                    />
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {activity.gallery.map((imgSrc, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-4/3 overflow-hidden rounded-xs border border-charcoal/10 bg-ivory"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${activity.title} documentation photo ${idx + 1}`}
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

              {/* Related Activities in same category (strictly if exist) */}
              {relatedActivities.length > 0 && (
                <>
                  <Divider subtle />
                  <section aria-labelledby="related-activities-heading">
                    <SectionHeading
                      id="related-activities-heading"
                      eyebrow="Related Records"
                      title="Related Initiatives"
                      description={`Other documented programs in ${activity.categoryLabel}.`}
                    />
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      {relatedActivities.map((rel) => (
                        <ActivityCard key={rel.id} activity={rel} />
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
