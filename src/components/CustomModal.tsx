import { View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

interface IProps {
  visible: boolean;
  hideModal: () => void;
  containerStyle?: any;
  marginRight: number
  marginLeft: number
}

const CustomModal = ({ visible, hideModal, containerStyle, marginLeft, marginRight }: IProps) => {
  return (
    <Portal>
      <Modal
        style={{ marginRight: marginRight, marginLeft: marginLeft, borderRadius: 50,}}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={[{ backgroundColor: '#ffffff', padding: 20 }, containerStyle]}
      >
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>
  );
};

export default CustomModal;
