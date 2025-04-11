import { Link } from "react-router-dom";
import Form from "../components/Login/Form";
import image from "../assets/images/image2.jpg";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black bg-opacity-90"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md p-6 bg-white rounded-sm shadow-md relative z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Se connecter
        </h2>

        <Form />

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
