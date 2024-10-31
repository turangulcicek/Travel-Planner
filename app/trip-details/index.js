import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelsList from "../../components/TripDetails/HotelsList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

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
  }, []);

  return (
    tripdetails && (
      <ScrollView>
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
            height: 150,
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
            gap: 10,
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
          <Text style={styles.text}>
            Travelers:{formatData(tripdetails?.tripData).travelerCount}
          </Text>
          {/* Flight ınfo  */}
          <FlightInfo flightData={tripdetails?.tripPLan?.flight} />
          {/* Hotels list */}

          <HotelsList hotelsInfo={tripdetails?.tripPLan?.hotels} />
          {/* Trip Day Planner */}
          <PlannedTrip details={tripdetails?.tripPLan?.itinerary} />
        </View>
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "outfit",
    color: "gray",
  },
});
