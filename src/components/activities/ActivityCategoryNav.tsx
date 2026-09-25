import { ActivityCategoryInfo } from "@/src/data/activities/types";
import { cn } from "@/src/lib/cn";

type ActivityCategoryNavProps = {
  categories: ActivityCategoryInfo[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  className?: string;
};

export function ActivityCategoryNav({
  categories,
  selectedCategory,
  onSelectCategory,
  className,
}: ActivityCategoryNavProps) {
  return (
    <nav
      aria-label="Activity Categories"
      className={cn("border-b border-charcoal/10 pb-1 overflow-x-auto scrollbar-none", className)}
    >
      <div
        role="tablist"
        aria-label="Filter activities by category"
        className="flex items-center gap-6 sm:gap-8 whitespace-nowrap min-w-max pb-1"
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              role="tab"
              id={`tab-activity-${cat.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-activity-${cat.id}`}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                "relative pb-2.5 pt-1 font-sans text-xs sm:text-sm tracking-wider uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green",
                isSelected
                  ? "font-semibold text-deep-green after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-green"
                  : "text-charcoal/65 hover:text-charcoal",
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
