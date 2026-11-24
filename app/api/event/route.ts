import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/eventModel";

export async function GET() {
  try {
    await connectDB();
    const events = await Event.find().sort({ eventDate: 1 });
    return NextResponse.json({ events }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to fetch events" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { eventName, description, eventDate, venue, eventType, status } = await req.json();

    if (!eventName || !description || !eventDate || !venue || !eventType || !status) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await connectDB();
    const newEvent = await Event.create({
      eventName,
      description,
      eventDate,
      venue,
      eventType,
      status,
    });

    return NextResponse.json({ message: "Event created", event: newEvent }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Failed to create event" }, { status: 500 });
  }
}