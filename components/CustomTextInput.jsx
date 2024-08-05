import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function CustomTextInput({
  InputPlaceHolder,
  capitalize,
  secureText,
}) {
  return (
    <TextInput
      placeholder={InputPlaceHolder}
      style={styles.textInput}
      autoCapitalize={capitalize}
      secureTextEntry={secureText}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
});
