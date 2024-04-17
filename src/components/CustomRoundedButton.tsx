import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

interface IProps {
  value: any;
  isComponent?: boolean;
  onPress: () => void;
}
const CustomRoundedButton = ({ onPress, value, isComponent }: IProps) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: '#ffffff', width: 90, height: 90, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
      onPress={onPress}
    >
      {isComponent ? (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>{value}</View>
      ) : (
        <Text style={{ fontSize: 30, fontWeight: '700', color: '#000000', textAlign: 'center', width: '100%' }}>{value}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomRoundedButton;
