import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[
        styles.container,
        selectedOption?.id === option?.id && styles.selected,
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{option.title}</Text>
        <Text style={styles.desc}>{option.desc}</Text>
      </View>

      <Image source={option.icon} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "lightgray",
  },
  textContainer: {
    width: "70%",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    fontSize: 14,
    color: "#808080",
  },
  icon: {
    width: 35,
    height: 35,
  },
  selected: {
    borderWidth: 2,
  },
});
