import { StyleSheet, TextInput } from "react-native";
import React from "react";

export default function CustomTextInput({
  InputPlaceHolder,
  capitalize,
  secureText,
  handleText,
}) {
  return (
    <TextInput
      placeholder={InputPlaceHolder}
      style={styles.textInput}
      autoCapitalize={capitalize}
      secureTextEntry={secureText}
      onChangeText={(text) => handleText(text)}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    paddingVertical: 15,
    textAlign: "left",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
