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
}

const CustomButton = ({ mode, text, onPress, icon, loading, bntType }: IProps) => {
  return (
    <>
      <Button
        disabled={loading}
        loading={loading}
        labelStyle={
          mode == 'outlined' || mode == 'text'
            ? {
                fontSize: 16,
                fontWeight: '700',
                color: bntType == 'primary' ? appColors.primary : appColors.secondary,
              }
            : {
                fontSize: 16,
                fontWeight: '700',
                color: bntType == 'primary' ? '#ffffff' : appColors.primary,
              }
        }
        style={
          mode == 'outlined' || mode == 'text'
            ? {
                borderRadius: 8,
                // backgroundColor: bntType == 'primary' ? appColors.primary : appColors.secondary,
                padding: 10,
              }
            : {
                borderRadius: 8,
                backgroundColor: bntType == 'primary' ? appColors.primary : appColors.secondary,
                padding: 10,
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
