import React from "react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const EventDetails = ({ event }) => {
    if (!event) {
        return <p>No event selected.</p>;
    }

    return (
        <div>
            <h2>{event.title}</h2>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Organizer:</strong> {event.organizer}</p>
            <p><strong>Capacity:</strong> {event.capacity}</p>
            {event.imageUrl && (
                <div>
                    <strong>Image:</strong>
                    <img src={event.imageUrl} alt={event.title} style={{ maxWidth: "100%" }} />
                </div>
            )}
        </div>
    );
};

export default EventDetails;