import { createSlice } from '@reduxjs/toolkit';

// Define the reducer logic for 'twoSlice'
const customDialogSlice = createSlice({
  name: 'customDialog',
  initialState: {
    show: false,
    message: '',
    title: '',
    btnText: '',
    _status: '',
    preLoaderState: false,
  },
  reducers: {
    setCustomDialogShow(state, action) {
      state.show = action.payload;
    },
    setCustomDialogMgs(state, action) {
      state.message = action.payload;
    },
    setCustomDialogTitle(state, action) {
      state.title = action.payload;
    },
    setCustomDialogBtnText(state, action) {
      state.btnText = action.payload;
    },
    setCustomDialogStatus(state, action) {
      state._status = action.payload;
    },
    setCustomPreLoaderState(state, action) {
      state.preLoaderState = action.payload;
    },
  },
});

export const {
  setCustomDialogShow,
  setCustomDialogMgs,
  setCustomDialogTitle,
  setCustomDialogBtnText,
  setCustomDialogStatus,
  setCustomPreLoaderState,
} = customDialogSlice.actions;

export default customDialogSlice;
