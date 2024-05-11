import { View, Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { appColors } from '../../global/constant/colors';
import { TillLoginScreenScreenProps } from '../../navigation/authNavigation';
import { CustomInput, CustomButton } from '../../components';
import { Svg, Path } from 'react-native-svg';

const TillLogin: FC<TillLoginScreenScreenProps> = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#efeded', height: '100%' }}>
      <View style={{ backgroundColor: appColors.primary, height: '35%' }}>
        <TouchableOpacity style={{ marginLeft: 30, marginTop: 40 }} onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row' }}>
            <Svg style={{ marginTop: -2 }} width="25" height="25" viewBox="0 0 40 40" fill="none">
              <Path d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z" fill="#ffffff" />
            </Svg>
            <Text style={{ fontWeight: '800', color: '#FFFFFF', marginLeft: 10 }}>BACK</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center', // Align items vertically at the center
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: '800' }}>TILL LOGIN</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center', // Align items vertically at the center
          alignItems: 'center',
        }}
      >
        <View style={{ width: '45%' }}>
          <CustomInput value="" placeholder="Enter Passcode" onChangeText={() => {}} inputMode="email" keyboardType="email-address" />
          <View style={{ marginTop: 30 }}>
            <CustomButton fontSize={14} padding={5} width={'100%'} bntType="primary" mode="contained" text="LOGIN" onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TillLogin;
