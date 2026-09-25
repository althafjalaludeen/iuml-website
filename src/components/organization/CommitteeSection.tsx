import { Committee, Member } from "@/src/data/organization/types";
import { getOrganization } from "@/src/data/organization";
import { MemberGrid } from "./MemberGrid";
import { cn } from "@/src/lib/cn";

type CommitteeSectionProps = {
  committee: Committee;
  members: Member[];
  className?: string;
};

export function CommitteeSection({
  committee,
  members,
  className,
}: CommitteeSectionProps) {
  const organization = getOrganization(committee.organizationId);

  return (
    <section
      id={`committee-${committee.id}`}
      aria-labelledby={`heading-committee-${committee.id}`}
      className={cn("space-y-6 sm:space-y-8 pt-2", className)}
    >
      {/* Editorial Committee Section Header */}
      <div className="border-b border-charcoal/10 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h2
            id={`heading-committee-${committee.id}`}
            className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-charcoal uppercase"
          >
            {committee.name}
          </h2>

          {committee.location && (
            <span className="font-sans text-xs text-muted font-medium">
              {committee.location} · {committee.level.toUpperCase()} LEVEL
            </span>
          )}
        </div>
      </div>

      {/* Member Directory Grid */}
      <MemberGrid
        members={members}
        emptyMessage={`Leadership records for ${committee.name} (${organization?.shortName ?? "IUML"}) will be published upon archival verification.`}
      />
    </section>
  );
}
