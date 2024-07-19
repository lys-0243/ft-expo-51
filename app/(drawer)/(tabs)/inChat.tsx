import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import colors from "@/config/colors";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { chatMessages } from "@/config/constants";
import { authRoutes } from "@/config/routes";

export default function inChat() {
  const router = useRouter();
  const { chatName } = useLocalSearchParams();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          width: "100%",
          backgroundColor: colors.primary,
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 30,
          gap: 20,
        }}
      >
        <Pressable
          onPress={() => router.replace(authRoutes.chat)}
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
        <View>
          <Image
            source={require("@/assets/img/users/4.jpg")}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
        </View>
        <Text style={{ color: "#fff", fontFamily: "Bold", fontSize: 24 }}>
          {chatName}
        </Text>
      </View>
      <ScrollView style={{ padding: 20, gap: 10 }}>
        {chatMessages.map((chat) => (
          <View key={chat.id} style={{ marginBottom: 10 }}>
            <View
              style={
                chat.isMe
                  ? {
                      backgroundColor: colors.lightGray40,
                      padding: 10,
                      maxWidth: "80%",
                      borderRadius: 20,
                      borderBottomLeftRadius: 0,
                    }
                  : {
                      backgroundColor: colors.primary,
                      padding: 10,
                      maxWidth: "80%",
                      borderRadius: 20,
                      borderBottomRightRadius: 0,
                      alignSelf: "flex-end",
                    }
              }
            >
              <Text
                style={
                  chat.isMe
                    ? {
                        color: colors.darkGray,
                        fontFamily: "Regular",
                        fontSize: 14,
                      }
                    : {
                        color: "#fff",
                        fontFamily: "Regular",
                        fontSize: 14,
                      }
                }
              >
                {chat.message}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          backgroundColor: "#EBF6FF",
          paddingHorizontal: 20,
          paddingVertical: 20,
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <TextInput
            style={{
              backgroundColor: "#fff",
              width: "85%",
              borderRadius: 20,
              fontFamily: "Regular",
              fontSize: 14,
              padding: 10,
            }}
            keyboardType="default"
            inputMode="text"
            numberOfLines={3}
            placeholder="Tapez un message"
          />
          <Feather name="send" size={24} color={colors.darkGray} />
        </View>
      </View>
    </SafeAreaView>
  );
}
