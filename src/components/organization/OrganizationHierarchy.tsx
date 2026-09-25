import { Organization, Committee } from "@/src/data/organization/types";
import { cn } from "@/src/lib/cn";

type OrganizationHierarchyProps = {
  organizations: Organization[];
  committees: Committee[];
  selectedOrgId: string;
  selectedCommitteeId: string;
  onSelectCommittee: (orgId: string, committeeId: string) => void;
  className?: string;
};

export function OrganizationHierarchy({
  organizations,
  committees,
  selectedOrgId,
  selectedCommitteeId,
  onSelectCommittee,
  className,
}: OrganizationHierarchyProps) {
  const iumlOrg = organizations.find((o) => o.id === "iuml");
  const mylOrg = organizations.find((o) => o.id === "myl");
  const msfOrg = organizations.find((o) => o.id === "msf");

  const iumlCommittees = committees
    .filter((c) => c.organizationId === "iuml")
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const mylCommittees = committees
    .filter((c) => c.organizationId === "myl")
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const msfCommittees = committees
    .filter((c) => c.organizationId === "msf")
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <div
      className={cn(
        "rounded-xs border border-charcoal/12 bg-white/70 p-6 sm:p-8",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-charcoal/10 pb-4">
        <div>
          <span className="font-sans text-[0.6875rem] font-semibold tracking-[0.16em] uppercase text-primary-green">
            Institutional Architecture
          </span>
          <h3 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">
            Organizational Hierarchy
          </h3>
        </div>
        <p className="font-sans text-xs text-muted">
          Select any tier to view its leadership records
        </p>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Main Body: Indian Union Muslim League */}
        {iumlOrg && (
          <div className="lg:col-span-6 space-y-4">
            <div className="border-b border-charcoal/8 pb-2">
              <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-primary-green">
                Primary Organization
              </span>
              <h4 className="font-display text-xl font-semibold text-deep-green sm:text-2xl">
                {iumlOrg.name} ({iumlOrg.shortName})
              </h4>
            </div>

            {/* Tree Branching for IUML */}
            <div className="border-l-2 border-primary-green/30 pl-4 sm:pl-5 space-y-2 mt-3">
              {iumlCommittees.map((committee, idx) => {
                const isSelected =
                  selectedOrgId === "iuml" && selectedCommitteeId === committee.id;
                const isLast = idx === iumlCommittees.length - 1;

                return (
                  <div key={committee.id} className="relative">
                    <button
                      type="button"
                      onClick={() => onSelectCommittee("iuml", committee.id)}
                      className={cn(
                        "w-full text-left rounded-xs px-3 py-2 transition-all flex items-baseline justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green",
                        isSelected
                          ? "bg-deep-green text-white font-medium shadow-2xs"
                          : "text-charcoal/85 hover:bg-ivory hover:text-deep-green",
                      )}
                    >
                      <div className="flex flex-col">
                        <span className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold">
                          {isLast ? "└── " : "├── "}
                          {committee.name}
                        </span>
                        {committee.location && committee.location !== committee.name && (
                          <span
                            className={cn(
                              "text-[0.6875rem] ml-5",
                              isSelected ? "text-ivory/80" : "text-muted",
                            )}
                          >
                            {committee.location}
                          </span>
                        )}
                      </div>
                      <span
                        className={cn(
                          "font-sans text-[0.6875rem] uppercase tracking-wider",
                          isSelected ? "text-ivory/80" : "text-muted",
                        )}
                      >
                        {committee.level}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Associated Wings: MYL & MSF */}
        <div className="lg:col-span-6 space-y-8">
          {/* Muslim Youth League (MYL) */}
          {mylOrg && (
            <div className="space-y-3">
              <div className="border-b border-charcoal/8 pb-2">
                <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-primary-green">
                  Youth Wing
                </span>
                <h4 className="font-display text-xl font-semibold text-deep-green">
                  {mylOrg.name} ({mylOrg.shortName})
                </h4>
              </div>

              <div className="border-l-2 border-primary-green/30 pl-4 sm:pl-5 space-y-2 mt-2">
                {mylCommittees.map((committee) => {
                  const isSelected =
                    selectedOrgId === "myl" && selectedCommitteeId === committee.id;

                  return (
                    <button
                      key={committee.id}
                      type="button"
                      onClick={() => onSelectCommittee("myl", committee.id)}
                      className={cn(
                        "w-full text-left rounded-xs px-3 py-2 transition-all flex items-baseline justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green",
                        isSelected
                          ? "bg-deep-green text-white font-medium shadow-2xs"
                          : "text-charcoal/85 hover:bg-ivory hover:text-deep-green",
                      )}
                    >
                      <div className="flex flex-col">
                        <span className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold">
                          └── {committee.name}
                        </span>
                        {committee.location && committee.location !== committee.name && (
                          <span
                            className={cn(
                              "text-[0.6875rem] ml-5",
                              isSelected ? "text-ivory/80" : "text-muted",
                            )}
                          >
                            {committee.location}
                          </span>
                        )}
                      </div>
                      <span
                        className={cn(
                          "font-sans text-[0.6875rem] uppercase tracking-wider",
                          isSelected ? "text-ivory/80" : "text-muted",
                        )}
                      >
                        {committee.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Muslim Students Federation (MSF) */}
          {msfOrg && (
            <div className="space-y-3">
              <div className="border-b border-charcoal/8 pb-2">
                <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-primary-green">
                  Student Wing
                </span>
                <h4 className="font-display text-xl font-semibold text-deep-green">
                  {msfOrg.name} ({msfOrg.shortName})
                </h4>
              </div>

              <div className="border-l-2 border-primary-green/30 pl-4 sm:pl-5 space-y-2 mt-2">
                {msfCommittees.map((committee, idx) => {
                  const isSelected =
                    selectedOrgId === "msf" && selectedCommitteeId === committee.id;
                  const isLast = idx === msfCommittees.length - 1;

                  return (
                    <button
                      key={committee.id}
                      type="button"
                      onClick={() => onSelectCommittee("msf", committee.id)}
                      className={cn(
                        "w-full text-left rounded-xs px-3 py-2 transition-all flex items-baseline justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green",
                        isSelected
                          ? "bg-deep-green text-white font-medium shadow-2xs"
                          : "text-charcoal/85 hover:bg-ivory hover:text-deep-green",
                      )}
                    >
                      <div className="flex flex-col">
                        <span className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold">
                          {isLast ? "└── " : "├── "}
                          {committee.name}
                        </span>
                        {committee.location && committee.location !== committee.name && (
                          <span
                            className={cn(
                              "text-[0.6875rem] ml-5",
                              isSelected ? "text-ivory/80" : "text-muted",
                            )}
                          >
                            {committee.location}
                          </span>
                        )}
                      </div>
                      <span
                        className={cn(
                          "font-sans text-[0.6875rem] uppercase tracking-wider",
                          isSelected ? "text-ivory/80" : "text-muted",
                        )}
                      >
                        {committee.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
