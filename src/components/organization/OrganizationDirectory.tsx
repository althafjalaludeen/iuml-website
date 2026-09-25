"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Organization,
  Committee,
} from "@/src/data/organization/types";
import {
  getMembersByCommittee,
  getCommitteesByOrganization,
} from "@/src/data/organization";
import { Container } from "@/src/components/ui/Container";
import { OrganizationSelector } from "./OrganizationSelector";
import { CommitteeSelector } from "./CommitteeSelector";
import { CommitteeSection } from "./CommitteeSection";

type OrganizationDirectoryProps = {
  organizations: Organization[];
  allCommittees: Committee[];
  initialOrgId?: string;
  initialCommitteeId?: string;
};

export function OrganizationDirectory({
  organizations,
  initialOrgId = "iuml",
  initialCommitteeId,
}: OrganizationDirectoryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const paramOrg = searchParams.get("org");
  const paramCommittee = searchParams.get("committee");

  // Derive active organization directly from URL searchParams or fallback
  const selectedOrgId =
    paramOrg && organizations.some((o) => o.id === paramOrg)
      ? paramOrg
      : initialOrgId;

  const currentOrg =
    organizations.find((o) => o.id === selectedOrgId) || organizations[0];

  const availableCommittees = getCommitteesByOrganization(selectedOrgId);

  // Derive active committee directly from URL searchParams or fallback
  const selectedCommitteeId =
    paramCommittee &&
    (paramCommittee === "all" ||
      availableCommittees.some((c) => c.id === paramCommittee))
      ? paramCommittee
      : initialCommitteeId &&
          availableCommittees.some((c) => c.id === initialCommitteeId)
        ? initialCommitteeId
        : "all";

  function handleSelectOrg(orgId: string) {
    startTransition(() => {
      const params = new URLSearchParams();
      params.set("org", orgId);
      // Default to "all" levels for the newly selected organization
      params.set("committee", "all");
      router.replace(`/organization?${params.toString()}`, { scroll: false });
    });
  }

  function handleSelectCommittee(committeeId: string) {
    startTransition(() => {
      const params = new URLSearchParams();
      params.set("org", selectedOrgId);
      params.set("committee", committeeId);
      router.replace(`/organization?${params.toString()}`, { scroll: false });
    });
  }

  // Filter committees to display: either single selected level or all levels for this organization
  const displayedCommittees =
    selectedCommitteeId && selectedCommitteeId !== "all"
      ? availableCommittees.filter((c) => c.id === selectedCommitteeId)
      : availableCommittees;

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <Container className="space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Editorial Organization Navigation (IUML | MYL | MSF) */}
        <div className="space-y-4">
          <OrganizationSelector
            organizations={organizations}
            selectedOrgId={selectedOrgId}
            onSelectOrg={handleSelectOrg}
          />

          {/* Contextual Hierarchy Line & Committee Level Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-charcoal/8 pb-4">
            {/* Subtle Structural Context (No technical IDs) */}
            <div className="flex items-center gap-2 font-sans text-xs text-muted">
              <span className="font-semibold text-charcoal">
                {currentOrg?.name ?? "Indian Union Muslim League"} ({currentOrg?.shortName})
              </span>
              <span className="text-charcoal/30">·</span>
              <span>Pathanamthitta District</span>
            </div>

            {/* Committee Level Segmented Selector */}
            <CommitteeSelector
              committees={availableCommittees}
              selectedCommitteeId={selectedCommitteeId}
              onSelectCommittee={handleSelectCommittee}
            />
          </div>
        </div>

        {/* Leadership Directory Sections */}
        <div className="space-y-12 sm:space-y-16">
          {displayedCommittees.map((committee) => {
            const members = getMembersByCommittee(committee.id);

            return (
              <CommitteeSection
                key={committee.id}
                committee={committee}
                members={members}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
