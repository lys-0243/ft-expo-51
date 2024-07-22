import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "@/config/colors";
import { useNavigation } from "expo-router";
import ModalComponent from "./NewContent/Modal";
import { screenTitles } from "@/config/routes";
import { StatusBar } from "expo-status-bar";
import { DrawerActions } from "@react-navigation/native";
import styles from "@/config/styles";

export default function Header({ sceenName }: { sceenName: string }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const accepTable = [
    screenTitles.home,
    screenTitles.news,
    screenTitles.petition,
  ];

  return (
    <>
      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={colors.primary}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: "white",
          ...styles.shadow,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 20 }}>
            {sceenName}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
          <Ionicons name="search" size={24} color={colors.lightGray} />
          <View>
            <Ionicons name="notifications" size={24} color={colors.lightGray} />
            <View
              style={{
                position: "absolute",
                backgroundColor: colors.secondary,
                borderRadius: 50,
                width: 14,
                height: 14,
                justifyContent: "center",
                alignSelf: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Bold",
                  fontSize: 12,
                  color: "white",

                  textAlign: "center",
                }}
              >
                4
              </Text>
            </View>
          </View>

          {accepTable.includes(sceenName) && (
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <FontAwesome6
                name="circle-plus"
                size={24}
                color={colors.lightBlue}
              />
            </Pressable>
          )}
        </View>
      </View>

      {modalVisible && <ModalComponent modalVisible={modalVisible} />}
    </>
  );
}

const css = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
