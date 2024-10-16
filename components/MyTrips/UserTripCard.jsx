import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import moment from "moment";

export default function UserTripCard({ trip, tripObject }) {
  // console.log(tripObject);

  return (
    <View
      style={{
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            tripObject?.locationInfo?.photo_reference +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      />
      <View>
        <Text style={styles.text}>
          Destination:{tripObject?.locationInfo?.name}
        </Text>
        <Text style={styles.text}>
          Start Date:
          {moment(tripObject?.startDate).format("DD MMM YYYY")}
        </Text>
        <Text style={styles.text}>Traveler:{tripObject.travelerCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "outfit-medium",
    fontSize: 12,
  },
});
