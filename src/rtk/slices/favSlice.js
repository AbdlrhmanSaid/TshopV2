import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromFav: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearFav: (state, action) => {
      return [];
    },
  },
});

export const { addToFav, deleteFromFav, clearFav } = favSlice.actions;
export default favSlice.reducer;
