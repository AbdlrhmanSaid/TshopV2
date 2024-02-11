import { createSlice } from "@reduxjs/toolkit";

// يمكنك استخدام متغير لتتبع id المستخدمة حاليًا
let orderIdCounter = 1;

export const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      const newOrder = {
        ...action.payload,
        id: orderIdCounter++,
      };
      state.push(newOrder);
    },
    deleteOrder: (state, action) => {
      return state.filter((order) => order.id !== action.payload.id);
    },
    clearOrders: (state) => {
      return [];
    },
  },
});

export const { addOrder, deleteOrder, clearOrders } = orderSlice.actions;

export const selectOrders = (state) => state.order;

export default orderSlice.reducer;
