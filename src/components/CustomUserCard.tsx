import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Card, Switch } from 'react-native-paper';
import { Svg, Path } from 'react-native-svg';
import { appColors } from '../global/constant/colors';

const CustomUserCard = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const RightContent = () => {
    return <Switch color={isSwitchOn ? 'rgba(37, 135, 47, 1)' : 'rgba(183, 35, 0, 1)'} value={isSwitchOn} onValueChange={onToggleSwitch} />;
  };

  return (
    <>
      <Card style={{ width: '20%', marginLeft: 10, marginRight: 10, marginTop: 20 }}>
        <Card.Title
          titleStyle={{ color: isSwitchOn ? 'rgba(37, 135, 47, 1)' : 'rgba(183, 35, 0, 1)', fontSize: 14 }}
          title={isSwitchOn ? 'Active' : 'Deactivated'}
          right={RightContent}
        />
        <Card.Content>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Avatar.Image size={120} source={{ uri: '' }} />
            <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 10 }}>Levite Prince</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
              <Text style={{ color: '#000000', fontSize: 15 }}>12345</Text>
              <Svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                <Path
                  d="M24.6667 2.66663H12.6667C11.2 2.66663 9.99999 3.86663 9.99999 5.33329V21.3333C9.99999 22.8 11.2 24 12.6667 24H24.6667C26.1333 24 27.3333 22.8 27.3333 21.3333V5.33329C27.3333 3.86663 26.1333 2.66663 24.6667 2.66663ZM24.6667 21.3333H12.6667V5.33329H24.6667V21.3333ZM4.66666 20V17.3333H7.33332V20H4.66666ZM4.66666 12.6666H7.33332V15.3333H4.66666V12.6666ZM14 26.6666H16.6667V29.3333H14V26.6666ZM4.66666 24.6666V22H7.33332V24.6666H4.66666ZM7.33332 29.3333C5.86666 29.3333 4.66666 28.1333 4.66666 26.6666H7.33332V29.3333ZM12 29.3333H9.33332V26.6666H12V29.3333ZM18.6667 29.3333V26.6666H21.3333C21.3333 28.1333 20.1333 29.3333 18.6667 29.3333ZM7.33332 7.99996V10.6666H4.66666C4.66666 9.19996 5.86666 7.99996 7.33332 7.99996Z"
                  fill="#1E1E1E"
                />
              </Svg>
            </View>
            <Text style={{ color: '#000000' }}>johndoe@gmail.com</Text>
            <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity style={{ backgroundColor: 'rgba(183, 35, 0, 1)', padding: 15, borderRadius: 10, width: 100, marginRight: 10 }}>
                <Text style={{ color: '#ffffff', textAlign: 'center' }}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: appColors.primary, padding: 15, borderRadius: 10, width: 100, marginLeft: 10 }}>
                <Text style={{ color: '#ffffff', textAlign: 'center' }}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card.Content>
      </Card>
    </>
  );
};

export default CustomUserCard;
