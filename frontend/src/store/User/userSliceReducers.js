import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//config for post request
const config = {
  headers: {
    "Content-Type": "application/json", // Telling the server we're sending JSON data
  },
};

//function for registeration of user
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    // console.log(userData);

    try {
      const { data } = await axios.post(
        "/api/v1/users/register",
        userData,
        config
      );
      //   console.log(data?.data);

      return data?.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data?.message || error.message || "Registration failed"
      );
    }
  }
);

//For user verification
export const verifyUser = createAsyncThunk(
  "user/verification",
  async (userData, { rejectWithValue }) => {
    // console.log(userData);

    try {
      /*making api call with axios for sending user data and picking response from backend */
      const { data } = await axios.post(
        "/api/v1/users/opt-verification",
        userData,
        config
      );

      //   console.log(data);
      return data?.data; //returning fetched data
    } catch (error) {
      // console.log(error.response?.data || error.message);
      return (
        rejectWithValue(error.response?.data || error.message) ||
        "Registration failed"
      );
    }
  }
);

//For login
export const userLogin = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    // console.log(userData);

    try {
      const { data } = await axios.post(
        "/api/v1/users/login",
        userData,
        config
      );
      // console.log(data?.data);

      return data?.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data?.message || error.message || "Login failed"
      );
    }
  }
);

//For logout
export const userLogOut = createAsyncThunk("user/logOut", async () => {
  // console.log(userData);

  try {
    const { data } = await axios.get("/api/v1/users/logout");
    // console.log(data?.data);
    // console.log(response);

    return data?.data;
  } catch (error) {
    return error.response.data?.message || error.message || "Login failed";
  }
});
