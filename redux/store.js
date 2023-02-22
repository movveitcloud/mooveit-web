import { configureStore } from "@reduxjs/toolkit";
import { authReducer, bookingReducer, configReducer, driverReducer, listingReducer } from "./features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    listing: listingReducer,
    drivers: driverReducer,
    config: configReducer,
    booking: bookingReducer,
  },
});
