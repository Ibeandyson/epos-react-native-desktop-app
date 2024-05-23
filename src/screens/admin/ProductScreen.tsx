import { useState, FC, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image, FlatList } from 'react-native';
import { appColors } from '../../global/constant/colors';
import { CustomButton, CustomAdminProductCard, CustomModal } from '../../components';
import { Svg, Path } from 'react-native-svg';
import { ProductScreenProps } from '../../navigation/appNavigation';
import AdminLayout from '../../components/layout/AdminLayout';
import useProduct from '../../hooks/useProduct';

const ProductScreen: FC<ProductScreenProps> = ({ navigation, route }: any) => {
  const [showProduct, setShowProduct] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const { getProductItem, productNameItemData } = useProduct();
  const { productNameGroupParamsData }: any = route.params;

  useEffect(() => {
    getProductItem(productNameGroupParamsData?.id);
  }, []);


  return (
    <>
      <AdminLayout
        content={
          <>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={{ flexDirection: 'row' }}>
                    <Svg style={{ marginTop: -2 }} width="25" height="25" viewBox="0 0 40 40" fill="none">
                      <Path
                        d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z"
                        fill="#1E1E1E"
                      />
                    </Svg>
                    <Text style={{ fontWeight: '700', color: 'rgba(30, 30, 30, 1)', marginLeft: 10 }}>PRODUCTS</Text>
                  </View>
                </TouchableOpacity>
              </View>
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
                    width={200}
                    bntType="primary"
                    mode="contained"
                    text="ADD PRODUCT"
                    onPress={showModal}
                  />
                </View>
              </View>
            </View>
            <View>
              <FlatList
                contentContainerStyle={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 40,
                }}
                keyExtractor={(item: any) => item.id}
                numColumns={6}
                renderItem={({ item }) => <CustomAdminProductCard />}
                data={productNameItemData}
              />
            </View>
            <CustomModal
              content={
                <>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                      <Image
                        style={{ height: 150, width: 150, marginRight: 30 }}
                        source={require('../../assets/scantoadd.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('addProductManuallyScreen', {
                          productNameGroupParamsData: productNameGroupParamsData,
                        })
                      }
                    >
                      <Image
                        style={{ height: 150, width: 150, marginLeft: 30 }}
                        source={require('../../assets/manuallytoadd.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              }
              marginLeft={450}
              marginRight={450}
              hideModal={hideModal}
              visible={visible}
            />
          </>
        }
      />
    </>
  );
};

export default ProductScreen;
