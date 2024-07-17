import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import colors from "../../config/colors";
import { Video, ResizeMode } from "expo-av";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import PostActions from "./PostActions";

type ItemProps = {
  user: string;
  typeMedia: string;
  time: string;
  text: string;
  comments: number;
  likes: number;
  video?: any;
  image?: any;
  userImage: any;
};

export default function PostCard({
  user,
  typeMedia,
  text,
  time,
  comments,
  likes,
  video,
  image,
  userImage,
}: ItemProps) {
  const { width } = useWindowDimensions();
  const videoRef = React.useRef(null);
  const [videoStatus, setVideoStatus] = React.useState({});
  const [textLineLength, setTextLineLength] = React.useState(4);
  const [textLineLengthLayout, setTextLineLengthLayout] = React.useState(4);
  const [toogleText, setToggleText] = React.useState("Lire plus");
  const [videoIsMuted, setVideoIsMuted] = React.useState(false);
  const [toogleIconName, setToggleIconName] = React.useState("caretdown");

  const handlePlayPause = () => {
    if (videoStatus.isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };

  const onTextLayout = (e: any) => {
    setTextLineLengthLayout(e.nativeEvent.lines.length);
  };

  const handleToggleText = () => {
    if (textLineLength === 4) {
      setTextLineLength(0);
      setToggleText("Lire moins");
      setToggleIconName("caretup");
    } else {
      setTextLineLength(4);
      setToggleText("Lire plus");
      setToggleIconName("caretdown");
    }
  };

  return (
    <View
      style={{
        gap: 10,
        backgroundColor: colors.lightGray40,
        padding: 8,
        borderRadius: 8,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          style={{
            width: 48,
            height: 48,
            borderRadius: 9999,
          }}
          source={userImage}
        />
        <View style={{ gap: -5 }}>
          <Text
            style={{ fontFamily: "Bold", fontSize: 18, color: colors.text }}
          >
            {user}
          </Text>
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 12,
              color: colors.lightGray,
            }}
          >
            {time}
          </Text>
        </View>
      </View>

      {(() => {
        switch (typeMedia) {
          case "text":
            return (
              <View style={{ gap: 8 }}>
                <TouchableWithoutFeedback onPress={handleToggleText}>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Medium",
                        fontSize: 14,
                        color: colors.text,
                        lineHeight: 20,
                      }}
                      numberOfLines={textLineLength}
                      onTextLayout={onTextLayout}
                    >
                      {text}
                    </Text>
                    {textLineLengthLayout > 4 && (
                      <Text
                        style={{
                          fontFamily: "Bold",
                          fontSize: 12,
                          color: colors.primary,
                          lineHeight: 20,
                        }}
                      >
                        {toogleText}{" "}
                        <AntDesign
                          name={toogleIconName}
                          size={12}
                          color={colors.primary}
                        />
                      </Text>
                    )}
                  </View>
                </TouchableWithoutFeedback>
                <PostActions likes={likes} comments={comments} />
              </View>
            );
          case "image":
            return (
              <View style={{ gap: 8 }}>
                <TouchableWithoutFeedback onPress={handleToggleText}>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Medium",
                        fontSize: 14,
                        color: colors.text,
                        lineHeight: 20,
                      }}
                      numberOfLines={textLineLength}
                      onTextLayout={onTextLayout}
                    >
                      {text}
                    </Text>
                    {textLineLengthLayout > 4 && (
                      <Text
                        style={{
                          fontFamily: "Bold",
                          fontSize: 12,
                          color: colors.primary,
                          lineHeight: 20,
                        }}
                      >
                        {toogleText}{" "}
                        <AntDesign
                          name={toogleIconName}
                          size={12}
                          color={colors.primary}
                        />
                      </Text>
                    )}
                  </View>
                </TouchableWithoutFeedback>
                <View
                  style={{
                    maxHeight: 400,
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    style={{
                      maxWidth: width - 40,
                      maxHeight: "100%",
                      borderRadius: 10,
                      resizeMode: "cover",
                    }}
                    source={image}
                  />
                </View>

                <PostActions likes={likes} comments={comments} />
              </View>
            );
          case "video":
            return (
              <View>
                <TouchableWithoutFeedback onPress={handleToggleText}>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Medium",
                        fontSize: 14,
                        color: colors.text,
                        lineHeight: 20,
                      }}
                      numberOfLines={textLineLength}
                      onTextLayout={onTextLayout}
                    >
                      {text}
                    </Text>
                    {textLineLengthLayout > 4 && (
                      <Text
                        style={{
                          fontFamily: "Bold",
                          fontSize: 12,
                          color: colors.primary,
                          lineHeight: 20,
                        }}
                      >
                        {toogleText}{" "}
                        <AntDesign
                          name={toogleIconName}
                          size={12}
                          color={colors.primary}
                        />
                      </Text>
                    )}
                  </View>
                </TouchableWithoutFeedback>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    width: width - 60,
                    height: 220,
                    position: "relative",
                  }}
                >
                  <TouchableWithoutFeedback
                    onPress={() => setVideoIsMuted(!videoIsMuted)}
                  >
                    <View
                      style={{
                        position: "absolute",
                        right: 10,
                        bottom: 10,
                        zIndex: 10,
                      }}
                    >
                      <FontAwesome5
                        name={videoIsMuted ? "volume-mute" : "volume-down"}
                        size={20}
                        color={videoIsMuted ? colors.secondary : "#fff"}
                      />
                    </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={handlePlayPause}>
                    <Video
                      ref={videoRef}
                      source={{
                        uri: video,
                      }}
                      useNativeControls={false}
                      style={{ flex: 1, alignSelf: "stretch" }}
                      isMuted={videoIsMuted}
                      resizeMode={ResizeMode.CONTAIN}
                      onPlaybackStatusUpdate={setVideoStatus}
                    />
                  </TouchableWithoutFeedback>
                </View>
                <PostActions likes={likes} comments={comments} />
              </View>
            );
          default:
            return null;
        }
      })()}
    </View>
  );
}
