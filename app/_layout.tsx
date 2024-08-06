import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "roboto-regular": require("./../assets/fonts/RobotoCondensed-Regular.ttf"),
    "roboto-medium": require("./../assets/fonts/RobotoCondensed-Medium.ttf"),
    "roboto-bold": require("./../assets/fonts/RobotoCondensed-Bold.ttf"),
  });
  return (
    <Stack /* screenOptions={{ headerStyle: { backgroundColor: "white" } }} */>
      {/* <Stack.Screen
        name="index"
        options={{ title: "Plan your travel", headerShown: false }}
      /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
