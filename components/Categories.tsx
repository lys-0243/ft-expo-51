import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import colors from "@/config/colors";
import CategoryCard from "./CategoryCard";
import styles from "@/config/styles";

const DATA = [
  {
    id: 1,
    title: "Emploi",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition",
    image: require("@/assets/img/categories/emploi.png"),
    stars: "99",
  },
  {
    id: 2,
    title: "Bourses d’étude",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition",
    image: require("@/assets/img/categories/bourses.png"),
    stars: "79",
  },
  {
    id: 3,
    title: "Politique",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition",
    image: require("@/assets/img/categories/politique.png"),
    stars: "565",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition",
    image: require("@/assets/img/categories/education.png"),
    stars: "285",
  },
  {
    id: 5,
    title: "Sécurité",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition",
    image: require("@/assets/img/categories/securite.png"),
    stars: "155",
  },
];

export default function Categories() {
  return (
    <View style={{ gap: 10 }}>
      <View style={{ gap: -6, paddingLeft: 20 }}>
        <Text style={{ color: colors.text, fontFamily: "Bold", fontSize: 20 }}>
          Catégories
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
        renderItem={({ item }) => (
          <View style={{ ...styles.shadow, paddingBottom: 15 }}>
            <CategoryCard
              title={item.title}
              description={item.description}
              id={item.id}
              image={item.image}
              stars={item.stars}
            />
          </View>
        )}
        // keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
