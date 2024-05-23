import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import AdminLayout from '../../components/layout/AdminLayout';
import { Svg, Path } from 'react-native-svg';
import { AddProductManuallyScreenProps } from '../../navigation/appNavigation';
import { appColors } from '../../global/constant/colors';
import { FC, useEffect, useState } from 'react';
import { CustomInput, CustomButton, CustomImageUpload, CustomDialog } from '../../components';
import useProduct from '../../hooks/useProduct';

const AddProductManuallyScreen: FC<AddProductManuallyScreenProps> = ({ navigation, route }) => {
  const { createProductItemManually } = useProduct();
  const { productNameGroupParamsData }: any = route.params;
  const [productInfo, setProductInfo] = useState({
    name: '',
    description: '',
    stock: ''
  });

  console.log('productNameGroupParamsData', productNameGroupParamsData);

  const onSubmit = () => {
    let data = createProductItemManually({
      name: productInfo.name,
      product_name_group_id: productNameGroupParamsData?.id,
      category_id: productNameGroupParamsData.product_category_id,
      description: productInfo.description,
      is_single: 0,
      stock: productInfo.stock
    });
  };

  return (
    <>
      <AdminLayout
        content={
          <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ flexDirection: 'row' }}>
                  <Svg style={{ marginTop: -2 }} width="25" height="25" viewBox="0 0 40 40" fill="none">
                    <Path
                      d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z"
                      fill="#1E1E1E"
                    />
                  </Svg>
                  <Text style={{ fontWeight: '700', color: 'rgba(30, 30, 30, 1)', marginLeft: 10 }}>ADD PRODUCT</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
              <CustomImageUpload />
              <View style={{ width: '48%', height: '100%', marginBottom: 50, marginTop: 100 }}>
                <CustomInput
                  value={productInfo.name}
                  placeholder="Product Name"
                  onChangeText={(e) => setProductInfo({ ...productInfo, name: e })}
                  inputMode="text"
                />
                <CustomInput
                  value={productInfo.description}
                  placeholder="Product Description"
                  onChangeText={(e) => setProductInfo({ ...productInfo, description: e })}
                  inputMode="text"
                />
                 <CustomInput
                  value={productInfo.stock}
                  placeholder="Product Stock"
                  onChangeText={(e) => setProductInfo({ ...productInfo, stock: e })}
                  inputMode='numeric'
                />
                <View style={{ marginTop: 30 }}>
                  <CustomButton
                    fontSize={14}
                    padding={5}
                    width={'100%'}
                    bntType="primary"
                    mode="contained"
                    text="SAVE"
                    onPress={onSubmit}
                  />
                </View>
              </View>
            </View>
            <CustomDialog />
          </ScrollView>
        }
      />
    </>
  );
};

export default AddProductManuallyScreen;
