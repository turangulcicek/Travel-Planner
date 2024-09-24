import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "./../../../configs/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  const onCreateAccount = () => {
    if (!password || !email || !fullName) {
      ToastAndroid.show("please fill all sections", ToastAndroid.BOTTOM);
      return;
    }
    if (!email.includes("@")) {
      ToastAndroid.show("Please enter a valid email", ToastAndroid.TOP);
      return;
    }
    if (password.length < 6) {
      ToastAndroid.show(
        "Password must be at least 6 characters",
        ToastAndroid.BOTTOM
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        router.replace("/mytrip");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View style={styles.container}>
      <Pressable style={{ marginVertical: 10 }} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      <Text style={styles.text}>Create an Account</Text>
      <View style={styles.inputArea}>
        {/* Full name */}
        <Text>Full Name</Text>
        <CustomTextInput
          InputPlaceHolder="Enter Your Full Name"
          capitalize="none"
          secureText={false}
          handleText={(value) => setFullName(value.trim())}
        />
        {/* email */}
        <Text>Email</Text>
        <CustomTextInput
          InputPlaceHolder="Enter Your Email"
          capitalize="none"
          secureText={false}
          handleText={(value) => setEmail(value.trim())}
        />
        {/* password */}
        <Text>Password</Text>
        <CustomTextInput
          InputPlaceHolder="Enter Your Password"
          capitalize="null"
          secureText={true}
          handleText={(value) => setPassword(value.trim())}
        />
      </View>
      {/* Input Area ends */}
      {/* Button Area starts */}
      <View style={styles.buttonWrapper}>
        <CustomButton
          color="black"
          setWidth="100%"
          handlePress={onCreateAccount}
        >
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
