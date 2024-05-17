import { createSlice } from '@reduxjs/toolkit';

// Define the reducer logic for 'twoSlice'
const customCategorySlice = createSlice({
  name: 'categoryState',
  initialState: {
    data: [],
  },
  reducers: {
    setCategoryData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setCategoryData } = customCategorySlice.actions;

export default customCategorySlice;
