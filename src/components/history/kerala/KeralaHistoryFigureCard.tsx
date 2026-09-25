import { KeralaHistoricalFigure } from "@/src/data/history/kerala/types";
import { getKeralaSourcesByIds } from "@/src/data/history/kerala/sources";

type KeralaHistoryFigureCardProps = {
  figure: KeralaHistoricalFigure;
};

export function KeralaHistoryFigureCard({ figure }: KeralaHistoryFigureCardProps) {
  const sources = getKeralaSourcesByIds(figure.sourceIds);

  // Derive simple initials for archival seal
  const initials = figure.name
    .replace(/^Sayyid\s+|^Sayed\s+|^Prof\.\s+/i, "")
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const shortContext = figure.shortContext || figure.historicalContext;

  return (
    <article
      id={`figure-${figure.id}`}
      className="flex flex-col justify-between rounded-xs border border-charcoal/8 bg-white p-6 shadow-xs transition-colors hover:border-charcoal/20"
      aria-labelledby={`figure-name-${figure.id}`}
    >
      <div>
        {/* Monogram Seal & Lifespan */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-charcoal/6">
          <div
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-xs border border-gold/40 bg-ivory font-serif text-sm font-semibold tracking-wider text-charcoal"
          >
            {initials}
          </div>

          {figure.lifespan && (
            <span className="font-sans text-xs text-muted font-medium">
              {figure.lifespan}
            </span>
          )}
        </div>

        {/* Name and Honorific */}
        <div>
          {figure.honorific && (
            <span className="block font-sans text-[0.6875rem] font-semibold tracking-wider text-gold-dark uppercase mb-0.5">
              {figure.honorific}
            </span>
          )}
          <h3
            id={`figure-name-${figure.id}`}
            className="font-display text-xl text-charcoal font-medium"
          >
            {figure.name}
          </h3>
        </div>

        {/* Known Historical Role */}
        <p className="mt-1 font-sans text-xs font-semibold text-deep-green tracking-wide">
          {figure.knownRole}
        </p>

        {/* Short Historical Context for Quick Scanning */}
        <p className="mt-3 text-sm text-charcoal/85 leading-relaxed">
          {shortContext}
        </p>

        {/* Progressive Disclosure for Full Historical Context */}
        <details className="group mt-3 border-t border-charcoal/6 pt-2.5">
          <summary className="flex cursor-pointer items-center justify-between font-sans text-xs font-medium text-deep-green hover:text-primary-green select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green">
            <span className="group-open:hidden">Read Historical Context →</span>
            <span className="hidden group-open:inline">Hide Context ↑</span>
          </summary>

          <p className="mt-3 text-xs text-charcoal/80 leading-relaxed border-l-2 border-primary-green/30 pl-2.5">
            {figure.historicalContext}
          </p>
        </details>
      </div>

      {/* Sources */}
      {sources.length > 0 && (
        <div className="mt-5 pt-3 border-t border-charcoal/6">
          <span className="block font-sans text-[0.5625rem] font-semibold uppercase tracking-wider text-muted mb-0.5">
            Sources
          </span>
          <p className="text-[0.6875rem] text-muted leading-snug">
            {sources.map((s) => s.publisher).join(" · ")}
          </p>
        </div>
      )}
    </article>
  );
}
