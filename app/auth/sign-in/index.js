import { Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "./../../../constants/Colors.ts";
import CustomTextInput from "../../../components/CustomTextInput.jsx";
import CustomButton from "../../../components/CustomButton.jsx";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig.js";
export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const handleClick = () => {
    router.replace("auth/sign-up");
  };
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  const onSignin = () => {
    if (!email && !password) {
      ToastAndroid.show("Please fill all fields", ToastAndroid.BOTTOM);
      return;
    }
    if (!email.includes("@")) {
      ToastAndroid.show("Please enter a valid email", ToastAndroid.BOTTOM);
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.replace("/mytrip");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };
  return (
    <View style={styles.container}>
      <Pressable style={{ marginVertical: 10 }} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
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
          handleText={setEmail}
        />
        <Text>Password</Text>
        <CustomTextInput
          InputPlaceHolder="Enter Your Password"
          capitalize="null"
          secureText={true}
          handleText={setPassword}
        />
      </View>
      {/* Input Area ends */}
      {/* Button Area starts */}
      <View style={styles.buttonWrapper}>
        <CustomButton color="black" setWidth="100%" handlePress={onSignin}>
          Sign In
        </CustomButton>
        <CustomButton color="orange" setWidth="100%" handlePress={handleClick}>
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
    marginTop: 30,
  },
});
