import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuthStore } from "../store/useAuthStore";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Navbar() {
  const { isAuthenticated, user, loadUser } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && !user) {
      loadUser();
    }
  }, [isAuthenticated, user, loadUser]);

  return (
    <>
      <ToastContainer />

      <nav className="bg-white py-5 px-6 shadow-lg border-b border-gray-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold text-teal-800">
            <Link to="/">Events</Link>
          </div>

          <div>
            {!isAuthenticated ? (
              <>
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
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="flex items-center justify-center text-gray-800 hover:text-teal-700 transition"
                >
                  <IoPersonCircleOutline className="text-2xl mx-1" />
                  <span className="text-lg">Bonjour {user?.firstName}</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
