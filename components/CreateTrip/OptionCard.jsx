import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function OptionCard({ option }) {
  return (
    <View>
      <Text>{option.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
