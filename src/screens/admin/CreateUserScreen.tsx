import { FC, useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import AdminLayout from '../../components/layout/AdminLayout';
import { CreateUserScreenProps } from '../../navigation/appNavigation';
import { Svg, Path } from 'react-native-svg';
import { CustomInput, CustomButton, CustomImageUpload, CustomDialog } from '../../components';
import { SelectList } from 'react-native-dropdown-select-list';
import useUsers from '../../hooks/useUsers';

const CreateUserScreen: FC<CreateUserScreenProps> = ({ navigation }) => {
  const { createUser } = useUsers();
  const [selected, setSelected] = useState('');
  const [userInfo, setUserInfo] = useState({
    first_name: '',
    surname: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 5,
    phone: '',
  });

  const data = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ];

  return (
    <>
      <AdminLayout
        content={
          <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ flexDirection: 'row' }}>
                  <Svg style={{ marginTop: -2 }} width="25" height="25" viewBox="0 0 40 40" fill="none">
                    <Path
                      d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z"
                      fill="#1E1E1E"
                    />
                  </Svg>
                  <Text style={{ fontWeight: '700', color: 'rgba(30, 30, 30, 1)', marginLeft: 10 }}>
                    CREATE CASHIER
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
              <CustomImageUpload />
              <View style={{ width: '48%', height: 500, marginTop: 30 }}>
                <CustomInput
                  value={userInfo.first_name}
                  placeholder="First Name"
                  onChangeText={(e) => setUserInfo({ ...userInfo, first_name: e })}
                  inputMode="text"
                />
                <CustomInput
                  value={userInfo.surname}
                  placeholder="Surname"
                  onChangeText={(e) => setUserInfo({ ...userInfo, surname: e })}
                  inputMode="text"
                />
                <CustomInput
                  value={userInfo.email}
                  placeholder="Email Address"
                  onChangeText={(e) => setUserInfo({ ...userInfo, email: e })}
                  inputMode="email"
                  keyboardType="email-address"
                />
                <CustomInput
                  value={userInfo.password}
                  placeholder="Password"
                  onChangeText={(e) => setUserInfo({ ...userInfo, password: e })}
                  inputMode="text"
                />
                <CustomInput
                  value={userInfo.password_confirmation}
                  placeholder="Confirm Password"
                  onChangeText={(e) => setUserInfo({ ...userInfo, password_confirmation: e })}
                  inputMode="text"
                />
                <View style={{ marginTop: 30 }}>
                  <SelectList
                    maxHeight={150}
                    search={false}
                    setSelected={(val: any) => setSelected(val)}
                    data={data}
                    save="value"
                  />
                </View>

                <View style={{ marginTop: 30 }}>
                  <CustomButton
                    fontSize={14}
                    padding={5}
                    width={'100%'}
                    bntType="primary"
                    mode="contained"
                    text="SAVE"
                    onPress={() => createUser(userInfo)}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        }
      />
      <CustomDialog />
    </>
  );
};

export default CreateUserScreen;
