import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`;
  }
  return req;
});

//AUTH
export const login = (payload) => API.post("/auth/login", payload);
export const signup = (payload) => API.post("/auth/register", payload);
export const forgotPassword = (payload) => API.post("/auth/forgot-password", payload);
export const resetPassword = ({ payload, token }) => API.patch(`/auth/reset-password/${token}`, payload);
export const verifyResetToken = (token) => API.get(`/auth/reset-password/${token}`);
export const verifyEmail = (token) => API.get(`/auth/verify/${token}`);
export const resendVerifyEmail = (payload) => API.post("/auth/verify", payload);
