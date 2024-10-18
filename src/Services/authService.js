import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/signup`, userData);
    return response.data;
  } catch (error) {
    // console.log("error", error.response.data.error);
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export default { signup };
