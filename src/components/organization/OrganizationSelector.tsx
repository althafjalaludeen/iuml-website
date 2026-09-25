import { Organization } from "@/src/data/organization/types";
import { cn } from "@/src/lib/cn";

type OrganizationSelectorProps = {
  organizations: Organization[];
  selectedOrgId: string;
  onSelectOrg: (orgId: string) => void;
  className?: string;
};

export function OrganizationSelector({
  organizations,
  selectedOrgId,
  onSelectOrg,
  className,
}: OrganizationSelectorProps) {
  return (
    <nav
      aria-label="Organizations and Wings"
      className={cn("border-b border-charcoal/10 pb-2", className)}
    >
      <div
        role="tablist"
        aria-label="Select organization or wing"
        className="flex flex-wrap items-center gap-2 sm:gap-4"
      >
        {organizations.map((org, index) => {
          const isSelected = selectedOrgId === org.id;

          return (
            <div key={org.id} className="flex items-center gap-2 sm:gap-4">
              <button
                role="tab"
                id={`tab-org-${org.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-org-${org.id}`}
                type="button"
                onClick={() => onSelectOrg(org.id)}
                className={cn(
                  "group relative pb-2 pt-1 font-display text-lg sm:text-xl tracking-wider transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green",
                  isSelected
                    ? "font-semibold text-deep-green after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-green"
                    : "font-normal text-charcoal/60 hover:text-charcoal"
                )}
              >
                <span>{org.shortName}</span>
              </button>

              {index < organizations.length - 1 && (
                <span
                  className="font-sans text-xs text-charcoal/20 select-none pb-2 pt-1"
                  aria-hidden="true"
                >
                  |
                </span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
