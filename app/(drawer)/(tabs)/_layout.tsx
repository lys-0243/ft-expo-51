import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { authRoutes } from "@/config/routes";
import colors from "@/config/colors";

export default function Layout() {
  return (
    <Tabs
      initialRouteName={authRoutes.home}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: () => null,
        tabBarStyle: [css.tabBottomStyle],
        // unmountOnBlur: true,
      }}
    >
      <Tabs.Screen
        name={authRoutes.home}
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

      <Tabs.Screen
        name={authRoutes.chat}
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
        }}
      />

      <Tabs.Screen
        name={authRoutes.president}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? {
                      ...css.iconTabStyle,
                      ...css.shadow,
                      backgroundColor: colors.secondary,
                    }
                  : {
                      ...css.iconTabStyle,
                      ...css.shadow,
                      backgroundColor: colors.lightBlue,
                    }
              }
            >
              <Image
                source={require("@/assets/img/tab/fatshi.png")}
                style={{ height: 60, width: 60 }}
              />
            </View>
          ),
          tabBarStyle: { display: "none" },
        }}
      />

      <Tabs.Screen
        name={authRoutes.community}
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

      <Tabs.Screen
        name={authRoutes.userProfile}
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
        }}
      />
    </Tabs>
  );
}

const css = StyleSheet.create({
  tabBottomStyle: {
    backgroundColor: "#f8f8f8",
    borderRadius: 15,
    height: 60,

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
    width: 60,
    height: 60,
    right: 10,
    position: "absolute",
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
