import { EventCategoryInfo } from "@/src/data/events/types";
import { cn } from "@/src/lib/cn";

type EventCategoryNavProps = {
  categories: EventCategoryInfo[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  className?: string;
};

export function EventCategoryNav({
  categories,
  selectedCategory,
  onSelectCategory,
  className,
}: EventCategoryNavProps) {
  return (
    <nav
      aria-label="Event Categories"
      className={cn("overflow-x-auto scrollbar-none pb-1", className)}
    >
      <div
        role="tablist"
        aria-label="Filter events by category"
        className="flex items-center gap-2 whitespace-nowrap min-w-max"
      >
        <span className="font-sans text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-muted mr-1">
          Category:
        </span>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              role="tab"
              id={`tab-event-cat-${cat.id}`}
              aria-selected={isSelected}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                "rounded-xs px-3 py-1 font-sans text-xs tracking-wider uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green",
                isSelected
                  ? "bg-deep-green text-white font-medium shadow-2xs"
                  : "border border-charcoal/12 bg-white/70 text-charcoal/75 hover:bg-white hover:text-deep-green",
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
