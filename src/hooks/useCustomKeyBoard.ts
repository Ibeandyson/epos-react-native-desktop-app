import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import customKeyBoardSlice, { setState, setShowKey } from '../global/appState/slice/customKeyBoardSlice';

const useCustomKeyBoard = () => {
  const dispatch = useDispatch();
  const { state, show }: any = useSelector((state: RootState) => state.customKeyBoard);

  const setKeyValue = (val: any) => {
    dispatch(setState(val));
  };

  const deleteFromKey = () => {
    let currentLength = state.length;
    if (currentLength > 0) {
      currentLength--;
      let modifiedStr = state.slice(0, currentLength);
      dispatch(setState(modifiedStr));
    }
  };

  const setShowKeyBoard = (val: boolean) => {
    dispatch(setShowKey(val));
  };

  return {
    setKeyValue,
    deleteFromKey,
    setShowKeyBoard,
    customKeyBoardState: state,
    hideShowKey: show,
  };
};

export default  useCustomKeyBoard;
