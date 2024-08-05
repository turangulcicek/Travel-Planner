import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import CustomButton from "./CustomButton";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const handleClick = () => {
    router.push("auth/sign-in");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          source={require("./../assets/images/login.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.innercontainer}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.text}>
          Discover your adventure. Personalized itineraries at your fingertips.
          Travel smarter with AI-driven insights
        </Text>
        <CustomButton handlePress={handleClick} color="black" setWidth="75%">
          Get Started
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagecontainer: {
    width: "100%",
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  innercontainer: {
    backgroundColor: "white",
    height: "40%",
    borderTopLeftRadius: 40,
    paddingVertical: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    padding: 14,

    color: Colors.gray,
  },
});
