import { FC, useMemo } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Layout from '../../components/layout';
import { RefundScreenProps } from '../../navigation/appNavigation';
import { CustomRefundProductCard, CustomNumberKeyboard, CustomNavButton, CustomButton } from '../../components';
import useCustomKeyBoard from '../../hooks/useCustomKeyBoard';
import { appColors } from '../../global/constant/colors';

const RefundScreen: FC<RefundScreenProps> = ({ navigation }) => {
  const { hideShowKey } = useCustomKeyBoard();
  const goToRefundScreen = () => navigation.navigate('refundScreen');
  const goToCartScreen = () => navigation.navigate('cartScreen');

  const HeadContent = () => {
    return (
      <>
        <View style={{ width: '80%', flexDirection: 'row' }}>
          <TextInput
            textAlign="center"
            textAlignVertical="center"
            keyboardAppearance="default"
            placeholder="Enter Transaction ID"
            style={{
              height: 50,
              padding: 13,
              backgroundColor: '#ffffff',
              borderColor: 'rgba(30, 30, 30, 0.5)',
              borderWidth: 1,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              width: '60%',
            }}
            // value={searchQuery}
            // onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            style={{ borderBottomRightRadius: 10, borderTopRightRadius: 10, backgroundColor: appColors.secondary, height: 50, padding: 13 }}
          >
            <Text style={{ color: 'rgba(4, 6, 94, 1)', fontSize: 13, fontWeight: '700' }}>Search Transaction</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const LeftSide = useMemo(() => {
    return (
      <>
        <View style={{ paddingVertical: 30, paddingHorizontal: 30, height: '70%' }}>
          <CustomNumberKeyboard />
        </View>

        <CustomNavButton goToRefundScreen={goToRefundScreen} goToCartScreen={goToCartScreen} />
      </>
    );
  }, []);

  const Footer = () => {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'rgba(74, 74, 74, 1)', fontSize: 20, fontWeight: '800' }}>Total</Text>
          <Text style={{ color: 'rgba(74, 74, 74, 1)', fontSize: 20, fontWeight: '800' }}>£ 8,000</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, width: '100%', justifyContent: 'center' }}>
          <View style={{ marginHorizontal: 5, width: '100%' }}>
            <CustomButton padding={10} width={'100%'} bntType="primary" mode="contained" text={'Complete Refund'} onPress={() => {}} />
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Layout
        mainContent={
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: '700', marginRight: 2 }}>Transaction ID:</Text>
                <Text>Order#585939</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: '700', marginRight: 2 }}>Cashier:</Text>
                <Text>Peterson David</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: '700', marginRight: 2 }}>Date:</Text>
                <Text>03-05-2024</Text>
              </View>
            </View>
            <CustomRefundProductCard />
            <CustomRefundProductCard />
            <CustomRefundProductCard />
            <CustomRefundProductCard />
            <CustomRefundProductCard />
          </>
        }
        headerContent={<HeadContent />}
        leftSideContent={LeftSide}
        footerContent={<Footer />}
      />
    </>
  );
};

export default RefundScreen;
