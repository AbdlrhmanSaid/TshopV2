import { createSlice } from "@reduxjs/toolkit";

// Function to check if userData is empty
const isUserDataEmpty = (userData) => {
  return Object.values(userData).every((value) => value === "");
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      username: "",
      address: {
        city: "",
        town: "",
        details: "",
      },
      age: "",
      phone: "",
      email: "",
    },
    isLogin: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isLogin = true;
    },
    clearUserData: (state) => {
      state.userData = {
        username: "",
        address: {
          city: "",
          town: "",
          details: "",
        },
        age: "",
        phone: "",
        email: "",
      };
      state.isLogin = false;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export const selectUserData = (state) => state.user.userData;

export const selectIsLogin = (state) => state.user.isLogin;

export const selectIsUserDataEmpty = (state) =>
  isUserDataEmpty(state.user.userData);

export default userSlice.reducer;
