import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-700 pt-10 pb-6 px-6 border-t border-gray-300 mt-10">
      <div className="px-2 grid grid-cols-1 md:grid-cols-4 gap-4">

        <div>
          <h2 className="text-3xl font-bold text-teal-800 mb-3">Events</h2>
          <p className="text-sm mb-4">
            Events est votre plateforme pour découvrir, organiser et vivre des
            événements uniques. Connectez-vous avec votre communauté et ne
            manquez jamais une occasion de créer des souvenirs.
          </p>
          <div className="flex space-x-3 mt-2 text-teal-800">
            <a href="#">
              <FaFacebookF className="hover:text-teal-600" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-teal-600" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-teal-600" />
            </a>
            <a href="#">
              <FaLinkedinIn className="hover:text-teal-600" />
            </a>
          </div>
        </div>

        <div className="mx-0 sm:mx-10">
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-teal-700">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-teal-700">
                Connexion
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-teal-700">
                Inscription
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-teal-700">
                Événements
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email : contact@events.com</li>
            <li>Téléphone : +33 1 23 45 67 89</li>
            <li>Adresse : 123 Rue des Événements, Paris</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Abonnez-vous à notre newsletter pour rester informé des prochains
            événements.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-800 text-sm"
            />
            <button
              type="submit"
              className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-900 text-sm"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 px-4">
        &copy; {new Date().getFullYear()} Events. Tous droits réservés.
      </div>
    </footer>
  );
}
