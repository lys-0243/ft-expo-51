import { useState } from "react";
import { Pressable, StyleSheet, View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import IMAGES from "@/assets/img/fav";
import styles from "@/config/styles";

export function CheckBoxStandard({
  title,
  image,
}: {
  title: string;
  image?: any;
}) {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable style={styles.checkGrayBg} onPress={() => setChecked(!checked)}>
      <View style={checked ? styles.checkBlueBg : styles.checkGrayBg}>
        <View style={[styles.checkboxBase, checked && styles.checkboxChecked]}>
          {checked && (
            <Ionicons
              name="checkmark"
              size={18}
              color={checked ? "white" : colors.secondary}
            />
          )}
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <Text
          style={
            checked
              ? { fontFamily: "Regular", fontSize: 12 }
              : { fontFamily: "Medium", fontSize: 12 }
          }
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}
