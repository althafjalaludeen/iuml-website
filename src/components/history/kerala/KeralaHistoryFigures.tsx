import { KeralaHistoricalFigure } from "@/src/data/history/kerala/types";
import { KeralaHistoryFigureCard } from "./KeralaHistoryFigureCard";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

type KeralaHistoryFiguresProps = {
  figures: KeralaHistoricalFigure[];
};

export function KeralaHistoryFigures({ figures }: KeralaHistoryFiguresProps) {
  return (
    <section aria-labelledby="kerala-figures-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="kerala-figures-heading"
          eyebrow="Key Historical Figures"
          title="Figures in IUML Kerala History"
          description="Prominent legislators, constitutional scholars, administrators, and organizational leaders who guided the development of the Indian Union Muslim League in Kerala."
        />
        <p className="mt-2 text-xs text-muted italic">
          Note: Historical figures are presented based on verified public office and documentary records; this listing does not constitute a formal presidential succession sequence.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {figures.map((figure) => (
          <KeralaHistoryFigureCard key={figure.id} figure={figure} />
        ))}
      </div>
    </section>
  );
}
