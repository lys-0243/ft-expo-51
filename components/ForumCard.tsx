import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import colors from "@/config/colors";
import { LinearGradient } from "expo-linear-gradient";
import styles from "@/config/styles";

type ItemProps = {
  id: number;
  title: string;
  color: string;
  image: any;
};

export default function ForumCard({ id, title, image, color }: ItemProps) {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        alignItems: "flex-start",
        marginRight: 12,
        height: 150,
        width: width / 2 - 10,
        borderRadius: 10,
        backgroundColor: color,
      }}
    >
      <ImageBackground
        source={image}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        imageStyle={{ borderRadius: 10 }}
      >
        <LinearGradient
          colors={["transparent", color]}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              marginBottom: 10,
              textAlign: "center",
              fontFamily: "Bold",
              color: "#fff",
            }}
          >
            {title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const css = StyleSheet.create({
  shadow: {
    shadowColor: "#232323",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 7,
  },
});
