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
        renderItem={({ item, index }) => (
          <View
            style={{
              marginRight: 10,
              borderRadius: 10,
              padding: 5,
              backgroundColor: "white",
              borderWidth: 1,
            }}
          >
            <Image
              source={require("../../assets/images/login.png")}
              style={{ width: 180, height: 120, objectFit: "contain" }}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "outfit-bold",

                  fontSize: 15,
                }}
              >
                {item.name}
              </Text>
              <Text>⭐{item.rating}</Text>
              <Text>💲{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
