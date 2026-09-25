import Link from "next/link";
import { activityNotices } from "@/src/data/activities";
import { cn } from "@/src/lib/cn";

type ActivityEmptyStateProps = {
  categoryLabel?: string;
  className?: string;
};

export function ActivityEmptyState({
  categoryLabel,
  className,
}: ActivityEmptyStateProps) {
  const isFiltered = Boolean(categoryLabel && categoryLabel !== "All Initiatives");

  return (
    <div
      className={cn(
        "rounded-xs border border-charcoal/10 bg-white/70 p-8 sm:p-12 lg:p-16 text-left max-w-3xl",
        className,
      )}
    >
      <span className="font-sans text-[0.6875rem] font-semibold tracking-[0.16em] uppercase text-primary-green">
        Activity Archive
      </span>

      <h2 className="mt-2 font-display text-2xl sm:text-3xl text-charcoal font-medium">
        {isFiltered
          ? `${categoryLabel} Documentation`
          : "Public Programs & Initiatives"}
      </h2>

      <div className="mt-4 border-l border-gold/70 pl-4 py-1">
        <p className="text-body text-charcoal/85 leading-relaxed italic">
          {isFiltered
            ? activityNotices.emptyCategory
            : activityNotices.emptyArchive}
        </p>
        <p className="mt-2 text-xs text-muted leading-relaxed">
          Official records of community initiatives, educational endeavors, and social welfare programs will be catalogued in this repository upon verification.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-charcoal/8 text-xs font-semibold uppercase tracking-wider">
        <Link
          href="/organization"
          className="text-deep-green hover:text-primary-green transition-colors focus-visible:outline-2 focus-visible:outline-primary-green"
        >
          Explore Organization Directory →
        </Link>
        <span className="text-charcoal/30" aria-hidden="true">
          ·
        </span>
        <Link
          href="/contact"
          className="text-muted hover:text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-primary-green"
        >
          Institutional Communications →
        </Link>
      </div>
    </div>
  );
}
