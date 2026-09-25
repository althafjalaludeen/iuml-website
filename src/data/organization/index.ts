import { Organization, Committee, Member, EnrichedMember } from "./types";
import { organizations } from "./organizations";
import { committees } from "./committees";
import { members } from "./members";

export * from "./types";
export * from "./organizations";
export * from "./committees";
export * from "./members";

export function getOrganizations(): Organization[] {
  return organizations;
}

export function getOrganization(id: string): Organization | undefined {
  return organizations.find((org) => org.id === id);
}

export function getCommitteesByOrganization(organizationId: string): Committee[] {
  return committees
    .filter((c) => c.organizationId === organizationId)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getCommittee(id: string): Committee | undefined {
  return committees.find((c) => c.id === id);
}

export function getMembersByCommittee(committeeId: string): Member[] {
  return members.filter((m) => m.committeeId === committeeId);
}

export function getMember(id: string): Member | undefined {
  return members.find((m) => m.id === id);
}

export function getMemberWithDetails(id: string): EnrichedMember | undefined {
  const member = getMember(id);
  if (!member) return undefined;

  const committee = getCommittee(member.committeeId);
  if (!committee) return undefined;

  const organization = getOrganization(committee.organizationId);
  if (!organization) return undefined;

  return {
    ...member,
    committee,
    organization,
  };
}

export function getAllMembersWithDetails(): EnrichedMember[] {
  return members
    .map((m) => getMemberWithDetails(m.id))
    .filter((m): m is EnrichedMember => Boolean(m));
}

export const organizationNotice = {
  registryStatus: "Archival Note",
  partialNotice:
    "This directory reflects currently documented office-bearers. Additional records will be added as they are formally documented.",
  biographyPending:
    "Biographical records will be added as documentation is finalized.",
  responsibilitiesPending:
    "Official responsibilities will be recorded upon formal documentation.",
};
