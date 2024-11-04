import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import PlaceCard from "./PlaceCard";

export default function PlannedTrip({ details }) {

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 18, fontFamily: "outfit-bold" }}>
        🚞 Plan Details
      </Text>
      {Object.entries(details)
        .sort(([dayA], [dayB]) => {
          const lastCharA = dayA.slice(-1); // Get last character of dayA
          const lastCharB = dayB.slice(-1); // Get last character of dayB
          return lastCharA.localeCompare(lastCharB); // Sort by last character
        })
        .map(([day, details]) => (
          <PlaceCard day={day} details={details} />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
});
