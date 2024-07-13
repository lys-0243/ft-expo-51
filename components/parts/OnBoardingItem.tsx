import {
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions,
  } from "react-native";
  import React from "react";
  import colors from "@/config/colors";
  
  export default function OnBoardingItem({ item }: { item: any }) {
    const { width } = useWindowDimensions();
    return (
      <View style={[styles.container, { width }]}>
        <Image
          source={item.image}
          style={[styles.image, { width: width - 20, resizeMode: "contain" }]}
        />
  
        <View style={{ flex: 0.5 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    image: {
      flex: 0,
      justifyContent: "center",
    },
    title: {
      fontFamily: "ExtraBold",
      fontSize: 34,
      textAlign: "center",
      color: colors.primary400,
      paddingHorizontal: 24,
    },
    description: {
      fontFamily: "Medium",
      color: colors.gray,
      textAlign: "center",
      paddingHorizontal: 30,
    },
  });
  