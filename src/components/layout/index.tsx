import { ReactNode } from 'react';
import { View, Dimensions, Text, ScrollView } from 'react-native';
import { appColors } from '../../global/constant/colors';
import { Avatar, Appbar } from 'react-native-paper';

interface IProps {
  headerContent?: ReactNode;
  mainContent?: ReactNode;
  footerContent?: ReactNode;
}

const Layout = ({ headerContent, mainContent, footerContent }: IProps) => {
  const windowHeight = Dimensions.get('screen').height;
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ backgroundColor: appColors.secondary, height: windowHeight, width: '50%', paddingLeft: 20, paddingRight: 20 }}></View>
      <View style={{ backgroundColor: '#efeded', height: windowHeight, width: '50%' }}>
        <Appbar.Header
          elevated={true}
          style={{
            backgroundColor: appColors.primary,
            paddingLeft: 20,
            paddingRight: 20,
            height: 80,
          }}
        >
          {headerContent}
          <View style={{ marginLeft: 'auto' }}>
            <Avatar.Image size={50} source={{ uri: 'http://andy.com' }} />
          </View>
        </Appbar.Header>
        <View style={{ width: '100%', paddingVertical: 20, paddingHorizontal: 20 }}>
          <ScrollView scrollEnabled={true}  >{mainContent}</ScrollView>
        </View>

        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingVertical: 20,
            paddingHorizontal: 20,
            height: '30%',
            backgroundColor: '#efeded',
          }}
        >
          {footerContent}
        </View>
      </View>
    </View>
  );
};

export default Layout;
