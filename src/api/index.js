import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_IP,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
