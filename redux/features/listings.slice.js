import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorPopUp, successPopUp } from "../../helpers/toastify";
import * as api from "../api";

export const createListing = createAsyncThunk(
  "/listings",
  async ({ payload, setActiveStepper, activeStepper }, { rejectWithValue }) => {
    try {
      const response = await api.createListing(payload);
      setActiveStepper(activeStepper + 1);
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateListing = createAsyncThunk(
  "/listings/:id",
  async ({ payload, id, setActiveStepper, activeStepper }, { rejectWithValue }) => {
    try {
      const response = await api.createListing(payload);
      if (activeStepper < 3) {
        setActiveStepper(activeStepper + 1);
      } else {
      }
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

const listingsSlice = createSlice({
  name: "listing",
  initialState: {
    loading: false,
    updateLoading: false,
  },

  reducers: {},

  extraReducers: {
    [createListing.pending]: (state) => {
      state.loading = true;
    },
    [createListing.fulfilled]: (state, action) => {
      state.loading = false;
      // localStorage.setItem("user", JSON.stringify({ ...action.payload }));
    },
    [createListing.rejected]: (state, action) => {
      state.loading = false;
    },

    [updateListing.pending]: (state) => {
      state.updateLoading = true;
    },
    [updateListing.fulfilled]: (state, action) => {
      state.updateLoading = false;
    },
    [updateListing.rejected]: (state, action) => {
      state.updateLoading = false;
    },
  },
});

// export const {} = listingsSlice.actions;

export default listingsSlice.reducer;
