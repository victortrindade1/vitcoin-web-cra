import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "services/api";

const initialState = {
  isServerWorking: null,
  statusIsServerWorking: "idle",
  error: null,
};

export const startServer = createAsyncThunk(
  "serverConfig/startserver",
  async () => {
    try {
      const response = await api.get("/startserver");

      return response;
    } catch (error) {
      throw new Error("Erro ao iniciar servidor.");
    }
  }
);

export const stopServer = createAsyncThunk(
  "serverConfig/stopserver",
  async () => {
    try {
      const response = await api.get("/stopserver");

      return response;
    } catch (error) {
      throw new Error("Erro ao finalizar servidor.");
    }
  }
);

export const verifyServerIsOn = createAsyncThunk(
  "serverConfig/verify",
  async () => {
    try {
      const response = await api.get("/verifyserver");

      return response;
    } catch (error) {
      throw new Error("Erro ao verificar servidor.");
    }
  }
);

const serverConfigSlice = createSlice({
  name: "serverConfig",
  initialState,
  reducers: {},
  // reducers: {
  //   signOut: (state) => {
  //     state.signed = false;
  //     state.user = null;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      // Verify if server is on - async
      .addCase(verifyServerIsOn.pending, (state) => {
        state.statusIsServerWorking = "loading";
      })
      .addCase(verifyServerIsOn.fulfilled, (state, action) => {
        state.statusIsServerWorking = "idle";

        console.log({ action });
        // ESTOU AQUI

        // Tem q fazer um condicional aqui, pois pode vir false:
        // Se response = true, entao
        // state.isServerWorking = true;
      })
      .addCase(verifyServerIsOn.rejected, (state, action) => {
        state.statusIsServerWorking = "failed";
        state.error = action.payload;
      })

      // Start Server
      .addCase(startServer.pending, (state) => {
        state.statusIsServerWorking = "loading";
      })
      .addCase(startServer.fulfilled, (state) => {
        state.isServerWorking = "true";
        state.statusIsServerWorking = "idle";
      })
      .addCase(startServer.rejected, (state, action) => {
        state.statusIsServerWorking = "failed";
        state.error = action.payload;
      })

      // Stop Server
      .addCase(stopServer.pending, (state) => {
        state.statusIsServerWorking = "loading";
      })
      .addCase(stopServer.fulfilled, (state) => {
        state.isServerWorking = "false";
        state.statusIsServerWorking = "idle";
      })
      .addCase(stopServer.rejected, (state, action) => {
        state.isServerWorking = "failed";
        state.error = action.payload;
      });
  },
});

// export const { signOut } = serverConfigSlice.actions;

export default serverConfigSlice.reducer;
