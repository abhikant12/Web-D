import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({                       // configureStore sets up a well-configured Redux store (CartSlice) with a single function call
    reducer:{ 
        cart: CartSlice.reducer,
    }
});