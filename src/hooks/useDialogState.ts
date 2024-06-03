import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import {
  setCustomDialogShow,
  setCustomDialogMgs,
  setCustomDialogTitle,
  setCustomDialogBtnText,
  setCustomDialogStatus,
  setCustomPreLoaderState,
} from '../global/appState/slice/customDialogSlice';

const useDialogState = () => {
  const dispatch = useDispatch();
  const { show, message, title, btnText, _status, preLoaderState }: any = useSelector(
    (state: RootState) => state.customDialogS,
  );
  const setDialogShowState = (
    state: boolean,
    titleMgs: string,
    message: string,
    actionBtnText: string,
    status?: 'success' | 'info' | 'error',
  ) => {
    dispatch(setCustomDialogShow(state));
    dispatch(setCustomDialogTitle(titleMgs));
    dispatch(setCustomDialogMgs(message));
    dispatch(setCustomDialogBtnText(actionBtnText));
    dispatch(setCustomDialogStatus(status));
  };
  const onSetPreloadState = (state: boolean) => {
    dispatch(setCustomPreLoaderState(state));
  };
  return {
    setDialogShowState,
    onSetPreloadState,
    show,
    message,
    title,
    btnText,
    _status,
    preLoaderState,
  };
};

export default useDialogState;
