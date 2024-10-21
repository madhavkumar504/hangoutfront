import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", // Add this to explicitly accept JSON responses
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const login = async (userData) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("token", data.access_token);
  }
  return data;
};

export const logout = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  localStorage.removeItem("token");
  return response.ok;
};
