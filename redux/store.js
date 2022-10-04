import { configureStore } from "@reduxjs/toolkit";
import { authReducer, listingReducer } from "./features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    listing: listingReducer,
  },
});
