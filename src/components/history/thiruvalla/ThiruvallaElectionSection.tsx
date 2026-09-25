import { ThiruvallaElectionRecord } from "@/src/data/history/thiruvalla/types";
import { getThiruvallaSourcesByIds } from "@/src/data/history/thiruvalla/sources";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

type ThiruvallaElectionSectionProps = {
  elections: ThiruvallaElectionRecord[];
};

export function ThiruvallaElectionSection({
  elections,
}: ThiruvallaElectionSectionProps) {
  return (
    <section aria-labelledby="thiruvalla-election-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="thiruvalla-election-heading"
          eyebrow="Democratic Participation"
          title="Election History"
          description="Electoral engagement in Thiruvalla, documenting coalition coordination in the legislative assembly constituency and direct contests in Thiruvalla Municipality."
        />
        <p className="mt-2 text-xs text-muted italic">
          Data compiled from Election Commission of India and State Election Commission of Kerala official returns.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {elections.map((elec) => {
          const sources = getThiruvallaSourcesByIds(elec.sourceIds);

          return (
            <div
              key={elec.id}
              className="flex flex-col justify-between rounded-xs border border-charcoal/8 bg-white p-5 sm:p-6"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-charcoal/6">
                  <span className="font-sans text-xs font-bold tracking-wider text-deep-green uppercase bg-primary-green/10 px-2 py-0.5 rounded-2xs">
                    {elec.year}
                  </span>
                  <span className="font-sans text-[0.625rem] font-semibold text-gold-dark uppercase tracking-wider border border-gold/40 px-2 py-0.2 rounded-2xs bg-gold/5">
                    {elec.electionType} Election
                  </span>
                </div>

                <h3 className="font-display text-lg text-charcoal font-medium">
                  {elec.constituency}
                </h3>

                <p className="mt-1 font-sans text-xs font-semibold text-primary-green tracking-wide">
                  Status: {elec.result}
                </p>

                {elec.notes && (
                  <p className="mt-3 text-xs text-charcoal/85 leading-relaxed">
                    {elec.notes}
                  </p>
                )}
              </div>

              {sources.length > 0 && (
                <div className="mt-4 pt-3 border-t border-charcoal/6">
                  <span className="block font-sans text-[0.5625rem] font-semibold uppercase tracking-wider text-muted mb-0.5">
                    Sources
                  </span>
                  <p className="text-[0.6875rem] text-muted leading-snug">
                    {sources.map((s) => s.title).join(" · ")}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
