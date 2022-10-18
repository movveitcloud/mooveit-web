import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorPopUp, successPopUp } from "../../helpers/toastify";
import * as api from "../api";

export const createListing = createAsyncThunk(
  "/listings",
  async ({ payload, setActiveStepper, activeStepper }, { rejectWithValue }) => {
    try {
      const response = await api.createListing(payload);
      setActiveStepper(activeStepper + 1);
      console.log(response.data);
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateListing = createAsyncThunk(
  "/listings/:id",
  async ({ payload, id, setActiveStepper, activeStepper, publishModal }, { rejectWithValue }) => {
    try {
      const response = await api.updateListing({ payload, id });
      if (activeStepper < 3) {
        setActiveStepper(activeStepper + 1);
      } else {
        publishModal.current.click(); //launch snippet/publish modal
      }
      console.log(response.data);
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

export const saveExit = createAsyncThunk(
  "/listings/id",
  async ({ payload, id, router, setFormDetails, initialState, setActiveStepper }, { rejectWithValue }) => {
    try {
      const response = await api.updateListing({ payload, id });
      router.push("/listings");
      setActiveStepper(0);
      setFormDetails(initialState);
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
    data: null,
    loading: false,
    exitLoading: false,
  },

  reducers: {},

  extraReducers: {
    [createListing.pending]: (state) => {
      state.loading = true;
    },
    [createListing.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    [createListing.rejected]: (state, action) => {
      state.loading = false;
    },

    [updateListing.pending]: (state) => {
      state.loading = true;
    },
    [updateListing.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    [updateListing.rejected]: (state, action) => {
      state.loading = false;
    },

    [saveExit.pending]: (state) => {
      state.exitLoading = true;
    },
    [saveExit.fulfilled]: (state, action) => {
      state.exitLoading = false;
      state.data = action.payload.data;
    },
    [saveExit.rejected]: (state, action) => {
      state.exitLoading = false;
    },
  },
});

// export const {} = listingsSlice.actions;

export default listingsSlice.reducer;
