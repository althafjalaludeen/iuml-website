import { Member } from "@/src/data/organization/types";
import { MemberCard } from "./MemberCard";
import { PlaceholderNote } from "@/src/components/ui/PlaceholderNote";

type MemberGridProps = {
  members: Member[];
  className?: string;
  emptyMessage?: string;
};

export function MemberGrid({
  members,
  className,
  emptyMessage = "Documented leadership records for this committee are currently pending archival submission.",
}: MemberGridProps) {
  if (members.length === 0) {
    return (
      <div className="py-8">
        <PlaceholderNote badge="Archival Status">
          {emptyMessage}
        </PlaceholderNote>
      </div>
    );
  }

  return (
    <div
      className={
        className ??
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      }
    >
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
