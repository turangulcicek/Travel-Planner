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
      onPress={handlePress}
      style={({ pressed }) => [styles.buttonWrapper, pressed && styles.pressed]}
    >
      <View
        style={{
          backgroundColor: color,
          width: setWidth,
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
