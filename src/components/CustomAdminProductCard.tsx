import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Svg, Path } from 'react-native-svg';
import { appColors } from '../global/constant/colors';
import { LineBarcode } from './svg';
import bwipjs from 'bwip-js';

const CustomAdminProductCard = () => {
  
  let svg = bwipjs.toSVG({
    bcid: 'code128', // Barcode type
    text: '0123456789', // Text to encode
    height: 12, // Bar height, in millimeters
    includetext: true, // Show human-readable text
    textxalign: 'center', // Always good to set this
    textcolor: 'ff0000', // Red text
  });

  return (
    <>
      <Card style={{ backgroundColor: '#ffffff', height: 220, width: 500, marginTop: 5, marginBottom: 5 }} mode="elevated">
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 80, height: 80, backgroundColor: 'rgba(217, 211, 222, 1)', borderRadius: 10 }}></View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: '700', fontSize: 17, color: appColors.primary }}>Four Cousins</Text>
                <Text style={{ fontWeight: '600', fontSize: 13, marginTop: 2, color: appColors.primary }}>Price : £ 20,000.00</Text>
                <Text style={{ fontWeight: '600', fontSize: 13, marginTop: 2, color: appColors.primary }}>Stock Remaining : 20</Text>
              </View>
            </View>
            {/* <svg viewBox="0 0 242 200" xmlns="http://www.w3.org/2000/svg"></svg> */}
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'rgba(37, 135, 47, 1)',
                borderWidth: 2,
                padding: 15,
                borderRadius: 10,
                width: '30%',
              }}
            >
              <Text style={{ textAlign: 'center', color: 'rgba(37, 135, 47, 1)' }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'rgba(183, 35, 0, 1)',
                borderWidth: 2,
                padding: 15,
                borderRadius: 10,
                width: '30%',
              }}
            >
              <Text style={{ textAlign: 'center', color: 'rgba(183, 35, 0, 1)' }}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: appColors.primary,
                borderWidth: 2,
                padding: 15,
                borderRadius: 10,
                width: '30%',
              }}
            >
              <Text style={{ textAlign: 'center', color: appColors.primary }}>PRINT BARCODE</Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </>
  );
};

export default CustomAdminProductCard;
