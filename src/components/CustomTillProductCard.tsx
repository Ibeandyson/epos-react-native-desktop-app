import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import CustomButton from './CustomButton';
import { appColors } from '../global/constant/colors';

const CustomTillProductCard = () => {
  return (
    <>
      <Card style={{ backgroundColor: '#ffffff', height: 80, marginTop: 5, marginBottom: 5 }} mode="elevated">
        <Card.Content >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'rgba(217, 211, 222, 1)', borderRadius: 10 }}></View>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: '700', fontSize: 14, color: appColors.primary }}>Four Cousins</Text>
              <Text style={{ fontWeight: '500', fontSize: 11,  color: appColors.primary }}>20 Available</Text>
            </View>
          </View>
          <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <CustomButton fontSize={12} onPress={() => {}} bntType="primary" mode="outlined" text="Add to Cart " />
          </View>

          </View>
         
        </Card.Content>
      </Card>
    </>
  );
};

export default CustomTillProductCard;
