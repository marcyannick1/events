import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import UserServices from "../../services/UserServices";
import { ToastContainer, toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };

    try {
      const userServices = new UserServices();
      const data = await userServices.login(credentials);

      localStorage.setItem("token", data.token);
      login(data);

      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <>
      <ToastContainer draggable={true} position="bottom-right" />

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
          value="Se connecter"
        />
      </form>
    </>
  );
}
