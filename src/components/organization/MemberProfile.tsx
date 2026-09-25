import Link from "next/link";
import Image from "next/image";
import { EnrichedMember, Member } from "@/src/data/organization/types";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Divider } from "@/src/components/ui/Divider";
import { organizationNotice } from "@/src/data/organization";

type MemberProfileProps = {
  member: EnrichedMember;
  colleagues: Member[];
};

export function MemberProfile({ member, colleagues }: MemberProfileProps) {
  const initials = member.name
    .split(/\s+/)
    .filter((part) => !["Adv.", "Dr.", "Prof."].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const otherColleagues = colleagues.filter((c) => c.id !== member.id);

  const imageSrc = member.image
    ? member.image.replace(/\\/g, "/").startsWith("/")
      ? member.image.replace(/\\/g, "/")
      : `/${member.image.replace(/\\/g, "/")}`
    : undefined;

  return (
    <div>
      <PageHeader
        eyebrow={`${member.organization.shortName} · ${member.committee.name}`}
        title={member.name}
        description={`${member.designation} · ${member.organization.name}`}
        breadcrumbs={[
          { label: "Organization", href: "/organization" },
          {
            label: member.organization.shortName,
            href: `/organization?org=${member.organization.id}&committee=${member.committee.id}`,
          },
          { label: member.name },
        ]}
      />

      <div className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Portrait & Key Institutional Details */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-xs border border-charcoal/12 bg-white p-6 sm:p-7">
                {/* Official Portrait or Restrained Typographic Placeholder */}
                {imageSrc ? (
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border border-charcoal/12 bg-charcoal/5 shadow-xs">
                    <Image
                      src={imageSrc}
                      alt={`Official portrait of ${member.name}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className="h-32 sm:h-36 w-full rounded-xs bg-ivory/70 border border-charcoal/10 flex flex-col items-center justify-center p-4 text-center"
                    aria-hidden="true"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xs border border-charcoal/15 bg-white text-deep-green font-display text-xl font-semibold tracking-wider shadow-2xs">
                      {initials || "IUML"}
                    </div>
                    <span className="mt-2.5 font-sans text-[0.625rem] tracking-[0.14em] uppercase text-muted font-medium">
                      PORTRAIT FORTHCOMING
                    </span>
                  </div>
                )}

                <div className="mt-5">
                  <span className="font-sans text-[0.6875rem] font-semibold tracking-[0.14em] text-primary-green uppercase">
                    {member.designation}
                  </span>
                  <h2 className="mt-1 font-display text-2xl text-charcoal font-medium">
                    {member.name}
                  </h2>
                  <p className="mt-1 font-sans text-xs text-muted">
                    {member.organization.name}
                  </p>
                </div>

                <div className="mt-5 pt-5 border-t border-charcoal/8 space-y-2.5">
                  <div>
                    <span className="block font-sans text-[0.625rem] uppercase tracking-wider text-muted font-semibold">
                      Committee
                    </span>
                    <span className="text-xs sm:text-sm text-charcoal/90">
                      {member.committee.name}
                    </span>
                  </div>

                  {member.committee.location && (
                    <div>
                      <span className="block font-sans text-[0.625rem] uppercase tracking-wider text-muted font-semibold">
                        Jurisdiction / Level
                      </span>
                      <span className="text-xs sm:text-sm text-charcoal/90">
                        {member.committee.location} ({member.committee.level})
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Link
                  href={`/organization?org=${member.organization.id}&committee=${member.committee.id}`}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-deep-green uppercase hover:text-primary-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
                >
                  ← Return to {member.committee.name} Directory
                </Link>
              </div>
            </aside>

            {/* Right Main Content: Institutional Record, Biography, Responsibilities, Colleagues */}
            <main className="lg:col-span-8 space-y-10">
              {/* Institutional Overview */}
              <section aria-labelledby="institutional-heading">
                <SectionHeading
                  id="institutional-heading"
                  eyebrow="Institutional Record"
                  title="Official Details"
                  description="Administrative appointment within the organizational structure."
                />

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xs border border-charcoal/10 bg-white p-4 sm:p-5">
                    <span className="font-sans text-[0.625rem] uppercase tracking-wider text-muted font-semibold">
                      Organization
                    </span>
                    <p className="mt-1 font-display text-lg sm:text-xl text-charcoal">
                      {member.organization.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">
                      {member.organization.shortName}
                    </p>
                  </div>

                  <div className="rounded-xs border border-charcoal/10 bg-white p-4 sm:p-5">
                    <span className="font-sans text-[0.625rem] uppercase tracking-wider text-muted font-semibold">
                      Committee Body
                    </span>
                    <p className="mt-1 font-display text-lg sm:text-xl text-charcoal">
                      {member.committee.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">
                      {member.committee.location ?? "Local Organization"}
                    </p>
                  </div>
                </div>
              </section>

              <Divider subtle />

              {/* Biography Section */}
              <section aria-labelledby="bio-heading">
                <SectionHeading
                  id="bio-heading"
                  eyebrow="Biographical Profile"
                  title="Biography"
                />
                <div className="mt-4">
                  {member.biography ? (
                    <p className="text-body text-charcoal/80 leading-relaxed">
                      {member.biography}
                    </p>
                  ) : (
                    <p className="text-sm text-muted italic border-l border-gold/60 pl-3.5 py-0.5">
                      {organizationNotice.biographyPending}
                    </p>
                  )}
                </div>
              </section>

              <Divider subtle />

              {/* Responsibilities Section */}
              <section aria-labelledby="responsibilities-heading">
                <SectionHeading
                  id="responsibilities-heading"
                  eyebrow="Mandate"
                  title="Responsibilities & Portfolios"
                />
                <div className="mt-4">
                  {member.responsibilities && member.responsibilities.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2 text-body text-charcoal/80">
                      {member.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted italic border-l border-gold/60 pl-3.5 py-0.5">
                      {organizationNotice.responsibilitiesPending}
                    </p>
                  )}
                </div>
              </section>

              {/* Other Members of Same Committee */}
              {otherColleagues.length > 0 && (
                <>
                  <Divider subtle />
                  <section aria-labelledby="colleagues-heading">
                    <SectionHeading
                      id="colleagues-heading"
                      eyebrow="Directory"
                      title={`Other Members of ${member.committee.name}`}
                      description="Colleagues serving within the same committee tier."
                    />

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {otherColleagues.map((colleague) => (
                        <Link
                          key={colleague.id}
                          href={`/organization/member/${colleague.id}`}
                          className="group block rounded-xs border border-charcoal/10 bg-white p-4 transition-colors hover:border-primary-green/40 hover:shadow-2xs focus-visible:outline-2 focus-visible:outline-primary-green"
                        >
                          <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-primary-green">
                            {colleague.designation}
                          </span>
                          <h4 className="mt-0.5 font-display text-lg font-medium text-charcoal group-hover:text-deep-green">
                            {colleague.name}
                          </h4>
                          <span className="mt-2 inline-flex items-center gap-1 text-xs text-deep-green font-medium">
                            View Profile →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                </>
              )}
            </main>
          </div>
        </Container>
      </div>
    </div>
  );
}
