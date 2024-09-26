import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function SelectBudget() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Select Budget",
      headerShown: true,
      headerTransparent: true,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Choose your budget for this lovely trip</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
