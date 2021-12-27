import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { POSTS } from "./../../data/posts";
import firebase from "./../../firebase";
//////////////////////////////////////////////////////
import "firebase/compat/auth";
import "firebase/compat/firestore";
///////////////////////////////////////////////////////
const auth = firebase.auth();
const db = firebase.firestore();

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/452/ffffff/like--v1.png",
    likedImageUrl: "https://img.icons8.com/fluency/344/filled-like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/speech-bubble.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/sent.png",
  },
  {
    name: "Save",
    imageUrl: "https://img.icons8.com/material-outlined/344/ffffff/save.png",
  },
];

const Post = ({ post }) => {
  const handleLike = (post) => {
    const currentLikeStatus = !post.likes_by_user.includes(
      firebase.auth().currentUser.email
    );
    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .update({
        likes_by_user: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(
              firebase.auth().currentUser.email
            )
          : firebase.firestore.FieldValue.arrayRemove(
              firebase.auth().currentUser.email
            ),
      })
      .then(() => {
        console.log("✅ Document succesfully updated");
      })
      .catch((error) => {
        console.log("error updating Document: ", error);
      });
  };
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider orientation="vertical" width={1} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginTop: 10, marginHorizontal: 10 }}>
        <PostFooter post={post} handleLike={handleLike} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSections post={post} />
        <Comments post={post} />
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

const Icon = ({ imgUrl, imgStyle }) => (
  <TouchableOpacity>
    <Image source={{ uri: imgUrl }} style={imgStyle} />
  </TouchableOpacity>
);

const PostFooter = ({ handleLike, post }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image
          style={styles.footerIcon}
          source={{
            uri: post.likes_by_user.includes(firebase.auth().currentUser.email)
              ? postFooterIcons[0].likedImageUrl
              : postFooterIcons[0].imageUrl,
          }}
        />
      </TouchableOpacity>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon
        imgStyle={[styles.footerIcon, styles.shareIcon]}
        imgUrl={postFooterIcons[2].imageUrl}
      />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes_by_user.length.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "bold" }}>{post.user} </Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSections = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "grey" }}>
        View {post.comments.length > 1 ? "All " : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "bold" }}>{comment.user} </Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
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
  },
  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
  },
});
