import type { Metadata } from "next";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { PlaceholderNote } from "@/src/components/ui/PlaceholderNote";
import { Divider } from "@/src/components/ui/Divider";
import { mediaPlaceholders } from "@/src/data/media";

export const metadata: Metadata = {
  title: "Media & Archival Gallery",
  description:
    "Official photographic archives, verified statements, media bulletins, and authenticated audiovisual recordings.",
};

const mediaTabs = ["All Media", "Photographic Archive", "Official Statements", "Video Records"];

export default function MediaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Media Repository"
        title="Media & Archival Gallery"
        description="A repository of authenticated photographic documentation, press statements, and authorized publications."
        breadcrumbs={[{ label: "Media" }]}
      />

      <div className="py-16 sm:py-20 lg:py-24">
        <Container className="space-y-16 sm:space-y-20">
          {/* Overview Notice */}
          <section aria-labelledby="media-overview-heading" className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="media-overview-heading"
                eyebrow="Archival Media"
                title="Official Asset Repository"
                description="Principles of authentic media preservation and authorized press distribution."
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <PlaceholderNote badge="Repository Notice">
                {mediaPlaceholders.overviewNotice}
              </PlaceholderNote>
              <PlaceholderNote badge="Gallery Curation">
                {mediaPlaceholders.galleryNotice}
              </PlaceholderNote>
            </div>
          </section>

          <Divider subtle />

          {/* Media Architecture Framework */}
          <section aria-labelledby="gallery-framework-heading">
            <div className="max-w-2xl mb-10">
              <SectionHeading
                id="gallery-framework-heading"
                eyebrow="Gallery Framework"
                title="Media Gallery Architecture"
                description="Structural models for album grids, documentary images, and official video releases."
              />
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {mediaTabs.map((tab, idx) => (
                <span
                  key={tab}
                  className={
                    idx === 0
                      ? "inline-flex items-center rounded-xs bg-deep-green px-3 py-1 font-sans text-xs font-semibold text-white"
                      : "inline-flex items-center rounded-xs border border-charcoal/15 bg-white px-3 py-1 font-sans text-xs text-charcoal/80"
                  }
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Gallery Grid Framework */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group flex flex-col justify-between overflow-hidden rounded-xs border border-charcoal/12 bg-white transition-colors hover:border-primary-green/40"
                >
                  {/* Media placeholder frame */}
                  <div
                    className="aspect-4/3 w-full bg-ivory/90 border-b border-charcoal/8 flex flex-col items-center justify-center p-6 text-center"
                    aria-hidden="true"
                  >
                    <span className="font-sans text-[0.6875rem] uppercase tracking-wider text-muted font-medium">
                      Archival Asset Frame 0{item}
                    </span>
                    <span className="mt-1 text-xs text-muted/70 italic">
                      [Official Photography Pending]
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between text-[0.6875rem] text-muted uppercase tracking-wider">
                      <span className="font-semibold text-primary-green">
                        Album Archive
                      </span>
                      <span>[Year Pending]</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg text-charcoal">
                      [Archival Collection Title]
                    </h3>
                    <p className="mt-1.5 text-xs text-muted italic line-clamp-2">
                      [Documentary caption and official photographic context description.]
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
}
