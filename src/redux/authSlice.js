import { createSlice } from '@reduxjs/toolkit';

export const autSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      isAuthenticated: false,
      authData: null,
    }
  },
  reducers: {
    onAuthenticate: (state, action) => {
      state.user = {
        isAuthenticated: true,
        authData: action.payload
      }
    }
  }
})

export const { onAuthenticate } = autSlice.actions;
export const getAuthentication = (state) => state.auth;

export default autSlice.reducer;