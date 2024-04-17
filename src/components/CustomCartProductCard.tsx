import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Svg, Path } from 'react-native-svg';
import { appColors } from '../global/constant/colors';

const CustomCartProductCard = () => {
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
              justifyContent: 'center',
              alignItems: 'center',
            }}
            value={'4'}
            onChangeText={(text) => {}}
          />
          <View>
            <Text style={{ fontWeight: '700', fontSize: 13, color: appColors.primary }}>Price</Text>
            <Text style={{ fontWeight: '700', fontSize: 15, marginTop: 2, color: appColors.primary }}>£ 2,000</Text>
          </View>
          <TouchableOpacity>
            <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <Path
                d="M31.6666 10.6835L29.3166 8.3335L19.9999 17.6502L10.6833 8.3335L8.33325 10.6835L17.6499 20.0002L8.33325 29.3168L10.6833 31.6668L19.9999 22.3502L29.3166 31.6668L31.6666 29.3168L22.3499 20.0002L31.6666 10.6835Z"
                fill="#1E1E1E"
              />
            </Svg>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </>
  );
};

export default CustomCartProductCard;
