import React, { useState } from "react";
import EventServices from "../../services/EventServices";
import './EventEdit.css'; // Assuming you have some CSS for styling

const eventServices = new EventServices();

const EventEdit = ({ event, onSave }) => {
    const [formData, setFormData] = useState({
        title: event?.title || "",
        description: event?.description || "",
        location: event?.location || "",
        date: event?.date || "",
        organizer: event?.organizer || "",
        capacity: event?.capacity || "",
        imageUrl: event?.imageUrl || "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (event?.id) {
                // Update existing event
                await eventServices.updateEvent(event.id, formData);
            } else {
                // Add new event
                await eventServices.addEvent(formData);
            }
            if (onSave) {
                onSave(formData);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Organizer:</label>
                <input
                    type="text"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Capacity:</label>
                <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Image URL:</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

export default EventEdit;
