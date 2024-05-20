import { createSlice } from '@reduxjs/toolkit';

// Define the reducer logic for 'twoSlice'
const customProductSlice = createSlice({
  name: 'customProductState',
  initialState: {
    productNameGroupData: [],
  },
  reducers: {
    setProductNameGroupDataData(state, action) {
      state.productNameGroupData = action.payload;
    },
  },
});

export const { setProductNameGroupDataData } = customProductSlice.actions;

export default customProductSlice;
