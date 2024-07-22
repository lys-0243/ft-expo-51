import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { authRoutes, publicRoutes } from "@/config/routes";
import PublicHomeScreen from ".";
import OnBoardingScreen from "./onboarding";
import SignInScreen from "./signin";
import SignUpScreen from "./signup";
import OTPCodeScreen from "./otpcode";
import SetPassword from "./set_password";
import SignupSuccess from "./signup_success";
import UserPrefences from "./user_preferences";
import AuthNavigation from "../auth/AuthNavigation";

const Stack = createNativeStackNavigator();

export default function PublicNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={publicRoutes.index} component={PublicHomeScreen} />
      <Stack.Screen name={publicRoutes.onboard} component={OnBoardingScreen} />
      <Stack.Screen name={publicRoutes.login} component={SignInScreen} />
      <Stack.Screen name={publicRoutes.signup} component={SignUpScreen} />
      <Stack.Screen name={publicRoutes.otp} component={OTPCodeScreen} />
      <Stack.Screen name={publicRoutes.setPassword} component={SetPassword} />
      <Stack.Screen
        name={publicRoutes.successSignUp}
        component={SignupSuccess}
      />
      <Stack.Screen name={authRoutes.home} component={AuthNavigation} />
      <Stack.Screen name={publicRoutes.userFav} component={UserPrefences} />
    </Stack.Navigator>
  );
}
