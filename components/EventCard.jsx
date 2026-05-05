"use client";

import Tag from "./Tag";
import Link from "next/link";

const EventCard = ({ eventData }) => {
  return (
    <div className="w-full">
      <Link href={`/events/${eventData.id}`}>
        <div className="hover-inverse group transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark border border-slate-400 rounded-md px-4 py-3 cursor-pointer">
          
          <img
            className="w-full mb-3 shadow-lg"
            src={eventData.image}
            alt={eventData.name}
          />

          <div className="flex gap-2 items-center flex-wrap">
            {eventData.tags.map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
          </div>

          <p className="mt-4">
            {new Date(eventData.date).toDateString()} | {eventData.time}
          </p>

          <p className="mt-2">{eventData.location}</p>

          <h2 className="text-xl font-bold mt-2">{eventData.name}</h2>

          <div className="flex justify-between items-center mt-6">
            <h3>{eventData.artist}</h3>
            <h3>
              {eventData.price > 0
                ? `$ ${eventData.price.toLocaleString()}`
                : "FREE"}
            </h3>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default EventCard;
