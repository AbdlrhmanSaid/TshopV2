import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductDetails = createAsyncThunk(
  "product/fetchProductDetails",
  async (productId, thunkAPI) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("فشل في جلب تفاصيل المنتج");
      }
      const productData = await response.json();
      return productData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productDetails: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
