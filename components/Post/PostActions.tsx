import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "@/config/colors";

export default function PostActions({
  likes,
  comments,
}: {
  likes: number;
  comments: number;
}) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <View style={css.likesContainer}>
          <AntDesign name="hearto" size={18} color={colors.text} />
          <Text style={css.likesComment}>{likes}</Text>
        </View>
        <View style={css.likesContainer}>
          <Ionicons name="chatbubble-outline" size={18} color={colors.text} />
          <Text style={css.likesComment}>{comments}</Text>
        </View>
      </View>

      <View style={{}}>
        <AntDesign name="sharealt" size={20} color={colors.text} />
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  likesComment: {
    fontFamily: "Medium",
    fontSize: 15,
    color: colors.text,
  },
  likesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
});
