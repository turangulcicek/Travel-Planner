import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/CreateTripContext";
export default function ReviewTrip() {
  const navigation = useNavigation();
  const { TripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Review Trip",
      headerShown: true,
      headerTransparent: true,
    });
    console.log(TripData);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Before Planning Your Trip, please review your trip details
      </Text>
      {/* Trip Details */}
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Ionicons name="location" size={34} color="black" />
        <View style={{ flexDirection: "column", gap: 100 }}>
          <View style={{ marginLeft: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
              Destination
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {TripData?.locationInfo?.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
});
