import { View, Text } from "react-native";
import React from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { Slot, Stack } from "expo-router";

export default function PubliCLayout() {
  return <Slot />;
  //   return (
  //     <ApplicationProvider {...eva} theme={eva.light}>
  //       <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
  //         <Stack.Screen name="index" options={{ headerShown: false }} />
  //         <Stack.Screen
  //           name={appRoutes.onboard}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen name={appRoutes.otp} options={{ headerShown: false }} />
  //         <Stack.Screen
  //           name={appRoutes.setPassword}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen name={appRoutes.login} options={{ headerShown: false }} />
  //         <Stack.Screen
  //           name={appRoutes.successSignUp}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen
  //           name={appRoutes.signup}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen
  //           name={appRoutes.userFav}
  //           options={{ headerShown: false }}
  //         />
  //       </Stack>
  //     </ApplicationProvider>
  //   );
}
