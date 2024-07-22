import { View, Text } from "react-native";
import React from "react";
import colors from "@/config/colors";
import { StatusBar } from "expo-status-bar";

export default function PresidentScreen() {
  return (
    <View>
      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={colors.primary}
      />
      <Text>President</Text>
    </View>
  );
}
