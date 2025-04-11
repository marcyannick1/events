import React, { useState } from "react";

const EventAdd = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        date: "",
        organizer: "",
        capacity: "",
        imageUrl: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
        setFormData({
            title: "",
            description: "",
            location: "",
            date: "",
            organizer: "",
            capacity: "",
            imageUrl: "",
        });
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
            <button type="submit">Add Event</button>
        </form>
    );
};

export default EventAdd;