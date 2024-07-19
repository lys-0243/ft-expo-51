import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import colors from "@/config/colors";

export default function PostBtn({
  title,
  isSelected,
}: {
  title: string;
  isSelected: boolean;
}) {
  return (
    <>
      <LinearGradient
        colors={isSelected ? ["#5397F1", "#1E26D0"] : ["#F3F3F3", "#5D5A5A"]}
        style={sheetStyles.SelectionPostCard}
      >
        <Animated.Text
          style={
            isSelected ? sheetStyles.actionTextActive : sheetStyles.actionText
          }
        >
          {title}
        </Animated.Text>
      </LinearGradient>
      {isSelected && (
        <LinearGradient
          colors={isSelected ? ["#5397F1", "#1E26D0"] : ["#F3F3F3", "#5D5A5A"]}
          style={{ height: 8, marginTop: 5, borderRadius: 10 }}
        ></LinearGradient>
      )}
    </>
  );
}
const sheetStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  SelectionPostCard: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.lightBlue,

    paddingVertical: 40,
  },
  flexNew: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
  },
  sheet: {
    padding: 16,
    paddingRight: 32,
    paddingLeft: 32,
    height: "auto",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    color: colors.lightGray40,
    textAlign: "center",
    fontFamily: "Bold",
    fontSize: 18,
  },
  actionTextActive: {
    color: "white",
    textAlign: "center",
    fontFamily: "Bold",
    fontSize: 18,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});
