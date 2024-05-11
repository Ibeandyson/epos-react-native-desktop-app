import { View } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import useDialogState from '../hooks/useDialogState';

const CustomDialog = () => {
  const { show, setDialogShowState, message, title, btnText } = useDialogState();
  const hideDialog = () => setDialogShowState(false, '', '', '');

  return (
    <View>
      <Portal>
        <Dialog style={{ marginRight: 400, marginLeft: 400 }} visible={show} onDismiss={hideDialog}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{message}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>{btnText}</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default CustomDialog;
