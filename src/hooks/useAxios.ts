import axios from 'axios';
import type { Method, AxiosResponse } from 'axios';
import { getAsyncStorage } from '../global/utils/asyncFun';
const useAxios = () => {
  const apiCall = async (method: Method, url: string, data?: {}): Promise<AxiosResponse> => {
    const token = await getAsyncStorage('token');
    axios.defaults.baseURL = 'https://tillseller.com';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers['key'] = '14fWeEO4xk3XKsogpsvy6';
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await axios({ method, url, data });
  };
  return {
    apiCall
  };
};

export default useAxios
