import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { SelectTravelerList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";

export default function SelectTraveler() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
    console.log(SelectTravelerList);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who goes with you?</Text>
      <View>
        <Text style={styles.subTitle}>Choose your travelers</Text>
      </View>

      <FlatList
        data={SelectTravelerList}
        renderItem={({ item }) => <OptionCard option={item} />}
      />
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