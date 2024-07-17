import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/config/colors";
import ProvinceCard from "@/components/ProvinceCard";

const DATA = [
  {
    id: 1,
    title: "Bas-Uele",
    image: require("@/assets/img/provinces/1.png"),
  },
  {
    id: 2,
    title: "Équateur",
    image: require("@/assets/img/provinces/2.png"),
  },
  {
    id: 3,
    title: "Haut-Katanga",
    image: require("@/assets/img/provinces/3.png"),
  },
  {
    id: 4,
    title: "Haut-Lomami",
    image: require("@/assets/img/provinces/4.png"),
  },
  {
    id: 5,
    title: "Haut-Uele",
    image: require("@/assets/img/provinces/5.png"),
  },
  {
    id: 6,
    title: "Ituri",
    image: require("@/assets/img/provinces/1.png"),
  },
  {
    id: 7,
    title: "Kasaï",
    image: require("@/assets/img/provinces/2.png"),
  },
  {
    id: 8,
    title: "Kasaï central",
    image: require("@/assets/img/provinces/3.png"),
  },
  {
    id: 9,
    title: "Kasaï oriental",
    image: require("@/assets/img/provinces/4.png"),
  },
  {
    id: 10,
    title: "Kinshasa",
    image: require("@/assets/img/provinces/5.png"),
  },
  {
    id: 11,
    title: "Kongo-Central",
    image: require("@/assets/img/provinces/1.png"),
  },
  {
    id: 12,
    title: "Kwango",
    image: require("@/assets/img/provinces/2.png"),
  },
  {
    id: 13,
    title: "Kwilu",
    image: require("@/assets/img/provinces/3.png"),
  },
  {
    id: 14,
    title: "Lomami",
    image: require("@/assets/img/provinces/4.png"),
  },
  {
    id: 15,
    title: "Lualaba",
    image: require("@/assets/img/provinces/5.png"),
  },
  {
    id: 16,
    title: "Mai-Ndombe",
    image: require("@/assets/img/provinces/1.png"),
  },
  {
    id: 17,
    title: "Maniema",
    image: require("@/assets/img/provinces/2.png"),
  },
  {
    id: 18,
    title: "Mongala",
    image: require("@/assets/img/provinces/3.png"),
  },
  {
    id: 19,
    title: "Nord-Kivu",
    image: require("@/assets/img/provinces/4.png"),
  },
  {
    id: 20,
    title: "Nord-Ubangi",
    image: require("@/assets/img/provinces/5.png"),
  },
  {
    id: 21,
    title: "Sankuru",
    image: require("@/assets/img/provinces/1.png"),
  },
  {
    id: 22,
    title: "Sud-Kivu",
    image: require("@/assets/img/provinces/2.png"),
  },
  {
    id: 23,
    title: "Sud-Ubangi",
    image: require("@/assets/img/provinces/3.png"),
  },
  {
    id: 24,
    title: "Tanganyika",
    image: require("@/assets/img/provinces/4.png"),
  },
  {
    id: 25,
    title: "Tshopo",
    image: require("@/assets/img/provinces/5.png"),
  },
  {
    id: 26,
    title: "Tshuapa",
    image: require("@/assets/img/provinces/1.png"),
  },
];

export default function Province() {
  return (
    <View style={{ gap: 10, marginTop: 12 }}>
      <View style={{ gap: -6, marginLeft: 20 }}>
        <Text style={{ color: colors.text, fontFamily: "Bold", fontSize: 20 }}>
          Provinces
        </Text>
        <Text
          style={{
            color: colors.lightGray,
            fontFamily: "Regular",
            fontSize: 12,
          }}
        >
          Le Lorem Ipsum est simplement du faux texte employé
        </Text>
      </View>
      <FlatList
        style={{ paddingLeft: 20 }}
        data={DATA}
        horizontal
        renderItem={({ item }) => (
          <ProvinceCard title={item.title} id={item.id} image={item.image} />
        )}
        // keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
