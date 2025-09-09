import { createAsyncThunk, createSlice, formatProdErrorMessage } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch('https://localhost:7240/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const error = await response.text();
        return rejectWithValue(error);
      }
      return await response.json();
    } catch (err) {
      return rejectWithValue('Network error');
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    isSignedIn: false,
    userName: '',
    email: '',
    loading: false,
    error: null
  },
  reducers:{
    signIn(state, action) {
      state.isSignedIn = true;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.error = null;
      state.loading = false;
    },
    signOut(state) {
      state.isSignedIn = false; 
      state.userName = '';
      state.email = '';
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isSignedIn = true;
        state.userName = action.payload.name;
        state.email = action.payload.email;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { signIn, signOut } = authSlice.actions;   
export default authSlice.reducer;