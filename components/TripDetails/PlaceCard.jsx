import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import React from "react";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

export default function PlaceCard({ day, details }) {
  const router = useRouter();

  const [photoRef, setPhotoRef] = useState();
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);
  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(details.location);
    const photo_ref = result?.results[0]?.photos[0]?.photo_reference;
    setPhotoRef(photo_ref);
    // console.log(photoRef);
  };

  return (
    <View
      style={{
        backgroundColor: "silver",
        padding: 5,
        marginBottom: 5,
        borderRadius: 10,
      }}
      key={day} // Adding a key for unique identification in the list
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: "outfit-bold",
          marginBottom: 10,
          backgroundColor: "black",
          color: "white",
          width: "30%",
          padding: 10,
          borderRadius: 10,
        }}
      >
        📅 {day.charAt(0).toUpperCase() + day.slice(1)}
      </Text>
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{ width: "100%", height: 150, borderRadius: 10 }}
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
      {/* section under the details of the place */}
      <View>
        <Text style={styles.text}>
          🕰️ Time to Travel: {details.time_to_travel}
        </Text>
        <Text style={styles.text}>⌚ Best Time to Travel: {details.time}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>
            🎫 Ticket Price: {details.ticket_pricing}
          </Text>
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/trip-details/location-details",
                params: {
                  tripdetail: details.geo_coordinates,
                  name: details.location,
                },
              })
            }
            style={{
              backgroundColor: "black",
              padding: 3,
              borderRadius: 8,
            }}
          >
            <Ionicons name="navigate" size={20} color="white" />
          </Pressable>
        </View>
      </View>
      {/* end the section */}
    </View>
  );
}
const styles = StyleSheet.create({});
