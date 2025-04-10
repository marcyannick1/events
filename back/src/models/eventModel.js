const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    location: String,
    date: { type: Date, required: true },
    organizer: String,
    capacity: Number,
    attendees: [String],
    imageUrl: { type: String, default: "" } 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
