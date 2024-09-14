import axios from "axios";

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/", // Replace with your actual API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
