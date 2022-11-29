import { configureStore } from "@reduxjs/toolkit";
import { authReducer, driverReducer, listingReducer } from "./features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    listing: listingReducer,
    drivers: driverReducer,
  },
});
