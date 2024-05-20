import { GET_PRODUCT_GROUP, CREATE_PRODUCT_GROUP } from '../global/constant/apiRoutes';
import useAxios from './useAxios';
import useDialogState from './useDialogState';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductNameGroupDataData } from '../global/appState/slice/customProductSlice';
import { getAsyncStorage } from '../global/utils/asyncFun';
import { RootState } from '../global/appState/store';

const useProduct = () => {
  const [productLoading, setProductLoading] = useState(false);
  const dispatch = useDispatch();
  const { apiCall } = useAxios();
  const { setDialogShowState } = useDialogState();
  const { productNameGroupData }: any = useSelector((state: RootState) => state.customProduct);

  const getAllProductNameGroup = async (product_category_id: number) => {
    console.log("product_category_id", product_category_id)
    try {
      const res = await apiCall('GET', `${GET_PRODUCT_GROUP}?product_category_id=${product_category_id}`);
      console.log("product name",res.data.product_groups);
      dispatch(setProductNameGroupDataData(res.data.product_groups));
    } catch (error: any) {
      console.log('get Product error =>', error.response);
    }
  };

  const createProductNameGroup = async (data: {
    product_name_group: string;
    price: string;
    product_category_id: number;
  }) => {
    setProductLoading(true);
    if (data.product_name_group == '') {
      setProductLoading(false);
      setDialogShowState(true, 'Create product name error', 'Product name is needed', 'Try Again');
      return;
    }
    if (data.price == '') {
      setProductLoading(false);
      setDialogShowState(true, 'Create product name ', 'Product price  is needed', 'Try Again');
      return;
    }
   
    if (/^[a-zA-Z0-9 ]+$/.test(data.product_name_group) == false) {
      setProductLoading(false);
      setDialogShowState(
        true,
        'Create product name  error',
        'Product  name group should only contain alphanumeric characters ',
        'Try Again',
      );
      return;
    }

    if (productNameGroupData.some((obj: any) => obj.product_name_group?.toLowerCase() == data.product_name_group.toLowerCase())) {
      setProductLoading(false);
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
    } catch (error: any) {
      console.log('Create Product name group error =>', error.response);
    }
  };

  return {
    createProductNameGroup,
    getAllProductNameGroup,
    productLoading,
    productNameGroupData,
  };
};

export default useProduct;
