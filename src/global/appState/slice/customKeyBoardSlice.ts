import { createSlice } from '@reduxjs/toolkit';

// Define the reducer logic for 'twoSlice'
const customKeyBoardSlice = createSlice({
  name: 'customKey',
  initialState: {
    state: '',
    show: ''
  },
  reducers: {
    setState(state, action) {
      state.state = action.payload;
    },
    setShowKey(state, action) {
      state.show = action.payload;
    },
  },
});

export const { setState, setShowKey } = customKeyBoardSlice.actions;

export default customKeyBoardSlice;
