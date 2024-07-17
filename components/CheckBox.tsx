import { useState } from "react";
import { Pressable, StyleSheet, View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import IMAGES from "@/assets/img/fav";

export function Checkbox({ title, image }: { title: string; image: any }) {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={checked ? css.checkBlueBg : css.checkGrayBg}
      onPress={() => setChecked(!checked)}
    >
      <View style={checked ? css.checkBlueBg : css.checkGrayBg}>
        <View style={[css.checkboxBase, checked && css.checkboxChecked]}>
          {checked && (
            <Ionicons
              name="checkmark"
              size={18}
              color={checked ? colors.primary : "white"}
            />
          )}
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <Image
          source={image}
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            borderWidth: 2,
            borderColor: colors.info,
          }}
        />
        <Text
          style={
            checked
              ? { fontFamily: "Bold", fontSize: 16, color: "white" }
              : { fontFamily: "Bold", fontSize: 16 }
          }
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  checkboxBase: {
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: colors.lightGray,
  },
  checkboxChecked: {
    backgroundColor: "white",
  },
  checkBlueBg: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  checkGrayBg: {
    backgroundColor: colors.lightGray40,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});
