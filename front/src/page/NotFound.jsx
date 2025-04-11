import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen p-6">
      <div className="container flex flex-col items-center justify-center px-4 text-center text-gray-900">
        <h2 className="mb-6 font-extrabold text-7xl sm:text-8xl md:text-9xl">
          <span className="sr-only">Erreur</span>404
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Désolé, nous n'avons pas trouvé cette page.
        </p>
        <Link
          to="/"
          className="bg-gray-800 text-white text-sm sm:text-base px-4 sm:px-6 py-3 rounded-sm hover:bg-gray-900 transition mt-6"
        >
          Retour à la page d'accueil
        </Link>
      </div>
    </section>
  );
}
