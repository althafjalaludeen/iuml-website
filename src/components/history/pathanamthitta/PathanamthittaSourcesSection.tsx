import { pathanamthittaSources } from "@/src/data/history/pathanamthitta/sources";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function PathanamthittaSourcesSection() {
  return (
    <section id="sources" aria-labelledby="pathanamthitta-sources-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="pathanamthitta-sources-heading"
          eyebrow="Bibliography & Attribution"
          title="Historical References & Primary Sources"
          description="Every historical claim, election statistic, and organizational record regarding the IUML in Pathanamthitta is corroborated by verified official, governmental, academic, or journalistic documentation."
        />
      </div>

      <div className="rounded-xs border border-charcoal/8 bg-white p-5 sm:p-6">
        <ul className="divide-y divide-charcoal/6">
          {pathanamthittaSources.map((source) => (
            <li key={source.id} className="py-3.5 first:pt-1 last:pb-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="max-w-2xl">
                  <span className="font-serif text-sm font-semibold text-charcoal">
                    {source.title}
                  </span>
                  <div className="text-xs text-muted mt-0.5">
                    <span className="font-medium text-charcoal/80">{source.publisher}</span>
                    {source.year && <span> ({source.year})</span>}
                    <span className="ml-2 font-sans text-[0.5625rem] font-semibold uppercase tracking-wider text-deep-green bg-primary-green/10 px-1.5 py-0.5 rounded-2xs">
                      {source.type}
                    </span>
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
    </section>
  );
}
