import EventCard from "@/components/EventCard";

async function getEvents() {
  const res = await fetch(
    "https://qevent-backend.labs.crio.do/events",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function EventsPage({ searchParams }) {
  const events = await getEvents();

  const artist = searchParams?.artist;
  const tag = searchParams?.tag;

  let filteredEvents = events;

  // Filter by artist
  if (artist) {
    filteredEvents = events.filter(
      (event) => event.artist === artist
    );
  }

  // Filter by tag
  if (tag) {
    filteredEvents = events.filter((event) =>
      event.tags.includes(tag)
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} eventData={event} />
      ))}
    </div>
  );
}