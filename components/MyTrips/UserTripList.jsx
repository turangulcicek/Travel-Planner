import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import moment from "moment";
export default function UserTripList({ userTrips }) {
  // console.log(userTrips[0].tripData);
  let tripData = userTrips[0].tripData;
  let tripObject = JSON.parse(tripData);
  console.log(tripObject);

  return (
    <View>
      <Image
        source={require("./../../assets/images/cash.png")}
        style={{
          width: "100%",
          height: 300,
          objectFit: "contain",
          borderWidth: 1,
          marginTop: 20,
        }}
      />
      <View>
        <Text style={styles.text}>{tripObject.locationInfo.name}</Text>
        <Text style={styles.text}>
          {moment(tripObject?.startDate).format("DD MMM YYYY")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 18, fontWeight: "bold" },
});
