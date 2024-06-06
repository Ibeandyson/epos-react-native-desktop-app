import { CREATE_USER, GET_USER } from '../global/constant/apiRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import useAxios from './useAxios';
import useDialogState from './useDialogState';
import { setUserData } from '../global/appState/slice/customUserSlice';
import { getAsyncStorage } from '../global/utils/asyncFun';

const useUsers = () => {
  const { apiCall } = useAxios();
  const dispatch = useDispatch();
  const { setDialogShowState, onSetPreloadState } = useDialogState();
  const { userData }: any = useSelector((state: RootState) => state.customUser);

  const getUser = async () => {
    try {
      let shopId = await getAsyncStorage('org');
      const res = await apiCall('GET', `${GET_USER}?shop_id=${shopId.shops[0].id}`);
      console.log("user dat", res.data.users)
      dispatch(setUserData(res.data.users));
    } catch (error) {
      console.log('get user error', error);
    }
  };

  const createUser = async (
    data: {
      first_name: string;
      surname: string;
      email: string;
      password: string;
      password_confirmation: string;
      role: number;
      phone: string;
    },
    nextFun?: any,
  ) => {
    onSetPreloadState(true);
    if (data.first_name == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create User Error', 'first name is needed', 'Try Again', 'error');
      return;
    }
    if (data.surname == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create User Error', 'surname is needed', 'Try Again', 'error');
      return;
    }
    if (data.email == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create User Error', 'email is needed', 'Try Again', 'error');
      return;
    }
    if (data.phone == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create User Error', 'password dose not match', 'Try Again', 'error');
      return;
    }

    if (data.password == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create User Error', 'password is needed', 'Try Again', 'error');
      return;
    }
    if (data.password != data.password_confirmation) {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create User Error', 'role is needed', 'Try Again', 'error');
      return;
    }

    if (data.role == 0) {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create User Error', 'password dose not match', 'Try Again', 'error');
      return;
    }

    try {
      const res = await apiCall('POST', CREATE_USER, data);
      console.log(res.data);
      onSetPreloadState(false);
      setDialogShowState(true, 'Create User Success', res.data.message, 'Continue', 'success');
      nextFun();
    } catch (error: any) {
      console.log('Create User Error =>', error.response.data);
      onSetPreloadState(false);
      if (error.code == 'ERR_NETWORK') {
        setDialogShowState(true, 'Network Error', 'Please check your network connectivity', 'Try Again', 'info');
      } else {
        setDialogShowState(true, 'Create User Error', error.response.data.message, 'Try Again', 'error');
      }
    }
  };

  return {
    createUser,
    getUser,
    userData,
  };
};

export default useUsers;
