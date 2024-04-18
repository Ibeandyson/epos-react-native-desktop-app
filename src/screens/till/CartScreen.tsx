import React, { FC, useState, useMemo } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Layout from '../../components/layout';
import { CustomButton, CustomCartProductCard, CustomTillProductCard, CustomNumberKeyboard, CustomNavButton } from '../../components';
import useCustomKeyBoard from '../../hooks/useCustomKeyBoard';
import { CartScreenProps } from '../../navigation/appNavigation';
import { appColors } from '../../global/constant/colors';

const CartScreen: FC<CartScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { hideShowKey } = useCustomKeyBoard();

  const goToRefundScreen = () => navigation.navigate('refundScreen');
  const goToCartScreen = () => navigation.navigate('cartScreen');

  const OrderList = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <CustomButton width={150} fontSize={12} onPress={() => {}} bntType="secondary" mode="contained" text="Clear order" />
        <View style={{ width: "67%", marginLeft: 10,  marginRight: 10 }}>
          <ScrollView indicatorStyle="white" contentContainerStyle={{ padding: 2 }} horizontal scrollEnabled={true}>
            {[1, 2, 3, 4, 5, 6].map((data: any) => (
              <CustomButton width={'20%'} bntType="secondary" mode="text" text={`Order${data}`} onPress={() => {}} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'rgba(74, 74, 74, 1)', fontSize: 20, fontWeight: '800' }}>Total</Text>
          <Text style={{ color: 'rgba(74, 74, 74, 1)', fontSize: 20, fontWeight: '800' }}>£ 8,000</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, width: '100%', justifyContent: 'center' }}>
          <View style={{ marginHorizontal: 5, width: '50%' }}>
            <CustomButton padding={10} width={'100%'} bntType="primary" mode="contained" text={'Cancel Order'} onPress={() => {}} />
          </View>
          <View style={{ marginHorizontal: 5, width: '50%' }}>
            <CustomButton padding={10} width={'100%'} bntType="secondary" mode="contained" text={'CheckOut Order'} onPress={() => {}} />
          </View>
        </View>
      </>
    );
  };

  const LeftSide = useMemo(() => {
    return (
      <>
        {hideShowKey ? (
          <View style={{ paddingVertical: 30, paddingHorizontal: 30, height: '70%' }}>
            <CustomNumberKeyboard />
          </View>
        ) : (
          <View style={{ paddingVertical: 30, paddingHorizontal: 30, height: '70%' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ marginTop: -3 }}>
                <Svg width="25" height="25" viewBox="0 0 40 40" fill="none">
                  <Path d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z" fill="#1E1E1E" />
                </Svg>
              </TouchableOpacity>
              <Text style={{ fontWeight: '700', color: 'rgba(30, 30, 30, 1)', marginLeft: 10 }}>PRODUCTS</Text>
            </View>

            <View style={{ marginBottom: 20, marginTop: 20 }}>
              <TextInput
                textAlign="center"
                textAlignVertical="center"
                keyboardAppearance="default"
                placeholder="Search"
                style={{
                  height: 50,
                  padding: 13,
                  backgroundColor: appColors.secondary,
                  borderColor: 'rgba(30, 30, 30, 0.5)',
                  borderWidth: 1,
                  borderRadius: 10,
                }}
                // value={searchQuery}
                // onChangeText={setSearchQuery}
              />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {[1, 2, 3, 3, 4, 4, 5].map(() => (
                <CustomTillProductCard />
              ))}
            </ScrollView>
          </View>
        )}

        <CustomNavButton goToRefundScreen={goToRefundScreen} goToCartScreen={goToCartScreen} />
      </>
    );
  }, [hideShowKey]);

  return (
    <>
      <Layout
        leftSideContent={LeftSide}
        headerContent={<OrderList />}
        footerContent={<Footer />}
        mainContent={
          <>
            <CustomCartProductCard />
            <CustomCartProductCard />
            <CustomCartProductCard />
            <CustomCartProductCard />
            <CustomCartProductCard />
            <CustomCartProductCard />
            <CustomCartProductCard />
            <CustomCartProductCard />
            <CustomCartProductCard />
          </>
        }
      />
    </>
  );
};

export default CartScreen;
