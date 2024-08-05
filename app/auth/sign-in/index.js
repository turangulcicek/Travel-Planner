import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "./../../../constants/Colors.ts";
import CustomTextInput from "../../../components/CustomTextInput.jsx";
import CustomButton from "../../../components/CustomButton.jsx";
export default function SignIn() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.text}>Let's Sign You In</Text>
      <Text style={styles.text}>Welcome Back</Text>
      {/* Input Area */}
      <View style={styles.inputArea}>
        <Text>Email</Text>
        <CustomTextInput
          InputPlaceHolder="Enter Your Email"
          capitalize="none"
          secureText={false}
        />
        <Text>Password</Text>
        <CustomTextInput
          InputPlaceHolder="Enter Your Password"
          capitalize="null"
          secureText={true}
        />
      </View>
      {/* Input Area ends */}
      {/* Button Area starts */}
      <View style={styles.buttonWrapper}>
        <CustomButton color="black" setWidth="100%">
          Sign In
        </CustomButton>
        <CustomButton color="orange" setWidth="100%">
          Create an Account
        </CustomButton>
      </View>
      {/* Button Area ends */}
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
  inputArea: {
    flexDirection: "column",
    gap: 5,
    marginTop: 40,
  },
  buttonWrapper: {
    gap: 10,
    marginTop: 10,
  },
});
