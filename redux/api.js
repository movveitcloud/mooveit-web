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
export const verifyEmail = (payload) => API.post("/auth/verify", payload);
export const resendVerifyEmail = (payload) => API.post("/auth/verify", payload);
export const updateUser = ({ payload, id }) => API.patch(`/users/${id}`, payload);
export const updateProfileImage = ({ payload, id }) => API.patch(`/users/${id}/upload`, payload);

//LISTINGS
export const createListing = (payload) => API.post("/listings", payload);
export const updateListing = ({ payload, id }) => API.patch(`/listings/${id}`, payload);
export const getListings = () => API.get("/listings");
export const getFeaturedListings = () => API.get("/users/featured-listing");
export const getSingleListing = (id) => API.get(`/listings/${id}`);
export const getUserListing = (id) => API.get(`/users/listings/${id}`);
export const getSearchListings = (payload) => API.post("/users/listings", payload);
export const deleteListing = (id) => API.delete(`/listings/${id}`);
export const imageUpload = ({ payload, id }) => API.patch(`/listings/${id}/upload`, payload);

//BOOKING
export const bookListing = (payload) => API.post("/booking", payload);

//DRIVERS
export const getDrivers = () => API.get("/drivers");
export const createDriver = (payload) => API.post("/drivers", payload);
export const updateDriver = ({ payload, id }) => API.patch(`/drivers/${id}`, payload);
export const deleteDriver = (id) => API.delete(`/drivers/${id}`);
export const uploadDriverImage = ({ payload }) => API.post(`/drivers/upload`, payload);

//CONFIGURATIONS
export const getStorageTypes = () => API.get("/configurations/storage-type");
export const getStorageServices = () => API.get("/configurations/services");
export const getStorageFloors = () => API.get("/configurations/storage-floor");
export const getStorageFeatures = () => API.get("/configurations/storage-features");
export const getStorageSizes = () => API.get("/configurations/storage-size");
export const getStorageAccessPeriods = () => API.get("/configurations/storage-access-period");
export const getStorageAccessTypes = () => API.get("/configurations/storage-access-type");
export const getShortestPeriods = () => API.get("/configurations/booking-period");
export const getNoticePeriods = () => API.get("/configurations/notice-period");

//BOOKINGS
export const getBookings = () => API.get("/booking");
export const getSingleBooking = (id) => API.get(`/booking/${id}`);
export const approveBooking = ({ payload, id }) => API.patch(`/booking/${id}`, payload);
export const denyBooking = ({ payload, id }) => API.patch(`/booking/${id}`, payload);
