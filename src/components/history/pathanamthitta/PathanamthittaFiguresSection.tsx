import { PathanamthittaHistoricalFigure } from "@/src/data/history/pathanamthitta/types";
import { getPathanamthittaSourcesByIds } from "@/src/data/history/pathanamthitta/sources";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

type PathanamthittaFiguresSectionProps = {
  figures: PathanamthittaHistoricalFigure[];
};

export function PathanamthittaFiguresSection({
  figures,
}: PathanamthittaFiguresSectionProps) {
  return (
    <section aria-labelledby="pathanamthitta-figures-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="pathanamthitta-figures-heading"
          eyebrow="Key Historical Figures"
          title="Documented Figures in Pathanamthitta"
          description="Documented leaders and office-bearers of the Indian Union Muslim League in Pathanamthitta District whose roles are verified in official party records and contemporary press reporting."
        />
        <p className="mt-2 text-xs text-muted italic">
          Note: Registry includes only individuals with documented office or direct representation in the party&apos;s institutional records.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {figures.map((figure) => {
          const sources = getPathanamthittaSourcesByIds(figure.sourceIds);
          const initials = figure.name
            .replace(/^Adv\.\s+|^Sayyid\s+|^Prof\.\s+/i, "")
            .split(/\s+/)
            .map((w) => w[0])
            .filter(Boolean)
            .slice(0, 2)
            .join("")
            .toUpperCase();

          return (
            <article
              key={figure.id}
              className="flex flex-col justify-between rounded-xs border border-charcoal/8 bg-white p-6 shadow-xs transition-colors hover:border-charcoal/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-charcoal/6">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-xs border border-gold/40 bg-ivory font-serif text-sm font-semibold tracking-wider text-charcoal"
                  >
                    {initials}
                  </div>

                  {figure.period && (
                    <span className="font-sans text-xs text-muted font-medium">
                      {figure.period}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl text-charcoal font-medium">
                  {figure.name}
                </h3>

                <p className="mt-1 font-sans text-xs font-semibold text-deep-green tracking-wide">
                  {figure.designation}
                </p>

                <p className="text-[0.6875rem] text-muted font-sans mt-0.5">
                  {figure.organization}
                </p>

                <p className="mt-3 text-sm text-charcoal/85 leading-relaxed">
                  {figure.biography}
                </p>

                {figure.responsibilities && figure.responsibilities.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-charcoal/6">
                    <span className="block font-sans text-[0.625rem] font-semibold text-muted uppercase tracking-wider mb-1">
                      Responsibilities:
                    </span>
                    <ul className="text-xs text-charcoal/80 space-y-1 list-disc list-inside">
                      {figure.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {sources.length > 0 && (
                <div className="mt-5 pt-3 border-t border-charcoal/6">
                  <span className="block font-sans text-[0.5625rem] font-semibold uppercase tracking-wider text-muted mb-0.5">
                    Sources
                  </span>
                  <p className="text-[0.6875rem] text-muted leading-snug">
                    {sources.map((s) => s.publisher).join(" · ")}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
