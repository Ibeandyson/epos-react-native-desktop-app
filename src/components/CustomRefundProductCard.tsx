import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import CustomButton from './CustomButton';
import { appColors } from '../global/constant/colors';

const CustomRefundProductCard = () => {
  return (
    <>
      <Card style={{ backgroundColor: '#ffffff', height: 80, marginTop: 5, marginBottom: 5 }} mode="elevated">
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'rgba(217, 211, 222, 1)', borderRadius: 10 }}></View>
          <Text style={{ fontWeight: '700', fontSize: 14, color: appColors.primary }}>Four Cousins</Text>
          <TextInput
            style={{
              borderWidth: 3,
              borderColor: 'rgba(30, 30, 30, 0.3)',
              backgroundColor: 'rgba(30, 30, 30, 0.1)',
              borderRadius: 5,
              textAlign: 'center',
              padding: 13
            }}
            value={'4'}
            onChangeText={(text) => {}}
          />
          <View>
            <Text style={{ fontWeight: '700', fontSize: 13, color: appColors.primary }}>Price</Text>
            <Text style={{ fontWeight: '700', fontSize: 15, marginTop: 2, color: appColors.primary }}>£ 2,000</Text>
          </View>
          <CustomButton width={100} fontSize={12} onPress={() => {}} bntType="secondary" mode="contained" text="Refund" />
        </Card.Content>
      </Card>
    </>
  );
};

export default CustomRefundProductCard;
