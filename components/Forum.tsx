import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/config/colors";
import ForumCard from "@/components/ForumCard";

const DATA = [
  {
    id: 2,
    title: "Santé",
    image: require("@/assets/img/forum/f1.png"),
    color: "#4c669f",
  },
  {
    id: 3,
    title: "Environnement",
    image: require("@/assets/img/forum/f2.png"),
    color: "#F9C906",
  },
  {
    id: 1,
    title: "Emploi",
    image: require("@/assets/img/categories/emploi.png"),
    color: "#F91717",
  },
];

export default function Forum() {
  return (
    <View style={{ gap: 10 }}>
      <View style={{ gap: -6, marginLeft: 20 }}>
        <Text style={{ color: colors.text, fontFamily: "Bold", fontSize: 20 }}>
          Forum
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
        data={DATA}
        style={{ paddingLeft: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <ForumCard
              title={item.title}
              id={item.id}
              image={item.image}
              color={item.color}
            />
          </View>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
