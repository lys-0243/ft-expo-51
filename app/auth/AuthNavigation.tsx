import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { authRoutes } from "@/config/routes";
import HomeScreen from "./(tabs)/home";
import ChatScreen from "./(tabs)/chat";
import UserProfile from "./(tabs)/profile";
import colors from "@/config/colors";

const Tab = createBottomTabNavigator();

export default function AuthNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [css.tabBottomStyle],
      }}
      initialRouteName={authRoutes.home}
    >
      <Tab.Screen
        name={authRoutes.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  source={require("@/assets/img/tab/home-active.png")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Image
                  source={require("@/assets/img/tab/home.png")}
                  style={{ height: 25, width: 25 }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={authRoutes.chat}
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  source={require("@/assets/img/tab/chat-active.png")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Image
                  source={require("@/assets/img/tab/chat.png")}
                  style={{ height: 25, width: 25 }}
                />
              )}
            </View>
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name={authRoutes.president}
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...css.iconTabStyle,
                ...css.shadow,
                backgroundColor: colors.lightBlue,
              }}
            >
              <Image
                source={require("@/assets/img/tab/fatshi.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name={authRoutes.community}
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  source={require("@/assets/img/tab/community-active.png")}
                  style={{ height: 30, width: 40 }}
                />
              ) : (
                <Image
                  source={require("@/assets/img/tab/community.png")}
                  style={{ height: 29, width: 35 }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={authRoutes.userProfile}
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  source={require("@/assets/img/tab/user-active.png")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Image
                  source={require("@/assets/img/tab/user.png")}
                  style={{ height: 25, width: 25 }}
                />
              )}
            </View>
          ),
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

const css = StyleSheet.create({
  tabBottomStyle: {
    backgroundColor: "#f8f8f8",
    height: 50,
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  shadow2: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,
  },
  iconTabStyle: {
    borderRadius: 9999,
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
