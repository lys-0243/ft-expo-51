import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Alert,
  Modal,
} from "react-native";
import React from "react";

export default function ModalComponent({
  modalVisible,
}: {
  modalVisible: boolean;
}) {
  const { width, height } = useWindowDimensions();
  const [showModalVisible, setshowModalVisible] = React.useState(modalVisible);
  return (
    <>
      <View style={css.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setshowModalVisible(!showModalVisible);
          }}
        >
          <View style={css.centeredView2}>
            <View style={css.modalView}>
              <Text style={css.modalText}>Hello World!</Text>
              <Pressable
                style={[css.button, css.buttonClose]}
                onPress={() => setshowModalVisible(!showModalVisible)}
              >
                <Text style={css.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[css.button, css.buttonOpen]}
          onPress={() => setshowModalVisible(true)}
        >
          <Text style={css.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </>
  );
}

const css = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "absolute",
  },
  centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
