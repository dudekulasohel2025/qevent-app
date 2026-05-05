async function getEvents() {
  const res = await fetch(
    "https://qevent-backend.labs.crio.do/events",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function EventDetails({ params }) {
  const events = await getEvents();

  const event = events.find(
    (e) => String(e.id) === String(params.id)
  );

  if (!event) {
    return <p className="text-center mt-10">Event not found</p>;
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      
      <img
        src={event.image}
        alt={event.name}
        className="w-full mb-6 rounded-lg"
      />

      <h1 className="text-3xl font-bold mb-4">{event.name}</h1>

      <p className="mb-2">
        {new Date(event.date).toDateString()} | {event.time}
      </p>

      <p className="mb-2">{event.location}</p>

      <p className="mb-4">Artist: {event.artist}</p>

      <p className="mb-4">
        {event.price > 0 ? `$${event.price}` : "FREE"}
      </p>

      <div className="flex gap-2 flex-wrap">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

    </div>
  );
}