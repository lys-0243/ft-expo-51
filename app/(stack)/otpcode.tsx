import {
  View,
  Text,
  useWindowDimensions,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import colors from "@/config/colors";
import { StatusBar } from "expo-status-bar";
import { appRoutes, authRoutes } from "@/config/routes";

export default function OTPCodeScreen() {
  const { width } = useWindowDimensions();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const { nextScreen } = useLocalSearchParams();

  const inputs = [];

  const handleOtpChange = ({ value, index }: any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
  };

  return (
    <SafeAreaView style={css.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ gap: 50 }}
      >
        <StatusBar
          translucent={false}
          style="light"
          backgroundColor={colors.primary}
        />
        <View style={{ marginBottom: 15 }}>
          <Image
            source={require("@/assets/img/ft_armoirie.png")}
            style={[
              {
                width: width / 2 - 50,
                resizeMode: "contain",
                height: 60,
              },
            ]}
          />
        </View>

        <View style={{ gap: 25 }}>
          <Text
            style={{ fontFamily: "Bold", fontSize: 24, color: colors.primary }}
          >
            Confirmez votre numéro
          </Text>
          <Text>{nextScreen}</Text>

          <Text style={{ fontFamily: "Regular" }}>
            Entrez le code à 6 chiffres envoyé au numéro indiqué lors de
            l'inscription
          </Text>

          <View style={css.OTPcontainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={css.box}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(value) => handleOtpChange({ value, index })}
                value={digit}
                onFocus={() => {}}
                ref={(input) => {
                  inputs[index] = input;
                }}
              />
            ))}
          </View>

          <View style={{ marginVertical: 30, gap: 12 }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                padding: 15,
                borderRadius: 10,
                alignItems: "center",
              }}
              onPress={() => {
                router.push({
                  pathname: nextScreen as string,
                });
              }}
            >
              <Text
                style={{ color: "white", fontFamily: "Bold", fontSize: 16 }}
              >
                Confirmer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },

  OTPcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    // borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: colors.darkGray,
    width: 40,
    height: 40,
    margin: 10,
    textAlign: "center",
    fontFamily: "Bold",
    fontSize: 20,
  },
});
