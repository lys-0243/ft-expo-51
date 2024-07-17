import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "@/config/colors";
import styles from "@/config/styles";
import { Button, Card, Modal } from "@ui-kitten/components";

export default function Header() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { width, height } = useWindowDimensions();
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ...styles.shadow,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "white",
        }}
      >
        <Pressable>
          <Ionicons name="menu" size={28} color={colors.darkGray} />
        </Pressable>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="search" size={28} color={colors.lightGray} />
          <Ionicons name="notifications" size={28} color={colors.secondary} />

          <Pressable onPress={() => setModalOpen(true)}>
            <FontAwesome6
              name="circle-plus"
              size={40}
              color={colors.lightBlue}
            />
          </Pressable>
        </View>
      </View>

      <Modal
        visible={modalOpen}
        backdropStyle={{ ...css.backdrop, height: height }}
        onBackdropPress={() => setModalOpen(false)}
      >
        <Card disabled={true} style={{ height: "auto", width: width - 80 }}>
          <Text>Laissez votre voix s'exprimer 😻</Text>
          <Button onPress={() => setModalOpen(false)}>Nouveau Post</Button>
        </Card>
      </Modal>
    </>
  );
}

const css = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
