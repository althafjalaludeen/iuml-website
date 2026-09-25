import { Suspense } from "react";
import type { Metadata } from "next";
import { ActivitiesHeader } from "@/src/components/activities/ActivitiesHeader";
import { ActivitiesDirectory } from "@/src/components/activities/ActivitiesDirectory";

export const metadata: Metadata = {
  title: "Activities & Initiatives",
  description:
    "A record of programs, initiatives and community activities documented by the organization.",
};

export default function ActivitiesPage() {
  return (
    <div>
      <ActivitiesHeader />
      <Suspense
        fallback={
          <div className="py-20 text-center font-sans text-xs uppercase tracking-wider text-muted">
            Loading activity archive...
          </div>
        }
      >
        <ActivitiesDirectory />
      </Suspense>
    </div>
  );
}
