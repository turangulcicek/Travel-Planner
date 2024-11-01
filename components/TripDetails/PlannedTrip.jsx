import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function PlannedTrip({ details }) {
  const router = useRouter();

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 18, fontFamily: "outfit-bold" }}>
        🚞 Plan Details
      </Text>
      {Object.entries(details)
        .sort(([dayA], [dayB]) => {
          const lastCharA = dayA.slice(-1); // Get last character of dayA
          const lastCharB = dayB.slice(-1); // Get last character of dayB
          return lastCharA.localeCompare(lastCharB); // Sort by last character
        })
        .map(([day, details]) => (
          <View
            style={{
              backgroundColor: "lightblue",
              padding: 10,
              marginBottom: 5,
              borderRadius: 10,
            }}
            key={day} // Adding a key for unique identification in the list
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit-bold",
                marginBottom: 10,
                backgroundColor: "black",
                color: "white",
                width: "30%",
                padding: 5,
                borderRadius: 10,
              }}
            >
              📅 {day.charAt(0).toUpperCase() + day.slice(1)}
            </Text>
            <Image
              source={require("./../../assets/images/login.png")}
              style={{ width: "100%", height: 120 }}
            />
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 16,
                textAlign: "left",
                marginTop: 10,
              }}
            >
              {details.location}
            </Text>
            <Text style={{ color: "gray" }}>{details.details}</Text>
            {/* section under the details of the place */}
            <View>
              <Text style={styles.text}>
                🕰️ Time to Travel: {details.time_to_travel}
              </Text>
              <Text style={styles.text}>
                ⌚ Best Time to Travel: {details.time}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.text}>
                  🎫 Ticket Price: {details.ticket_pricing}
                </Text>
                <Pressable
                  onPress={() => router.push("/trip-details/location-details")}
                  style={{
                    backgroundColor: "black",
                    padding: 3,
                    borderRadius: 8,
                  }}
                >
                  <Ionicons name="navigate" size={20} color="white" />
                </Pressable>
              </View>
            </View>
            {/* end the section */}
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
});
