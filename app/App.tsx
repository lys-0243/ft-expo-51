import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthNavigation from "./auth/AuthNavigation";
import PublicNavigation from "./public/PublicNavigation";

export default function App() {
  const [getUser, setGetUser] = useState("");

  const [loaded] = useFonts({
    Black: require("../assets/fonts/Poppins-Black.ttf"),
    ExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("isAuthenticated");
        setGetUser(value as string);
      } catch (e) {
        console.log("error", e);
      }
    };
    getData();
  }, []);
  if (!loaded) {
    return null;
  }

  console.log("Redirecting to Home Page");
  return (
    <NavigationContainer>
      {getUser == "1" ? <AuthNavigation /> : <PublicNavigation />}
    </NavigationContainer>
  );
}

registerRootComponent(App);
