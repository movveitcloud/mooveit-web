import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorPopUp } from "../../helpers/toastify";
import * as api from "../api";

export const getConfigurations = createAsyncThunk("/admin/configurations", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getConfigurations();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

const configSlice = createSlice({
  name: "configurations",
  initialState: {
    configurations: [],
    loading: false,
    error: "",
  },

  reducers: {},

  extraReducers: {
    [getConfigurations.pending]: (state) => {
      state.loading = true;
    },
    [getConfigurations.fulfilled]: (state, action) => {
      state.loading = false;
      state.configurations = action.payload.data[0];
    },
    [getConfigurations.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// export const {} = configSlice.actions;

export default configSlice.reducer;
