// src/components/EventCard.jsx
import { useState } from 'react';

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <h3 className="font-bold text-lg">{event.title}</h3>
      </div>
      
      <div className="flex mb-4">
        <div className="text-6xl font-bold mr-3">{event.date.day}</div>
        <div className="flex flex-col justify-center">
          <div className="text-sm">{event.date.month}</div>
          <div className="text-sm">{event.date.year}</div>
          <div className="text-sm">{event.date.dayName}</div>
        </div>
      </div>
      
      <div 
        className="relative overflow-hidden cursor-pointer mb-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-[200px] object-cover"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity">
            <div className="text-white text-center p-4">
              <p>{event.shortDescription}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex space-x-2">
        {event.canRegister && (
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-1 text-sm">
            Register
          </button>
        )}
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-1 text-sm">
          More info
        </button>
      </div>
    </div>
  );
};

export default EventCard;