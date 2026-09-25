import { Committee } from "@/src/data/organization/types";
import { cn } from "@/src/lib/cn";

type CommitteeSelectorProps = {
  committees: Committee[];
  selectedCommitteeId: string;
  onSelectCommittee: (committeeId: string) => void;
  className?: string;
};

export function CommitteeSelector({
  committees,
  selectedCommitteeId,
  onSelectCommittee,
  className,
}: CommitteeSelectorProps) {
  // If only one committee exists, display it clearly as active tier
  if (committees.length <= 1) {
    const single = committees[0];
    if (!single) return null;

    return (
      <div className={cn("pt-2 pb-1", className)}>
        <div className="flex items-center gap-2 font-sans text-xs">
          <span className="text-muted uppercase tracking-wider text-[0.6875rem] font-medium">
            Committee Level:
          </span>
          <span className="rounded-xs border border-primary-green/30 bg-primary-green/8 px-3 py-1 font-semibold text-deep-green uppercase tracking-wider">
            {single.name.replace(/Committee$/i, "").trim()}
          </span>
        </div>
      </div>
    );
  }

  const isAllSelected = selectedCommitteeId === "all" || !selectedCommitteeId;

  return (
    <div className={cn("pt-2 pb-1", className)}>
      <nav
        aria-label="Committee Level Navigation"
        className="flex flex-wrap items-center gap-2"
      >
        <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-wider text-muted mr-1">
          Level:
        </span>

        {/* All Committees Option */}
        <button
          role="tab"
          id="tab-committee-all"
          aria-selected={isAllSelected}
          type="button"
          onClick={() => onSelectCommittee("all")}
          className={cn(
            "rounded-xs border px-3 py-1 font-sans text-xs tracking-wider uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green",
            isAllSelected
              ? "border-primary-green/40 bg-primary-green/10 font-semibold text-deep-green shadow-2xs"
              : "border-charcoal/10 bg-white text-charcoal/70 hover:border-charcoal/20 hover:text-charcoal hover:bg-ivory/40"
          )}
        >
          All Levels
        </button>

        {committees.map((committee) => {
          const isSelected = selectedCommitteeId === committee.id;
          // Clean level name (e.g. "District Committee" -> "District")
          const levelLabel = committee.name.replace(/Committee$/i, "").trim();

          return (
            <button
              key={committee.id}
              role="tab"
              id={`tab-committee-${committee.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-committee-${committee.id}`}
              type="button"
              onClick={() => onSelectCommittee(committee.id)}
              className={cn(
                "rounded-xs border px-3 py-1 font-sans text-xs tracking-wider uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green",
                isSelected
                  ? "border-primary-green/40 bg-primary-green/10 font-semibold text-deep-green shadow-2xs"
                  : "border-charcoal/10 bg-white text-charcoal/70 hover:border-charcoal/20 hover:text-charcoal hover:bg-ivory/40"
              )}
            >
              {levelLabel}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
