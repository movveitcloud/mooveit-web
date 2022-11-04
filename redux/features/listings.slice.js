import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorPopUp, successPopUp } from "../../helpers/toastify";
import * as api from "../api";

export const createListing = createAsyncThunk(
  "/listings",
  async ({ payload, setActiveStepper, activeStepper }, { rejectWithValue }) => {
    try {
      const response = await api.createListing(payload);
      setActiveStepper(activeStepper + 1);
      // console.log(response.data);
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateListing = createAsyncThunk(
  "/listings/:id",
  async ({ payload, id, setActiveStepper, activeStepper, publishModal, edit }, { rejectWithValue }) => {
    try {
      const response = await api.updateListing({ payload, id });
      if (edit) {
        successPopUp({ msg: "Listing was succesfully updated" });
      } else if (activeStepper < 3) {
        setActiveStepper(activeStepper + 1);
      } else {
        publishModal.current.click(); //launch snippet/publish modal
      }
      // console.log(response.data);
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

export const getListings = createAsyncThunk("/listing", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getListings();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

export const getSingleListing = createAsyncThunk("/listing/listingId", async ({ id }, { rejectWithValue }) => {
  try {
    const response = await api.getSingleListing(id);
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

export const getUserListing = createAsyncThunk("/users/listing/listingId", async ({ id }, { rejectWithValue }) => {
  try {
    const response = await api.getUserListing(id);
    return response.data;
  } catch (err) {
    // errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

export const deleteListing = createAsyncThunk(
  "/listing/deleteListing",
  async ({ id, refreshListings, closeModal }, { rejectWithValue }) => {
    try {
      const response = await api.deleteListing(id);
      closeModal.current.click();
      refreshListings();
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

export const getFeaturedListings = createAsyncThunk("/users/featured-listing", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getFeaturedListings();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

export const getSearchListings = createAsyncThunk(
  "/users/listings:search",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await api.getSearchListings(payload);
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
    listings: [],
    featuredListings: [],
    searchListings: [],
    singleListing: {},
    userListing: {},
    loading: false,
    exitLoading: false,
    listingError: null,
    listingLoading: false,
    featuredLoading: false,
    searchLoading: false,
    singleListingLoading: false,
    userListingLoading: false,
    deleteLoading: false,
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
      state.data = null;
    },
    [saveExit.rejected]: (state, action) => {
      state.exitLoading = false;
    },

    [getListings.pending]: (state) => {
      state.listingLoading = true;
    },
    [getListings.fulfilled]: (state, action) => {
      state.listingLoading = false;
      state.listings = action.payload.data;
    },
    [getListings.rejected]: (state, action) => {
      state.listingLoading = false;
    },

    [getFeaturedListings.pending]: (state) => {
      state.featuredLoading = true;
    },
    [getFeaturedListings.fulfilled]: (state, action) => {
      state.featuredLoading = false;
      state.featuredListings = action.payload.data;
    },
    [getFeaturedListings.rejected]: (state, action) => {
      state.featuredLoading = false;
    },

    [getSearchListings.pending]: (state) => {
      state.searchLoading = true;
    },
    [getSearchListings.fulfilled]: (state, action) => {
      state.searchLoading = false;
      state.searchListings = action.payload.data;
    },
    [getSearchListings.rejected]: (state, action) => {
      state.searchLoading = false;
    },

    [getSingleListing.pending]: (state) => {
      state.singleListingLoading = true;
    },
    [getSingleListing.fulfilled]: (state, action) => {
      state.singleListingLoading = false;
      state.singleListing = action.payload.data;
    },
    [getSingleListing.rejected]: (state, action) => {
      state.singleListingLoading = false;
    },

    [getUserListing.pending]: (state) => {
      state.userListingLoading = true;
    },
    [getUserListing.fulfilled]: (state, action) => {
      state.userListingLoading = false;
      state.userListing = action.payload.data;
    },
    [getUserListing.rejected]: (state, action) => {
      state.listingError = action.payload.error;
      state.userListingLoading = false;
    },

    [deleteListing.pending]: (state) => {
      state.deleteLoading = true;
    },
    [deleteListing.fulfilled]: (state, action) => {
      state.deleteLoading = false;
    },
    [deleteListing.rejected]: (state, action) => {
      state.deleteLoading = false;
    },
  },
});

// export const {} = listingsSlice.actions;

export default listingsSlice.reducer;
