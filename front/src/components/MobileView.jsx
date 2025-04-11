// src/components/MobileView.jsx
const MobileView = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="flex justify-between items-center p-4 border-b">
          <div className="font-bold">
            Khazar<br />University
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>
        
        <main className="flex-grow p-4">
          <div className="mb-8">
            <img src="/placeholder-mobile-banner.jpg" alt="Students" className="w-full h-40 object-cover mb-4" />
            <h1 className="text-2xl font-bold mb-2">Discover your story</h1>
            <p className="text-sm mb-4">
              Khazar University is a private educational institution offering undergraduate and professional studies promoting advanced study and research, educational policy and development in the Republic of Azerbaijan.
            </p>
            <div className="flex space-x-2">
              <button className="bg-black text-white px-4 py-2 text-sm">
                Apply
              </button>
              <button className="border border-black px-4 py-2 text-sm">
                Virtual tour
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default MobileView;