import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorPopUp, successPopUp } from "../../helpers/toastify";
import crypto from "crypto-js";
import * as api from "../api";
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

export const login = createAsyncThunk("/auth/login", async ({ payload, reset }, { rejectWithValue }) => {
  try {
    const response = await api.login(payload);
    const bytes = response.data.response ? crypto.AES.decrypt(response.data.response, ENCRYPTION_KEY) : "";
    const user = JSON.parse(bytes ? bytes.toString(crypto.enc.Utf8) : null);
    successPopUp({
      msg: `Welcome back, ${user.firstName}`,
      callback: () => location.replace(`${user.role == "partner" ? "/listings" : "/your-storage"}`),
    });
    reset({ email: "", password: "" });
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

export const signup = createAsyncThunk("/auth/register", async ({ payload, reset }, { rejectWithValue }) => {
  try {
    const response = await api.signup(payload);
    const bytes = response.data.response ? crypto.AES.decrypt(response.data.response, ENCRYPTION_KEY) : "";
    const user = JSON.parse(bytes ? bytes.toString(crypto.enc.Utf8) : null);
    successPopUp({
      msg: "Registration successful",
      callback: () => location.replace(`${user.role == "partner" ? "/onboarding" : "/your-storage"}`),
    });
    reset({ email: "", firstName: "", lastName: "", password: "" });
    console.log(response.data, "data");
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

//RETURN USER OBJECT IF LOGGED IN
export const authenticatedUser = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("user")) {
    const userPersist = JSON.parse(localStorage.getItem("user"));
    const bytes = userPersist !== "null" ? crypto.AES.decrypt(userPersist.response, ENCRYPTION_KEY) : "";
    const userObject = bytes ? bytes.toString(crypto.enc.Utf8) : null;
    return JSON.parse(userObject);
  }
  return false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
    signupLoading: false,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },

  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
    },

    [signup.pending]: (state) => {
      state.signupLoading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.signupLoading = false;
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [signup.rejected]: (state, action) => {
      state.signupLoading = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
