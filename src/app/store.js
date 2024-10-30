import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"; // Adjust import if needed

export const store = configureStore({
    reducer: {
        cart: CartReducer // Use a key for your reducer
    }
});






