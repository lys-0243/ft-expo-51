import React from "react";
import { screenTitles } from "@/config/routes";
import colors from "@/config/colors";
import { Drawer } from "expo-router/drawer";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "@/components/drawer/CustomDrawerContent";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="(tabs)"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "back",
          drawerActiveBackgroundColor: colors.primary,
          drawerActiveTintColor: "#fff",
          drawerInactiveBackgroundColor: "rgba(0,0,0,0.05)",
          drawerLabelStyle: {
            fontSize: 14,
            fontFamily: "Medium",
          },
          drawerStyle: {
            backgroundColor: "#fff",
            width: "70%",
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: screenTitles.home,
            headerTitle: screenTitles.home,
            drawerIcon: ({ focused, size, color }) => (
              <Feather
                name="home"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="news"
          options={{
            drawerLabel: screenTitles.news,
            headerTitle: screenTitles.news,
            drawerIcon: ({ focused, size, color }) => (
              <Feather
                name="info"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="petitions"
          options={{
            drawerLabel: screenTitles.petition,
            headerTitle: screenTitles.petition,
            drawerIcon: ({ focused, size, color }) => (
              <Ionicons
                name="book"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="offres"
          options={{
            drawerLabel: screenTitles.offre,
            headerTitle: screenTitles.offre,
            drawerIcon: ({ focused, size, color }) => (
              <Ionicons
                name="newspaper-sharp"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="guichet"
          options={{
            drawerLabel: screenTitles.guichet,
            headerTitle: screenTitles.guichet,
            drawerIcon: ({ focused, size, color }) => (
              <Feather
                name="credit-card"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ressources"
          options={{
            drawerLabel: screenTitles.ressources,
            headerTitle: screenTitles.ressources,
            drawerIcon: ({ focused, size, color }) => (
              <Ionicons
                name="documents-outline"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ministeres"
          options={{
            drawerLabel: screenTitles.ministere,
            headerTitle: screenTitles.ministere,
            drawerIcon: ({ focused, size, color }) => (
              <MaterialCommunityIcons
                name="home-city-outline"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="assistance"
          options={{
            drawerLabel: screenTitles.assistance,
            headerTitle: screenTitles.assistance,
            drawerIcon: ({ focused, size, color }) => (
              <Feather
                name="help-circle"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
