import { createSlice } from '@reduxjs/toolkit';

// Define the reducer logic for 'twoSlice'
const customKeyBoardSlice = createSlice({
  name: 'customKey',
  initialState: {
    state: '',
  },
  reducers: {
    setState(state, action) {
      state.state = action.payload;
    },
  },
});

export const { setState } = customKeyBoardSlice.actions;

export default customKeyBoardSlice;
