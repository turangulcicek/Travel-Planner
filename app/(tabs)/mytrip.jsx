import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { useRouter } from "expo-router";
export default function Mytrip() {
  const [userTrips, setuserTrips] = useState([]);
  const router = useRouter();
  const handleClick = () => {
    router.push("create-trip/search-place");
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Mytrips</Text>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={handleClick}
        >
          <Ionicons name="add-circle" size={40} color="black" />
        </Pressable>
      </View>
      {userTrips?.length === 0 ? <StartNewTripCard /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 25,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "outfit-bold",
    fontSize: 30,
  },
  pressed: {
    opacity: 0.75,
  },
});
