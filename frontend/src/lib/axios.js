import axios from "axios";

// in production there's no localhost so it must be dynamic
const BASE_URL = import.meta.MODE==="development" ? "http://localhost:5001/api" : "/api";
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
