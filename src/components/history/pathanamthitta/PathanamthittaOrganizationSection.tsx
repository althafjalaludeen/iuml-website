import { PathanamthittaOrganizationRecord } from "@/src/data/history/pathanamthitta/types";
import { getPathanamthittaSourcesByIds } from "@/src/data/history/pathanamthitta/sources";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

type PathanamthittaOrganizationSectionProps = {
  organizations: PathanamthittaOrganizationRecord[];
};

export function PathanamthittaOrganizationSection({
  organizations,
}: PathanamthittaOrganizationSectionProps) {
  return (
    <section aria-labelledby="pathanamthitta-org-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="pathanamthitta-org-heading"
          eyebrow="Institutional Hierarchy"
          title="District Organization"
          description="The documented structural tiers of the Indian Union Muslim League in Pathanamthitta, encompassing the District Committee at League House, constituent mandalams, and affiliated wings."
        />
        <p className="mt-2 text-xs text-muted italic">
          Note: Organizational tiers are documented strictly based on verified statutory and party publications following the 1982 district reorganization.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org) => {
          const sources = getPathanamthittaSourcesByIds(org.sourceIds);

          return (
            <div
              key={org.id}
              className="flex flex-col justify-between rounded-xs border border-charcoal/8 bg-white p-5 sm:p-6 transition-colors hover:border-charcoal/20"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-charcoal/6">
                  <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-deep-green bg-primary-green/10 px-2 py-0.5 rounded-2xs">
                    {org.level} Tier
                  </span>
                  <span className="text-xs text-muted font-sans font-medium">
                    {org.location}
                  </span>
                </div>

                <h3 className="font-display text-lg text-charcoal font-medium">
                  {org.name}
                </h3>

                {org.period && (
                  <p className="mt-1 text-xs text-muted font-sans">
                    Period: {org.period}
                  </p>
                )}

                {org.establishedYear && (
                  <p className="text-xs text-gold-dark font-sans font-medium mt-0.5">
                    Formation: {org.establishedYear}
                  </p>
                )}

                {org.notes && (
                  <p className="mt-3 text-xs text-charcoal/80 leading-relaxed">
                    {org.notes}
                  </p>
                )}

                {org.officeBearers && org.officeBearers.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-charcoal/6">
                    <span className="block font-sans text-[0.625rem] font-semibold text-muted uppercase tracking-wider mb-1">
                      Elected Office-Bearers:
                    </span>
                    <ul className="text-xs text-charcoal/85 space-y-0.5 list-disc list-inside">
                      {org.officeBearers.map((ob, idx) => (
                        <li key={idx}>{ob}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {sources.length > 0 && (
                <div className="mt-4 pt-3 border-t border-charcoal/6">
                  <span className="block font-sans text-[0.5625rem] font-semibold uppercase tracking-wider text-muted mb-0.5">
                    Sources
                  </span>
                  <p className="text-[0.6875rem] text-muted leading-snug">
                    {sources.map((s) => s.publisher).join(" · ")}
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
