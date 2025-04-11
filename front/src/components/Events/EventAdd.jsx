import React, { useState } from "react";
import EventServices from "../../services/EventServices";

const EventAdd = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await EventServices.addEvent(formData);
            console.log("Event added successfully:", formData);
            setFormData({
                title: "",
                description: "",
                location: "",
                date: "",
                organizer: "",
                capacity: "",
                imageUrl: "",
            });
        } catch (error) {
            console.error("Failed to add event:", error.message);
        }
    };

    return (
        <div style={{ padding: "20px", backgroundColor: "#f4f4f4", borderRadius: "8px", margin: "20px" }}>
            <h2 style={{ marginBottom: "20px", color: "#333" }}>Add Event</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>
                <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>
                <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>
                <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>
                <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Organizer:</label>
                    <input
                        type="text"
                        name="organizer"
                        value={formData.organizer}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>
                <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Capacity:</label>
                    <input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>
                <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Add Event
                </button>
            </form>
        </div>
    );
};

export default EventAdd;