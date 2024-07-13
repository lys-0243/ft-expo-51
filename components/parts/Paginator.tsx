import {
    View,
    Text,
    StyleSheet,
    Animated,
    useWindowDimensions,
  } from "react-native";
  import React from "react";
  import colors from "@/config/colors";
  
  export default function Paginator({ data, scrollX, navigation }: any) {
    return (
      <View>
        <View style={{ flexDirection: "row", height: 94 }}>
          {data.map((_: any, index: number) => {
            const inputRange = [
              (index - 1) * useWindowDimensions().width,
              index * useWindowDimensions().width,
              (index + 1) * useWindowDimensions().width,
            ];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 20, 10],
              extrapolate: "clamp",
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={index.toString()}
                style={[css.dot, { width: dotWidth, opacity }]}
              />
            );
          })}
        </View>
      </View>
    );
  }
  
  const css = StyleSheet.create({
    dot: {
      height: 10,
      borderRadius: 5,
      marginTop: 35,
      backgroundColor: colors.danger,
      marginHorizontal: 8,
    },
  });
  