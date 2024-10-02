import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "expo-router";
import { CreateTripContext } from "../../context/CreateTripContext";
export default function GenerateTrip() {
  const navigation = useNavigation();
  const { TripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please wait! we are generating your trip</Text>
      <Image
        source={require("../../assets/images/airplane.gif")}
        style={{
          width: "80%",
          height: "50%",
          objectFit: "contain",
          alignSelf: "center",
        }}
      />
      <Text style={styles.title}>Please Do not Go Back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 75,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
