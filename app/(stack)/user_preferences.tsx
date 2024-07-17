import {
  View,
  Text,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { authRoutes } from "@/config/routes";
import colors from "@/config/colors";
import { Checkbox } from "@/components/CheckBox";
import { StatusBar } from "expo-status-bar";

const userFavoris = [
  { title: "Santé", image: require("@/assets/img/fav/health.png") },
  { title: "Sécurité", image: require("@/assets/img/fav/security.png") },
  {
    title: "Infrastructure",
    image: require("@/assets/img/fav/infra.png"),
  },
  {
    title: "Education",
    image: require("@/assets/img/fav/education.png"),
  },
  {
    title: "Culture & Sports",
    image: require("@/assets/img/fav/culture.png"),
  },
  { title: "Technologie", image: require("@/assets/img/fav/tech.png") },
  {
    title: "PDL-145 territoires",
    image: require("@/assets/img/fav/health.png"),
  },
  { title: "Jeunesse", image: require("@/assets/img/fav/health.png") },
  {
    title: "Developpement rural",
    image: require("@/assets/img/fav/security.png"),
  },
  {
    title: "Imprimerie",
    image: require("@/assets/img/fav/infra.png"),
  },
  {
    title: "Défense",
    image: require("@/assets/img/fav/education.png"),
  },
  {
    title: "Physique",
    image: require("@/assets/img/fav/culture.png"),
  },
  { title: "Science", image: require("@/assets/img/fav/tech.png") },
  {
    title: "Bio-Technologie",
    image: require("@/assets/img/fav/health.png"),
  },
];
export default function UserPrefences() {
  const router = useRouter();

  const showAlertMsg = () =>
    Alert.alert("Avertissement", "Voulez-vous ignorer cette partie ?", [
      {
        text: "Annuler",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Ignorer",
        onPress: () => router.push(authRoutes.home),
      },
    ]);

  return (
    <SafeAreaView style={css.container}>
      <StatusBar
        translucent={false}
        style="light"
        backgroundColor={colors.primary}
      />
      <View>
        <View style={{ gap: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Bold",
                fontSize: 32,
                color: colors.primary,
              }}
            >
              Hey !
            </Text>
            <TouchableOpacity onPress={showAlertMsg}>
              <Text
                style={{
                  fontFamily: "Bold",
                  fontSize: 14,
                  color: colors.secondary,
                }}
              >
                Ignorer
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={{ fontFamily: "Regular" }}>
            Selectionne tes centres d’interets, on pourra mieux te connaitre
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={{
            marginTop: 30,
            gap: 28,
            justifyContent: "center",
            paddingBottom: 50,
          }}
        >
          <View style={{ gap: 10 }}>
            {userFavoris.map((item) => (
              <Checkbox
                key={item.title}
                title={item.title}
                image={item.image}
              />
            ))}
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 15,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() => router.push(authRoutes.home)}
          >
            <Text style={{ color: "white", fontFamily: "Bold", fontSize: 16 }}>
              Enregistrer
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    paddingTop: 30,
  },
});
