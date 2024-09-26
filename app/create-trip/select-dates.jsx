import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import CustomButton from "../../components/CustomButton";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { TripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Select Dates",
      headerTransparent: true,
    });
  }, []);
  const onDateChange = (date, type) => {
    // console.log(date, type);
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateSelect = () => {
    if (!startDate && !endDate) {
      alert("Please select dates");
    }
    const totalDays = endDate?.diff(startDate, "days");
    // console.log(totalDays);
    setTripData({
      ...TripData,
      startDate: startDate,
      endDate: endDate,
      totalDays: totalDays + 1,
    });
    router.replace("/create-trip/select-budget");
  };

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={onDateChange}
        allowRangeSelection={true}
        minDate={new Date()}
        maxRangeDuration={5}
        selectedRangeStyle={{
          backgroundColor: "silver",
        }}
      />
      <View style={{ marginTop: 50 }}>
        <CustomButton color="black" setWidth="80%" handlePress={onDateSelect}>
          Continue
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});
