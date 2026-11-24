"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface EventItem {
  _id: string;
  eventName: string;
  description: string;
  eventDate: string;
  venue: string;
  eventType: string;
  status: string;
}

export default function Dashboard() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    const res = await fetch("/api/event");
    if (res.ok) {
      const data = await res.json();
      setEvents(data.events);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  

  if (loading) return <p>Loading events...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Events</h1>
       
      </div>

      {events.length === 0 ? (
        <p className="bg-white p-6 rounded shadow text-gray-600">No events found. Add one!</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {events.map((ev) => (
            <div key={ev._id} className="bg-white p-5 rounded shadow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-bold">{ev.eventName}</h2>
                  <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
                    {ev.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{ev.description}</p>
                <div className="text-sm mt-3 space-y-1 text-gray-700">
                  <p>
                    <strong>Date:</strong> {new Date(ev.eventDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Venue:</strong> {ev.venue}
                  </p>
                  <p>
                    <strong>Type:</strong> {ev.eventType}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-3 border-t">
                <Link
                  href={`/dashboard/${ev._id}`}
                  className="bg-amber-500 text-white px-3 py-1 rounded text-sm"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}