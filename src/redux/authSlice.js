import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    isSignedIn: false,
    userName: '',
    email: '',
  },
  reducers:{
    signIn(state, action) {
      state.isSignedIn = true;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
    signOut(state) {
      state.isSignedIn = false; 
      state.userName = '';
    state.email = '';
  }
}});

export const { signIn, signOut } = authSlice.actions;   
export default authSlice.reducer;