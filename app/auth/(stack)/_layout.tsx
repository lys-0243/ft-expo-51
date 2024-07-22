import React from "react";
import { screenTitles } from "@/config/routes";
import colors from "@/config/colors";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "@/components/Header";
import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      initialRouteName="(tabs)"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerTitle: screenTitles.home,
        }}
      />
      <Stack.Screen
        name="news"
        options={{
          headerTitle: screenTitles.news,

          headerRight: () => <Header sceenName={screenTitles.news} />,
        }}
      />
      <Stack.Screen
        name="petitions"
        options={{
          headerTitle: screenTitles.petition,

          headerRight: () => <Header sceenName={screenTitles.petition} />,
        }}
      />
      <Stack.Screen
        name="offres"
        options={{
          headerTitle: screenTitles.offre,

          headerRight: () => <Header sceenName={screenTitles.offre} />,
        }}
      />
      <Stack.Screen
        name="guichet"
        options={{
          headerTitle: screenTitles.guichet,

          headerRight: () => <Header sceenName={screenTitles.guichet} />,
        }}
      />
      <Stack.Screen
        name="ressources"
        options={{
          headerTitle: screenTitles.ressources,

          headerRight: () => <Header sceenName={screenTitles.ressources} />,
        }}
      />
      <Stack.Screen
        name="ministeres"
        options={{
          headerTitle: screenTitles.ministere,

          headerRight: () => <Header sceenName={screenTitles.ministere} />,
        }}
      />
      <Stack.Screen
        name="assistance"
        options={{
          headerTitle: screenTitles.assistance,

          headerRight: () => <Header sceenName={screenTitles.assistance} />,
        }}
      />
    </Stack>
  );
}
