import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getEvents,
  getEnrichedEvent,
  getEventsByCategory,
} from "@/src/data/events";
import { EventDetail } from "@/src/components/events/EventDetail";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const allEvents = getEvents();
  return allEvents.map((event) => ({
    id: event.slug || event.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = getEnrichedEvent(id);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} · Events`,
    description:
      event.summary ||
      `Official program details and schedule for ${event.title}.`,
  };
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event = getEnrichedEvent(id);

  if (!event) {
    notFound();
  }

  const related = event.category
    ? getEventsByCategory(event.category).filter((e) => e.id !== event.id)
    : [];

  return <EventDetail event={event} relatedEvents={related} />;
}
