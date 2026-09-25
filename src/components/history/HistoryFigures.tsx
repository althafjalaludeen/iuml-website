import { HistoricalFigure } from "@/src/data/history/types";
import { HistoryFigureCard } from "./HistoryFigureCard";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

type HistoryFiguresProps = {
  figures: HistoricalFigure[];
};

export function HistoryFigures({ figures }: HistoryFiguresProps) {
  return (
    <section aria-labelledby="figures-heading" className="space-y-8">
      <div className="max-w-3xl">
        <SectionHeading
          id="figures-heading"
          eyebrow="Key Historical Figures"
          title="Figures in IUML History"
          description="Prominent founding leaders, parliamentarians, state administrators, and statesmen who shaped the organizational development and parliamentary engagement of the Indian Union Muslim League."
        />
        <p className="mt-2 text-xs text-muted italic">
          Note: Figures are presented based on verified historical documentation and documented public offices; this presentation does not denote a formal presidential succession sequence.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {figures.map((figure) => (
          <HistoryFigureCard key={figure.id} figure={figure} />
        ))}
      </div>
    </section>
  );
}
