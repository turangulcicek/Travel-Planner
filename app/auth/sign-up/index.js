import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an Account</Text>
      <View style={styles.inputArea}>
        {/* Full name */}
        <Text>Full Name</Text>
        <CustomTextInput
          InputPlaceHolder="Enter Your Full Name"
          capitalize="none"
          secureText={false}
        />
        {/* email */}
        <Text>Email</Text>
        <CustomTextInput
          InputPlaceHolder="Enter Your Email"
          capitalize="none"
          secureText={false}
        />
        {/* password */}
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
          Create Account
        </CustomButton>
        <CustomButton
          color="orange"
          setWidth="100%"
          handlePress={() => router.replace("auth/sign-in")}
        >
          Sign In
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  text: {
    fontSize: 30,
    fontFamily: "outfit-bold",
  },
  inputArea: {
    flexDirection: "column",
    gap: 5,
    marginTop: 40,
  },
  buttonWrapper: {
    gap: 10,
    marginTop: 30,
  },
});
