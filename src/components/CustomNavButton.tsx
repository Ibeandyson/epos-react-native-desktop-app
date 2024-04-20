import { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import useCustomKeyBoard from '../hooks/useCustomKeyBoard';

interface IProps {
  goToRefundScreen?: () => void;
  goToCartScreen?: any;
  setRefundOptionModal?: () => void
}

const CustomNavButton = ({ goToRefundScreen, goToCartScreen, setRefundOptionModal }: IProps) => {
  const { setShowKeyBoard } = useCustomKeyBoard();

  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity
          style={{ borderRadius: 20 }}
          onPress={() => {
            setShowKeyBoard(true), goToCartScreen();
          }}
        >
          <Image style={{ height: 150, width: 150 }} source={require('../assets/keypad.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderRadius: 20 }}
          onPress={() => {
            setShowKeyBoard(false), goToCartScreen();
          }}
        >
          <Image style={{ height: 150, width: 150 }} source={require('../assets/productBtn.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 20 }} onPress={setRefundOptionModal}>
          <Image style={{ height: 150, width: 150 }} source={require('../assets/refundBtn.png')} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CustomNavButton;
