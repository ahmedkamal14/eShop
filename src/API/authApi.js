import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

export const loginUser = async (username, password) => {
  try {
    const response = await axiosInstance.post("/user/login", {
      username,
      password,
      expiresInMins: 30,
    });
    Cookies.set("token", response.data.token, { expires: 0.5 });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.message); // Improved error handling
    throw new Error(`Login failed: ${error.message}`);
  }
};

export const getCurrentUser = async (token) => {
  try {
    const response = await axiosInstance.get("/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Get current user error:", error.message); // Improved error handling
    throw new Error(`Fetching user failed: ${error.message}`);
  }
};
