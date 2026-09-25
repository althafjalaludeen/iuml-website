import { KeralaHistoryEntry } from "@/src/data/history/kerala/types";
import { KeralaHistoryEntryCard } from "./KeralaHistoryEntryCard";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

type KeralaHistoryTimelineProps = {
  entries: KeralaHistoryEntry[];
};

const eraAnchors = [
  { label: "1950s", anchorId: "era-post-1948-malabar" },
  { label: "1960s", anchorId: "era-coalition-speaker-1960" },
  { label: "1970s", anchorId: "era-coalition-realignment-1969" },
  { label: "1980s", anchorId: "era-coalition-udf-1980s" },
  { label: "1990s", anchorId: "era-babri-demolition-inl-split-1990s" },
  { label: "2000s", anchorId: "era-governance-union-2000s" },
  { label: "2010s–2020s", anchorId: "era-electoral-milestone-2010s-2020s" },
];

export function KeralaHistoryTimeline({ entries }: KeralaHistoryTimelineProps) {
  return (
    <section aria-labelledby="kerala-timeline-heading" className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <SectionHeading
            id="kerala-timeline-heading"
            eyebrow="Kerala Historical Timeline"
            title="Chronological Milestones in Kerala"
            description="Verified milestones of the Indian Union Muslim League in Kerala, documenting its transition from Malabar district politics through state assembly participation, legislative stewardship, and coalition ministries."
          />
        </div>

        {/* Quick decade jump navigation */}
        <nav
          aria-label="Kerala timeline quick jump by era"
          className="flex flex-wrap items-center gap-1.5 self-start md:self-end text-xs font-sans"
        >
          <span className="text-muted text-[0.6875rem] font-semibold tracking-wider uppercase mr-1">
            Era:
          </span>
          {eraAnchors.map((item) => (
            <a
              key={item.label}
              href={`#${item.anchorId}`}
              className="rounded-xs border border-charcoal/10 bg-ivory/50 px-2 py-1 text-charcoal/80 transition-colors hover:border-primary-green hover:bg-white hover:text-deep-green focus-visible:outline-2 focus-visible:outline-primary-green"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Editorial Vertical Timeline */}
      <div className="relative pt-4 max-w-4xl mx-auto lg:mx-0">
        {entries.map((entry, index) => (
          <KeralaHistoryEntryCard
            key={entry.id}
            entry={entry}
            isLast={index === entries.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
