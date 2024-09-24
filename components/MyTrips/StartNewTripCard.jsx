import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "../CustomButton";
import { router, useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();
  const handleClick = () => {
    router.push("create-trip/search-place");
  };
  return (
    <View style={styles.container}>
      <Ionicons name="location" size={30} color="black" />
      <Text style={styles.text}>No trips planned yet</Text>
      <Text style={styles.text}>
        Looks like its time to plan a new travel experience! Get Started below
      </Text>
      <CustomButton color="black" handlePress={handleClick}>
        Start a new trip
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
