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
      <Text style={styles.title}>Choose your budget</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: 700,
    marginTop: 20,
    marginBottom: 20,
  },
});
