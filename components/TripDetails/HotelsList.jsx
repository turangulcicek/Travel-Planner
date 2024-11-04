import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import HotelCard from "./HotelCard";
export default function HotelsList({ hotelsInfo }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        gap: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginTop: 10,
        }}
      >
        <Fontisto name="hotel" size={24} color="black" />
        <Text style={{ fontFamily: "outfit-bold", fontSize: 18 }}>
          Hotel Recommendation
        </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={hotelsInfo}
        renderItem={({ item, index }) => <HotelCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
