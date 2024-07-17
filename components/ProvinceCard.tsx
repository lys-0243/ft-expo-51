import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "@/config/colors";
type ItemProps = { id: number; title: string; image: any };

export default function ProvinceCard({ id, title, image }: ItemProps) {
  return (
    <TouchableOpacity style={{ alignItems: "center", marginRight: 8, gap: 3 }}>
      <Image
        style={{ width: 85, height: 85, borderRadius: 15 }}
        source={image}
      />
      <Text
        style={{
          color: colors.text,
          fontFamily: "Regular",
          fontSize: 12,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
