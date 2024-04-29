import { ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import { Svg, Path } from 'react-native-svg';

interface IProps {
  visible: boolean;
  hideModal: () => void;
  containerStyle?: any;
  marginRight: number;
  marginLeft: number;
  content: ReactNode;
  actionMode?: boolean;
}

const CustomModal = ({ visible, hideModal, containerStyle, marginLeft, marginRight, content, actionMode }: IProps) => {
  return (
    <Portal>
      <Modal
        style={{ marginRight: marginRight, marginLeft: marginLeft }}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={[{ backgroundColor: '#ffffff', padding: 20, borderRadius: 20 }, containerStyle]}
      >
        {!actionMode && (
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 30 }}>
            <TouchableOpacity onPress={hideModal}>
              <Svg width="49" height="48" viewBox="0 0 49 48" fill="none">
                <Path
                  d="M24.7827 4C13.7227 4 4.78271 12.94 4.78271 24C4.78271 35.06 13.7227 44 24.7827 44C35.8427 44 44.7827 35.06 44.7827 24C44.7827 12.94 35.8427 4 24.7827 4ZM24.7827 40C15.9627 40 8.78271 32.82 8.78271 24C8.78271 15.18 15.9627 8 24.7827 8C33.6027 8 40.7827 15.18 40.7827 24C40.7827 32.82 33.6027 40 24.7827 40ZM31.9627 14L24.7827 21.18L17.6027 14L14.7827 16.82L21.9627 24L14.7827 31.18L17.6027 34L24.7827 26.82L31.9627 34L34.7827 31.18L27.6027 24L34.7827 16.82L31.9627 14Z"
                  fill="#1E1E1E"
                />
              </Svg>
            </TouchableOpacity>
          </View>
        )}

        {content}
      </Modal>
    </Portal>
  );
};

export default CustomModal;
