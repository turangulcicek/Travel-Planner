import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { getMonth } from "date-fns";
import CalendarPicker from "react-native-calendar-picker";

export default function SelectDates() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Select Dates",
      headerTransparent: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={this.onDateChange}
        allowRangeSelection={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});
