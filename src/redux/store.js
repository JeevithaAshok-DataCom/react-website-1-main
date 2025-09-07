import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice";

const store = configureStore({
    reducer: {
        bookings: bookingReducer
    }
});

export { store };