import { Suspense } from "react";
import type { Metadata } from "next";
import { EventsHeader } from "@/src/components/events/EventsHeader";
import { EventsDirectory } from "@/src/components/events/EventsDirectory";

export const metadata: Metadata = {
  title: "Events & Programs",
  description:
    "A public record of upcoming and past programs, meetings and events documented by the organization.",
};

export default function EventsPage() {
  return (
    <div>
      <EventsHeader />
      <Suspense
        fallback={
          <div className="py-20 text-center font-sans text-xs uppercase tracking-wider text-muted">
            Loading events calendar...
          </div>
        }
      >
        <EventsDirectory />
      </Suspense>
    </div>
  );
}
