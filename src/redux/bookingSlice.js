import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "booking",
    initialState: [],
    reducers:{
        addBooking: (state, action) => {
            state.push(action.payload);
        },
        removeBooking: (state, action) => {
            return state.filter(booking => booking.id !== action.payload);
    }
}
});
export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;