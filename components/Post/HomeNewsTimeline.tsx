import { View, Text, FlatList } from "react-native";
import React from "react";
import colors from "../../config/colors";
import PostCard from "./PostCard";

const DATA = [
  {
    id: 1,
    user: "Fatshi&moi",
    userImage: require("@/assets/img/users/1.png"),
    typeMedia: "image",
    image: require("@/assets/img/posts/bbb.jpeg"),
    text: "Le président Félix Tshisekedi a annoncé la fin de l'état de siège dans les provinces de l'Ituri et du Nord-Kivu.",
    comments: 2,
    likes: 288,
    time: "Il y a 44 min",
  },
  {
    id: 41,
    user: "Fatshi&moi",
    userImage: require("@/assets/img/users/1.png"),
    typeMedia: "image",
    image: require("@/assets/img/posts/eee.jpg"),
    text: "Le président Félix Tshisekedi a annoncé la fin de l'état de siège dans les provinces de l'Ituri et du Nord-Kivu.",
    comments: 12,
    likes: 20,
    time: "Il y a 44 min",
  },
  {
    id: 2,
    user: "lys0243",
    userImage: require("@/assets/img/users/2.jpg"),
    typeMedia: "text",
    text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie , Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie Voir plus",
    comments: 12,
    likes: 20,
    time: "Il y a 3h",
  },
  {
    id: 3,
    user: "kaguya",
    userImage: require("@/assets/img/users/3.jpg"),
    typeMedia: "video",
    video:
      "https://res.cloudinary.com/dhttj3w2f/video/upload/v1714073571/fatshi/video/hl4dgmd77ysysnbtjfcy.mp4",
    text: "Le président Félix Tshisekedi a annoncé la fin de l'état de siège dans les provinces de l'Ituri et du Nord-Kivu.",
    comments: 312,
    likes: 204,
    time: "Il y a 60 sec",
  },
  {
    id: 4,
    user: "chainsawMan",
    userImage: require("@/assets/img/users/4.jpg"),
    typeMedia: "image",
    image: require("@/assets/img/posts/fatshi.png"),
    text: "Le président Félix Tshisekedi a annoncé la fin de l'état de siège dans les provinces de l'Ituri et du Nord-Kivu.",
    comments: 12,
    likes: 20,
    time: "Il y a 7h",
  },
  {
    id: 5,
    user: "cmdtIgris",
    userImage: require("@/assets/img/users/1.png"),
    typeMedia: "text",
    text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie Voir plus",
    comments: 142,
    likes: 250,
    time: "Il y a 56 min",
  },
  {
    id: 6,
    user: "chakra",
    userImage: require("@/assets/img/users/2.jpg"),
    typeMedia: "video",
    video:
      "https://res.cloudinary.com/dhttj3w2f/video/upload/v1714073572/fatshi/video/vlcki9mgcdx9i9iruz9l.mp4",
    text: "Le président Félix Tshisekedi a annoncé la fin de l'état de siège dans les provinces de l'Ituri et du Nord-Kivu.",
    comments: 1,
    likes: 0,
    time: "Il y a 7 min",
  },
];

export default function HomeNewsTimeline() {
  return (
    <View style={{ paddingHorizontal: 20, gap: 20 }}>
      <View style={{ gap: -6 }}>
        <Text style={{ color: colors.text, fontFamily: "Bold", fontSize: 20 }}>
          Actualité
        </Text>
        <Text
          style={{
            color: colors.lightGray,
            fontFamily: "Regular",
            fontSize: 12,
          }}
        >
          Restez informé de ce qui se passe...
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          gap: 20,
        }}
      >
        {DATA.map((item) => (
          <PostCard
            key={item.id}
            user={item.user}
            typeMedia={item.typeMedia}
            text={item.text}
            comments={item.comments}
            likes={item.likes}
            video={item.video}
            image={item.image}
            userImage={item.userImage}
            time={item.time}
          />
        ))}
      </View>
    </View>
  );
}
