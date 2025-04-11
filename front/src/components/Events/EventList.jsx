import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import EventServices from '../../services/EventServices';

const EventList = ({ events, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = async (eventId) => {
        const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?");
        if (confirmDelete) {
            try {
                await EventServices.deleteEvent(eventId);
                alert("Événement supprimé avec succès !");
                if (onDelete) {
                    onDelete(eventId); // Appeler une fonction de rappel si nécessaire
                }
            } catch (error) {
                console.error("Erreur lors de la suppression :", error);
                alert("Impossible de supprimer l'événement.");
            }
        }
    };

    const handleViewDetails = (eventId) => {
        navigate(`/events/${eventId}`); // Redirige vers le composant EventDetails
    };

    return (
        <div className="event-list">
            {events.map((event) => (
                <div key={event.id} className="card" style={{ margin: '10px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <p><strong>Date :</strong> {event.date}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button
                            onClick={() => handleViewDetails(event.id)}
                            style={{ background: '#007bff', border: 'none', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            Voir les détails
                        </button>
                        <button
                            onClick={() => handleDelete(event.id)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}
                            title="Supprimer l'événement"
                        >
                            <FaTrashAlt size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventList;
