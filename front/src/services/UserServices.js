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

  async getUsers(token) {
    try {
      const response = await axios.get(`${CONFIG.BACKEND_API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message ?? "Une erreur est survenue");
    }
  }
}
