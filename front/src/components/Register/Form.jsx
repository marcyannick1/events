import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import UserServices from "../../services/UserServices";
import { ToastContainer, toast } from "react-toastify";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);

    try {
      const userServices = new UserServices();

      const response = await userServices.register({
        firstName,
        lastName,
        email,
        password,
      });

      toast.success("Votre compte a été créer avec succes");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Une erreur est survenue", error);
      toast.error("Une erreur s'est produite");
    }
  };

  return (
    <>
      <ToastContainer draggable={true} position="bottom-right" />

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-800 text-gray-800"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-800 text-gray-800"
            />
          </div>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-800 text-gray-800"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Mot de passe
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-800 text-gray-800 pr-10"
          />
          <span
            className="absolute right-3 top-[40px] text-gray-600 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>

        <input
          type="submit"
          className="w-full bg-teal-800 hover:bg-teal-900 text-white font-semibold py-2 rounded-sm transition duration-300 cursor-pointer"
          value="S'inscrire"
        />
      </form>
    </>
  );
}
