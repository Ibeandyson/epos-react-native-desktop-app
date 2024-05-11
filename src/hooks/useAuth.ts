import { ADMIN_LOGIN, PASSCODE_LOGIN } from '../global/constant/apiRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../global/appState/store';
import customKeyBoardSlice, { setState, setShowKey } from '../global/appState/slice/customKeyBoardSlice';
import { useState } from 'react';
import { setAsyncStorage, getAsyncStorage } from '../global/utils/asyncFun';
import useAxios from './useAxios';
import useToastNotification from './useToastNofification';
import useDialogState from './useDialogState';
import { useNavigation } from '@react-navigation/native';

const useAuth = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const { apiCall } = useAxios();
  const { showToast } = useToastNotification();
  const { setDialogShowState } = useDialogState();
  const navigation: any = useNavigation();

  const adminLoginFunction = async (data: any) => {
    setAuthLoading(false);
    try {
      const res = await apiCall('POST', ADMIN_LOGIN, data);
      setAsyncStorage('token', res.data.token);
      setAsyncStorage('profile', res.data.user);
      setAsyncStorage('org', res.data.organisations);
      navigation.navigate('app', { screen: 'lobbyScreen' })
      setAuthLoading(false);
    } catch (error: any) {
      setDialogShowState(true, 'Login Error', error.response.data.message, 'Try Again');
      setAuthLoading(false);
      console.log('admin login error =>', error.response.data);
    }
  };

  const tillLoginFunction = async () => {
    try {
    } catch (error) {}
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
