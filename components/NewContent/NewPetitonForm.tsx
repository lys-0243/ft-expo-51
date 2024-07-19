import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Pressable,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import colors from "@/config/colors";
import { Select, SelectItem } from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { authRoutes } from "@/config/routes";
import { useRouter } from "expo-router";

export default function NewPetitonForm() {
  const [image, setImage] = useState(null);
  const router = useRouter();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //   allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontFamily: "Medium", fontSize: 18, textAlign: "left" }}>
        Créer uen Pétition
      </Text>
      <View>
        <TextInput
          inputMode="text"
          keyboardType="default"
          multiline
          numberOfLines={8}
          placeholder="Faites entendre votre voie"
          placeholderTextColor={colors.lightGray}
          style={{
            backgroundColor: colors.lightGray40,
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            fontFamily: "Regular",
            fontSize: 14,
            textAlignVertical: "top",
          }}
        />
        <Select
          // selectedIndex={selectedIndex}
          // onSelect={index => setSelectedIndex(index)}
          style={{
            backgroundColor: colors.lightGray40,
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
          }}
          placeholder="Catégorie"
        >
          <SelectItem title="Sécurité" />
          <SelectItem title="Diplmatie" />
          <SelectItem title="Bourse" />
        </Select>
        <View style={{}}>
          <Pressable
            onPress={pickImage}
            style={{
              backgroundColor: colors.lightGray,
              paddingVertical: 14,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Medium",
              }}
            >
              Selectionner une image ou une vidéo
            </Text>
          </Pressable>
          {image && (
            <View style={{ width: "100%", height: 200 }}>
              <Image
                source={{ uri: image }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  borderWidth: 3,
                  borderColor: colors.lightGray40,
                  objectFit: "cover",
                }}
              />
              <Pressable
                style={{ position: "absolute", bottom: 10, left: "47%" }}
                onPress={() => setImage(null)}
              >
                <AntDesign
                  name="closecircle"
                  size={24}
                  color={colors.secondary}
                />
              </Pressable>
            </View>
          )}
        </View>
      </View>

      <TouchableHighlight
        style={{
          backgroundColor: colors.primary,
          marginTop: 15,
          paddingVertical: 14,
          borderRadius: 10,
          width: "80%",
          alignSelf: "center",
        }}
        onPress={() => {
          router.push({
            pathname: authRoutes.userProfile,
          });
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "Bold",
            fontSize: 18,
          }}
        >
          Publier
        </Text>
      </TouchableHighlight>
    </View>
  );
}
