// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import EventsPage from './pages/EventsPage';
import Footer from './components/Footer';
import MobileView from './components/MobileView';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Détecter les changements de taille d'écran
  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile ? (
        <MobileView />
      ) : (
        <>
          <Navbar />
          <main className="flex-grow">
            <EventsPage />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;