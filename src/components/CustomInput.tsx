import React from 'react';
// import { TextInput } from 'react-native-paper';
import { TextInput, StyleSheet, Text, Keyboard } from 'react-native';

interface IProps {
  value: string | undefined;
  label?: string;
  placeholder: string;
  keyboardType?: 'numeric' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url';
  inputMode: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url';
  onChangeText: (val: any) => void;
}

const CustomInput = ({ value, label, placeholder, keyboardType, inputMode, onChangeText }: IProps) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        inputMode={inputMode}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 0.3,
    padding: 13,
    borderColor: '#271E00',
    borderRadius: 10,
    color: '#3D3D3D',
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: '#efeded'
  },
  label: {
    color: '#271E00',
    fontSize: 17,
    fontWeight: '400',
    height: 24,
    lineHeight: 24,
    marginBottom: 5,
  },
});

export default CustomInput;
