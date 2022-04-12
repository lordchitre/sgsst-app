import { createSlice } from '@reduxjs/toolkit';

export const autSlice = createSlice({
  name: "auth",
  initialState: {
      isAuthenticated: false,
      authData: null,
  },
  reducers: {
    onAuthenticate: (state, action) => {
      state.isAuthenticated = true;
      state.authData = action.payload;
    }
  }
})


export const getAuthentication = (state) => state.auth;
export const { onAuthenticate } = autSlice.actions;
export default autSlice.reducer;