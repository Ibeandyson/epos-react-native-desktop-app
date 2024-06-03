import { View, Image, Text } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import React from 'react';
import useDialogState from '../hooks/useDialogState';

const CustomSpinner = () => {
  const { preLoaderState } = useDialogState();
  console.log('lofing==>', preLoaderState);
  return (
    <Portal>
      <Modal visible={preLoaderState}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ height: 200, width: 200 }} source={require('../assets/spinner.gif')} />
        </View>
      </Modal>
    </Portal>
  );
};

export default CustomSpinner;
