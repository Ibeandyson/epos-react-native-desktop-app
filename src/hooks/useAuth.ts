import { ADMIN_LOGIN, PASSCODE_LOGIN } from '../global/constant/apiRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import { useState } from 'react';
import { setAsyncStorage, getAsyncStorage } from '../global/utils/asyncFun';
import useAxios from './useAxios';
import useDialogState from './useDialogState';
import { useNavigation } from '@react-navigation/native';

const useAuth = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const { apiCall } = useAxios();
  const { setDialogShowState, onSetPreloadState } = useDialogState();
  const navigation: any = useNavigation();

  const adminLoginFunction = async (data: { password: string; email: string }) => {
    onSetPreloadState(true);
    if (data.email == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Login Error', 'email is needed', 'Try Again');
      return;
    }
    if (data.password == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Login Error', 'password is needed', 'Try Again');
      return;
    }
    try {
      const res = await apiCall('POST', ADMIN_LOGIN, data);
      setAsyncStorage('token', res.data.token);
      setAsyncStorage('profile', res.data.user);
      setAsyncStorage('org', res.data.organisations);
      navigation.navigate('app', { screen: 'lobbyScreen' });
      onSetPreloadState(false);
    } catch (error: any) {
      onSetPreloadState(false);
      console.log('admin login error =>', error);
      if (error.code == 'ERR_NETWORK') {
        setDialogShowState(true, 'Network Error', 'Please check your network connectivity', 'Try Again', 'info');
      } else {
        setDialogShowState(true, 'Login Error', error.response.data.message, 'Try Again', 'error');
      }
    }
  };

  const tillLoginFunction = async (data: { passcode: string }) => {
    onSetPreloadState(true);
    if (data.passcode == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Login Error', 'passcode is needed', 'Try Again', 'error');
      return;
    }
    try {
      const res = await apiCall('POST', PASSCODE_LOGIN, data);
      setAsyncStorage('token', res.data.token);
      setAsyncStorage('profile', res.data.user);
      // setAsyncStorage('org', res.data.organisations);
      navigation.navigate('app', { screen: 'cartScreen' });
      onSetPreloadState(false);
    } catch (error: any) {
      onSetPreloadState(false);
      console.log('admin login error =>', error.response.data);
      if (error.code == 'ERR_NETWORK') {
        setDialogShowState(true, 'Network Error', 'Please check your network connectivity', 'Try Again', 'info');
      } else {
        setDialogShowState(true, 'Login Error', error.response.data.message, 'Try Again', 'error');
      }
    }
  };

  const activateSoftwareFunction = async () => {
    try {
    } catch (error) {}
  };

  return {
    adminLoginFunction,
    tillLoginFunction,
    activateSoftwareFunction,
    authLoading,
  };
};

export default useAuth;
