import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import colors from "@/config/colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { chats } from "@/config/constants";
import ChatComponent from "@/components/chat/ChatComponent";

export default function ChatScreen({ navigation }: any) {
  const router = useRouter();

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={colors.primary}
      />

      <View
        style={{
          width: "100%",
          backgroundColor: colors.primary,
          height: "auto",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          justifyContent: "space-between",
          paddingVertical: 20,
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
        </Pressable>
        <Text style={{ color: "#fff", fontFamily: "Bold", fontSize: 24 }}>
          Conversations
        </Text>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 20,
          paddingTop: 10,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: colors.lightGray40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <TextInput
            placeholder="Rechercher une discussion"
            style={{
              padding: 10,
              fontFamily: "Regular",
              fontSize: 14,
              width: "90%",
            }}
            // onFocus={() => setFocus(true)}
            // onBlur={() => setFocus(false)}
          />
          <View style={{}}>
            <AntDesign name="search1" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 20, gap: 24 }}>
          {chats.map((chat) => (
            <ChatComponent
              key={chat.id}
              chatName={chat.name}
              message={chat.message}
              time={chat.time}
              unread={chat.unread}
              image={chat.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
