import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchPlace() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Search Place",
      headerTransparent: true,
    });
  }, []);
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data.description);
          console.log(details?.geometry.location);
          console.log(details?.photos[0]?.photo_reference);
          console.log(details?.url);
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
});
