import { ADMIN_LOGIN, PASSCODE_LOGIN } from '../global/constant/apiRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import { setAsyncStorage, getAsyncStorage } from '../global/utils/asyncFun';
import useAxios from './useAxios';
import useToastNotification from './useToastNofification';
import useDialogState from './useDialogState';
import { useNavigation } from '@react-navigation/native';

const useUsers = () => {
  const createUser = async () => {
    try {
    } catch (error) {}
  };
};

export default useUsers;
