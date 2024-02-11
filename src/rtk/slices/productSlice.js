import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProduct",
  async () => {
    const res = await fetch(`${apiUrl}`);
    const data = await res.json();
    return data;
  }
);

export const getCategory = createAsyncThunk(
  "productSlice/getCategory",
  async () => {
    const res = await fetch(`${apiUrl}/categories`);
    const data = await res.json();
    return data;
  }
);

const productSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // يمكنك إظهار رسالة الخطأ أو إجراء أي منطق آخر هنا
        console.error("Error fetching products:", action.error);
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        // يمكنك إظهار رسالة الخطأ أو إجراء أي منطق آخر هنا
        console.error("Error fetching categories:", action.error);
      });
  },
});

// export const {fetchProducts} productSlice.actions;

export default productSlice.reducer;
// https://fakestoreapi.com/products http://localhost:9000/products
