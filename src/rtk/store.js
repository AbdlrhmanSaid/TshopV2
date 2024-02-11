// store.js

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/detailsSlice";
import orderReducer from "./slices/orderSlice";
import landefReducer from "./slices/deflanSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    user: userReducer,
    product: productReducer,
    order: orderReducer,
    landef: landefReducer,
  },
});

export default store;
