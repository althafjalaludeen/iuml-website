import type { Metadata } from "next";
import { site } from "@/src/data/site";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { PlaceholderNote } from "@/src/components/ui/PlaceholderNote";
import { Button } from "@/src/components/ui/Button";

export const metadata: Metadata = {
  title: "Official Communications & Contact",
  description:
    "Official headquarters address, secretariat contact directory, and institutional correspondence channels of the Indian Union Muslim League.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Communications"
        title="Official Communications & Contact"
        description="Formal correspondence channels, national secretariat directory, and institutional inquiry registry."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <div className="py-16 sm:py-20 lg:py-24">
        <Container className="space-y-16 sm:space-y-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Contact Details Directory */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <SectionHeading
                  eyebrow="Central Secretariat"
                  title="Official Headquarters"
                  description="Formal address and verified institutional contact information."
                />
              </div>

              <div className="space-y-4">
                <div className="rounded-xs border border-charcoal/12 bg-white p-6">
                  <h3 className="font-sans text-xs font-semibold tracking-wider text-primary-green uppercase">
                    Headquarters Address
                  </h3>
                  <div className="mt-3">
                    <PlaceholderNote badge="Official Address">
                      {site.contact.address}
                    </PlaceholderNote>
                  </div>
                </div>

                <div className="rounded-xs border border-charcoal/12 bg-white p-6">
                  <h3 className="font-sans text-xs font-semibold tracking-wider text-primary-green uppercase">
                    Institutional Email
                  </h3>
                  <div className="mt-3">
                    <PlaceholderNote badge="Official Email">
                      {site.contact.email}
                    </PlaceholderNote>
                  </div>
                </div>

                <div className="rounded-xs border border-charcoal/12 bg-white p-6">
                  <h3 className="font-sans text-xs font-semibold tracking-wider text-primary-green uppercase">
                    Secretariat Telephone
                  </h3>
                  <div className="mt-3">
                    <PlaceholderNote badge="Official Phone">
                      {site.contact.phone}
                    </PlaceholderNote>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiries & Form Structure */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <SectionHeading
                  eyebrow="Formal Inquiries"
                  title="Correspondence Form"
                  description="Institutional inquiries architecture."
                />
              </div>

              <div className="rounded-xs border border-charcoal/12 bg-white p-6 sm:p-8">
                <PlaceholderNote badge="Form Notice" className="mb-6">
                  [This correspondence form architecture is presented for institutional review. Official message routing will be activated upon server verification.]
                </PlaceholderNote>

                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-sans text-xs font-semibold tracking-wider text-charcoal uppercase"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      disabled
                      placeholder="[Disabled during foundation phase]"
                      className="mt-2 block w-full rounded-xs border border-charcoal/15 bg-ivory/50 px-3.5 py-2.5 text-sm text-charcoal/80"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-sans text-xs font-semibold tracking-wider text-charcoal uppercase"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      disabled
                      placeholder="[Disabled during foundation phase]"
                      className="mt-2 block w-full rounded-xs border border-charcoal/15 bg-ivory/50 px-3.5 py-2.5 text-sm text-charcoal/80"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block font-sans text-xs font-semibold tracking-wider text-charcoal uppercase"
                    >
                      Subject / Matter
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      disabled
                      placeholder="[Disabled during foundation phase]"
                      className="mt-2 block w-full rounded-xs border border-charcoal/15 bg-ivory/50 px-3.5 py-2.5 text-sm text-charcoal/80"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-sans text-xs font-semibold tracking-wider text-charcoal uppercase"
                    >
                      Formal Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      disabled
                      placeholder="[Disabled during foundation phase]"
                      className="mt-2 block w-full rounded-xs border border-charcoal/15 bg-ivory/50 px-3.5 py-2.5 text-sm text-charcoal/80"
                    />
                  </div>

                  <div>
                    <Button disabled variant="primary">
                      Submit Formal Inquiry
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
