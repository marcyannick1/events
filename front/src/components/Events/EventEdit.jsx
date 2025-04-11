import React, { useState } from "react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSave) {
            onSave(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Save</button>
        </form>
    );
};

export default EventEdit;