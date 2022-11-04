import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";

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
export const verifyEmail = (payload) => API.post("/auth/verify", payload);
export const resendVerifyEmail = (payload) => API.post("/auth/verify", payload);

//LISTINGS
export const createListing = (payload) => API.post("/listings", payload);
export const updateListing = ({ payload, id }) => API.patch(`/listings/${id}`, payload);
export const getListings = () => API.get("/listings");
export const getFeaturedListings = () => API.get("/users/featured-listing");
export const getSingleListing = (id) => API.get(`/listings/${id}`);
export const getUserListing = (id) => API.get(`/users/listings/${id}`);
export const getSearchListings = (payload) => API.get("/users/listings", { params: payload });
export const deleteListing = (id) => API.delete(`/listings/${id}`);
export const imageUpload = ({ payload, id }) => API.patch(`/listings/${id}/upload`, payload);
