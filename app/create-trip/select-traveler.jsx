import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { SelectTravelerList } from "../../constants/Options";
import { CreateTripContext } from "../../context/CreateTripContext";
import OptionCard from "../../components/CreateTrip/OptionCard";
import CustomButton from "../../components/CustomButton";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const [selectedTravelers, setSelectedTravelers] = useState();
  const { TripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);
  useEffect(() => {
    setTripData({
      ...TripData,
      travelerCount: selectedTravelers?.people,
    });
  }, [selectedTravelers]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who goes with you?</Text>
      <View>
        <Text style={styles.subTitle}>Choose your travelers</Text>
      </View>

      <FlatList
        data={SelectTravelerList}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => setSelectedTravelers(item)}>
            <OptionCard option={item} selectedOption={selectedTravelers} />
          </Pressable>
        )}
      />
      <View style={{ marginBottom: 40 }}>
        <CustomButton
          color="black"
          setWidth="100%"
          handlePress={() => router.push("/create-trip/select-dates")}
        >
          Continue
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    marginTop: 10,
  },
});
