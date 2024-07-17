import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import colors from "@/config/colors";
import styles from "@/config/styles";
import PetitionCard from "./PetitionCard";

const DATA = [
  {
    id: 4,
    categ: "Education",
    title: "Titre de la pétiton",
    description: "Le Lorem Ipsum est simplement du faux texte",
    image: require("@/assets/img/categories/education.png"),
    stars: "285",
  },
  {
    id: 2,
    categ: "Bourses d’étude",
    title: "Bourses d’étude",
    description: "Le Lorem Ipsum est simplement du faux texte",
    image: require("@/assets/img/categories/bourses.png"),
    stars: "79",
  },
  {
    id: 3,
    categ: "Politique",
    title: "Titre de la pétiton",
    description: "Le Lorem Ipsum est simplement du faux texte",
    image: require("@/assets/img/categories/politique.png"),
    stars: "565",
  },

  {
    id: 1,
    categ: "Emploi",
    title: "Titre de la pétiton",
    description: "Le Lorem Ipsum est simplement du faux texte",
    image: require("@/assets/img/categories/emploi.png"),
    stars: "99",
  },
  {
    id: 5,
    categ: "Sécurité",
    title: "Titre de la pétiton",
    description: "Le Lorem Ipsum est simplement du faux texte",
    image: require("@/assets/img/categories/securite.png"),
    stars: "155",
  },
];

export default function Petitions() {
  return (
    <View style={{ gap: 10 }}>
      <View style={{ gap: -6, paddingLeft: 20 }}>
        <Text style={{ color: colors.text, fontFamily: "Bold", fontSize: 20 }}>
          Pétitions
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
            <PetitionCard
              title={item.title}
              categ={item.categ}
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
