import { Link } from "react-router-dom";
import Form from "../components/Register/Form";
import image from "../assets/images/image2.jpg";

export default function Register() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black opacity-90"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md p-6 bg-white rounded-sm shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Se connecter
        </h2>

        <Form />

        <p className="mt-4 text-sm text-center text-gray-700">
          Avez-vous un compte ?{" "}
          <Link
            to="/login"
            className="text-teal-900 transition hover:underline"
          >
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
