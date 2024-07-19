import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/Header";
import colors from "@/config/colors";
import Caroussel from "@/components/Caroussel";
import Province from "@/components/Province";
import Categories from "@/components/Categories";
import Forum from "@/components/Forum";
import Petitions from "@/components/Petions";
import HomeNewsTimeline from "@/components/Post/HomeNewsTimeline";
import { screenTitles } from "@/config/routes";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar style="dark" translucent={false} backgroundColor="white" />

      <Header screenTitle={screenTitles.home} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: -10, paddingHorizontal: 20 }}>
          <Text
            style={{ fontFamily: "Bold", fontSize: 32, color: colors.primary }}
          >
            Salut Sylvain,
          </Text>
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 16,
              color: colors.darkGray,
            }}
          >
            Que voulez-vous savoir ?
          </Text>
        </View>
        <Caroussel />

        <View style={{ gap: 15 }}>
          <Province />
          <Categories />
          <Forum />
          <Petitions />
        </View>
        <HomeNewsTimeline />
      </ScrollView>

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
}
