import React from 'react';
import { Button } from 'react-native-paper';
import { appColors } from '../global/constant/colors';

interface IProps {
  mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  text: any;
  onPress: (val: any) => void;
  icon?: string;
  loading?: boolean;
  bntType: 'secondary' | 'primary';
  width?: any;
  fontSize?: number;
  padding?: number;
}

const CustomButton = ({ mode, text, onPress, icon, loading, bntType, width, fontSize, padding }: IProps) => {
  return (
    <>
      <Button
        disabled={loading}
        loading={loading}
        labelStyle={
          mode == 'outlined' || mode == 'text'
            ? {
                fontSize: fontSize ? fontSize : 16,
                fontWeight: '700',
                color: bntType == 'primary' ? appColors.primary : appColors.secondary,
              }
            : {
                fontSize: fontSize ? fontSize : 16,
                fontWeight: '700',
                color: bntType == 'primary' ? '#ffffff' : appColors.primary,
              }
        }
        style={
          mode == 'outlined' || mode == 'text'
            ? {
                borderRadius: 8,
                // backgroundColor: bntType == 'primary' ? appColors.primary : appColors.secondary,
                padding: padding ? padding : null,
                width: width ? width : '100%',
              }
            : {
                borderRadius: 8,
                backgroundColor: bntType == 'primary' ? appColors.primary : appColors.secondary,
                padding: padding ? padding : null,
                width: width ? width : '100%',
              }
        }
        icon={icon}
        mode={mode}
        onPress={onPress}
      >
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
