import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";
import { ToastContainer, toast } from "react-toastify";

export default function Profile() {
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("info");

  const userInfo = user || {
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@mail.com",
    createdAt: "2024-05-01",
    events: [
      {
        title: "Conférence JavaScript",
        date: "2024-06-01",
        places: 120,
      },
    ],
  };

  const [formData, setFormData] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: "",
  });

  const handleLogout = () => {
    logout();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer draggable={true} position="bottom-right" />

      <div className="mx-auto px-6 p-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center">
            <FaUserCircle className="text-6xl text-teal-800 " />
            <div className="mx-2">
              <h1 className="text-2xl font-bold text-gray-800">
                {formData.firstName} {formData.lastName}
              </h1>
              <p className="text-sm text-gray-500">Membre depuis </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition cursor-pointer"
            >
              Déconnexion
            </button>
          </div>
        </div>

        <div className="mb-6 flex border-b border-gray-300">
          <button
            onClick={() => setActiveTab("info")}
            className={`py-2 text-sm font-medium ${
              activeTab === "info"
                ? "text-teal-800 border-b-2 border-teal-800"
                : "text-gray-600 hover:text-teal-700"
            }`}
          >
            Informations personnelles
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`ml-5 py-2 text-sm font-medium ${
              activeTab === "events"
                ? "text-teal-800 border-b-2 border-teal-800"
                : "text-gray-600 hover:text-teal-700"
            }`}
          >
            Événements
          </button>
        </div>

        {activeTab === "info" && (
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 transition outline-0 px-4 py-2 rounded mt-1 focus:ring-1 focus:ring-teal-800"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Nom</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 transition outline-0 px-4 py-2 rounded mt-1 focus:ring-1 focus:ring-teal-800"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 transition outline-0 px-4 py-2 rounded mt-1 focus:ring-1 focus:ring-teal-800"
              />
            </div>

            <div>
              <input
                type="submit"
                value="Modifier"
                className="bg-teal-800 py-2 px-4 text-white rounded hover:bg-teal-900 transition"
              />
            </div>
          </form>
        )}

        {activeTab === "events" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userInfo.events.length > 0 ? (
              userInfo.events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded shadow p-4"
                >
                  <h3 className="text-lg font-semibold text-teal-800">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500">Date : </p>
                  <p className="text-sm text-gray-500">
                    Places : {event.places}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Aucun événement inscrit.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
