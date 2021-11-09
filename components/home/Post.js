import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { POSTS } from "./../../data/posts";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/452/ffffff/like--v1.png",
    likedImageUrl: "http://",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/speech-bubble.png",
  },
  {
    name: "Share",
    imageUrl: "https://img.icons8.com/fluency-systems-regular/344/ffffff/sent.png",
  },
  {
    name: "Save",
    imageUrl: "http://",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider orientation="vertical" width={1} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginTop: 10, marginHorizontal: 10 }}>
        <PostFooter />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 6, fontWeight: "bold" }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900", fontSize: 35 }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image source={{ uri: post.imageUrl }} style={styles.imageStyle} />
  </View>
);

const PostFooter = () => (
  <View style={{flexDirection: 'row'}}>
  <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
  </View>

  </View>
);

const Icon = ({ imgUrl, imgStyle }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

export default Post;

const styles = StyleSheet.create({
  story: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#FF8501",
  },
  imageStyle: {
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "white",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
      flexDirection: "row",
      width: "32%",
      justifyContent: "space-between",

  }
});
