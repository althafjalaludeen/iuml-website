import { cn } from "@/src/lib/cn";

type EventStatusNavProps = {
  selectedStatus: "upcoming" | "past" | "all";
  onSelectStatus: (status: "upcoming" | "past" | "all") => void;
  className?: string;
};

const STATUS_TABS: Array<{ id: "upcoming" | "past" | "all"; label: string }> = [
  { id: "upcoming", label: "Upcoming Events" },
  { id: "past", label: "Past Events & Proceedings" },
  { id: "all", label: "All Events" },
];

export function EventStatusNav({
  selectedStatus,
  onSelectStatus,
  className,
}: EventStatusNavProps) {
  return (
    <nav
      aria-label="Event Status Navigation"
      className={cn("border-b border-charcoal/10 pb-1", className)}
    >
      <div
        role="tablist"
        aria-label="Filter events by timing"
        className="flex items-center gap-6 sm:gap-8"
      >
        {STATUS_TABS.map((tab) => {
          const isSelected = selectedStatus === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-status-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-status-${tab.id}`}
              type="button"
              onClick={() => onSelectStatus(tab.id)}
              className={cn(
                "relative pb-2.5 pt-1 font-sans text-xs sm:text-sm tracking-wider uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green",
                isSelected
                  ? "font-semibold text-deep-green after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-green"
                  : "text-charcoal/65 hover:text-charcoal",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
