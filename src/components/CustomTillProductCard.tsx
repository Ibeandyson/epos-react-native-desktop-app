import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import CustomButton from './CustomButton';
import { Svg, Path } from 'react-native-svg';

const CustomTillProductCard = () => {
  return (
    <>
      <Card style={{ backgroundColor: '#ffffff', height: 100 }} mode="elevated">
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{flexDirection: "row", justifyContent: }}>
            <View style={{ width: 60, height: 66, backgroundColor: 'rgba(217, 211, 222, 1)', borderRadius: 10 }}></View>
            <View style={{marginLeft: 20}}>
            <Text>Four Cousins</Text>
            </View>
          </View>
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <CustomButton onPress={() => {}} bntType="primary" mode="outlined" text="Add to Cart " />
          </View>
        </Card.Content>
      </Card>
    </>
  );
};

export default CustomTillProductCard;
