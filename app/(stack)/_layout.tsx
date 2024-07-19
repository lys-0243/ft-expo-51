import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { appRoutes, authRoutes } from "@/config/routes";

export default function Layout() {
  return (
    <Stack
      initialRouteName={authRoutes.home}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={appRoutes.onboard} options={{ headerShown: false }} />
      <Stack.Screen name={appRoutes.userFav} />
      <Stack.Screen name={appRoutes.successSignUp} />
      <Stack.Screen name={appRoutes.setPassword} />
      <Stack.Screen name={appRoutes.otp} />
      <Stack.Screen name={appRoutes.login} />
      <Stack.Screen name={appRoutes.signup} />
    </Stack>
  );
}
