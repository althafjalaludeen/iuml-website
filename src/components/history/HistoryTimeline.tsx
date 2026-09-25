import { HistoryEntry } from "@/src/data/history/types";
import { HistoryEntryCard } from "./HistoryEntryCard";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

type HistoryTimelineProps = {
  entries: HistoryEntry[];
};

export function HistoryTimeline({ entries }: HistoryTimelineProps) {
  return (
    <section aria-labelledby="timeline-heading" className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <SectionHeading
            id="timeline-heading"
            eyebrow="Chronological Record"
            title="National Historical Timeline"
            description="Documented milestones of the Indian Union Muslim League in independent India, from its founding convention in 1948 to contemporary legislative engagement."
          />
        </div>

        {/* Quick decade jump navigation */}
        <nav
          aria-label="Timeline quick jump"
          className="flex flex-wrap items-center gap-1.5 self-start md:self-end text-xs font-sans"
        >
          <span className="text-muted text-[0.6875rem] font-semibold tracking-wider uppercase mr-1">
            Jump to:
          </span>
          {entries.map((entry) => (
            <a
              key={entry.id}
              href={`#era-${entry.id}`}
              className="rounded-xs border border-charcoal/10 bg-ivory/50 px-2 py-1 text-charcoal/80 transition-colors hover:border-primary-green hover:bg-white hover:text-deep-green focus-visible:outline-2 focus-visible:outline-primary-green"
            >
              {entry.year}
            </a>
          ))}
        </nav>
      </div>

      {/* Editorial Vertical Timeline */}
      <div className="relative pt-4 max-w-4xl mx-auto lg:mx-0">
        {entries.map((entry, index) => (
          <HistoryEntryCard
            key={entry.id}
            entry={entry}
            isLast={index === entries.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
