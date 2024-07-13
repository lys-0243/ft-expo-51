import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="onboarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="user_preferences" />
      <Stack.Screen name="signup_success" />
      <Stack.Screen name="otpcode" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
      {/* <Stack.Screen name="home" /> */}
    </Stack>
  );
}
