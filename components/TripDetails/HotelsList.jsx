import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
export default function HotelsList({ hotelsInfo }) {
  console.log(hotelsInfo);
  return (
    <View
      style={{
        backgroundColor: "lightblue",
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
        renderItem={({ item, index }) => (
          <View style={{ borderWidth: 1 }}>
            <Image
              source={require("../../assets/images/couple.png")}
              style={{ width: 50, height: 50, objectFit: "contain" }}
            />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
