import { historySources } from "@/src/data/history/sources";
import { HistorySourceType } from "@/src/data/history/types";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

const sourceTypeGrouping: { type: HistorySourceType; label: string; description: string }[] = [
  {
    type: "government",
    label: "Government & Election Commission Records",
    description: "Official notifications, party registration gazettes, and statistical election reports from the Election Commission of India.",
  },
  {
    type: "parliamentary",
    label: "Parliamentary Archives & Legislative Proceedings",
    description: "Official debates, biographical profiles, and committee records from the Lok Sabha and Rajya Sabha Secretariats.",
  },
  {
    type: "official",
    label: "Official Party Documentation",
    description: "The Constitution of the Indian Union Muslim League, working committee resolutions, and internal organizational records.",
  },
  {
    type: "independent",
    label: "Independent Historical Reporting",
    description: "Contemporary newspaper reportage and archival coverage from established national press organizations.",
  },
  {
    type: "academic",
    label: "Scholarly Studies & Academic Publications",
    description: "Peer-reviewed research and monographs examining political development, minority representation, and constitutional governance.",
  },
];

export function HistorySources() {
  return (
    <section id="sources" aria-labelledby="sources-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="sources-heading"
          eyebrow="Bibliography & Attribution"
          title="Historical References & Primary Sources"
          description="In adherence to institutional documentation standards, all milestones, dates, and historical contexts presented on this page are grounded in verifiable primary and independent sources."
        />
      </div>

      <div className="space-y-6">
        {sourceTypeGrouping.map((group) => {
          const sourcesInGroup = historySources.filter((s) => s.sourceType === group.type);
          if (sourcesInGroup.length === 0) return null;

          return (
            <div
              key={group.type}
              className="rounded-xs border border-charcoal/8 bg-white p-5 sm:p-6"
            >
              <div className="mb-3">
                <h3 className="font-display text-lg text-charcoal font-medium">
                  {group.label}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {group.description}
                </p>
              </div>

              <ul className="divide-y divide-charcoal/6">
                {sourcesInGroup.map((source) => (
                  <li key={source.id} className="py-3 first:pt-2 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div className="max-w-2xl">
                        <span className="font-serif text-sm font-semibold text-charcoal">
                          {source.title}
                        </span>
                        <div className="text-xs text-muted mt-0.5">
                          <span className="font-medium text-charcoal/80">{source.publisher}</span>
                          {source.citationDate && <span> ({source.citationDate})</span>}
                        </div>
                        {source.notes && (
                          <p className="mt-1 text-xs text-charcoal/70 italic">
                            {source.notes}
                          </p>
                        )}
                      </div>

                      {source.url && (
                        <div className="self-start sm:self-baseline shrink-0 mt-1 sm:mt-0">
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-primary-green hover:text-deep-green hover:underline focus-visible:outline-2 focus-visible:outline-primary-green"
                          >
                            View Source ↗
                          </a>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
