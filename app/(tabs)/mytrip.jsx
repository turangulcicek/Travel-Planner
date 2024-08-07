import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
export default function Mytrip() {
  const [userTrips, setuserTrips] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Mytrips</Text>
        <Ionicons name="add-circle" size={40} color="black" />
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
});
