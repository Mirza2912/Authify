// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  userLogin,
  userLogOut,
  verifyUser,
} from "./userSliceReducers";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, //for storing user data
    tempUser: null, //when user give credentials and got otp
    isVerified: false, //when user verify the otp now user is authenticated
    isLoading: false,
    error: null,
    logOutMessage: "",
  },
  reducers: {
    clearError: (state) => {
      return { ...state, error: null };
    },
    cleareLogoutMessage: (state) => {
      return { ...state, logOutMessage: "" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tempUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(verifyUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tempUser = null;
        state.isVerified = true;
        state.user = action.payload; // Store the user data in the state
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Store the user data in the state
        state.isVerified = true; // Set isVerified to true after successful login
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userLogOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null; // Reset user data on logout
        state.isVerified = false; // Reset isVerified to false on logout
        state.logOutMessage = action.payload; // Store the logout message
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
export const { clearError, cleareLogoutMessage } = userSlice.actions;
