import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserServices from "../services/UserServices";

export default function Profile() {
  const { user, logout, isAuthenticated, loadUser } = useAuthStore();
  const [activeTab, setActiveTab] = useState("info");

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Vous êtes déconnecté avec succès");

    setTimeout(() => navigate("/"), 1000);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const userServices = new UserServices();
      const token = localStorage.getItem("token");
      await userServices.updateUser(
        user._id,
        { firstName, lastName, email },
        token
      );

      toast.success("Vous avez modifié avec succès");
    } catch (error) {
      toast.error("Une erreur lors de la modification");
    }
  };

  useEffect(() => {
    if (user) {
      setFirstname(user.firstName || "");
      setLastname(user.lastName || "");
      setEmail(user.email || "");
    }
  }, [user]);

  return (
    <>
      <ToastContainer draggable={true} position="bottom-right" />

      <div className="mx-auto px-6 p-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center">
            <FaUserCircle className="text-6xl text-teal-800 " />
            <div className="mx-2">
              <h1 className="text-2xl font-bold text-gray-800">
                {user?.firstName} {user?.lastName}
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
          <form className="space-y-4" onSubmit={handlerSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="w-full border border-gray-300 transition outline-0 px-4 py-2 rounded mt-1 focus:ring-1 focus:ring-teal-800"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Nom</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                  className="w-full border border-gray-300 transition outline-0 px-4 py-2 rounded mt-1 focus:ring-1 focus:ring-teal-800"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            {user.events && user.events.length > 0 ? (
              user.events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded shadow p-4"
                >
                  <h3 className="text-lg font-semibold text-teal-800">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500">Date : {event.date}</p>
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
