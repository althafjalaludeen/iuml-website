import Link from "next/link";
import { homeSections } from "@/src/data/site";
import { Hero } from "@/src/components/hero/Hero";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { PlaceholderNote } from "@/src/components/ui/PlaceholderNote";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { getMemberWithDetails } from "@/src/data/organization";

const sections = [
  homeSections.about,
  homeSections.vision,
  homeSections.history,
  homeSections.organization,
  homeSections.activities,
  homeSections.events,
  homeSections.media,
  homeSections.contact,
] as const;

// Curated 3 known leadership members for the homepage preview
const previewLeaderIds = ["ta-ansari", "pm-aneer", "adv-nisamudhin-mk"];

export function HomePage() {
  const previewLeaders = previewLeaderIds
    .map((id) => getMemberWithDetails(id))
    .filter(Boolean);

  return (
    <>
      <Hero />
      {sections.map((section, index) => {
        const isOrganization = section.id === "organization";
        const isHistory = section.id === "history";

        return (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
            className={
              index % 2 === 0
                ? "border-b border-charcoal/8 bg-white py-16 sm:py-20 lg:py-24"
                : "border-b border-charcoal/8 bg-ivory py-16 sm:py-20 lg:py-24"
            }
          >
            <Container className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
              <div className="lg:col-span-5">
                <SectionHeading
                  id={`${section.id}-heading`}
                  eyebrow={section.eyebrow}
                  title={section.title}
                  as="h2"
                />
              </div>

              <div className="flex flex-col items-start gap-6 lg:col-span-7 lg:pt-8">
                {isHistory ? (
                  <div className="space-y-4">
                    <p className="text-body text-charcoal/85 leading-relaxed">
                      {section.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1 font-sans text-xs">
                      <span className="rounded-xs border border-charcoal/10 bg-ivory/80 px-2.5 py-1 text-charcoal/80 font-medium">
                        1948 Formation
                      </span>
                      <span className="rounded-xs border border-charcoal/10 bg-ivory/80 px-2.5 py-1 text-charcoal/80 font-medium">
                        1951 Constitution
                      </span>
                      <span className="rounded-xs border border-charcoal/10 bg-ivory/80 px-2.5 py-1 text-charcoal/80 font-medium">
                        1952 Parliamentary Representation
                      </span>
                      <span className="rounded-xs border border-charcoal/10 bg-ivory/80 px-2.5 py-1 text-charcoal/80 font-medium">
                        1979 Kerala CM
                      </span>
                    </div>
                  </div>
                ) : (
                  <PlaceholderNote badge={isOrganization ? "Institutional Directory" : undefined}>
                    {section.description}
                  </PlaceholderNote>
                )}

                {isOrganization && previewLeaders.length > 0 && (
                  <div className="w-full">
                    <span className="block font-sans text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase mb-3">
                      Documented Leadership Preview
                    </span>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {previewLeaders.map((leader) => {
                        if (!leader) return null;
                        return (
                          <Link
                            key={leader.id}
                            href={`/organization/member/${leader.id}`}
                            className="group block rounded-xs border border-charcoal/10 bg-ivory/50 p-3.5 transition-colors hover:border-primary-green/40 hover:bg-white"
                          >
                            <span className="block font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-primary-green truncate">
                              {leader.designation}
                            </span>
                            <span className="mt-0.5 block font-display text-base font-medium text-charcoal group-hover:text-deep-green truncate">
                              {leader.name}
                            </span>
                            <span className="mt-1 block font-sans text-[0.625rem] text-muted truncate">
                              {leader.organization.shortName} · {leader.committee.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                <Button href={section.href} variant="secondary" size="sm">
                  {section.action} →
                </Button>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
