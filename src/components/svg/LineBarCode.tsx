import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Line } from 'react-native-svg';

const LineBarcode = () => {
  // Example barcode data (0 for white, 1 for black)
  const barcodeData = [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];

  // Calculate barcode line positions and heights
  const lineWidth = 2; // Width of each line
  const barcodeHeight = 100; // Height of the barcode
  const lineHeight = barcodeHeight / barcodeData.length; // Height of each line

  return (
    <View style={styles.container}>
      <Svg width="200" height="100">
        <Line x1="0" y1="50" x2="20" y2="50" stroke="white" strokeWidth="2"  />
        <Line x1="40" y1="50" x2="60" y2="50" stroke="white" strokeWidth="2" />
        <Line x1="80" y1="50" x2="100" y2="50" stroke="white" strokeWidth="2" />
        <Line x1="120" y1="50" x2="140" y2="50" stroke="black" strokeWidth="2"  />
        <Line x1="160" y1="50" x2="180" y2="50" stroke="black" strokeWidth="2" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});

export default LineBarcode;
