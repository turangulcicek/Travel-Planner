import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";

export default function PlannedTrip({ details }) {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 18, fontFamily: "outfit-bold" }}>
        🚞 Plan Details
      </Text>
      {Object.entries(details).map(([day, details]) => (
        <View
          style={{
            borderWidth: 1,
            padding: 5,
            marginBottom: 5,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "outfit-bold",
              marginBottom: 10,
              backgroundColor: "black",
              color: "white",
              width: "30%",
              padding: 5,
              borderRadius: 10,
            }}
          >
            📅 {day.charAt(0).toUpperCase() + day.slice(1)}
          </Text>
          <Image
            source={require("./../../assets/images/login.png")}
            style={{ width: "100%", height: 120 }}
          />
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 16,
              textAlign: "left",
              marginTop: 10,
            }}
          >
            {details.location}
          </Text>
          <Text style={{ color: "gray" }}>{details.details}</Text>
          <Text style={styles.text}>
            🕰️ Time to Travel:{details.time_to_travel}
          </Text>
          <Text style={styles.text}>⌚ Time: {details.time}</Text>
          <Text style={styles.text}>
            🎫Ticket Price:{details.ticket_pricing}
          </Text>
        </View>
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
