import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModal";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";

export default function GenerateTrip() {
  const { TripData, setTripData } = useContext(CreateTripContext);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    TripData && GenerateAiTrip();
  }, [TripData]);

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
    // const result = await chatSession.sendMessage(FINAL_PROMPT);
    // console.log(result.response.text());
    setIsLoading(false);
    // router.push("(tabs)/mytrip");
    // firebase e verileri gönderiyoruz
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
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
