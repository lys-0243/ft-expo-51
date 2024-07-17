import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import colors from "@/config/colors";
type ItemProps = {
  id: number;
  title: string;
  image: any;
  description: string;
  stars: string;
};

export default function CategoryCard({
  id,
  title,
  description,
  image,
  stars,
}: ItemProps) {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        alignItems: "flex-start",
        marginRight: 12,
        width: width / 2 - 20,
        ...css.shadow,
        borderRadius: 10,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 125,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={image}
      />
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          gap: 8,
          backgroundColor: colors.primary,
          width: "100%",
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Bold",
            fontSize: 14,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "#fff",
            fontFamily: "Regular",
            fontSize: 10,
          }}
        >
          {description}
        </Text>
        <Text
          style={{
            color: colors.secondary,
            fontFamily: "Medium",
            fontSize: 13,
          }}
        >
          {stars} Réactions
        </Text>
      </View>
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
