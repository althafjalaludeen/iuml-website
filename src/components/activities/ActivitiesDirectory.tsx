"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { activityCategories } from "@/src/data/activities/categories";
import { getActivitiesByCategory } from "@/src/data/activities";
import { ActivityCategory } from "@/src/data/activities/types";
import { Container } from "@/src/components/ui/Container";
import { ActivityCategoryNav } from "./ActivityCategoryNav";
import { ActivityGrid } from "./ActivityGrid";

export function ActivitiesDirectory() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const paramCategory = searchParams.get("category");
  const selectedCategory =
    paramCategory && activityCategories.some((c) => c.id === paramCategory)
      ? paramCategory
      : "all";

  const activeCategoryInfo = activityCategories.find(
    (c) => c.id === selectedCategory,
  );

  const displayedActivities = getActivitiesByCategory(
    selectedCategory as ActivityCategory | "all",
  );

  function handleSelectCategory(catId: string) {
    startTransition(() => {
      const params = new URLSearchParams();
      if (catId !== "all") {
        params.set("category", catId);
      }
      const query = params.toString();
      router.replace(`/activities${query ? `?${query}` : ""}`, { scroll: false });
    });
  }

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <Container className="space-y-8 sm:space-y-10">
        {/* Category Filter Navigation */}
        <div className="space-y-4">
          <ActivityCategoryNav
            categories={activityCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />

          {activeCategoryInfo?.description && selectedCategory !== "all" && (
            <p className="font-sans text-xs text-muted">
              Category Scope:{" "}
              <span className="text-charcoal/80 font-medium">
                {activeCategoryInfo.description}
              </span>
            </p>
          )}
        </div>

        {/* Activity Cards Grid or Archival Empty State */}
        <ActivityGrid
          activities={displayedActivities}
          categoryLabel={activeCategoryInfo?.label}
        />
      </Container>
    </div>
  );
}
