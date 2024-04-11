import { combineReducers, configureStore } from '@reduxjs/toolkit';
import customKeyBoardSlice from './slice/customKeyBoardSlice';

// Combine the reducers into a single root reducer
const rootReducer = combineReducers({
  customKeyBoard: customKeyBoardSlice.reducer,
});

// Configure the store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
