import { ScrollView, TouchableOpacity } from 'react-native';
import Layout from '../../components/layout';
import { CustomButton } from '../../components';
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

  return (
    <>
      <Layout headerContent={<OrderList />} />
    </>
  );
};

export default CartScreen;
