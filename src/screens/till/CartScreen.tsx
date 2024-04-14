import { ScrollView, View, Text } from 'react-native';
import Layout from '../../components/layout';
import { CustomButton,CustomCartProductCard } from '../../components';
import { appColors } from '../../global/constant/colors';

const CartScreen = () => {
  const OrderList = () => {
    return (
      <ScrollView indicatorStyle="white" contentContainerStyle={{ padding: 2 }} horizontal scrollEnabled={true}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data: any) => (
          <CustomButton bntType="secondary" mode="text" text={`Order${data}`} onPress={() => {}} />
        ))}
      </ScrollView>
    );
  };

  const Footer = () => {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'rgba(74, 74, 74, 1)', fontSize: 20, fontWeight: '600' }}>Total:</Text>
          <Text style={{ color: 'rgba(74, 74, 74, 1)', fontSize: 20, fontWeight: '600' }}>£ 8,000</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, width: '100%' }}>
          <CustomButton bntType="primary" mode="contained" text={'Cancel Order'} onPress={() => {}} />
          <CustomButton bntType="secondary" mode="contained" text={'Cancel Order'} onPress={() => {}} />
        </View>
      </>
    );
  };

  return (
    <>
      <Layout headerContent={<OrderList />} footerContent={<Footer />} mainContent={<>
        <CustomCartProductCard/>
        <CustomCartProductCard/>
        <CustomCartProductCard/>
        <CustomCartProductCard/>
        <CustomCartProductCard/>
        <CustomCartProductCard/>
      </>} />
    </>
  );
};

export default CartScreen;
