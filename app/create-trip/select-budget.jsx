import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState, useContext } from "react";
import { selectBudgetOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";
import CustomButton from "../../components/CustomButton";

export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState();
  const { TripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Select Budget",
      headerShown: true,
      headerTransparent: true,
    });
  }, []);
  useEffect(() => {
    selectedOption &&
      setTripData({ ...TripData, budget: selectedOption?.title });
  }, [selectedOption]);

  const onClickContinue = () => {
    if (!selectedOption) {
      alert("Please select an option");
      return;
    } else {
      router.push("/create-trip/review-trip");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Choose your budget for this lovely trip</Text>
        <FlatList
          data={selectBudgetOptions}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => setSelectedOption(item)}>
              <OptionCard option={item} selectedOption={selectedOption} />
            </Pressable>
          )}
        />
        <View style={{ marginTop: 30 }}>
          <CustomButton
            color="black"
            setWidth="100%"
            handlePress={onClickContinue}
          >
            Continue
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    marginTop: 50,
  },
});
