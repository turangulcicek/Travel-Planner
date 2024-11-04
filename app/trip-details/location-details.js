import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import MapView, { Marker } from "react-native-maps";

export default function LocationDetails() {
  const { tripdetail, name } = useLocalSearchParams();
  const geoCoordinates = tripdetail;

  // Split the string into an array using the comma as the separator
  const [latitude, longitude] = geoCoordinates
    .split(",")
    .map((coord) => parseFloat(coord.trim()));

  // useEffect(() => {
  //   console.log("Latitude:", latitude); // 52.5437
  //   console.log("Longitude:", longitude); // 13.4083
  // }, []);

  const geo_coordinates = {
    latitude: latitude,
    longitude: longitude,
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...geo_coordinates,
          latitudeDelta: 0.01, // Zoom level
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={geo_coordinates}
          title={name}
          description={`${latitude}, ${longitude} `}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
