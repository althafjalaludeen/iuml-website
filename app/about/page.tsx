import type { Metadata } from "next";
import { site } from "@/src/data/site";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { PlaceholderNote } from "@/src/components/ui/PlaceholderNote";
import { Divider } from "@/src/components/ui/Divider";

export const metadata: Metadata = {
  title: "About the Organisation",
  description:
    "Institutional overview, constitutional principles, and organizational structure of the Indian Union Muslim League.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Institutional Overview"
        title="About the Organisation"
        description="A formal record of constitutional values, public representation, and organizational governance."
        breadcrumbs={[{ label: "About" }]}
      />

      <div className="py-16 sm:py-20 lg:py-24">
        <Container className="space-y-16 sm:space-y-20">
          {/* Introduction Section */}
          <section aria-labelledby="intro-heading" className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="intro-heading"
                eyebrow="Foundation & Mandate"
                title="Organizational Identity"
                description="Institutional record and constitutional status."
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <PlaceholderNote badge="Official Record Notice">
                [Official introduction to the {site.name} will be added here once authenticated institutional copy is supplied.]
              </PlaceholderNote>
              <PlaceholderNote badge="Documentation Status">
                [Verified constitutional objectives, preamble records, and official mandate documentation are currently being prepared.]
              </PlaceholderNote>
            </div>
          </section>

          <Divider subtle />

          {/* Vision and Core Values */}
          <section aria-labelledby="vision-heading" className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="vision-heading"
                eyebrow="Principles & Ethos"
                title="Vision and Values"
                description="Core democratic tenets and social commitments."
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <PlaceholderNote badge="Pending Verification">
                [Verified statements on democracy, secular constitutionalism, minority rights, and social justice will be articulated here.]
              </PlaceholderNote>
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="border border-charcoal/10 bg-white p-5 rounded-xs">
                  <h3 className="font-display text-lg font-semibold text-deep-green">
                    Constitutional Democracy
                  </h3>
                  <p className="mt-2 text-sm text-muted italic">
                    [Authenticated statement of democratic adherence will be placed here.]
                  </p>
                </div>
                <div className="border border-charcoal/10 bg-white p-5 rounded-xs">
                  <h3 className="font-display text-lg font-semibold text-deep-green">
                    Social Upliftment
                  </h3>
                  <p className="mt-2 text-sm text-muted italic">
                    [Authenticated public welfare mission statement will be placed here.]
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Divider subtle />

          {/* Institutional Governance Scope */}
          <section aria-labelledby="governance-heading" className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="governance-heading"
                eyebrow="Institutional Scope"
                title="Organizational Structure"
                description="Governance tiers and national representative bodies."
              />
            </div>
            <div className="lg:col-span-7">
              <PlaceholderNote badge="Structural Notice">
                [Overview of administrative committees, council assemblies, and regional organizational wings will be documented here once ratified records are supplied.]
              </PlaceholderNote>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
}
