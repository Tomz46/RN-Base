import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils/colors';

const Input = ({placeholder}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.default}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: colors.default,
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.default,
  },
});
