import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "./../../../constants/Colors.ts";
export default function SignIn() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's Sign You In</Text>
      <Text style={styles.text}>Welcome Back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: "outfit",
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    flex: 1,
    backgroundColor: Colors.white,
  },
});
