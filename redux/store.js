import { configureStore } from "@reduxjs/toolkit";
//import { authReducer, configReducer, driverReducer, listingReducer, bookingReducer } from "./features";
import { authReducer, bookingReducer, configReducer, driverReducer, listingReducer, bookingsReducer } from "./features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    listing: listingReducer,
    drivers: driverReducer,
    config: configReducer,
    booking: bookingReducer,
    bookings: bookingsReducer,
  },
});
