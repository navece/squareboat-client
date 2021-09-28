import { createSlice } from "@reduxjs/toolkit";
import jwt from "jsonwebtoken";

const initialState = {
  user: null,
  error: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    autoLogin: (state) => {
      if (localStorage.getItem("Token")) {
        try {
          const decoded = jwt.verify(
            localStorage.getItem("Token"),
            "SUPER_SECRET"
          );
          if (decoded.exp * 60 * 60 < Date.now()) {
            localStorage.removeItem("Token");
          } else {
            state.user = decoded;
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
    login: (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.user = action.payload;
      }
    },
    follow: (state, action) => {
      state.user.followings.push(action.payload);
    },
    unfollow: (state, action) => {
      const newArray = state.user.followings.filter(
        (id) => id !== action.payload
      );
      state.user.followings = newArray;
    },
    resetError: (state) => {
      state.error = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  autoLogin,
  login,
  resetError,
  follow,
  unfollow,
} = authSlice.actions;

export default authSlice.reducer;
