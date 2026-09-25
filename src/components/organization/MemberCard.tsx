import Link from "next/link";
import Image from "next/image";
import { Member } from "@/src/data/organization/types";
import { getCommittee, getOrganization } from "@/src/data/organization";
import { cn } from "@/src/lib/cn";

type MemberCardProps = {
  member: Member;
  className?: string;
};

export function MemberCard({ member, className }: MemberCardProps) {
  const committee = getCommittee(member.committeeId);
  const organization = committee ? getOrganization(committee.organizationId) : undefined;

  // Derive respectful initials for the institutional portrait placeholder
  const initials = member.name
    .split(/\s+/)
    .filter((part) => !["Adv.", "Dr.", "Prof."].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const imageSrc = member.image
    ? member.image.replace(/\\/g, "/").startsWith("/")
      ? member.image.replace(/\\/g, "/")
      : `/${member.image.replace(/\\/g, "/")}`
    : undefined;

  return (
    <article className={cn("h-full", className)}>
      <Link
        href={`/organization/member/${member.id}`}
        aria-label={`View leadership profile of ${member.name}, ${member.designation}`}
        className="group flex h-full flex-col justify-between rounded-xs border border-charcoal/10 bg-white transition-all duration-200 hover:border-primary-green/50 hover:shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
      >
        <div>
          {/* Portrait Container with consistent 3:4 Aspect Ratio */}
          <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-charcoal/10 bg-ivory/40">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`Official photograph of ${member.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-full w-full flex-col items-center justify-center p-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xs border border-gold/40 bg-white text-deep-green font-display text-xl font-semibold tracking-wider shadow-2xs transition-transform duration-200 group-hover:scale-105">
                  {initials || "IUML"}
                </div>
                <span className="mt-3 font-sans text-[0.625rem] tracking-[0.16em] uppercase text-muted font-medium">
                  PORTRAIT FORTHCOMING
                </span>
              </div>
            )}
          </div>

          {/* Member Details */}
          <div className="p-5 sm:p-6">
            <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-charcoal transition-colors group-hover:text-deep-green leading-snug">
              {member.name}
            </h3>
            <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-wider text-primary-green">
              {member.designation}
            </p>
            <p className="mt-2 font-sans text-xs text-muted">
              {organization?.shortName ?? "IUML"} · {committee?.name}
            </p>
          </div>
        </div>

        {/* Card Footer: View Profile link */}
        <div className="border-t border-charcoal/8 px-5 py-3.5 sm:px-6">
          <span className="inline-flex items-center gap-1.5 font-sans text-xs font-medium tracking-wider uppercase text-deep-green transition-colors group-hover:text-primary-green">
            <span>View Profile</span>
            <span
              className="transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
