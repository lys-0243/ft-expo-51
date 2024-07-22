import { View, Text } from "react-native";
import React from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(stack)" options={{ headerShown: false }} />
      </Stack>
    </ApplicationProvider>
  );
}
