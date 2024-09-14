import axiosInstance from "./axiosInstance";

// Get all products with an optional limit
export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get(`/products?limit=0`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// Get all product categories
export const getAllCats = async () => {
  try {
    const response = await axiosInstance.get("/products/category-list");
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// Get a single product by its ID
export const getSingleProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};
