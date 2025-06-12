import { api } from "./Api";

export const AuthService = {
  login: async (email: string, password: string) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  },
};

export const Registration = {
  register: async (email: string, password: string) => {
    const response = await api.post("/auth/register", {
      email,
      password,
    });
    return response.data;
  },

  validate: async () => {
    const res = await api.get("/api/auth/validate");
    return res.data;
  },
};
