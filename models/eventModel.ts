import mongoose from "mongoose";

interface user{
    eventName:string
    description:string
    eventDate:Date
    venue:string
    eventType:string
    status:string
}
const eventSchema = new mongoose.Schema(
  {
    eventName:
     { 
        type: String, 
        required: true 
    },
    description: {
         type: String, 
         required: true 
        },
    eventDate: { 
        type: Date, 
        required: true 
    },
    venue: {
         type: String,
          required: true
         },
    eventType: {
         type: String, 
         required: true 
        },
    status: { 
        type: String,
         required: true, 
          },
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event",eventSchema)
