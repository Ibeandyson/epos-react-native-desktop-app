import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { ProductNameScreenProps } from '../../navigation/appNavigation';
import AdminLayout from '../../components/layout/AdminLayout';
import { CustomButton, CustomDialog, CustomInput } from '../../components';
import { Svg, Path } from 'react-native-svg';
import useProduct from '../../hooks/useProduct';
import { appColors } from '../../global/constant/colors';

const ProductNameScreen: FC<ProductNameScreenProps> = ({ navigation, route }: any) => {
  const [show, setShow] = useState(false);
  const [productNameGroupInfo, setProductNameGroupInfo] = useState({
    product_name_group: '',
    price: '',
  });
  const { getAllProductNameGroup, createProductNameGroup, productLoading, productNameGroupData } = useProduct();
  const { categoryParamsData }: any = route.params;

  const onSubmit = () => {
    createProductNameGroup({ ...productNameGroupInfo, product_category_id: categoryParamsData.id });
  };

  useEffect(() => {
    getAllProductNameGroup(categoryParamsData.id);
  }, []);

  return (
    <>
      <AdminLayout
        content={
          <>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <TouchableOpacity onPress={() => (show ? setShow(false) : navigation.goBack())}>
                  <View style={{ flexDirection: 'row' }}>
                    <Svg style={{ marginTop: -2 }} width="25" height="25" viewBox="0 0 40 40" fill="none">
                      <Path
                        d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z"
                        fill="#1E1E1E"
                      />
                    </Svg>
                    <Text style={{ fontWeight: '700', color: 'rgba(30, 30, 30, 1)', marginLeft: 10 }}>
                      {show
                        ? `CREATE PRODUCT NAME ${categoryParamsData?.name?.toUpperCase()}`
                        : `${categoryParamsData?.name?.toUpperCase()} CATEGORY`}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {!show && (
                <View style={{ marginLeft: 'auto' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 10 }}>
                      <TextInput
                        textAlign="center"
                        textAlignVertical="center"
                        keyboardAppearance="default"
                        placeholder="Search"
                        style={{
                          height: 50,
                          padding: 13,
                          borderColor: 'rgba(30, 30, 30, 0.5)',
                          borderWidth: 1,
                          borderRadius: 10,
                          width: 400,
                          backgroundColor: '#efeded',
                        }}
                        // value={searchQuery}
                        // onChangeText={setSearchQuery}
                      />
                    </View>
                    <CustomButton
                      fontSize={14}
                      padding={5}
                      width={250}
                      bntType="primary"
                      mode="contained"
                      text="ADD PRODUCT NAME"
                      onPress={() => setShow(true)}
                    />
                  </View>
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginTop: 40,
              }}
            >
              {show ? (
                <ScrollView style={{ marginRight: 200, marginLeft: 200 }}>
                  <CustomInput
                    value={productNameGroupInfo.product_name_group}
                    placeholder="Product Group Name"
                    onChangeText={(e) => setProductNameGroupInfo({ ...productNameGroupInfo, product_name_group: e })}
                    inputMode="text"
                  />
                  <CustomInput
                    value={productNameGroupInfo.price}
                    placeholder="Product Group Price"
                    onChangeText={(e) => setProductNameGroupInfo({ ...productNameGroupInfo, price: e })}
                    inputMode="numeric"
                  />
                  <View style={{ marginTop: 30 }}>
                    <CustomButton
                      fontSize={14}
                      padding={5}
                      width={'100%'}
                      bntType="primary"
                      mode="contained"
                      text="CREATE"
                      // loading={authLoading}
                      onPress={onSubmit}
                    />
                  </View>
                </ScrollView>
              ) : (
                <>
                  <FlatList
                    contentContainerStyle={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 40,
                    }}
                    keyExtractor={(item) => item.id}
                    numColumns={6}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{ margin: 10, borderRadius: 15 }}
                        // onPress={() => navigation.navigate('productNameScreen', { categoryParamsData: item })}
                      >
                        <View
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            height: 130,
                            width: 200,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 5,
                            marginTop: 5,
                          }}
                        >
                          <Text
                            style={{
                              color: appColors.primary,
                              fontSize: 15,
                              fontWeight: '600',
                              textTransform: 'uppercase',
                            }}
                          >
                            {item.product_name_group}
                          </Text>
                          <Text
                            style={{
                              color: appColors.primary,
                              fontSize: 15,
                              fontWeight: '600',
                              textTransform: 'uppercase',
                              marginTop: 10,
                            }}
                          >
                            ${item.price}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    data={productNameGroupData}
                  />
                </>
              )}
            </View>
            <CustomDialog />
          </>
        }
      />
    </>
  );
};

export default ProductNameScreen;
