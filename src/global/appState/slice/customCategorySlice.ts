import { createSlice } from '@reduxjs/toolkit';

// Define the reducer logic for 'twoSlice'
const customCategorySlice = createSlice({
  name: 'categoryState',
  initialState: {
    categoryData: [],
  },
  reducers: {
    setCategoryData(state, action) {
      state.categoryData = action.payload;
    },
  },
});

export const { setCategoryData } = customCategorySlice.actions;

export default customCategorySlice;
