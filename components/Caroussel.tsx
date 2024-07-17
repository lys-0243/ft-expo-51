import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import colors from "../config/colors";
import Carousel from "react-native-reanimated-carousel";
import { FadeInRight } from "react-native-reanimated";
import styles from "../config/styles";

export default function Caroussel() {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const carousselData = [
    { id: 1, image: require("@/assets/img/caroussel/slide01.png") },
    { id: 2, image: require("@/assets/img/caroussel/slide02.png") },
    { id: 3, image: require("@/assets/img/caroussel/slide03.png") },
    { id: 4, image: require("@/assets/img/caroussel/slide04.png") },
  ];

  const viewCount = carousselData.length;

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, ...styles.shadow }}>
      <Carousel
        style={{
          // backgroundColor: colors.danger300,
          height: 190,
        }}
        width={width - 40}
        height={170}
        mode={"vertical-stack"}
        loop={true}
        autoPlay={true}
        data={carousselData}
        autoPlayInterval={3500}
        modeConfig={{
          snapDirection: "left",
          stackInterval: 8,
        }}
        customConfig={() => ({ type: "positive", viewCount })}
        renderItem={({ item, index }) => (
          <View
            style={{ flex: 1, justifyContent: "center", overflow: "hidden" }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 15 }}
              source={item.image}
            />
          </View>
        )}
      />
    </View>
  );
}
