import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import colors from "@/config/colors";
import { appRoutes, authRoutes, drawerRoutes } from "@/config/routes";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import styles from "@/config/styles";
import { CheckBoxStandard } from "@/components/CheckBoxStandard";
import { Ionicons } from "@expo/vector-icons";

export default function SetPassword() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

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
        <View style={{ gap: 5 }}>
          <Text
            style={{ fontFamily: "Bold", fontSize: 34, color: colors.primary }}
          >
            Créer un mot de passe
          </Text>

          <View style={{ gap: 1 }}>
            <Text style={{ fontFamily: "Medium", fontSize: 24 }}>
              Heureux de vous compter parmi nous tant d'autres !
            </Text>
            <Text style={{ fontFamily: "Regular", color: colors.secondary }}>
              Juste une dernière étape ...
            </Text>
          </View>
        </View>

        <View style={{ marginVertical: 30, gap: 8 }}>
          <TextInput
            placeholder="Créer un mot de passe"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!checked}
            textContentType="password"
            style={{ marginVertical: 10, ...styles.input }}
          />
          <TextInput
            placeholder="Confirmer le mot de passe"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!checked}
            textContentType="password"
            style={{ marginVertical: 10, ...styles.input }}
          />
          <Pressable
            style={styles.checkGrayBg}
            onPress={() => setChecked(!checked)}
          >
            <View style={checked ? styles.checkBlueBg : styles.checkGrayBg}>
              <View
                style={[styles.checkboxBase, checked && css.checkboxChecked]}
              >
                {checked && (
                  <Ionicons
                    name="checkmark"
                    size={18}
                    color={checked ? "white" : colors.secondary}
                  />
                )}
              </View>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <Text
                style={
                  checked
                    ? { fontFamily: "Regular", fontSize: 12 }
                    : { fontFamily: "Medium", fontSize: 12 }
                }
              >
                Afficher le mot de passe
              </Text>
            </View>
          </Pressable>

          <CheckBoxStandard title="J'accepte les termes et conditions" />

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 15,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() =>
              router.push({
                pathname: authRoutes.home,
              })
            }
          >
            <Text style={{ color: "white", fontFamily: "Bold", fontSize: 16 }}>
              Enregistrer
            </Text>
          </TouchableOpacity>
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
  checkboxChecked: {
    backgroundColor: colors.primary,
  },
});
