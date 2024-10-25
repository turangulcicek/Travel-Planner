import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import moment from "moment";
export default function TripDetails() {
  const navigation = useNavigation();
  const [tripdetails, setTripDetails] = useState();
  const { trip } = useLocalSearchParams();
  const formatData = (data) => {
    return JSON.parse(data);
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    setTripDetails(JSON.parse(trip));

    console.log(tripdetails);
  }, []);

  return (
    tripdetails && (
      <View>
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              formatData(tripdetails?.tripData).locationInfo?.photo_reference +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{
            width: "100%",
            height: 300,
          }}
        />
        <View
          style={{
            padding: 15,
            backgroundColor: "white",
            height: "100%",
            marginTop: -20,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
            {formatData(tripdetails.tripData).locationInfo?.name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>
              From {moment(tripdetails?.startDate).format("DD MMM YYYY")}
            </Text>
            <Text style={styles.text}>
              To {moment(tripdetails?.endDate).format("DD MMM YYYY")}
            </Text>
          </View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({});
