import { createSlice } from '@reduxjs/toolkit';

// Define the reducer logic for 'twoSlice'
const customProductSlice = createSlice({
  name: 'customProductState',
  initialState: {
    productNameGroupData: [],
    productNameItemData: [],
  },
  reducers: {
    setProductNameGroupData(state, action) {
      state.productNameGroupData = action.payload;
    },
    setProductItemData(state, action) {
      state.productNameItemData = action.payload;
    },
  },
});

export const { setProductNameGroupData, setProductItemData } = customProductSlice.actions;

export default customProductSlice;
