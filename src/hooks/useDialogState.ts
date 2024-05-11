import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import {
  setCustomDialogShow,
  setCustomDialogMgs,
  setCustomDialogTitle,
  setCustomDialogBtnText,
} from '../global/appState/slice/customDialogSlice';

const useDialogState = () => {
  const dispatch = useDispatch();
  const { show, message, title, btnText }: any = useSelector((state: RootState) => state.customDialogS);
  const setDialogShowState = (state: boolean, titleMgs: string, message: string, actionBtnText: string) => {
    dispatch(setCustomDialogShow(state));
    dispatch(setCustomDialogTitle(titleMgs));
    dispatch(setCustomDialogMgs(message));
    dispatch(setCustomDialogBtnText(actionBtnText));
  };
  return {
    setDialogShowState,
    show,
    message,
    title,
    btnText,
  };
};

export default useDialogState;
