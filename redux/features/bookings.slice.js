import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorPopUp, successPopUp } from "../../helpers/toastify";
import * as api from "../api";

export const getBooking = createAsyncThunk("/booking", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getBookings();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

export const getSingleBooking = createAsyncThunk("/booking/bookingId", async ({ id }, { rejectWithValue }) => {
  try {
    const response = await api.getSingleBooking(id);
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});
export const approveBooking = createAsyncThunk("/booking/Id", async ({ payload, id, router }, { rejectWithValue }) => {
  console.log(id);

  try {
    const response = await api.approveBooking({ payload, id });
    successPopUp({ msg: "Booking approved successfully" });
    router.push("/bookings");
    console.log(id);
    console.log(payload);
    console.log(response.data);
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});
export const disapproveBooking = createAsyncThunk(
  "/booking/disapproveId",
  async ({ payload, id, closeModal, router }, { rejectWithValue }) => {
    try {
      const response = await api.denyBooking({ payload, id });
      successPopUp({ msg: "Booking disapproved successfully" });
      closeModal.current.click();
      console.log(id);
      console.log(payload);
      router.push("/bookings");
      console.log(response.data);
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
    bookingLoading: false,
    singleBooking: {},
    singleBookingLoading: false,
    approveBooking: {},
    approveBookingLoading: false,
    disapproveBooking: {},
    disapproveBookingLoading: false,
    //   createLoading: false,
    //   updateLoading: false,
    //   deleteLoading: false,
    //   driverImageLoading: false,
    //   profilePicture: "",
    //   error: "",
  },

  reducers: {},

  extraReducers: {
    [getBooking.pending]: (state) => {
      state.bookingLoading = true;
    },
    [getBooking.fulfilled]: (state, action) => {
      state.bookingLoading = false;
      state.bookings = action.payload.data;
    },
    [getBooking.rejected]: (state, action) => {
      state.bookingLoading = false;
    },

    [getSingleBooking.pending]: (state) => {
      state.singleBookingLoading = true;
    },
    [getSingleBooking.fulfilled]: (state, action) => {
      state.singleBookingLoading = false;
      state.singleBooking = action.payload.data;
    },
    [getSingleBooking.rejected]: (state, action) => {
      state.singleBookingLoading = false;
    },
    [approveBooking.pending]: (state) => {
      state.approveBookingLoading = true;
    },
    [approveBooking.fulfilled]: (state, action) => {
      state.approveBookingLoading = false;
      state.approveBooking = action.payload.data;
    },
    [approveBooking.rejected]: (state, action) => {
      state.approveBookingLoading = false;
    },
    [disapproveBooking.pending]: (state) => {
      state.disapproveBookingLoading = true;
    },
    [disapproveBooking.fulfilled]: (state, action) => {
      state.disapproveBookingLoading = false;
      state.disapproveBooking = action.payload.data;
    },
    [disapproveBooking.rejected]: (state, action) => {
      state.disapproveBookingLoading = false;
    },
  },
});

export default bookingsSlice.reducer;
