import Link from "next/link";
import Image from "next/image";
import { Activity } from "@/src/data/activities/types";
import { activityCategories } from "@/src/data/activities/categories";
import { cn } from "@/src/lib/cn";

type ActivityCardProps = {
  activity: Activity;
  featured?: boolean;
  className?: string;
};

export function ActivityCard({
  activity,
  featured = false,
  className,
}: ActivityCardProps) {
  const categoryInfo = activityCategories.find((c) => c.id === activity.category);
  const categoryLabel = categoryInfo?.label ?? activity.category;
  const href = `/activities/${activity.slug || activity.id}`;

  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-xs border border-charcoal/12 bg-white transition-all duration-200 hover:border-primary-green/50 hover:shadow-xs",
        featured ? "lg:col-span-2 lg:grid lg:grid-cols-12 lg:items-stretch" : "",
        className,
      )}
    >
      <div className={featured ? "lg:col-span-6 flex flex-col" : "flex flex-col"}>
        {/* Cover Image or Dignified Typographic Placeholder */}
        {activity.coverImage ? (
          <div className="relative aspect-16/9 w-full overflow-hidden border-b border-charcoal/8 bg-ivory">
            <Image
              src={activity.coverImage}
              alt={activity.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-103"
            />
          </div>
        ) : (
          <div className="h-28 sm:h-32 w-full border-b border-charcoal/8 bg-ivory/60 flex flex-col items-center justify-center p-3 text-center">
            <span className="font-display text-base font-semibold tracking-wider text-deep-green uppercase">
              IUML Archive
            </span>
            <span className="mt-1 font-sans text-[0.625rem] tracking-[0.14em] text-muted/80 uppercase font-medium">
              DOCUMENTATION RECORD
            </span>
          </div>
        )}

        {/* Card Content */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          <span className="block font-sans text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-primary-green">
            {categoryLabel}
          </span>

          <h3 className="mt-1.5 font-display text-xl sm:text-2xl font-medium tracking-tight text-charcoal transition-colors group-hover:text-deep-green leading-snug">
            {activity.title}
          </h3>

          {(activity.date || activity.location) && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-muted">
              {activity.date && <span>{activity.date}</span>}
              {activity.date && activity.location && (
                <span className="text-charcoal/30" aria-hidden="true">
                  ·
                </span>
              )}
              {activity.location && <span>{activity.location}</span>}
            </div>
          )}

          {activity.summary && (
            <p className="mt-3 text-xs sm:text-sm text-charcoal/80 leading-relaxed line-clamp-3">
              {activity.summary}
            </p>
          )}
        </div>
      </div>

      {/* Footer / CTA */}
      <div
        className={cn(
          "border-t border-charcoal/8 px-5 py-3.5 sm:px-6",
          featured ? "lg:col-span-6 lg:border-t-0 lg:border-l lg:flex lg:flex-col lg:justify-between lg:p-6" : "",
        )}
      >
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 font-sans text-xs font-medium tracking-wider uppercase text-deep-green transition-colors hover:text-primary-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
          aria-label={`View documentation for ${activity.title}`}
        >
          <span>View Activity</span>
          <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
