import { View, Text, Image, TouchableHighlight, Pressable } from "react-native";
import React from "react";
import colors from "@/config/colors";
import { useRouter } from "expo-router";

type ComponentProps = {
  chatName: string;
  message: string;
  time: string;
  image: any;
  unread: number;
  uri?: string;
};

export default function ChatComponent({
  chatName,
  message,
  time,
  unread,

  image,
}: ComponentProps) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "inChat",
          params: { chatName: chatName },
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            source={image}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
        </View>

        <View style={{ width: "70%" }}>
          <Text style={{ fontFamily: "Bold" }}>{chatName}</Text>
          <Text
            style={
              unread > 0
                ? { fontFamily: "Medium", color: colors.darkGray }
                : { fontFamily: "Medium", color: colors.lightGray }
            }
            numberOfLines={1}
          >
            {message}
          </Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={
              unread > 0
                ? { fontFamily: "Bold", color: colors.darkGray }
                : { fontFamily: "Medium", color: colors.lightGray }
            }
          >
            {time}
          </Text>
          <View
            style={{
              backgroundColor: colors.secondary,
              paddingHorizontal: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {unread > 0 && (
              <Text style={{ fontFamily: "Medium", color: "#fff" }}>3</Text>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: colors.lightGray40,
          marginTop: 15,
        }}
      ></View>
    </Pressable>
  );
}
