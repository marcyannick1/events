import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-800">
          <Link to="/">Events</Link>
        </div>

        <div>
          <Link
            to="/login"
            className="bg-white text-teal-800 hover:text-white border border-teal-700 px-4 py-2 rounded hover:bg-teal-900 transition mx-1"
          >
            Connexion
          </Link>

          <Link
            to="/register"
            className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-900 transition mx-1"
          >
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  );
}
