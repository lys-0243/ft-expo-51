import {
    View,
    Text,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import colors from "@/config/colors";
  
  export default function SignUpScreen() {
  
    return (
      <View>
        <Text>Signup</Text>
      </View>
    );
  }
  
  const css = StyleSheet.create({
    container: {
      backgroundColor: "white",
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 20,
    },
  
    socialBtnStyle: {
      backgroundColor: colors.info00,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
  
      flexDirection: "row",
      justifyContent: "center",
      gap: 10,
    },
  });
  