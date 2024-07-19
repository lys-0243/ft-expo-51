import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  Modal,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "@/config/colors";
import styles from "@/config/styles";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import ModalComponent from "./Modal";
import Animated, { useSharedValue } from "react-native-reanimated";
import BottomSheet from "./NewContent/NewContent";

export default function Header({ screenTitle }: { screenTitle: String }) {
  const navigation = useNavigation();
  const isOpen = useSharedValue(false);

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ...styles.shadow,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Ionicons name="menu" size={28} color={colors.darkGray} />
          </Pressable>
          <Text style={{ fontFamily: "Medium", fontSize: 20 }}>
            {screenTitle}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="search" size={28} color={colors.lightGray} />
          <Ionicons name="notifications" size={28} color={colors.secondary} />

          <Pressable onPress={toggleSheet}>
            <FontAwesome6
              name="circle-plus"
              size={40}
              color={colors.lightBlue}
            />
          </Pressable>
        </View>
      </View>

      <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet} />
    </>
  );
}
