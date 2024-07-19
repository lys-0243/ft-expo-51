import colors from "@/config/colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import PostBtn from "./PostBtn";
import NewPostForm from "./NewPostForm";
import NewPetitonForm from "./NewPetitonForm";
import { AntDesign } from "@expo/vector-icons";

const PostAction = [{ title: "Nouveau Post" }, { title: "Nouvelle Pétition" }];

export default function BottomSheet({ isOpen, toggleSheet, duration = 300 }) {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration })
  );
  const { width } = useWindowDimensions();
  const [activeTab, setActiveTab] = React.useState("Nouveau Post");

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * 2 * height.value }],
  }));

  const backgroundColorSheetStyle = {
    backgroundColor: "#f8f9ff",
  };

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  return (
    <>
      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
        <TouchableOpacity style={sheetStyles.flex} onPress={toggleSheet} />
      </Animated.View>
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[sheetStyles.sheet, sheetStyle, backgroundColorSheetStyle]}
      >
        <Animated.View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Pressable
            onPress={toggleSheet}
            style={{
              borderWidth: 1,
              borderColor: colors.secondary,
              borderRadius: 50,
              padding: 5,
            }}
          >
            <AntDesign name="closecircle" size={16} color={colors.lightGray} />
          </Pressable>
        </Animated.View>
        <Animated.View>
          <Animated.Text
            style={{
              textAlign: "center",
              fontFamily: "Bold",
              color: colors.darkGray,
              fontSize: 20,
            }}
          >
            Publier
          </Animated.Text>
          <Animated.View style={{ ...sheetStyles.flexNew, width: width - 40 }}>
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
          </Animated.View>
          {activeTab == "Nouvelle Pétition" && <NewPetitonForm />}
          {activeTab == "Nouveau Post" && <NewPostForm />}
        </Animated.View>
      </Animated.View>
    </>
  );
}

const sheetStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  SelectionPostCard: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.lightBlue,

    paddingVertical: 40,
  },
  flexNew: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
  },
  sheet: {
    padding: 16,
    paddingRight: 32,
    paddingLeft: 32,
    height: "auto",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    color: colors.primary,
    textAlign: "center",
    fontFamily: "Bold",
    fontSize: 18,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});
