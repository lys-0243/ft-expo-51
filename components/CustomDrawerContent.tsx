import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@/config/colors";
import { Octicons } from "@expo/vector-icons";

const CustomDrawerContent = (props: any) => {
  const { width } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{}}
      >
        <View
          style={{
            backgroundColor: "#dde3fe",
            height: "auto",
            alignItems: "center",
            paddingBottom: 15,
          }}
        >
          <Image
            source={require("@/assets/img/sylva.jpg")}
            style={{ ...css.userImg }}
          />
          <Text
            style={{ color: colors.primary, fontFamily: "Bold", fontSize: 18 }}
          >
            Sylvain Tshiasuma
          </Text>
          <Text style={{ fontFamily: "Medium", color: colors.text }}>
            @lys0243
          </Text>
          <Pressable
            style={{
              backgroundColor: colors.secondary,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontFamily: "Medium", color: "#fff" }}>
              Editer le profil
            </Text>
          </Pressable>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#dde3fe",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}
      >
        <DrawerItem
          label="Déconnexion"
          onPress={() => {}}
          style={{
            backgroundColor: colors.secondary,
          }}
          labelStyle={{
            color: "#fff",
            fontFamily: "Bold",
            textAlign: "center",
          }}
          icon={() => <Octicons name="sign-out" size={18} color="#fff" />}
        />
        <Text style={{ textAlign: "center", fontFamily: "Regular" }}>
          Version 1.0.0
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const css = StyleSheet.create({
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: "#fff",
    marginTop: 20,
  },
});
