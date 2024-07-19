import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import colors from "@/config/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { chats } from "@/config/constants";
import ChatComponent from "@/components/chat/ChatComponent";

export default function Chat() {
  const router = useRouter();
  const navigation = useNavigation();
  // const [focus, setFocus] = React.useState(false);

  // useEffect(() => {
  //   if (focus) {
  //     navigation.setOptions({
  //       tabBarStyle: { display: "none" },
  //     });
  //   }
  //   if (!focus) {
  //     navigation.setOptions({
  //       tabBarStyle: { display: "flex" },
  //     });
  //   }
  // }, [focus]);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar translucent style="light" />

      <View
        style={{
          width: "100%",
          backgroundColor: colors.primary,
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          justifyContent: "space-between",
          paddingTop: 30,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
        <Text style={{ color: "#fff", fontFamily: "Bold", fontSize: 24 }}>
          Discussions
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
