import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
  TextInput,
} from "react-native";
import React from "react";
import colors from "@/config/colors";
import { AntDesign, Entypo, Feather, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Input } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import styles from "@/config/styles";
import { appRoutes, authRoutes } from "@/config/routes";

export default function SignInScreen() {
  const { width } = useWindowDimensions();
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const router = useRouter();

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Feather
        name={secureTextEntry ? "eye-off" : "eye"}
        size={24}
        color={colors.lightGray}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={css.container}>
      <StatusBar
        translucent={false}
        style="light"
        backgroundColor={colors.primary}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 15 }}>
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

        <View style={{ gap: 5 }}>
          <Text
            style={{ fontFamily: "Bold", fontSize: 24, color: colors.primary }}
          >
            Connexion
          </Text>

          <View style={{ gap: 1 }}>
            <Text style={{ fontFamily: "Regular" }}>
              Content de vous revoir!
            </Text>
            <Text style={{ fontFamily: "Regular" }}>
              Veuillez entrer vos coordonnées.
            </Text>
          </View>
        </View>

        <View style={{ marginVertical: 30, gap: 12 }}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={{ marginVertical: 10, ...styles.input }}
            autoComplete="email"
          />
          <View>
            <TextInput
              placeholder="Mot de passe"
              keyboardType="default"
              style={{ marginVertical: 10, ...styles.input }}
              autoComplete="email"
            />
          </View>

          <TouchableWithoutFeedback>
            <Text
              style={{ color: colors.gray, fontFamily: "Bold", fontSize: 14 }}
            >
              Mot de passe oublié ?
            </Text>
          </TouchableWithoutFeedback>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 15,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() =>
              router.push({
                pathname: appRoutes.otp,
                params: { nextScreen: authRoutes.home },
              })
            }
          >
            <Text style={{ color: "white", fontFamily: "Bold", fontSize: 16 }}>
              Se connecter
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 10,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text
              style={{
                backgroundColor: colors.gray,
                width: width / 5,
                height: 1,
              }}
            ></Text>
            <Text
              style={{ fontFamily: "Medium", fontSize: 14, color: colors.gray }}
            >
              Ou connectez-vous avec
            </Text>
            <Text
              style={{
                backgroundColor: colors.gray,
                width: width / 5,
                height: 1,
              }}
            ></Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 20,
            }}
          >
            <View style={{ gap: 10 }}>
              <TouchableOpacity
                style={{ ...css.socialBtnStyle, width: width - 50 }}
              >
                <Entypo
                  name="facebook-with-circle"
                  size={24}
                  color={colors.primary400}
                />
                <Text
                  style={{
                    color: colors.darkGray,
                    fontFamily: "Bold",
                    fontSize: 15,
                  }}
                >
                  Facebook
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ ...css.socialBtnStyle, width: width - 50 }}
              >
                <AntDesign name="google" size={24} color={colors.danger} />
                <Text
                  style={{
                    color: colors.darkGray,
                    fontFamily: "Bold",
                    fontSize: 15,
                  }}
                >
                  Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...css.socialBtnStyle, width: width - 50 }}
              >
                <FontAwesome6
                  name="tiktok"
                  size={24}
                  color={colors.primary400}
                />
                <Text
                  style={{
                    color: colors.darkGray,
                    fontFamily: "Bold",
                    fontSize: 15,
                  }}
                >
                  TikTok
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 10,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text
              style={{ fontFamily: "Medium", fontSize: 14, color: colors.gray }}
            >
              Vous n'avez pas de compte ?
            </Text>
            <TouchableOpacity
              onPress={() => router.push({ pathname: "signup" })}
            >
              <Text
                style={{
                  fontFamily: "Bold",
                  fontSize: 14,
                  color: colors.primary,
                }}
              >
                S'inscrire
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  socialBtnStyle: {
    backgroundColor: colors.info00,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});
