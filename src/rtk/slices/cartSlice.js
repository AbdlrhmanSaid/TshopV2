import { createSlice } from "@reduxjs/toolkit";
import { min } from "date-fns";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1, initialQuantity: 1 });
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
        console.log("Initial Quantity:", existingItem.initialQuantity);
      }
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
