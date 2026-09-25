import { HistoryEntry } from "@/src/data/history/types";
import { getSourcesByIds } from "@/src/data/history/sources";
import { cn } from "@/src/lib/cn";

type HistoryEntryCardProps = {
  entry: HistoryEntry;
  isLast?: boolean;
};

const sourceTypeLabels: Record<string, string> = {
  official: "Official IUML Record",
  government: "Government / ECI Record",
  parliamentary: "Parliamentary Proceeding",
  independent: "Independent Reporting",
  academic: "Academic Research",
};

export function HistoryEntryCard({
  entry,
  isLast = false,
}: HistoryEntryCardProps) {
  const sources = getSourcesByIds(entry.sourceIds);

  return (
    <article
      id={`era-${entry.id}`}
      className="relative pl-7 sm:pl-10 pb-12 sm:pb-16 last:pb-0"
      aria-labelledby={`heading-${entry.id}`}
    >
      {/* Vertical Timeline Guide Line */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-[11px] sm:left-[15px] top-4 bottom-0 w-[2px] bg-charcoal/10"
        />
      )}

      {/* Timeline Node Dot */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute left-[5px] sm:left-[9px] top-1.5 h-3.5 w-3.5 rounded-full border-2 transition-colors",
          entry.importance === "major"
            ? "border-primary-green bg-white ring-4 ring-primary-green/10"
            : "border-charcoal/30 bg-ivory"
        )}
      />

      <div className="rounded-xs border border-charcoal/8 bg-white p-5 sm:p-7 shadow-xs transition-shadow hover:shadow-sm">
        {/* Entry Metadata Header */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
          <span className="inline-flex items-center rounded-xs bg-primary-green/10 px-2.5 py-0.5 font-sans text-xs font-bold tracking-wider text-deep-green uppercase">
            {entry.year}
          </span>

          {entry.periodLabel && (
            <span className="font-sans text-xs text-muted">
              {entry.periodLabel}
            </span>
          )}

          {entry.importance === "major" && (
            <span className="font-sans text-[0.625rem] font-semibold tracking-wider text-gold-dark uppercase border border-gold/40 px-2 py-0.2 rounded-xs bg-gold/5">
              Major Milestone
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          id={`heading-${entry.id}`}
          className="font-display text-xl sm:text-2xl text-charcoal font-medium tracking-tight"
        >
          {entry.title}
        </h2>

        {/* Summary (Always Visible) */}
        <p className="mt-2.5 text-body text-charcoal/85 leading-relaxed">
          {entry.summary}
        </p>

        {/* Progressive Disclosure: Expanded Context & Sourced Detail */}
        {entry.body && entry.body.length > 0 && (
          <details className="group mt-4 border-t border-charcoal/8 pt-3">
            <summary className="flex cursor-pointer items-center justify-between text-xs font-semibold text-deep-green tracking-wide select-none hover:text-primary-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green">
              <span className="group-open:hidden">Read Detailed Context & Sources ↓</span>
              <span className="hidden group-open:inline">Hide Detailed Context ↑</span>
              <span className="text-muted text-[0.6875rem] font-normal italic">
                {entry.body.length} {entry.body.length === 1 ? "paragraph" : "paragraphs"}
              </span>
            </summary>

            <div className="mt-4 space-y-3 text-sm text-charcoal/80 leading-relaxed pl-3 border-l-2 border-primary-green/30">
              {entry.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Sourced Attributions */}
            {sources.length > 0 && (
              <div className="mt-5 rounded-xs bg-ivory/60 p-3.5 border border-charcoal/6">
                <span className="block font-sans text-[0.625rem] font-semibold tracking-wider text-muted uppercase mb-2">
                  Documentary Sources:
                </span>
                <ul className="space-y-1.5">
                  {sources.map((src) => (
                    <li key={src.id} className="flex flex-wrap items-center gap-x-2 text-xs">
                      <span className="font-sans text-[0.5625rem] font-semibold uppercase tracking-wider text-deep-green bg-primary-green/10 px-1.5 py-0.5 rounded-2xs">
                        {sourceTypeLabels[src.sourceType] || src.sourceType}
                      </span>
                      <span className="text-charcoal font-medium">
                        {src.title}
                      </span>
                      <span className="text-muted text-[0.6875rem]">
                        — {src.publisher}
                      </span>
                      {src.url && (
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-green hover:underline ml-auto text-[0.6875rem]"
                        >
                          External Record ↗
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </details>
        )}
      </div>
    </article>
  );
}
