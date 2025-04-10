import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/image2.jpg";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black opacity-90"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-sm p-6 bg-white rounded-sm shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Se connecter
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-800 text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-800 text-gray-800"
            />
          </div>
          
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-800 text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-800 text-gray-800"
            />
          </div>

          <input
            type="submit"
            className="w-full bg-teal-800 hover:bg-teal-900 text-white font-semibold py-2 rounded-sm transition duration-300 cursor-pointer"
            value="Se connecter"
          />
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Pas encore de compte ?{" "}
          <Link
            to="/register"
            className="text-teal-900 transition hover:underline"
          >
            Inscription
          </Link>
        </p>
      </div>
    </div>
  );
}
