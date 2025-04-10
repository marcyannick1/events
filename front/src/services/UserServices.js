import axios from "axios";
import { CONFIG } from "../config";

export default class UserServices {
  async register(formData) {
    try {
      const response = await axios.post(
        `${CONFIG.BACKEND_API_URL}/user`,
        formData
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response?.msg ?? "Une erreur est survenue");
    }
  }

  async login(credentials) {
    try {
      const response = await axios.post(
        `${CONFIG.BACKEND_API_URL}/auth`,
        credentials
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.msg ?? "Une erreur est survenue", error);
    }
  }
}
