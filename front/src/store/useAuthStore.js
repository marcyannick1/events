import { create } from "zustand";
import UserServices from "../services/UserServices";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),

  login: (data) => {
    localStorage.setItem("token", data.token);
    set({ user: data.user, token: data.token, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, isAuthenticated: false });
  },

  loadUser: async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const userServices = new UserServices();
        const user = await userServices.getUser(token);
        set({ user });
      } catch (error) {
        console.error("Erreur de chargement des données utilisateur:", error);
      }
    }
  },
}));
