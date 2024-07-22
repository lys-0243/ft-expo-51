import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import colors from "@/config/colors";
import { userProfileMenu } from "@/config/constants";
import ProfileMenu from "@/components/ProfileMenu";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { publicRoutes } from "@/config/routes";

export default function UserProfile({ navigation }: any) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("isAuthenticated");
    navigation.navigate(publicRoutes.index);
  };
  return (
    <>
      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={colors.primary}
      />

      <ImageBackground
        source={require("@/assets/img/users/cover.png")}
        style={{
          height: 280,
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: 20,
          paddingTop: 0,
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <AntDesign name="left" size={24} color="white" />
          <Text style={{ color: "#fff", fontFamily: "Medium", fontSize: 18 }}>
            Profil
          </Text>
        </Pressable>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
          <Image
            source={require("@/assets/img/sylva.jpg")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 80,
              borderWidth: 10,
              borderColor: "#fff",
            }}
          />
          <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={{ color: "#fff", fontFamily: "Bold", fontSize: 28 }}>
              Sylvain Lys
            </Text>
            <Text style={{ color: "#fff", fontFamily: "Regular" }}>
              sylvain@lys.com
            </Text>
            <Text style={{ color: "#fff", fontFamily: "Regular" }}>
              @lys0243
            </Text>
            <Text style={{ color: "#fff", fontFamily: "Regular" }}>
              +243 821 632 319
            </Text>
          </View>
        </View>
      </ImageBackground>

      <ScrollView style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <View
          style={{
            backgroundColor: colors.primary,
            padding: 15,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontFamily: "Bold", fontSize: 16 }}>
              Modifier le profil
            </Text>
            <Text
              style={{ color: "#fff", fontFamily: "Regular", fontSize: 12 }}
            >
              Mettez à jours vos informations et soyez toujours actif
            </Text>
          </View>
          <AntDesign name="right" size={18} color="white" />
        </View>

        <View
          style={{
            marginTop: 20,
            paddingVertical: 20,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              height: 1,
              backgroundColor: colors.lightGray40,
              marginHorizontal: 20,
            }}
          ></View>
          {userProfileMenu.map((item) => (
            <ProfileMenu title={item.title} uri={item.uri} key={item.title} />
          ))}
        </View>

        <View
          style={{
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              flexDirection: "row",
              paddingVertical: 16,
              justifyContent: "space-between",
            }}
            onPress={handleLogout}
          >
            <Text
              style={{
                color: colors.secondary,
                fontFamily: "Bold",
                fontSize: 16,
              }}
            >
              Déconnexion
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
      </ScrollView>
    </>
  );
}
