import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import moment from "moment";
import CustomButton from "../CustomButton";
import UserTripCard from "./UserTripCard";
export default function UserTripList({ userTrips }) {
  let tripData = userTrips[0].tripData;
  let tripObject = JSON.parse(tripData);
  // console.log(tripObject);
  // console.log(tripObject.locationInfo.photo_reference);

  return (
    <View>
      {tripObject?.locationInfo?.photo_reference ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              tripObject?.locationInfo?.photo_reference +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            borderWidth: 1,
            marginTop: 20,
            borderRadius: 10,
          }}
        />
      ) : (
        <Image
          source={require("./../../assets/images/cash.png")}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            marginTop: 20,
            borderRadius: 10,
          }}
        />
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text style={styles.text}>{tripObject.locationInfo.name}</Text>
        <Text style={styles.text}>
          {moment(tripObject?.startDate).format("DD MMM YYYY")}
        </Text>
        <Text style={styles.text}>{tripObject?.travelerCount}</Text>
      </View>
      <CustomButton color="gray" setWidth="100%">
        See Your Plan
      </CustomButton>
      {userTrips.map((item, index) => (
        <UserTripCard trip={item} key={index} tripObject={tripObject} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 18, fontWeight: "bold" },
});
