import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Layout from '../../components/layout';
import { CustomButton, CustomCartProductCard, CustomTillProductCard, CustomNumberKeyboard, CustomNavButton } from '../../components';

const CartScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const OrderList = () => {
    return (
      <ScrollView indicatorStyle="white" contentContainerStyle={{ padding: 2 }} horizontal scrollEnabled={true}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data: any) => (
          <CustomButton width={'15%'} bntType="secondary" mode="text" text={`Order${data}`} onPress={() => {}} />
        ))}
      </ScrollView>
    );
  };

  const Footer = () => {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'rgba(74, 74, 74, 1)', fontSize: 20, fontWeight: '600' }}>Total</Text>
          <Text style={{ color: 'rgba(74, 74, 74, 1)', fontSize: 20, fontWeight: '500' }}>£ 8,000</Text>
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

  const LeftSide = () => {
    return (
      <>
        {/* <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
          <CustomNumberKeyboard />
        </View> */}
        <View style={{ paddingVertical: 20, paddingHorizontal: 20, height: '70%' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                <Path d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z" fill="#1E1E1E" />
              </Svg>
            </TouchableOpacity>
            <Text style={{ fontWeight: '700', color: 'rgba(30, 30, 30, 1)', marginBottom: 12, marginLeft: 10 }}>PRODUCTS</Text>
          </View>

          <View style={{ marginBottom: 20 }}>
            <TextInput
              textAlign="center"
              textAlignVertical="center"
              keyboardAppearance="default"
              keyboardType="web-search"
              placeholder='Search'
              style={{
                // justifyContent: 'center',
                // alignItems: 'center',
                height: 50,
                backgroundColor: 'rgba(255, 191, 0, 1)',
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

        <CustomNavButton />
      </>
    );
  };

  return (
    <>
      <Layout
        leftSideContent={<LeftSide />}
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
