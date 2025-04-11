import React, { useState, useEffect } from "react";

// filepath: c:\wamp64\www\Projet_formation\cours\Cours-Avril-2025\tp-groupe\events\front\src\components\Events\EventDelete.jsx

const EventEdit = ({ event, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        date: "",
        organizer: "",
        capacity: "",
        imageUrl: "",
    });

    useEffect(() => {
        if (event) {
            setFormData(event);
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
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
                    required
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
                    required
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
            <button type="submit">Update Event</button>
        </form>
    );
};

export default EventEdit;