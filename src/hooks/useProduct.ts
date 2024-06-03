import {
  GET_PRODUCT_GROUP,
  CREATE_PRODUCT_GROUP,
  CREATE_PRODUCT_ITEM,
  GET_PRODUCT_ITEM,
} from '../global/constant/apiRoutes';
import useAxios from './useAxios';
import useDialogState from './useDialogState';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductNameGroupData, setProductItemData } from '../global/appState/slice/customProductSlice';
import { getAsyncStorage } from '../global/utils/asyncFun';
import { RootState } from '../global/appState/store';

const useProduct = () => {
  const dispatch = useDispatch();
  const { apiCall } = useAxios();
  const { setDialogShowState, onSetPreloadState } = useDialogState();
  const { productNameGroupData, productNameItemData }: any = useSelector((state: RootState) => state.customProduct);

  const getAllProductNameGroup = async (product_category_id: number) => {
    console.log('product_category_id', product_category_id);
    try {
      const res = await apiCall('GET', `${GET_PRODUCT_GROUP}?product_category_id=${product_category_id}`);
      console.log('product name', res.data.product_groups);
      dispatch(setProductNameGroupData(res.data.product_groups));
    } catch (error: any) {
      console.log('get Product error =>', error.response);
    }
  };

  const createProductNameGroup = async (
    data: {
      product_name_group: string;
      price: string;
      product_category_id: number;
    },
    nextFun?: any,
  ) => {
    onSetPreloadState(true);
    if (data.product_name_group == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create product name error', 'Product name is needed', 'Try Again');
      return;
    }
    if (data.price == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create product name error', 'Product price  is needed', 'Try Again');
      return;
    }

    if (/^[a-zA-Z0-9 ]+$/.test(data.product_name_group) == false) {
      onSetPreloadState(false);
      setDialogShowState(
        true,
        'Create product name error',
        'Product  name group should only contain alphanumeric characters ',
        'Try Again',
      );
      return;
    }

    if (
      productNameGroupData.some(
        (obj: any) => obj.product_name_group?.toLowerCase() == data.product_name_group.toLowerCase(),
      )
    ) {
      onSetPreloadState(false);
      setDialogShowState(
        true,
        'Create product name error',
        'nice try, but this product name group already exist',
        'Try Again',
      );

      return;
    }

    try {
      let shopId = await getAsyncStorage('org');
      const res = await apiCall('POST', CREATE_PRODUCT_GROUP, {
        product_name_group: data.product_name_group,
        price: Number(data.price),
        product_category_id: data.product_category_id,
        shop_id: shopId.shops[0].id,
      });
      setDialogShowState(true, 'Create Product Name Success', res.data.message, 'Continue', 'success');
      getAllProductNameGroup(data.product_category_id);
      onSetPreloadState(false);
      nextFun();
    } catch (error: any) {
      console.log('Create Product name group error =>', error.response);
    }
  };

  const getProductItem = async (product_group_id: number) => {
    try {
      let shopId = await getAsyncStorage('org');
      const res = await apiCall(
        'GET',
        `${GET_PRODUCT_ITEM}?shop_id=${shopId.shops[0].id}&product_group_id=${product_group_id}`,
      );
      console.log('product item', res?.data?.data?.shop_products);
      dispatch(setProductItemData(res?.data?.data?.shop_products));
    } catch (error: any) {
      console.log('get Product error =>', error.response);
    }
  };

  const createProductItemManually = async (
    data: {
      name: string;
      description: number | any;
      product_name_group_id: number;
      is_single: number;
      category_id: number;
      stock: string;
    },
    nextFun?: any,
  ) => {
    onSetPreloadState(true);
    if (data.name == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create product item error', 'Product item name is needed', 'Try Again');
      return;
    }
    if (data.stock == '') {
      onSetPreloadState(false);
      setDialogShowState(true, 'Create product item error', 'Product item stock is needed', 'Try Again');
      return;
    }
    try {
      let shopId = await getAsyncStorage('org');
      const res = await apiCall('POST', CREATE_PRODUCT_ITEM, {
        name: data.name,
        product_name_group_id: data.product_name_group_id,
        shop_id: shopId.shops[0].id,
        is_single: data.is_single,
        description: data.description,
        category_id: data.category_id,
        stock: Number(data.stock),
      });
      setDialogShowState(true, 'Create Product Item Success', res.data.message, 'Continue', 'success');
      nextFun()
      onSetPreloadState(false);
    } catch (error: any) {
      console.log('Create Product item error =>', error.response);
    }
  };

  return {
    createProductNameGroup,
    getAllProductNameGroup,
    createProductItemManually,
    getProductItem,
    productNameGroupData,
    productNameItemData,
  };
};

export default useProduct;
