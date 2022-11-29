import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorPopUp, successPopUp } from "../../helpers/toastify";
import * as api from "../api";

export const getDrivers = createAsyncThunk("/drivers", async ({ setFilteredDrivers }, { rejectWithValue }) => {
  try {
    const response = await api.getDrivers();
    setFilteredDrivers(response.data.data);
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

export const createDriver = createAsyncThunk(
  "/drivers/:create",
  async ({ payload, refreshDrivers }, { rejectWithValue }) => {
    try {
      const response = await api.createDriver(payload);
      refreshDrivers();
      successPopUp({ msg: "Driver was successfuly created" });
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateDriver = createAsyncThunk(
  "/drivers/:update",
  async ({ payload, id, refreshDrivers }, { rejectWithValue }) => {
    try {
      const response = await api.updateDriver({ payload, id });
      refreshDrivers();
      successPopUp({ msg: "Driver was successfuly updated" });
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteDriver = createAsyncThunk(
  "/drivers/:delete",
  async ({ id, refreshDrivers }, { rejectWithValue }) => {
    try {
      const response = await api.deleteDriver(id);
      refreshDrivers();
      successPopUp({ msg: "Driver was successfuly deleted" });
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

const driverSlice = createSlice({
  name: "drivers",
  initialState: {
    drivers: [],
    loading: false,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false,
    error: "",
  },

  reducers: {},

  extraReducers: {
    [getDrivers.pending]: (state) => {
      state.loading = true;
    },
    [getDrivers.fulfilled]: (state, action) => {
      state.loading = false;
      state.drivers = action.payload.data;
    },
    [getDrivers.rejected]: (state, action) => {
      state.loading = false;
    },

    [createDriver.pending]: (state) => {
      state.createLoading = true;
    },
    [createDriver.fulfilled]: (state, action) => {
      state.createLoading = false;
      state.drivers = [action.payload.data, ...state.drivers];
    },
    [createDriver.rejected]: (state, action) => {
      state.createLoading = false;
    },

    [updateDriver.pending]: (state) => {
      state.updateLoading = true;
    },
    [updateDriver.fulfilled]: (state, action) => {
      state.updateLoading = false;
    },
    [updateDriver.rejected]: (state, action) => {
      state.updateLoading = false;
    },

    [deleteDriver.pending]: (state) => {
      state.deleteLoading = true;
    },
    [deleteDriver.fulfilled]: (state, action) => {
      state.deleteLoading = false;
    },
    [deleteDriver.rejected]: (state, action) => {
      state.deleteLoading = false;
    },
  },
});

// export const {} = driverSlice.actions;

export default driverSlice.reducer;
