import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "services/api";
import signInService from "services/authService";

const initialState = {
  signed: false,
  user: null,
  error: null,
  status: "idle",
};

export const signIn = createAsyncThunk("auth/signin", async ({ password }) => {
  try {
    const response = await signInService({ password });

    api.defaults.headers.Authorization = `Bearer ${response.data.user.token}`;

    return response;
  } catch (error) {
    console.log({ error });

    throw new Error("Erro ao efetuar login.");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.signed = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // signIn async
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "idle";
        state.signed = true;
        state.user = action.payload.data.user;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
