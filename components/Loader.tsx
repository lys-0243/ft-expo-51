import { View, Text } from "react-native";
import React from "react";
import colors from "@/config/colors";

export default function Loader() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.danger600,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Loader...</Text>
    </View>
  );
}
