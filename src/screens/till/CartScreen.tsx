import React, { FC, useState, useMemo } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Layout from '../../components/layout';
import { CustomCategoryCard, CustomButton, CustomCartProductCard, CustomNumberKeyboard, CustomNavButton, CustomModal } from '../../components';
import useCustomKeyBoard from '../../hooks/useCustomKeyBoard';
import { CartScreenProps } from '../../navigation/appNavigation';
import { appColors } from '../../global/constant/colors';

const CartScreen: FC<CartScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { hideShowKey } = useCustomKeyBoard();
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const goToRefundScreen = () => navigation.navigate('refundScreen');
  const goToCartScreen = () => navigation.navigate('cartScreen');

  const OrderList = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <CustomButton width={150} fontSize={12} onPress={() => {}} bntType="secondary" mode="contained" text="Clear order" />
        <View style={{ width: '67%', marginLeft: 10, marginRight: 10 }}>
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
            <CustomButton padding={10} width={'100%'} bntType="primary" mode="contained" text={'Hold'} onPress={() => {}} />
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
        <CustomModal marginLeft={300} marginRight={300} hideModal={hideModal} visible={visible} />

        {hideShowKey ? (
          <View style={{ paddingVertical: 30, paddingHorizontal: 30, height: '70%' }}>
            <CustomNumberKeyboard />
          </View>
        ) : (
          <View style={{ paddingVertical: 30, paddingHorizontal: 30, height: '70%' }}>
            <CustomCategoryCard />
          </View>
        )}
        <CustomNavButton setRefundOptionModal={showModal} goToRefundScreen={goToRefundScreen} goToCartScreen={goToCartScreen} />
      </>
    );
  }, [hideShowKey, visible]);

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
