import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import colors from "@/config/colors";

export default function ChatDetailsScreen() {
  return (
    <SafeAreaView>
      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={colors.primary}
      />
      <Text>chatdetails</Text>
    </SafeAreaView>
  );
}
