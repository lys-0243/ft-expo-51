import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import { Modal } from "@ui-kitten/components";
import colors from "@/config/colors";
import { AntDesign } from "@expo/vector-icons";
import PostBtn from "./PostBtn";
import NewPetitonForm from "./NewPetitonForm";
import NewPostForm from "./NewPostForm";
import { StatusBar } from "expo-status-bar";

const PostAction = [{ title: "Nouveau Post" }, { title: "Nouvelle Pétition" }];

export default function ModalComponent({
  modalVisible,
}: {
  modalVisible: boolean;
}) {
  const { width, height } = useWindowDimensions();
  const [showModalVisible, setshowModalVisible] = React.useState(modalVisible);
  const [activeTab, setActiveTab] = React.useState("Nouveau Post");

  return (
    <Modal
      visible={showModalVisible}
      backdropStyle={{ ...css.backdrop, height: height }}
      onBackdropPress={() => setshowModalVisible(false)}
    >
      <StatusBar style="dark" backgroundColor={colors.primary} />
      <View style={css.container}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Pressable
            onPress={() => setshowModalVisible(!showModalVisible)}
            style={{
              borderWidth: 1,
              borderColor: colors.secondary,
              borderRadius: 50,
              padding: 5,
            }}
          >
            <AntDesign name="closecircle" size={16} color={colors.lightGray} />
          </Pressable>
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Bold",
              color: colors.darkGray,
              fontSize: 20,
            }}
          >
            Publier
          </Text>
          <View style={{ ...css.flexNew, width: width - 40 }}>
            {PostAction.map((action) => (
              <Pressable
                style={{ width: "33%" }}
                key={action.title}
                onPress={() => setActiveTab(action.title)}
              >
                <PostBtn
                  title={action.title}
                  isSelected={activeTab == action.title ? true : false}
                />
              </Pressable>
            ))}
          </View>
          {activeTab == "Nouvelle Pétition" && <NewPetitonForm />}
          {activeTab == "Nouveau Post" && <NewPostForm />}
        </View>
      </View>
    </Modal>
  );
}

const css = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    backgroundColor: "#f8f9ff",
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  flex: {
    flex: 1,
  },

  flexNew: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
  },
});
