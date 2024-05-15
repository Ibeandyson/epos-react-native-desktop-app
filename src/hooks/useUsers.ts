import { CREATE_USER } from '../global/constant/apiRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import useAxios from './useAxios';
import useDialogState from './useDialogState';
import { useState } from 'react';

const useUsers = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const { apiCall } = useAxios();
  const { setDialogShowState } = useDialogState();
  const createUser = async (data: {
    first_name: string;
    surname: string;
    email: string;
    password: string;
    password_confirmation: string;
    role: number;
    phone: string;
  }) => {
    if (data.first_name == '') {
      setAuthLoading(false);
      setDialogShowState(true, 'Create User Error', 'first name is needed', 'Try Again', 'error');
      return;
    }
    if (data.surname == '') {
      setAuthLoading(false);
      setDialogShowState(true, 'Create User Error', 'surname is needed', 'Try Again', 'error');
      return;
    }
    if (data.email == '') {
      setAuthLoading(false);
      setDialogShowState(true, 'Create User Error', 'email is needed', 'Try Again', 'error');
      return;
    }
    if (data.phone == '') {
      setAuthLoading(false);
      setDialogShowState(true, 'Create User Error', 'password dose not match', 'Try Again', 'error');
      return;
    }

    if (data.password == '') {
      setAuthLoading(false);
      setDialogShowState(true, 'Create User Error', 'password is needed', 'Try Again', 'error');
      return;
    }
    if (data.password != data.password_confirmation) {
      setAuthLoading(false);
      setDialogShowState(true, 'Create User Error', 'role is needed', 'Try Again', 'error');
      return;
    }

    if (data.role == 0) {
      setAuthLoading(false);
      setDialogShowState(true, 'Create User Error', 'password dose not match', 'Try Again', 'error');
      return;
    }

    try {
      const res = await apiCall('POST', CREATE_USER, data);
      console.log(res.data);
      setAuthLoading(false);
      setDialogShowState(true, 'Create User Success', res.data.message, 'Continue', 'success');
    } catch (error: any) {
      console.log('Create User Error =>', error.response.data);
      setAuthLoading(false);
      if (error.code == 'ERR_NETWORK') {
        setDialogShowState(true, 'Network Error', 'Please check your network connectivity', 'Try Again', 'info');
      } else {
        setDialogShowState(true, 'Create User Error', error.response.data.message, 'Try Again', 'error');
      }
    }
  };

  return {
    createUser,
    authLoading,
  };
};

export default useUsers;
