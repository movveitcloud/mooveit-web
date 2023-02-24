import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorPopUp, successPopUp } from "../../helpers/toastify";
import * as api from "../api";

export const bookListing = createAsyncThunk("/booking", async ({ payload, handleSuccess }, { rejectWithValue }) => {
  try {
    const response = await api.bookListing(payload);
    handleSuccess();
    successPopUp({ msg: "Storage listing successfully booked" });
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookListingLoading: false,
  },

  reducers: {},

  extraReducers: {
    [bookListing.pending]: (state) => {
      state.bookListingLoading = true;
    },
    [bookListing.fulfilled]: (state, action) => {
      state.bookListingLoading = false;
    },
    [bookListing.rejected]: (state, action) => {
      state.bookListingLoading = false;
    },
  },
});

// export const {} = bookingSlice.actions;

export default bookingSlice.reducer;
