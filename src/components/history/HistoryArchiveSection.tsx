import { archiveCategories, archiveNotice } from "@/src/data/history/archive";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function HistoryArchiveSection() {
  return (
    <section aria-labelledby="archive-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="archive-heading"
          eyebrow="Documentary Repository"
          title="Institutional Archive"
          description="A centralized archival structure designed to preserve and catalog verified historical documents, photographic records, and publications."
        />
      </div>

      {/* Quiet Archival Curation Note */}
      <div className="rounded-xs border border-charcoal/8 bg-ivory/60 p-6 sm:p-8">
        <div className="space-y-2 max-w-3xl">
          <span className="inline-flex items-center rounded-2xs bg-primary-green/10 px-2 py-0.5 font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-deep-green">
            Institutional Preservation
          </span>
          <p className="text-body text-charcoal/85 leading-relaxed italic">
            &ldquo;{archiveNotice}&rdquo;
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {archiveCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xs border border-charcoal/8 bg-white p-5 transition-colors hover:border-charcoal/20"
            >
              <h3 className="font-display text-base font-medium text-charcoal">
                {category.title}
              </h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
