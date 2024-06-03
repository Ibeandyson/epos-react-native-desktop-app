import { CREATE_USER } from '../global/constant/apiRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import useAxios from './useAxios';
import useDialogState from './useDialogState';
import { useState } from 'react';

const useUsers = () => {
  const { apiCall } = useAxios();
  const { setDialogShowState, onSetPreloadState } = useDialogState();

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
  };
};

export default useUsers;
