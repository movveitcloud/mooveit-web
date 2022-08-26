import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("user")) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`;
//   }
//   return req;
// });

// AUTH
// export const signIn = (formData) => API.post("/auth/login", formData);
