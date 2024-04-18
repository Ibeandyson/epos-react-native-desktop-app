import { View } from 'react-native';
import CustomRoundedButton from './CustomRoundedButton';
import { CancelKey, DotKey } from './svg';
import { Text } from 'react-native-paper';
import useCustomKeyBoard from '../hooks/useCustomKeyBoard';

const CustomNumberKeyboard = () => {
  const { setKeyValue, customKeyBoardState, deleteFromKey } = useCustomKeyBoard();
  return (
    <>
      <View style={{ marginTop: 50 }}/>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <CustomRoundedButton value={1} onPress={() => setKeyValue(customKeyBoardState.concat('', '1'))} />
        <CustomRoundedButton value={2} onPress={() => setKeyValue(customKeyBoardState.concat('', '2'))} />
        <CustomRoundedButton value={3} onPress={() => setKeyValue(customKeyBoardState.concat('', '3'))} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        <CustomRoundedButton value={4} onPress={() => setKeyValue(customKeyBoardState.concat('', '4'))} />
        <CustomRoundedButton value={5} onPress={() => setKeyValue(customKeyBoardState.concat('', '5'))} />
        <CustomRoundedButton value={6} onPress={() => setKeyValue(customKeyBoardState.concat('', '6'))} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        <CustomRoundedButton value={7} onPress={() => setKeyValue(customKeyBoardState.concat('', '7'))} />
        <CustomRoundedButton value={8} onPress={() => setKeyValue(customKeyBoardState.concat('', '8'))} />
        <CustomRoundedButton value={9} onPress={() => setKeyValue(customKeyBoardState.concat('', '9'))} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        <CustomRoundedButton isComponent={true} value={<DotKey />} onPress={() => setKeyValue(customKeyBoardState.concat('', '.'))} />
        <CustomRoundedButton value={0} onPress={() => setKeyValue(customKeyBoardState.concat('', '0'))} />
        <CustomRoundedButton isComponent={true} value={<CancelKey />} onPress={deleteFromKey} />
      </View>
    </>
  );
};

export default CustomNumberKeyboard;
