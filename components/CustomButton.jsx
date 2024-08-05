import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CustomButton({
  children,
  handlePress,
  color,
  setWidth,
}) {
  return (
    <Pressable
      android_ripple={{ color: "black", borderless: true }}
      onPress={handlePress}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <View
        style={{
          backgroundColor: color,
          width: setWidth,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
