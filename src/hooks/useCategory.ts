import { CREATE_CATEGORY, UPDATE_CATEGORY, GET_CATEGORY } from '../global/constant/apiRoutes';
import useAxios from './useAxios';
import useDialogState from './useDialogState';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryData } from '../global/appState/slice/customCategorySlice';
import { getAsyncStorage } from '../global/utils/asyncFun';
import { RootState } from '../global/appState/store';

const useCategory = () => {
  const [categoryLoading, setCategoryLoading] = useState(false);
  const dispatch = useDispatch();
  const { apiCall } = useAxios();
  const { setDialogShowState, onSetPreloadState } = useDialogState();
  const { categoryData }: any = useSelector((state: RootState) => state.customCategory);

  const getAllCategory = async () => {
    try {
      let shopId = await getAsyncStorage('org');
      const res = await apiCall('GET', `${GET_CATEGORY}?shop_id=${shopId.shops[0].id}`);
      console.log(res.data);
      dispatch(setCategoryData(res.data.categories));
    } catch (error: any) {
      console.log('get category error =>', error.response);
    }
  };

  const createCategory = async (data: { name: string; description: string }, nextFun?: any) => {
    onSetPreloadState(true);
    if (data.name == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create category error', 'category name is needed', 'Try Again');
      return;
    }
    if (data.description == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create category error', 'category description  is needed', 'Try Again');
      return;
    }
    if (/\s/.test(data.name)) {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create category error', 'category name should not have space', 'Try Again');
      return;
    }
    if (/^[a-zA-Z0-9]+$/.test(data.name) == false) {
      onSetPreloadState(false);
      setDialogShowState(
        true,
        'Create category error',
        'category  name should only contain alphanumeric characters ',
        'Try Again',
      );
      return;
    }

    if (categoryData.some((obj: any) => obj.name?.toLowerCase() == data.name.toLowerCase())) {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create category error', 'nice try, but this category already exist', 'Try Again');
      return;
    }

    try {
      let shopId = await getAsyncStorage('org');
      const res = await apiCall('POST', CREATE_CATEGORY, {
        name: data.name,
        description: data.description,
        shop_id: shopId.shops[0].id,
      });
      onSetPreloadState(false);
      setDialogShowState(true, 'Create Category Success', res.data.message, 'Continue', 'success');
      getAllCategory();
      nextFun();
    } catch (error: any) {
      console.log('Create category error =>', error.response);
    }
  };

  return {
    createCategory,
    getAllCategory,
    categoryLoading,
    categoryData,
  };
};

export default useCategory;
