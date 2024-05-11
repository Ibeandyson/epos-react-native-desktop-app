import { View, Text, TouchableOpacity } from 'react-native';
import { FC, useState } from 'react';
import { appColors } from '../../global/constant/colors';
import { AdminLoginScreenScreenProps } from '../../navigation/authNavigation';
import { CustomInput, CustomButton, CustomDialog } from '../../components';
import { Svg, Path } from 'react-native-svg';
import useAuth from '../../hooks/useAuth';

const AdminLogin: FC<AdminLoginScreenScreenProps> = ({ navigation }) => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const { adminLoginFunction, authLoading } = useAuth();
  return (
    <View style={{ backgroundColor: '#efeded', height: '100%' }}>
      <View style={{ backgroundColor: appColors.primary, height: '35%' }}>
        <TouchableOpacity style={{ marginLeft: 30, marginTop: 40 }} onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row' }}>
            <Svg style={{ marginTop: -2 }} width="25" height="25" viewBox="0 0 40 40" fill="none">
              <Path
                d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z"
                fill="#ffffff"
              />
            </Svg>
            <Text style={{ fontWeight: '800', color: '#FFFFFF', marginLeft: 10 }}>BACK</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: '800' }}>ADMIN LOGIN</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ width: '45%' }}>
          <CustomInput
            value={loginInfo.email}
            placeholder="Email Address"
            onChangeText={(e) => setLoginInfo({ ...loginInfo, email: e })}
            inputMode="email"
            keyboardType="email-address"
          />
          <CustomInput
            value={loginInfo.password}
            placeholder="Password"
            onChangeText={(e) => setLoginInfo({ ...loginInfo, password: e })}
            inputMode="email"
            keyboardType="email-address"
          />
          <View style={{ marginTop: 30 }}>
            <CustomButton
              fontSize={14}
              padding={5}
              width={'100%'}
              bntType="primary"
              mode="contained"
              text="LOGIN"
              loading={authLoading}
              onPress={() => adminLoginFunction(loginInfo)}
            />
          </View>
        </View>
        <CustomDialog />
      </View>
    </View>
  );
};

export default AdminLogin;
