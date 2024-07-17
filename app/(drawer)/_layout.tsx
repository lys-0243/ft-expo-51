import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { authRoutes, drawerRoutes } from "@/config/routes";
import colors from "@/config/colors";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CustomDrawerContent = (props: any) => {
  const { width } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{}}
      >
        <View
          style={{
            backgroundColor: "#dde3fe",
            height: "auto",
            alignItems: "center",
            paddingBottom: 15,
          }}
        >
          <Image
            source={require("@/assets/img/sylva.jpg")}
            style={{ ...css.userImg }}
          />
          <Text
            style={{ color: colors.primary, fontFamily: "Bold", fontSize: 18 }}
          >
            Sylvain Tshiasuma
          </Text>
          <Text style={{ fontFamily: "Medium", color: colors.text }}>
            @lys0243
          </Text>
          <Pressable
            style={{
              backgroundColor: colors.secondary,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontFamily: "Medium", color: "#fff" }}>
              Editer le profil
            </Text>
          </Pressable>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#dde3fe",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}
      >
        <DrawerItem
          label="Déconnexion"
          onPress={() => {}}
          style={{
            backgroundColor: colors.secondary,
          }}
          labelStyle={{
            color: "#fff",
            fontFamily: "Bold",
            textAlign: "center",
          }}
          icon={() => <Octicons name="sign-out" size={18} color="#fff" />}
        />
        <Text style={{ textAlign: "center", fontFamily: "Regular" }}>
          Version 1.0.0
        </Text>
      </View>
    </View>
  );
};

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => (
          <CustomDrawerContent
            {...props}
            // screenOptions={{ headerShown: false }}
          />
        )}
        screenOptions={{
          drawerType: "back",
          headerShown: false,
          drawerActiveBackgroundColor: colors.primary,
          drawerActiveTintColor: "#fff",
          drawerInactiveBackgroundColor: "rgba(0,0,0,0.1)",
          overlayColor: "rgba(10,22,255,0.5)",
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
          name={drawerRoutes.home}
          options={{
            // title: drawerRoutes.home,
            drawerIcon: ({ focused }) => (
              <Feather
                name="home"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={drawerRoutes.news}
          options={{
            // title: screenTitles.news,
            drawerIcon: ({ focused }) => (
              <Feather
                name="info"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        {/*<Drawer.Screen
          name={screenTitles.petition}
          options={{
            title: screenTitles.petition,
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="book"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
          component={PetitionScreen}
        />
        <Drawer.Screen
          name={screenTitles.offre}
          options={{
            title: screenTitles.offre,
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="newspaper-sharp"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
          component={OffersScreen}
        />
        <Drawer.Screen
          name={screenTitles.guichet}
          options={{
            title: screenTitles.guichet,
            drawerIcon: ({ focused }) => (
              <Feather
                name="credit-card"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
          component={GuichetScreen}
        />
        <Drawer.Screen
          name={screenTitles.ressources}
          options={{
            title: screenTitles.ressources,
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="documents-outline"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={screenTitles.ministere}
          options={{
            title: screenTitles.ministere,
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="home-city-outline"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={screenTitles.assistance}
          options={{
            title: screenTitles.assistance,
            drawerIcon: ({ focused }) => (
              <Feather
                name="help-circle"
                size={24}
                color={focused ? "white" : colors.gray}
              />
            ),
          }}
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}

const css = StyleSheet.create({
  tabBottomStyle: {
    backgroundColor: "#f8f8f8",
    borderRadius: 15,
    height: 60,

    justifyContent: "center",
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: "#fff",
    marginTop: 20,
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
