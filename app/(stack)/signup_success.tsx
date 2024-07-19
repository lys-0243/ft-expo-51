import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import colors from "@/config/colors";
import { appRoutes } from "@/config/routes";
import { useRouter } from "expo-router";

export default function SignupSuccess() {
  const { width } = useWindowDimensions();
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 60,
      }}
    >
      <ImageBackground
        source={require("@/assets/img/success.png")}
        style={{ ...css.imgContainer, width: width - 20, height: 227 }}
      >
        <Text style={{ color: "white", fontFamily: "Bold", fontSize: 28 }}>
          Félicitations !
        </Text>
        <Text style={{ color: "yellow", fontFamily: "Bold", fontSize: 16 }}>
          Votre compte a été créé avec succès.
        </Text>
        <Text
          style={{
            textAlign: "center",
            paddingHorizontal: 40,
            color: "white",
            fontFamily: "Regular",
          }}
        >
          Vous faites désormais partie d’une communauté engagée où vous pouvez
          discuter directement avec le Président.
        </Text>
      </ImageBackground>

      <View style={{ gap: 30 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            paddingHorizontal: 10,
            color: "white",
            fontFamily: "Regular",
          }}
        >
          Exprimez-vous, posez des questions et contribuez à façonner l’avenir
          de notre Nation.
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            paddingHorizontal: 20,
            color: "white",
            fontFamily: "Bold",
          }}
        >
          Merci de faire partie de dialogue démocratique. Ensemble, nous
          construisons l’avenir !
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={() => router.push({ pathname: appRoutes.setPassword })}
        >
          <Text
            style={{ color: colors.primary, fontFamily: "Bold", fontSize: 16 }}
          >
            Suivant
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
