// store.js

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/detailsSlice";
import orderReducer from "./slices/orderSlice";
import landefReducer from "./slices/deflanSlice";
import favSlice from "./slices/favSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    user: userReducer,
    product: productReducer,
    order: orderReducer,
    landef: landefReducer,
    fav: favSlice,
  },
});

export default store;
