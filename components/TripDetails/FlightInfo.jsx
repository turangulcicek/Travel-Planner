import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const FlightInfo = ({ flightData }) => {
  return (
    <View
      style={{
        backgroundColor: "lightgray",
        padding: 5,
        borderRadius: 10,
        gap: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="airplane-outline" size={24} color="black" />
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 18,
              alignItems: "center",
            }}
          >
            Flights
          </Text>
        </View>

        <Pressable
          style={{
            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
            width: "30%",
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Book Here</Text>
        </Pressable>
      </View>
      <View></View>
      <Text style={{ fontWeight: "600", color: "black" }}>
        Price: {flightData?.price}
      </Text>

      {/* <Text>Flight Details:{flightData?.details}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default FlightInfo;