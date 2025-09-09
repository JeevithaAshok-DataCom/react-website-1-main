import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        bookings: bookingReducer,
        auth: authReducer
    }
});

export { store };