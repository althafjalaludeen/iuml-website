import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function PathanamthittaWingsSection() {
  return (
    <section aria-labelledby="pathanamthitta-wings-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="pathanamthitta-wings-heading"
          eyebrow="Affiliated Wings"
          title="Youth & Student Organizations"
          description="Documented development and social welfare initiatives of the Muslim Youth League (MYL) and Muslim Students Federation (MSF) within Pathanamthitta District."
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Muslim Youth League (MYL) */}
        <div className="rounded-xs border border-charcoal/8 bg-white p-6 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-charcoal/6">
            <span className="font-sans text-xs font-bold tracking-wider text-deep-green uppercase bg-primary-green/10 px-2 py-0.5 rounded-2xs">
              Youth Wing
            </span>
            <span className="text-xs text-muted font-sans">
              District Committee
            </span>
          </div>

          <h3 className="font-display text-xl text-charcoal font-medium">
            Muslim Youth League (MYL) Pathanamthitta
          </h3>

          <div className="mt-3 space-y-3 text-sm text-charcoal/85 leading-relaxed">
            <p>
              The Muslim Youth League serves as the youth wing of the IUML, operating across all five mandalams of Pathanamthitta district. Its documented historical activities emphasize civic involvement, career advancement, and disaster management.
            </p>
            <p>
              During the catastrophic August 2018 floods in the Pamba and Achankovil river basins, MYL white-guard volunteer units in Pathanamthitta coordinated critical emergency food supply distribution, rescue assistance in inundated lowlands, and sanitation drives in flood-affected neighborhoods.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-charcoal/6">
            <span className="block font-sans text-[0.5625rem] font-semibold uppercase tracking-wider text-muted mb-0.5">
              Documentary Sources
            </span>
            <p className="text-[0.6875rem] text-muted">
              IUML Kerala State Committee Records · Chandrika Daily Archives
            </p>
          </div>
        </div>

        {/* Muslim Students Federation (MSF) */}
        <div className="rounded-xs border border-charcoal/8 bg-white p-6 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-charcoal/6">
            <span className="font-sans text-xs font-bold tracking-wider text-deep-green uppercase bg-primary-green/10 px-2 py-0.5 rounded-2xs">
              Student Wing
            </span>
            <span className="text-xs text-muted font-sans">
              District Committee
            </span>
          </div>

          <h3 className="font-display text-xl text-charcoal font-medium">
            Muslim Students Federation (MSF) Pathanamthitta
          </h3>

          <div className="mt-3 space-y-3 text-sm text-charcoal/85 leading-relaxed">
            <p>
              The Muslim Students Federation (MSF) maintains units in higher secondary schools, arts and science colleges, and professional institutions in Pathanamthitta district.
            </p>
            <p>
              The organization’s documented contributions include educational scholarship awareness desks, textbook distribution drives, anti-substance abuse campaigns, and democratic participation in university union campus elections within Mahatma Gandhi University jurisdiction.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-charcoal/6">
            <span className="block font-sans text-[0.5625rem] font-semibold uppercase tracking-wider text-muted mb-0.5">
              Documentary Sources
            </span>
            <p className="text-[0.6875rem] text-muted">
              MSF Kerala State Committee Publications · Chandrika Daily Archives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
