import axios from "axios";
import { useAuth } from "@/stores/store";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_IP,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const { token } = useAuth();

  if (!config.excludeAuthorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
