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
  try {
    const response = await api.approveBooking({ payload, id });
    successPopUp({ msg: "Booking approved successfully" });
    router.push("/bookings");

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
      router.push("/bookings");
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);
export const createPaymentLink = createAsyncThunk(
  "/booking/paymentlink",
  async ({ payload, router, closeModal, refreshPage }, { rejectWithValue }) => {
    // console.log(refreshPage, "booking");
    //refreshPage();
    try {
      const response = await api.createPaymentLink(payload);
      refreshPage();
      //successPopUp({ msg: "Link created successfully" });
      closeModal.current.click();
      //router.push("/your-storage/pay");
      return response.data;
    } catch (err) {
      console.log(err.response.data.error);
      console.log(payload);
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);
export const handlePayment = createAsyncThunk(
  "/booking/payment/confirm",
  async ({ payload, router, bookingId }, { rejectWithValue }) => {
    try {
      const response = await api.handlePayment(payload);
      setTimeout(() => {
        router.push(`/your-storage/${bookingId}`);
      }, 5000);
      //successPopUp({ msg: "Booking approved successfully" });
      //router.push("/bookings");
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(payload);
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
    paymentLinkLoading: false,
    paymentLink: {},
    payment: {},
    paymentLoading: false,
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
    [createPaymentLink.pending]: (state) => {
      state.paymentLinkLoading = true;
    },
    [createPaymentLink.fulfilled]: (state, action) => {
      state.paymentLinkLoading = false;
      state.paymentLink = action.payload.data;
    },
    [createPaymentLink.rejected]: (state, action) => {
      state.paymentLinkLoading = false;
    },
    [handlePayment.pending]: (state) => {
      state.paymentLoading = true;
    },
    [handlePayment.fulfilled]: (state, action) => {
      state.paymentLoading = false;
      state.payment = action.payload.data;
    },
    [handlePayment.rejected]: (state, action) => {
      state.paymentLoading = false;
    },
  },
});

export default bookingsSlice.reducer;
