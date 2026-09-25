import { pathanamthittaArchiveCategories, pathanamthittaArchiveNotice } from "@/src/data/history/pathanamthitta/archive";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function PathanamthittaArchiveSection() {
  return (
    <section aria-labelledby="pathanamthitta-archive-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="pathanamthitta-archive-heading"
          eyebrow="Documentary Repository"
          title="Pathanamthitta Historical Archive"
          description="A systematic archival structure preserving verified district minutes, conference proceedings, municipal election records, and press references from Pathanamthitta."
        />
      </div>

      <div className="rounded-xs border border-charcoal/8 bg-ivory/60 p-6 sm:p-8">
        <div className="space-y-2 max-w-3xl">
          <span className="inline-flex items-center rounded-2xs bg-primary-green/10 px-2 py-0.5 font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-deep-green">
            Institutional Preservation
          </span>
          <p className="text-body text-charcoal/85 leading-relaxed italic">
            &ldquo;{pathanamthittaArchiveNotice}&rdquo;
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pathanamthittaArchiveCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col justify-between rounded-xs border border-charcoal/8 bg-white p-5 transition-colors hover:border-charcoal/20"
            >
              <div>
                <h3 className="font-display text-base font-medium text-charcoal mb-2">
                  {category.title}
                </h3>
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
