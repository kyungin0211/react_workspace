import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";

const sessionUser = sessionStorage.getItem("authUser");

const initialState = sessionUser
  ? JSON.parse(sessionUser)
  : {
      isLoggedIn: false,
      username: null,
      loading: false,
      error: null,
      result: 0,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem("authUser");
      state.isLoggedIn = false;
      state.username = null;
      state.loading = false;
      state.error = null;
      state.result = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload.result;

      if (action.payload.result === 0) {
        state.isLoggedIn = true;
        state.username = action.payload.username;

        sessionStorage.setItem(
          "authUser",
          JSON.stringify({
            isLoggedIn: true,
            username: action.payload.username,
            loading: false,
            error: null,
            result: 0,
          })
        );
      }
    });

    createLoadingReducers(builder, loginThunk);
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
