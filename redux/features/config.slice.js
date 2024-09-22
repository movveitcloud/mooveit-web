import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorPopUp } from "../../helpers/toastify";
import * as api from "../api";

export const getStorageTypes = createAsyncThunk("/configurations/storage-type", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getStorageTypes();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});
export const getStorageServices = createAsyncThunk("/configurations/services", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getStorageServices();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});
export const getStorageFloors = createAsyncThunk("/configurations/storage-floor", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getStorageFloors();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});
export const getStorageFeatures = createAsyncThunk(
  "/configurations/storage-features",
  async ({}, { rejectWithValue }) => {
    try {
      const response = await api.getStorageFeatures();
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);
export const getStorageSizes = createAsyncThunk("/configurations/storage-size", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getStorageSizes();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});
export const getStorageAccessPeriods = createAsyncThunk(
  "/configurations/storage-access-period",
  async ({}, { rejectWithValue }) => {
    try {
      const response = await api.getStorageAccessPeriods();
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);
export const getStorageAccessTypes = createAsyncThunk(
  "/configurations/storage-access-types",
  async ({}, { rejectWithValue }) => {
    try {
      const response = await api.getStorageAccessTypes();
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);
export const getShortestPeriods = createAsyncThunk(
  "/configurations/booking-period",
  async ({}, { rejectWithValue }) => {
    try {
      const response = await api.getShortestPeriods();
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);
export const getNoticePeriods = createAsyncThunk("/configurations/notice-period", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getNoticePeriods();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

export const getBanks = createAsyncThunk("/configurations/banks", async ({}, { rejectWithValue }) => {
  try {
    const response = await api.getBanks();
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

const configSlice = createSlice({
  name: "config",
  initialState: {
    storageTypes: [],
    storageServices: [],
    storageFloors: [],
    storageFeatures: [],
    storageSizes: [],
    storageAccessPeriods: [],
    storageAccessTypes: [],
    shortestPeriods: [],
    noticePeriods: [],
    banks: [],
    loading: false,
    servicesLoading: false,
    floorLoading: false,
    featuresLoading: false,
    sizeLoading: false,
    accessPeriodsLoading: false,
    accessTypesLoading: false,
    shortestPeriodsLoading: false,
    noticePeriodsLoading: false,
    error: "",
  },

  reducers: {},

  extraReducers: {
    [getStorageTypes.pending]: (state) => {
      state.loading = true;
    },
    [getStorageTypes.fulfilled]: (state, action) => {
      state.loading = false;
      state.storageTypes = action.payload.data;
    },
    [getStorageTypes.rejected]: (state, action) => {
      state.loading = false;
    },

    [getStorageServices.pending]: (state) => {
      state.servicesLoading = true;
    },
    [getStorageServices.fulfilled]: (state, action) => {
      state.servicesLoading = false;
      state.storageServices = action.payload.data;
    },
    [getStorageServices.rejected]: (state, action) => {
      state.servicesLoading = false;
    },

    [getStorageFloors.pending]: (state) => {
      state.floorLoading = true;
    },
    [getStorageFloors.fulfilled]: (state, action) => {
      state.floorLoading = false;
      state.storageFloors = action.payload.data;
    },
    [getStorageFloors.rejected]: (state, action) => {
      state.floorLoading = false;
    },

    [getStorageFeatures.pending]: (state) => {
      state.featuresLoading = true;
    },
    [getStorageFeatures.fulfilled]: (state, action) => {
      state.featuresLoading = false;
      state.storageFeatures = action.payload.data;
    },
    [getStorageFeatures.rejected]: (state, action) => {
      state.featuresLoading = false;
    },

    [getStorageSizes.pending]: (state) => {
      state.sizeLoading = true;
    },
    [getStorageSizes.fulfilled]: (state, action) => {
      state.sizeLoading = false;
      state.storageSizes = action.payload.data;
    },
    [getStorageSizes.rejected]: (state, action) => {
      state.sizeLoading = false;
    },

    [getStorageAccessPeriods.pending]: (state) => {
      state.accessPeriodsLoading = true;
    },
    [getStorageAccessPeriods.fulfilled]: (state, action) => {
      state.accessPeriodsLoading = false;
      state.storageAccessPeriods = action.payload.data;
    },
    [getStorageAccessPeriods.rejected]: (state, action) => {
      state.accessPeriodsLoading = false;
    },

    [getStorageAccessTypes.pending]: (state) => {
      state.accessTypesLoading = true;
    },
    [getStorageAccessTypes.fulfilled]: (state, action) => {
      state.accessTypesLoading = false;
      state.storageAccessTypes = action.payload.data;
    },
    [getStorageAccessTypes.rejected]: (state, action) => {
      state.accessTypesLoading = false;
    },

    [getShortestPeriods.pending]: (state) => {
      state.shortestPeriodsLoading = true;
    },
    [getShortestPeriods.fulfilled]: (state, action) => {
      state.shortestPeriodsLoading = false;
      state.shortestPeriods = action.payload.data;
    },
    [getShortestPeriods.rejected]: (state, action) => {
      state.shortestPeriodsLoading = false;
    },

    [getBanks.pending]: (state) => {
      state.banksLoading = true;
    },
    [getBanks.fulfilled]: (state, action) => {
      state.banksLoading = false;
      state.banks = action.payload.data;
    },

    [getNoticePeriods.pending]: (state) => {
      state.noticePeriodsLoading = true;
    },
    [getNoticePeriods.fulfilled]: (state, action) => {
      state.noticePeriodsLoading = false;
      state.noticePeriods = action.payload.data;
    },
    [getNoticePeriods.rejected]: (state, action) => {
      state.noticePeriodsLoading = false;
    },
  },
});

// export const {} = configSlice.actions;

export default configSlice.reducer;
