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
    return response.data;
  } catch (err) {
    errorPopUp({ msg: err.response.data.error });
    return rejectWithValue(err.response.data);
  }
});

export const forgotPassword = createAsyncThunk(
  "/auth/forgot-password",
  async ({ payload, reset }, { rejectWithValue }) => {
    try {
      const response = await api.forgotPassword(payload);
      successPopUp({
        msg: "Password reset link has been sent to your email",
      });
      reset({ email: "" });
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "/auth/reset-password",
  async ({ payload, token }, { rejectWithValue }) => {
    try {
      const response = await api.resetPassword({ payload, token });
      successPopUp({
        msg: "Password reset succesful, please log in",
        callback: () => location.replace("/login"),
      });
      return response.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

export const verifyResetToken = createAsyncThunk(
  "/auth/reset-password/:token",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await api.verifyResetToken(token);
      return response.data;
    } catch (err) {
      location.replace("/login");
      errorPopUp({ msg: err.response.data.error });
      return rejectWithValue(err.response.data);
    }
  }
);

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
    resetTokenData: null,
    error: "",
    loading: false,
    signupLoading: false,
    forgotLoading: false,
    resetLoading: false,
    verifyLoading: false,
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

    [forgotPassword.pending]: (state) => {
      state.forgotLoading = true;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.forgotLoading = false;
    },
    [forgotPassword.rejected]: (state, action) => {
      state.forgotLoading = false;
    },

    [resetPassword.pending]: (state) => {
      state.resetLoading = true;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.resetLoading = false;
    },
    [resetPassword.rejected]: (state, action) => {
      state.resetLoading = false;
    },

    [verifyResetToken.pending]: (state) => {
      state.verifyLoading = true;
    },
    [verifyResetToken.fulfilled]: (state, action) => {
      state.verifyLoading = false;
      state.resetTokenData = action.payload;
    },
    [verifyResetToken.rejected]: (state, action) => {
      state.verifyLoading = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
