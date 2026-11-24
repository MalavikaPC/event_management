"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/dashboard" className="text-xl font-bold">
        Event Manager
      </Link>
      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="text-sm hover:underline">
          All Events
        </Link>
        <Link
          href="/dashboard/add"
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded text-sm"
        >
          + Add Event
        </Link>
      </div>
    </header>
  );
}