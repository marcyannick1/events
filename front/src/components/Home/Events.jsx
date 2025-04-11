import React from "react";
import Card from "../Card";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Conférence Tech 2025",
      date: "2025-05-20",
      places: 150,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Atelier React Avancé",
      date: "2025-06-10",
      places: 40,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Hackathon Étudiant",
      date: "2025-07-05",
      places: 80,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Conférence Tech 2025",
      date: "2025-05-20",
      places: 150,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Atelier React Avancé",
      date: "2025-06-10",
      places: 40,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Hackathon Étudiant",
      date: "2025-07-05",
      places: 80,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Conférence Tech 2025",
      date: "2025-05-20",
      places: 150,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Atelier React Avancé",
      date: "2025-06-10",
      places: 40,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {events.map((event) => (
        <Card event={event} />
      ))}
    </div>
  );
}
