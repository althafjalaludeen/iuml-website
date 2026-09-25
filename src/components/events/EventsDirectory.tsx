"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { eventCategories } from "@/src/data/events/categories";
import { getEventsByStatus } from "@/src/data/events";
import { Container } from "@/src/components/ui/Container";
import { EventStatusNav } from "./EventStatusNav";
import { EventCategoryNav } from "./EventCategoryNav";
import { EventList } from "./EventList";

export function EventsDirectory() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const paramStatus = searchParams.get("status");
  const selectedStatus: "upcoming" | "past" | "all" =
    paramStatus === "past" || paramStatus === "all" ? paramStatus : "upcoming";

  const paramCategory = searchParams.get("category");
  const selectedCategory =
    paramCategory && eventCategories.some((c) => c.id === paramCategory)
      ? paramCategory
      : "all";

  const activeCategoryInfo = eventCategories.find(
    (c) => c.id === selectedCategory,
  );

  // Retrieve events for the selected status
  const eventsForStatus = getEventsByStatus(selectedStatus);

  // Filter by category if specified
  const displayedEvents =
    selectedCategory === "all"
      ? eventsForStatus
      : eventsForStatus.filter((e) => e.category === selectedCategory);

  function updateQuery(newStatus: "upcoming" | "past" | "all", newCat: string) {
    startTransition(() => {
      const params = new URLSearchParams();
      if (newStatus !== "upcoming") {
        params.set("status", newStatus);
      }
      if (newCat !== "all") {
        params.set("category", newCat);
      }
      const query = params.toString();
      router.replace(`/events${query ? `?${query}` : ""}`, { scroll: false });
    });
  }

  function handleSelectStatus(status: "upcoming" | "past" | "all") {
    updateQuery(status, selectedCategory);
  }

  function handleSelectCategory(catId: string) {
    updateQuery(selectedStatus, catId);
  }

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <Container className="space-y-8 sm:space-y-10">
        {/* Navigation Filters */}
        <div className="space-y-4">
          <EventStatusNav
            selectedStatus={selectedStatus}
            onSelectStatus={handleSelectStatus}
          />

          <EventCategoryNav
            categories={eventCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        {/* Event List or Intentional Archival Empty State */}
        <EventList
          events={displayedEvents}
          status={selectedStatus}
          categoryLabel={activeCategoryInfo?.label}
        />
      </Container>
    </div>
  );
}
