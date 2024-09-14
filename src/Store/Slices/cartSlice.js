import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Helper function to load cart state from cookies
const loadCartFromCookies = () => {
  const savedCart = Cookies.get("cart");
  return savedCart
    ? JSON.parse(savedCart)
    : { items: [], totalQuantity: 0, totalPrice: 0 };
};

// Helper function to save cart state to cookies
const saveCartToCookies = (cart) => {
  Cookies.set("cart", JSON.stringify(cart), { expires: 7 }); // Cookie expires in 7 days
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromCookies(), // Initialize state from cookies
  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const { selectedProduct, quantity, selectedSize } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === selectedProduct.id
      );

      if (existingItem) {
        existingItem.quantity += quantity; // Use the quantity from the payload
        existingItem.totalPrice += selectedProduct.price * quantity;
      } else {
        state.items.push({
          id: selectedProduct.id,
          title: selectedProduct.title,
          price: selectedProduct.price,
          quantity: quantity,
          totalPrice: selectedProduct.price * quantity,
          image: selectedProduct.thumbnail, // Add image for display purposes
          size: selectedSize, // Add size to the cart item
        });
      }
      state.totalQuantity += quantity;
      state.totalPrice += selectedProduct.price * quantity;

      // Save the updated cart to cookies
      saveCartToCookies(state);
    },

    // Remove item from cart
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }

      // Save the updated cart to cookies
      saveCartToCookies(state);
    },

    // Decrease the quantity of a product in the cart
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }

      // Save the updated cart to cookies
      saveCartToCookies(state);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
        state.totalPrice += existingItem.price;
      }
      saveCartToCookies(state);
    },

    // Clear the cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      // Save the cleared cart to cookies
      saveCartToCookies(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
