import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import colors from "@/config/colors";
import Header from "@/components/Header";
import { screenTitles } from "@/config/routes";

export default function CommunityScreen() {
  return (
    <SafeAreaView style={{}}>
      <Header sceenName={screenTitles.community} />

      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={colors.primary}
      />
      <Text>CommunityScreen</Text>
    </SafeAreaView>
  );
}
