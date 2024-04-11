import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import customKeyBoardSlice, { setState } from '../global/appState/slice/customKeyBoardSlice';

const userCustomKeyBoard = () => {
  const dispatch = useDispatch();
  const { state }: any = useSelector((state: RootState) => state.customKeyBoard);

  const setKeyValue = (val: any) => {
    dispatch(setState(val));
  };
  const deleteFromKey = () => {
    let currentLength = state.length;
    if (currentLength > 0) {
      currentLength--;
      let modifiedStr = state.slice(0, currentLength);
      dispatch(setState(modifiedStr)); // Output modified string
    }
  };

  return {
    setKeyValue,
    deleteFromKey,
    customKeyBoardState: state,
  };
};

export default userCustomKeyBoard;
