import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModal";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";

export default function GenerateTrip() {
  const { TripData, setTripData } = useContext(CreateTripContext);
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;
  const router = useRouter();
  useEffect(() => {
    GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setIsLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      TripData?.locationInfo?.name
    )
      .replace("{totalDays}", TripData?.totalDays)
      .replace("{totalNight}", TripData?.totalDays - 1)
      .replace("{traveler}", TripData?.travelerCount)
      .replace("{budget}", TripData?.budget)
      .replace("{totalDays}", TripData?.totalDays)
      .replace("{totalNight}", TripData?.totalDays - 1);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    const tripResponse = JSON.parse(result?.response?.text());

    setIsLoading(false);
    // firebase e verileri gönderiyoruz
    // id vermek için Date.now kullanıldı
    const tripId = Date.now().toString();
    const firebaseResult = await setDoc(doc(db, "UserTrips", tripId), {
      userEmail: user?.email,
      tripPLan: tripResponse /* AI result */,
      tripData: JSON.stringify(TripData),
      /* User selection data */ docID: tripId,
    });
    router.push("(tabs)/mytrip");
  };

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
