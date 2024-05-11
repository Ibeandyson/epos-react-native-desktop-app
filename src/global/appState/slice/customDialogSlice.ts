import { createSlice } from '@reduxjs/toolkit';
import { Title } from 'react-native-paper';

// Define the reducer logic for 'twoSlice'
const customDialogSlice = createSlice({
  name: 'customDialog',
  initialState: {
    show: false,
    message: '',
    title: '',
    btnText: '',
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
  },
});

export const { setCustomDialogShow, setCustomDialogMgs, setCustomDialogTitle, setCustomDialogBtnText } =
  customDialogSlice.actions;

export default customDialogSlice;
