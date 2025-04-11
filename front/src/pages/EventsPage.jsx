// src/pages/EventsPage.jsx
import EventCard from '../components/EventCard';
import { upcomingEvents, pastEvents } from '../data/events';

const EventsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="breadcrumb text-sm text-gray-500 mb-6">
        Main page / Event
      </div>
      
      <div className="flex justify-between items-baseline mb-8">
        <h1 className="text-4xl font-bold">Events</h1>
        <div className="text-[120px] font-bold text-gray-100 leading-none">Events</div>
      </div>
      
      <p className="mb-12 max-w-2xl">
        University events take place throughout the year from educational 
        showcases to public lectures, national tours and one-off exhibitions.
      </p>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Upcoming events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Past events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      
      <div className="flex justify-center mb-16">
        <button className="border border-black px-8 py-2 hover:bg-black hover:text-white transition-colors">
          See more events
        </button>
      </div>
    </div>
  );
};

export default EventsPage;