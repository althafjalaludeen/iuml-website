import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { Divider } from "@/src/components/ui/Divider";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import {
  HistoryHeader,
  HistoryTimeline,
  HistoryFigures,
  HistoryArchiveSection,
  HistorySources,
} from "@/src/components/history";
import { getHistoryEntries, getHistoricalFigures } from "@/src/data/history";

export const metadata: Metadata = {
  title: "History — Indian Union Muslim League",
  description:
    "A chronological overview of the history and organizational development of the Indian Union Muslim League.",
};

export default function HistoryPage() {
  const entries = getHistoryEntries();
  const figures = getHistoricalFigures();

  return (
    <div className="bg-ivory/30 min-h-screen">
      {/* Editorial Header */}
      <HistoryHeader />

      <div className="py-12 sm:py-16 lg:py-20">
        <Container className="space-y-16 sm:space-y-20 lg:space-y-24">
          {/* Editorial Introduction Section */}
          <section aria-labelledby="history-intro-heading" className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="history-intro-heading"
                eyebrow="Historical Introduction"
                title="Foundations in Independent India"
                description="The constitutional adaptation of minority political representation in post-independence India."
              />
              <div className="mt-5">
                <Link
                  href="/history/kerala"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-deep-green hover:text-primary-green underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
                >
                  Explore Kerala History →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4 text-charcoal/85 text-body leading-relaxed">
              <p>
                The history of the Indian Union Muslim League (IUML) in the post-independence era is
                fundamentally rooted in the decision of Indian Muslim leaders to participate as equal
                citizens in the constitutional and parliamentary democracy of the newly formed Republic of India.
              </p>
              <p>
                Following the Partition of 1947, when the pre-independence All-India Muslim League was dissolved
                in India, community leaders gathered in Madras on 10 March 1948 under the leadership of M. Muhammad
                Ismail to constitute an independent political party. The new body explicitly affirmed allegiance
                to the sovereignty, secular framework, and democratic Constitution of India.
              </p>
              <p>
                Over subsequent decades, the party’s historical trajectory evolved through direct participation in universal
                franchise elections, legislative representation in state assemblies and Parliament, constructive engagement
                in coalition governance, and advocacy for educational advancement, social welfare, and constitutional rights.
              </p>
            </div>
          </section>

          <Divider subtle />

          {/* Chronological Timeline */}
          <HistoryTimeline entries={entries} />

          <Divider subtle />

          {/* Figures in IUML History */}
          <HistoryFigures figures={figures} />

          <Divider subtle />

          {/* Future-Ready Institutional Archive */}
          <HistoryArchiveSection />

          <Divider subtle />

          {/* Primary Sources & References */}
          <HistorySources />
        </Container>
      </div>
    </div>
  );
}
