import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export default { login };
