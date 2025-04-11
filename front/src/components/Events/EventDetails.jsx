import React, { useEffect, useState } from "react";
import EventServices from "../../services/EventServices";

const EventDetails = ({ eventId }) => {
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const eventDetails = await EventServices.getEventById(eventId);
                setEvent(eventDetails);
            } catch (err) {
                setError("Failed to fetch event details.");
            }
        };

        if (eventId) {
            fetchEventDetails();
        }
    }, [eventId]);

    if (!eventId) {
        return <p>No event selected.</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!event) {
        return <p>Loading event details...</p>;
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