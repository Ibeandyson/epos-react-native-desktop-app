import { combineReducers, configureStore } from '@reduxjs/toolkit';
import customKeyBoardSlice from './slice/customKeyBoardSlice';
import customDialogSlice from './slice/customDialogSlice';
import customCategorySlice from './slice/customCategorySlice';
import customProductSlice from './slice/customProductSlice';
import customUserSlice from './slice/customUserSlice';

// Combine the reducers into a single root reducer
const rootReducer = combineReducers({
  customKeyBoard: customKeyBoardSlice.reducer,
  customDialogS: customDialogSlice.reducer,
  customCategory: customCategorySlice.reducer,
  customProduct: customProductSlice.reducer,
  customUser: customUserSlice.reducer,
});

// Configure the store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
