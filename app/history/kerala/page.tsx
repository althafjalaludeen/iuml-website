import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { Divider } from "@/src/components/ui/Divider";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import {
  KeralaHistoryHeader,
  KeralaHistoryTimeline,
  KeralaHistoryFigures,
  KeralaHistoryArchiveSection,
  KeralaHistorySources,
} from "@/src/components/history/kerala";
import {
  getKeralaHistoryEntries,
  getKeralaHistoricalFigures,
} from "@/src/data/history/kerala";

export const metadata: Metadata = {
  title: "Kerala History — Indian Union Muslim League",
  description:
    "A documented institutional history of the Indian Union Muslim League in Kerala, from post-1948 Malabar district representation through state coalition governance and legislative leadership.",
};

export default function KeralaHistoryPage() {
  const entries = getKeralaHistoryEntries();
  const figures = getKeralaHistoricalFigures();

  return (
    <div className="bg-ivory/30 min-h-screen">
      {/* Editorial Header */}
      <KeralaHistoryHeader />

      <div className="py-12 sm:py-16 lg:py-20">
        <Container className="space-y-16 sm:space-y-20 lg:space-y-24">
          {/* Editorial Introduction Section */}
          <section aria-labelledby="kerala-intro-heading" className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="kerala-intro-heading"
                eyebrow="Historical Introduction"
                title="Constitutional Participation in Kerala"
                description="The transition of post-Partition minority representation into parliamentary governance and institutional alliances in Kerala."
              />
              <div className="mt-6">
                <Link
                  href="/history"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-deep-green hover:text-primary-green underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary-green"
                >
                  ← Return to General IUML History
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4 text-charcoal/85 text-body leading-relaxed">
              <p>
                The history of the Indian Union Muslim League in Kerala represents a distinctive trajectory
                within post-independence Indian politics. Following the dissolution of the pre-Partition party
                in 1947 and the establishment of the IUML in Madras in March 1948, regional leadership in the
                Malabar District chose the path of constitutional democratic participation within the newly
                independent republic.
              </p>
              <p>
                With the formation of the linguistic State of Kerala on 1 November 1956, which integrated Malabar
                with Travancore-Cochin, the party reorganized its provincial apparatus to enter the state legislative arena.
                Beginning with 8 seats in the inaugural 1957 Kerala Legislative Assembly elections, the party
                gradually emerged as a central participant in Kerala&apos;s evolving multi-party coalition landscape.
              </p>
              <p>
                Over subsequent decades, this engagement encompassed constitutional leadership in the assembly chair,
                cabinet portfolios across education, local self-government, and industries, the administrative creation
                of Malappuram District in 1969, and C. H. Mohammed Koya&apos;s tenure as Chief Minister in 1979. Guided by
                community statesmen including Bafakhi Thangal, K. M. Seethi Sahib, and Sayyid Muhammad Ali Shihab Thangal,
                the party&apos;s Kerala history reflects an enduring model of minority parliamentary representation.
              </p>
            </div>
          </section>

          <Divider subtle />

          {/* Chronological Timeline */}
          <KeralaHistoryTimeline entries={entries} />

          <Divider subtle />

          {/* Figures in IUML Kerala History */}
          <KeralaHistoryFigures figures={figures} />

          <Divider subtle />

          {/* Institutional Archive */}
          <KeralaHistoryArchiveSection />

          <Divider subtle />

          {/* Primary Sources & References */}
          <KeralaHistorySources />
        </Container>
      </div>
    </div>
  );
}
