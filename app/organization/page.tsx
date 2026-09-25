import { Suspense } from "react";
import type { Metadata } from "next";
import { OrganizationHeader } from "@/src/components/organization/OrganizationHeader";
import { OrganizationDirectory } from "@/src/components/organization/OrganizationDirectory";
import { getOrganizations, committees } from "@/src/data/organization";

export const metadata: Metadata = {
  title: "Leadership & Committees — Indian Union Muslim League",
  description:
    "An overview of the organization's committees, leadership, and associated wings.",
};

export default function OrganizationPage() {
  const organizations = getOrganizations();

  return (
    <div>
      <OrganizationHeader />
      <Suspense
        fallback={
          <div className="py-24 text-center font-sans text-xs uppercase tracking-wider text-muted">
            Loading organizational directory...
          </div>
        }
      >
        <OrganizationDirectory
          organizations={organizations}
          allCommittees={committees}
        />
      </Suspense>
    </div>
  );
}
