const API_URL = import.meta.env.VITE_APP_BACKEND_API_URL;

export default class EventServices {
    static async getAllEvents() {
        const response = await fetch(`${API_URL}/events`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch events");
        }
        return response.json();
    }

    static async getEventById(eventId) {
        const response = await fetch(`${API_URL}/events/${eventId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch event details");
        }
        return response.json();
    }

    static async addEvent(eventData) {
        const response = await fetch(`${API_URL}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(eventData),
        });
        if (!response.ok) {
            throw new Error("Failed to add event");
        }
        return response.json();
    }

    static async updateEvent(eventId, eventData) {
        const response = await fetch(`${API_URL}/events/${eventId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(eventData),
        });
        if (!response.ok) {
            throw new Error("Failed to update event");
        }
        return response.json();
    }

    static async deleteEvent(eventId) {
        const response = await fetch(`${API_URL}/events/${eventId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        if (!response.ok) {
            throw new Error("Failed to delete event");
        }
        return response.json();
    }
}
