import type { Metadata } from "next";
import { site } from "@/src/data/site";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { PlaceholderNote } from "@/src/components/ui/PlaceholderNote";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Official institutional website terms of use and publication standards.",
};

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Governance & Terms"
        title="Terms of Use"
        description="Official publication standards, copyright notices, and institutional portal terms."
        breadcrumbs={[{ label: "Terms of Use" }]}
      />

      <div className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl space-y-12">
            <section aria-labelledby="terms-notice-heading">
              <SectionHeading
                id="terms-notice-heading"
                eyebrow="Publication Terms"
                title="Portal Usage Guidelines"
              />
              <div className="mt-6 space-y-6">
                <PlaceholderNote badge="Legal Terms Notice">
                  [Official terms of use governing the access and dissemination of material published by the {site.name} will be stated here upon review by institutional counsel.]
                </PlaceholderNote>
                <PlaceholderNote badge="Copyright & Content Integrity">
                  [Official statements governing archival reproductions, press quotations, and authorized publications will be placed here.]
                </PlaceholderNote>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </div>
  );
}
