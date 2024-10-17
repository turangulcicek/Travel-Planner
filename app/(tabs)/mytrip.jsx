import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { useRouter } from "expo-router";
import { auth, db } from "./../../configs/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripList from "../../components/MyTrips/UserTripList";

export default function Mytrip() {
  const [userTrips, setuserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    user && GetMyTrips();
  }, [user]);
  const user = auth.currentUser;
  const GetMyTrips = async () => {
    setLoading(true);
    setuserTrips([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setuserTrips([...userTrips, doc.data()]);
    });
    setLoading(false);
  };

  const router = useRouter();
  const handleClick = () => {
    router.push("create-trip/search-place");
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Mytrips</Text>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={handleClick}
        >
          <Ionicons name="add-circle" size={40} color="black" />
        </Pressable>
      </View>
      {loading && <ActivityIndicator size={"large"} color={"black"} />}
      {userTrips?.length === 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrips} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 25,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "outfit-bold",
    fontSize: 30,
  },
  pressed: {
    opacity: 0.75,
  },
});
