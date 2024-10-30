import { createSlice } from "@reduxjs/toolkit";

// Function to load cart from local storage
const loadCartByStorage = () => {
  try {
    const cartItem = localStorage.getItem('cart');
    if (cartItem === null) {
      return []; // Return empty array if no items are found
    }
    return JSON.parse(cartItem); // Parse and return cart items from storage
  } catch (error) {
    console.warn(error);
    return [];
  }
};

// Function to save cart to local storage
const savetoCart = (cartItems) => {
  try {
    const cartState = JSON.stringify(cartItems);
    localStorage.setItem('cart', cartState); // Save cart state in local storage
  } catch (e) {
    console.warn(e + " :: not saving to localStorage");
  }
};

// Initialize state with cart items from local storage
const initialState = {
  cartItem: loadCartByStorage() // Initialize with items loaded from storage
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, action) => {
      // Add the new item to the cart
      state.cartItem.push(action.payload);
      // Persist cart items to localStorage
      savetoCart(state.cartItem);
    },
    removeFromCart: (state, action) => {
      // Remove the item from the cart by filtering based on the ID
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
      // Persist the updated cart to localStorage
      savetoCart(state.cartItem);
    }
  }
});

// Export the actions for use in components
export const { addTocart, removeFromCart } = CartSlice.actions;

// Export the reducer for the store
export default CartSlice.reducer;
