import type { Metadata } from "next";
import { site } from "@/src/data/site";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { PlaceholderNote } from "@/src/components/ui/PlaceholderNote";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Official institutional privacy and data governance framework.",
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Governance & Compliance"
        title="Privacy Policy"
        description="Institutional data governance principles and information handling standards."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl space-y-12">
            <section aria-labelledby="privacy-notice-heading">
              <SectionHeading
                id="privacy-notice-heading"
                eyebrow="Legal Notice"
                title="Institutional Data Policy"
              />
              <div className="mt-6 space-y-6">
                <PlaceholderNote badge="Legal Status">
                  [Official legal privacy policy ratified by the {site.name} secretariat will be published here. This structural page defines the layout framework in adherence to digital compliance standards.]
                </PlaceholderNote>
                <PlaceholderNote badge="Information Handling">
                  [Official clauses regarding visitor data, public correspondence records, and communication confidentiality will be documented upon ratification.]
                </PlaceholderNote>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </div>
  );
}
