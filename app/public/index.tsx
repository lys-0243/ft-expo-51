import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "@/config/colors";
import { Link, useRouter } from "expo-router";
import styles from "@/config/styles";
import { publicRoutes } from "@/config/routes";

export default function PublicHomeScreen({ navigation }: any) {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/img/splash.png")}
      style={{ flex: 1 }}
    >
      <StatusBar style="light" />

      <View style={css.container2}>
        <Image source={require("@/assets/img/logo-fatshi.png")} />
        <Text
          style={{
            color: colors.yellow,
            fontFamily: "Bold",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          LE PEUPLE D’ABORD
        </Text>
      </View>

      <View style={css.container}>
        <Text
          style={{
            color: colors.textBlue,
            fontFamily: "Bold",
            textAlign: "center",
            fontSize: 14,
            margin: 40,
          }}
        >
          "Je suis venu vous dire que vous n’êtes pas seuls, que je suis votre
          porte-parole, que je suis votre avocat, que je suis votre défenseur,
          que je suis votre serviteur."
        </Text>

        <View style={{ marginBottom: 50 }}>
          <Pressable
            style={{
              ...styles.btnPrimary,
            }}
            onPress={() => navigation.push(publicRoutes.onboard)}
          >
            <Text style={styles.textBtn}>Commencer</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    height: "100%",
    marginHorizontal: 20,
  },
  container2: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
