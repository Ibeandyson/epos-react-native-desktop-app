import { View, TouchableOpacity, Image } from 'react-native';

const CustomNavButton = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <TouchableOpacity>
        <Image style={{height: 150, width: 150 }} source={require('../assets/keypad.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={{height: 150, width: 150 }} source={require('../assets/productBtn.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={{height: 150, width: 150 }} source={require('../assets/refundBtn.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomNavButton;
