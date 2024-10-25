import React from "react";
import { StyleSheet, View, Text } from "react-native";

const FlightInfo = ({ flightData }) => {
  console.log(flightData);
  return (
    <View>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 18 }}>Flights</Text>
      <Text>{flightData?.price}</Text>
      <Text>{flightData?.booking_url}</Text>
      <Text>{flightData?.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FlightInfo;
