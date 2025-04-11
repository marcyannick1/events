// src/components/Navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Education', href: '#' },
    { label: 'Admission', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'International', href: '#' },
    { label: 'SME', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'News', href: '#' },
    { label: 'About us', href: '#' },
  ];
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <a href="/" className="font-bold text-lg">
            Khazar<br />University
          </a>
        </div>
        <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm hover:text-gray-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <button className="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <button className="ml-1 bg-black text-white px-3 py-2 text-xs">
            For Students
          </button>
        </nav>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="block py-2 hover:text-gray-500"
            >
              {item.label}
            </a>
          ))}
          <button className="mt-4 w-full bg-black text-white py-2">
            For Students
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;