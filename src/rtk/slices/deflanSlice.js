import { createSlice } from "@reduxjs/toolkit";

export const landefSlice = createSlice({
  name: "landef",
  initialState: {
    isEnglish: localStorage.getItem("isEnglish") === "true" ? true : false, // التحقق من قيمة مخزنة في localStorage
  },
  reducers: {
    setLanguage: (state, action) => {
      state.isEnglish = action.payload;
      localStorage.setItem("isEnglish", action.payload); // حفظ قيمة اللغة في localStorage
    },
  },
});

export const { setLanguage } = landefSlice.actions;

export const selectLanguage = (state) => state.landef.isEnglish;

export default landefSlice.reducer;
