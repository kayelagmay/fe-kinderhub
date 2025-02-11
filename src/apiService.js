import axios from "axios";
import API_BASE_URL from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all events
export const getEvents = async () => {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export default api;
