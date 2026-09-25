import { keralaHistorySources } from "@/src/data/history/kerala/sources";
import { HistorySourceType } from "@/src/data/history/types";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

const sourceTypeGrouping: { type: HistorySourceType; label: string; description: string }[] = [
  {
    type: "government",
    label: "Government & Election Commission Records",
    description: "Official statistical returns from the Election Commission of India and notifications from the Kerala District Gazetteers.",
  },
  {
    type: "parliamentary",
    label: "Kerala Legislative Assembly & Parliamentary Records",
    description: "Official roll of Speakers, ministerial records, biographical registers, and assembly proceedings from the Kerala Legislature and Parliament.",
  },
  {
    type: "official",
    label: "Official Party Documentation",
    description: "Official historical chronicles, executive resolutions, and published commemorative records of the IUML Kerala State Committee.",
  },
  {
    type: "independent",
    label: "Independent Historical Reporting",
    description: "Contemporary journalistic reportage, obituaries, and investigative coverage from established news institutions including The Hindu and The Indian Express.",
  },
  {
    type: "academic",
    label: "Academic Research & Scholarly Studies",
    description: "Peer-reviewed political science monographs and university press publications on Kerala coalition politics and minority representation.",
  },
];

export function KeralaHistorySources() {
  return (
    <section id="sources" aria-labelledby="kerala-sources-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="kerala-sources-heading"
          eyebrow="Bibliography & Attribution"
          title="Historical References & Primary Sources"
          description="In strict adherence to documentary standards, all dates, election tallies, legislative offices, and historical contexts presented on this page are grounded in verifiable primary records, government archives, and scholarly research."
        />
      </div>

      <div className="space-y-6">
        {sourceTypeGrouping.map((group) => {
          const sourcesInGroup = keralaHistorySources.filter((s) => s.sourceType === group.type);
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
                            View Source →
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
