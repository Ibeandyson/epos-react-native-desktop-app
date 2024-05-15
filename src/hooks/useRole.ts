import { GET_ROLES } from '../global/constant/apiRoutes';
import useAxios from './useAxios';
import { useState } from 'react';

const useRole = () => {
  const [role, setRole] = useState([]);
  const { apiCall } = useAxios();

  const getAllRoles = async () => {
    try {
      const res = await apiCall('GET', GET_ROLES);
      const cutArray = res.data?.roles?.slice(3);
      setRole(cutArray);
    } catch (error) {
      console.log('error role', error);
    }
  };
  return {
    getAllRoles,
    role,
  };
};

export default useRole;
