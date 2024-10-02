import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

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
      {/* Destination */}
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Ionicons name="location" size={34} color="black" />
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
            Destination
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {TripData?.locationInfo?.name}
          </Text>
        </View>
      </View>
      {/* Travelers */}

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Ionicons name="person" size={34} color="black" />
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
            Travelers
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {TripData?.travelerCount}
          </Text>
        </View>
      </View>
      {/* Dates */}
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Ionicons name="calendar" size={34} color="black" />
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
            Selected Dates
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {moment(TripData?.startDate).format("MMM Do YYYY")} -{" "}
            {moment(TripData?.endDate).format("MMM Do YYYY")}(
            {TripData?.totalDays} days)
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Ionicons name="wallet" size={34} color="black" />
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
            Budget
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {TripData?.budget}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 40 }}>
        <CustomButton
          setWidth="100%"
          color="black"
          handlePress={() => router.replace("/create-trip/generate-trip")}
        >
          Plan my trip!
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
});
