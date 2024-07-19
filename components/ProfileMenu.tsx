import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/config/colors";
import { AntDesign } from "@expo/vector-icons";

export default function ProfileMenu({
  title,
  uri,
}: {
  title: String;
  uri: String;
}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          paddingVertical: 16,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: colors.darkGray,
            fontFamily: "Bold",
            fontSize: 16,
          }}
        >
          {title}
        </Text>
        <AntDesign name="right" size={18} color={colors.darkGray} />
      </TouchableOpacity>
      <View
        style={{
          height: 1,
          backgroundColor: colors.lightGray40,
          marginHorizontal: 20,
        }}
      ></View>
    </View>
  );
}
