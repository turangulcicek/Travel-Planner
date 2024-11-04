import { StyleSheet, Text, View, Image } from "react-native";
import { GetPhotoRef } from "../../services/GooglePlaceApi";
import { useEffect, useState } from "react";

export default function HotelCard({ item }) {
  const [photoRef, setPhotoRef] = useState();
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);
  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(item.name);
    const photo_ref = result?.results[0]?.photos[0]?.photo_reference;
    setPhotoRef(photo_ref);
    // console.log(photoRef);
  };
  return (
    <View
      style={{
        marginRight: 10,
        borderRadius: 10,

        backgroundColor: "silver",
        paddingBottom: 5,
      }}
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{
          width: "100%",
          height: 120,
          objectFit: "cover",
          borderRadius: 10,
        }}
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
  );
}

const styles = StyleSheet.create({});
