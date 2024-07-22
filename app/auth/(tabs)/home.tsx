import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar style="dark" translucent={false} backgroundColor="white" />

      <Header sceenName={screenTitles.home} />

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
            Découvrez les actualités et les pétitions près de chez vous
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
