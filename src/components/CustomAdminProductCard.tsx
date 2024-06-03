import { useRef, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import { Card } from 'react-native-paper';
import { Svg, Path } from 'react-native-svg';
import { appColors } from '../global/constant/colors';
import Barcode from 'react-native-barcode-svg';
import { ProductItemDataType } from '../global/constant/types';
import { WebView } from 'react-native-webview';
import {NativeModules} from 'react-native-windows';

const CustomAdminProductCard = (data: any) => {
  const webViewRef: any = useRef(null);
  const { RNPrintWindows } = NativeModules;

  const printContent = `
    <html>
      <head>
        <title>Print</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #333; }
        </style>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>This is a sample print content.</p>
      </body>
    </html>
  `;

  const handlePrint = () => {
    // webViewRef.current.injectJavaScript(`window.print();`);
    // RNPrintWindows.print(printContent);
  
  };

  return (
    <>
      <Card
        style={{
          backgroundColor: '#ffffff',
          height: 190,
          width: '32%',
          marginTop: 5,
          marginBottom: 5,
          marginRight: 5,
          marginLeft: 5,
        }}
        mode="elevated"
      >
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              {/* <View style={{ width: 80, height: 80, backgroundColor: 'rgba(217, 211, 222, 1)', borderRadius: 10 }}></View> */}
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: '700', fontSize: 17, color: appColors.primary }}>
                  {data?.data?.product_name.toUpperCase()}
                </Text>
                <Text style={{ fontWeight: '600', fontSize: 13, marginTop: 2, color: appColors.primary }}>
                  Price: {data?.data?.price}
                </Text>
                <Text style={{ fontWeight: '600', fontSize: 13, marginTop: 2, color: appColors.primary }}>
                  Stock Remaining : {data?.data?.stock_remaining}
                </Text>
              </View>
            </View>
            {/* <WebView originWhitelist={['*']} source={{ html: printContent }} ref={webViewRef} /> */}
            <Barcode value={data?.data?.barcode} format="ITF" maxWidth={200} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'rgba(37, 135, 47, 1)',
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
                width: '25%',
              }}
            >
              <Text style={{ textAlign: 'center', color: 'rgba(37, 135, 47, 1)', fontSize: 10, fontWeight: '700' }}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'rgba(183, 35, 0, 1)',
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
                width: '25%',
              }}
            >
              <Text style={{ textAlign: 'center', color: 'rgba(183, 35, 0, 1)', fontSize: 10, fontWeight: '700' }}>
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePrint}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: appColors.primary,
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
                width: '30%',
              }}
            >
              <Text style={{ textAlign: 'center', color: appColors.primary, fontSize: 10, fontWeight: '700' }}>
                PRINT BARCODE
              </Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </>
  );
};

export default CustomAdminProductCard;
