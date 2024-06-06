import { createSlice } from '@reduxjs/toolkit';

// Define the reducer logic for 'twoSlice'
const customUserSlice = createSlice({
  name: 'userState',
  initialState: {
    userData: [],
  },
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = customUserSlice.actions;

export default customUserSlice;
