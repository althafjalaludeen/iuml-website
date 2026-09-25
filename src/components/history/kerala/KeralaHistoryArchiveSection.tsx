import { keralaArchiveCategories, keralaArchiveNotice } from "@/src/data/history/kerala/archive";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function KeralaHistoryArchiveSection() {
  return (
    <section aria-labelledby="kerala-archive-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="kerala-archive-heading"
          eyebrow="Documentary Repository"
          title="Kerala Historical Archive"
          description="A centralized archival structure cataloging verified Kerala State committee records, legislative assembly proceedings, election manifestos, and historical publications."
        />
      </div>

      {/* Quiet Archival Curation Note */}
      <div className="rounded-xs border border-charcoal/8 bg-ivory/60 p-6 sm:p-8">
        <div className="space-y-2 max-w-3xl">
          <span className="inline-flex items-center rounded-2xs bg-primary-green/10 px-2 py-0.5 font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-deep-green">
            Institutional Preservation
          </span>
          <p className="text-body text-charcoal/85 leading-relaxed italic">
            &ldquo;{keralaArchiveNotice}&rdquo;
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {keralaArchiveCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col justify-between rounded-xs border border-charcoal/8 bg-white p-5 transition-colors hover:border-charcoal/20"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-base font-medium text-charcoal">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {category.description}
                </p>
              </div>

              {category.statusText && (
                <div className="mt-4 pt-3 border-t border-charcoal/6">
                  <span className="font-sans text-[0.625rem] font-medium text-charcoal/60 uppercase tracking-wider">
                    Status: {category.statusText}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
